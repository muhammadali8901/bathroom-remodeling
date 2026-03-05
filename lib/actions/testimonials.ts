"use server";

import { db } from "@/lib/firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  Timestamp,
} from "firebase/firestore";
import { Testimonial } from "@/lib/types";

const TESTIMONIALS_COLLECTION = "testimonials";

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const testimonialsRef = collection(db, TESTIMONIALS_COLLECTION);
    const q = query(testimonialsRef, orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        createdAt: data.createdAt?.toDate() || new Date(),
      } as Testimonial;
    });
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
}

export async function createTestimonial(
  data: Omit<Testimonial, "id" | "createdAt">
): Promise<{ success: boolean; id?: string; error?: string }> {
  try {
    const testimonialsRef = collection(db, TESTIMONIALS_COLLECTION);
    const docRef = await addDoc(testimonialsRef, {
      ...data,
      createdAt: Timestamp.now(),
    });

    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error creating testimonial:", error);
    return { success: false, error: "Failed to create testimonial" };
  }
}

export async function updateTestimonial(
  id: string,
  data: Partial<Omit<Testimonial, "id" | "createdAt">>
): Promise<{ success: boolean; error?: string }> {
  try {
    const docRef = doc(db, TESTIMONIALS_COLLECTION, id);
    await updateDoc(docRef, data);
    return { success: true };
  } catch (error) {
    console.error("Error updating testimonial:", error);
    return { success: false, error: "Failed to update testimonial" };
  }
}

export async function deleteTestimonial(id: string): Promise<{ success: boolean; error?: string }> {
  try {
    const docRef = doc(db, TESTIMONIALS_COLLECTION, id);
    await deleteDoc(docRef);
    return { success: true };
  } catch (error) {
    console.error("Error deleting testimonial:", error);
    return { success: false, error: "Failed to delete testimonial" };
  }
}

export async function getTestimonialsCount(): Promise<number> {
  try {
    const testimonialsRef = collection(db, TESTIMONIALS_COLLECTION);
    const snapshot = await getDocs(testimonialsRef);
    return snapshot.size;
  } catch (error) {
    console.error("Error getting testimonials count:", error);
    return 0;
  }
}
