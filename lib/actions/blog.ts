"use server";

import { db } from "@/lib/firebase";
import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  Timestamp,
} from "firebase/firestore";
import type { BlogPost, Category } from "@/lib/types";

const POSTS_COLLECTION = "posts";
const CATEGORIES_COLLECTION = "categories";

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

// ============ POSTS ============

export async function getPosts(): Promise<BlogPost[]> {
  try {
    const postsRef = collection(db, POSTS_COLLECTION);
    const q = query(postsRef, orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        createdAt: data.createdAt?.toDate?.()?.toISOString() || new Date().toISOString(),
        updatedAt: data.updatedAt?.toDate?.()?.toISOString() || new Date().toISOString(),
        publishedAt: data.publishedAt?.toDate?.()?.toISOString() || null,
      } as BlogPost;
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  try {
    const postsRef = collection(db, POSTS_COLLECTION);
    const q = query(
      postsRef,
      where("status", "==", "published"),
      orderBy("createdAt", "desc")
    );
    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        createdAt: data.createdAt?.toDate?.()?.toISOString() || new Date().toISOString(),
        updatedAt: data.updatedAt?.toDate?.()?.toISOString() || new Date().toISOString(),
        publishedAt: data.publishedAt?.toDate?.()?.toISOString() || null,
      } as BlogPost;
    });
  } catch (error) {
    console.error("Error fetching published posts:", error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const postsRef = collection(db, POSTS_COLLECTION);
    const q = query(postsRef, where("slug", "==", slug), limit(1));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      return null;
    }

    const doc = snapshot.docs[0];
    const data = doc.data();

    return {
      id: doc.id,
      ...data,
      createdAt: data.createdAt?.toDate?.()?.toISOString() || new Date().toISOString(),
      updatedAt: data.updatedAt?.toDate?.()?.toISOString() || new Date().toISOString(),
      publishedAt: data.publishedAt?.toDate?.()?.toISOString() || null,
    } as BlogPost;
  } catch (error) {
    console.error("Error fetching post by slug:", error);
    return null;
  }
}

export async function getPostById(id: string): Promise<BlogPost | null> {
  try {
    const docRef = doc(db, POSTS_COLLECTION, id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return null;
    }

    const data = docSnap.data();
    return {
      id: docSnap.id,
      ...data,
      createdAt: data.createdAt?.toDate?.()?.toISOString() || new Date().toISOString(),
      updatedAt: data.updatedAt?.toDate?.()?.toISOString() || new Date().toISOString(),
      publishedAt: data.publishedAt?.toDate?.()?.toISOString() || null,
    } as BlogPost;
  } catch (error) {
    console.error("Error fetching post by ID:", error);
    return null;
  }
}

export async function getRelatedPosts(category: string, excludeId: string, maxPosts: number = 3): Promise<BlogPost[]> {
  try {
    const postsRef = collection(db, POSTS_COLLECTION);
    const q = query(
      postsRef,
      where("status", "==", "published"),
      where("category", "==", category),
      orderBy("createdAt", "desc"),
      limit(maxPosts + 1)
    );
    const snapshot = await getDocs(q);

    return snapshot.docs
      .filter(doc => doc.id !== excludeId)
      .slice(0, maxPosts)
      .map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          createdAt: data.createdAt?.toDate?.()?.toISOString() || new Date().toISOString(),
          updatedAt: data.updatedAt?.toDate?.()?.toISOString() || new Date().toISOString(),
          publishedAt: data.publishedAt?.toDate?.()?.toISOString() || null,
        } as BlogPost;
      });
  } catch (error) {
    console.error("Error fetching related posts:", error);
    return [];
  }
}

export async function createPost(
  data: Omit<BlogPost, "id" | "createdAt" | "updatedAt">
): Promise<{ success: boolean; id?: string; error?: string }> {
  try {
    const slug = data.slug || generateSlug(data.title);
    
    // Check if slug already exists
    const existing = await getPostBySlug(slug);
    if (existing) {
      return { success: false, error: "A post with this slug already exists" };
    }

    const postsRef = collection(db, POSTS_COLLECTION);
    const docRef = await addDoc(postsRef, {
      ...data,
      slug,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
      publishedAt: data.status === "published" ? Timestamp.now() : null,
    });

    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error creating post:", error);
    return { success: false, error: "Failed to create post" };
  }
}

