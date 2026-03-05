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
import { Lead } from "@/lib/types";

const LEADS_COLLECTION = "leads";

export async function getLeads(): Promise<Lead[]> {
  try {
    const leadsRef = collection(db, LEADS_COLLECTION);
    const q = query(leadsRef, orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        createdAt: data.createdAt?.toDate() || new Date(),
      } as Lead;
    });
  } catch (error) {
    console.error("Error fetching leads:", error);
    return [];
  }
}

export async function createLead(
  data: Omit<Lead, "id" | "createdAt" | "status">
): Promise<{ success: boolean; id?: string; error?: string }> {
  try {
    const leadsRef = collection(db, LEADS_COLLECTION);
    const docRef = await addDoc(leadsRef, {
      ...data,
      status: "new",
      createdAt: Timestamp.now(),
    });

    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error creating lead:", error);
    return { success: false, error: "Failed to submit form" };
  }
}

export async function updateLeadStatus(
  id: string,
  status: Lead["status"]
): Promise<{ success: boolean; error?: string }> {
  try {
    const docRef = doc(db, LEADS_COLLECTION, id);
    await updateDoc(docRef, { status });
    return { success: true };
  } catch (error) {
    console.error("Error updating lead status:", error);
    return { success: false, error: "Failed to update lead status" };
  }
}

export async function deleteLead(id: string): Promise<{ success: boolean; error?: string }> {
  try {
    const docRef = doc(db, LEADS_COLLECTION, id);
    await deleteDoc(docRef);
    return { success: true };
  } catch (error) {
    console.error("Error deleting lead:", error);
    return { success: false, error: "Failed to delete lead" };
  }
}

// Aliases for admin pages
export const getAllLeads = getLeads;

export async function getLeadsCount(): Promise<number> {
  try {
    const leadsRef = collection(db, LEADS_COLLECTION);
    const snapshot = await getDocs(leadsRef);
    return snapshot.size;
  } catch (error) {
    console.error("Error getting leads count:", error);
    return 0;
  }
}

export async function getRecentLeads(maxLeads: number = 5): Promise<Lead[]> {
  try {
    const leadsRef = collection(db, LEADS_COLLECTION);
    const q = query(leadsRef, orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);

    return snapshot.docs.slice(0, maxLeads).map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        createdAt: data.createdAt?.toDate() || new Date(),
      } as Lead;
    });
  } catch (error) {
    console.error("Error fetching recent leads:", error);
    return [];
  }
}
