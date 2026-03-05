"use server";

import { db, storage } from "@/lib/firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  where,
  Timestamp,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { GalleryItem } from "@/lib/types";

const GALLERY_COLLECTION = "gallery";

export async function getGalleryItems(): Promise<GalleryItem[]> {
  try {
    const galleryRef = collection(db, GALLERY_COLLECTION);
    const q = query(galleryRef, orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        createdAt: data.createdAt?.toDate() || new Date(),
      } as GalleryItem;
    });
  } catch (error) {
    console.error("Error fetching gallery items:", error);
    return [];
  }
}

export async function getGalleryItemsByCategory(
  category: "bathroom" | "kitchen"
): Promise<GalleryItem[]> {
  try {
    const galleryRef = collection(db, GALLERY_COLLECTION);
    const q = query(
      galleryRef,
      where("category", "==", category),
      orderBy("createdAt", "desc")
    );
    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        createdAt: data.createdAt?.toDate() || new Date(),
      } as GalleryItem;
    });
  } catch (error) {
    console.error("Error fetching gallery items by category:", error);
    return [];
  }
}

export async function createGalleryItem(
  data: Omit<GalleryItem, "id" | "createdAt">
): Promise<{ success: boolean; id?: string; error?: string }> {
  try {
    const galleryRef = collection(db, GALLERY_COLLECTION);
    const docRef = await addDoc(galleryRef, {
      ...data,
      createdAt: Timestamp.now(),
    });

    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error creating gallery item:", error);
    return { success: false, error: "Failed to create gallery item" };
  }
}

export async function updateGalleryItem(
  id: string,
  data: Partial<Omit<GalleryItem, "id" | "createdAt">>
): Promise<{ success: boolean; error?: string }> {
  try {
    const docRef = doc(db, GALLERY_COLLECTION, id);
    await updateDoc(docRef, data);
    return { success: true };
  } catch (error) {
    console.error("Error updating gallery item:", error);
    return { success: false, error: "Failed to update gallery item" };
  }
}

export async function deleteGalleryItem(id: string): Promise<{ success: boolean; error?: string }> {
  try {
    const docRef = doc(db, GALLERY_COLLECTION, id);
    await deleteDoc(docRef);
    return { success: true };
  } catch (error) {
    console.error("Error deleting gallery item:", error);
    return { success: false, error: "Failed to delete gallery item" };
  }
}

export async function uploadGalleryImage(
  file: File,
  type: "before" | "after"
): Promise<{ success: boolean; url?: string; error?: string }> {
  try {
    const fileExtension = file.name.split(".").pop();
    const fileName = `gallery/${type}/${Date.now()}.${fileExtension}`;
    const storageRef = ref(storage, fileName);

    const bytes = await file.arrayBuffer();
    await uploadBytes(storageRef, new Uint8Array(bytes));
    const url = await getDownloadURL(storageRef);

    return { success: true, url };
  } catch (error) {
    console.error("Error uploading gallery image:", error);
    return { success: false, error: "Failed to upload image" };
  }
}

export async function getFeaturedGalleryItems(): Promise<GalleryItem[]> {
  try {
    const galleryRef = collection(db, GALLERY_COLLECTION);
    const q = query(
      galleryRef,
      where("featured", "==", true),
      orderBy("createdAt", "desc")
    );
    const snapshot = await getDocs(q);

    // If no featured items, return all items
    if (snapshot.empty) {
      return getGalleryItems();
    }

    return snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        createdAt: data.createdAt?.toDate() || new Date(),
      } as GalleryItem;
    });
  } catch (error) {
    console.error("Error fetching featured gallery items:", error);
    return getGalleryItems();
  }
}

export async function getGalleryCount(): Promise<number> {
  try {
    const galleryRef = collection(db, GALLERY_COLLECTION);
    const snapshot = await getDocs(galleryRef);
    return snapshot.size;
  } catch (error) {
    console.error("Error getting gallery count:", error);
    return 0;
  }
}