export async function updatePost(
  id: string,
  data: Partial<Omit<BlogPost, "id" | "createdAt">>
): Promise<{ success: boolean; error?: string }> {
  try {
    const docRef = doc(db, POSTS_COLLECTION, id);
    
    const updateData: Record<string, unknown> = {
      ...data,
      updatedAt: Timestamp.now(),
    };

    // If title is being updated, regenerate slug
    if (data.title && data.slug) {
      const existing = await getPostBySlug(data.slug);
      if (existing && existing.id !== id) {
        return { success: false, error: "A post with this slug already exists" };
      }
    }

    await updateDoc(docRef, updateData);
    return { success: true };
  } catch (error) {
    console.error("Error updating post:", error);
    return { success: false, error: "Failed to update post" };
  }
}

export async function deletePost(id: string): Promise<{ success: boolean; error?: string }> {
  try {
    const docRef = doc(db, POSTS_COLLECTION, id);
    await deleteDoc(docRef);
    return { success: true };
  } catch (error) {
    console.error("Error deleting post:", error);
    return { success: false, error: "Failed to delete post" };
  }
}

// Alias for admin pages
export const getAllPosts = getPosts;

export async function updatePostStatus(
  id: string,
  status: "draft" | "published"
): Promise<{ success: boolean; error?: string }> {
  try {
    const docRef = doc(db, POSTS_COLLECTION, id);
    await updateDoc(docRef, { 
      status, 
      updatedAt: Timestamp.now(),
      publishedAt: status === "published" ? Timestamp.now() : null 
    });
    return { success: true };
  } catch (error) {
    console.error("Error updating post status:", error);
    return { success: false, error: "Failed to update post status" };
  }
}

export async function getPostsCount(): Promise<number> {
  try {
    const postsRef = collection(db, POSTS_COLLECTION);
    const snapshot = await getDocs(postsRef);
    return snapshot.size;
  } catch (error) {
    console.error("Error getting posts count:", error);
    return 0;
  }
}

export async function getRecentPosts(maxPosts: number = 5): Promise<BlogPost[]> {
  try {
    const postsRef = collection(db, POSTS_COLLECTION);
    const q = query(postsRef, orderBy("createdAt", "desc"), limit(maxPosts));
    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        createdAt: data.createdAt?.toDate?.()?.toISOString() || new Date().toISOString(),
        updatedAt: data.updatedAt?.toDate?.()?.toISOString() || new Date().toISOString(),
        publishedAt: data.publishedAt?.toDate?.()?.toISOString() || null,
      } as BlogPost;
    });
  } catch (error) {
    console.error("Error fetching recent posts:", error);
    return [];
  }
}

// ============ CATEGORIES ============

export async function getCategories(): Promise<Category[]> {
  try {
    const categoriesRef = collection(db, CATEGORIES_COLLECTION);
    const q = query(categoriesRef, orderBy("name", "asc"));
    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Category[];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export async function createCategory(
  data: Omit<Category, "id">
): Promise<{ success: boolean; id?: string; error?: string }> {
  try {
    const categoriesRef = collection(db, CATEGORIES_COLLECTION);
    const docRef = await addDoc(categoriesRef, data);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error creating category:", error);
    return { success: false, error: "Failed to create category" };
  }
}

export async function updateCategory(
  id: string,
  data: Partial<Omit<Category, "id">>
): Promise<{ success: boolean; error?: string }> {
  try {
    const docRef = doc(db, CATEGORIES_COLLECTION, id);
    await updateDoc(docRef, data);
    return { success: true };
  } catch (error) {
    console.error("Error updating category:", error);
    return { success: false, error: "Failed to update category" };
  }
}

export async function deleteCategory(id: string): Promise<{ success: boolean; error?: string }> {
  try {
    const docRef = doc(db, CATEGORIES_COLLECTION, id);
    await deleteDoc(docRef);
    return { success: true };
  } catch (error) {
    console.error("Error deleting category:", error);
    return { success: false, error: "Failed to delete category" };
  }
}
