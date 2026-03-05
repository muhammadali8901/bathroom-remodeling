"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react"
import { 
  User, 
  onAuthStateChanged, 
  signInWithEmailAndPassword,
  signOut as firebaseSignOut
} from "firebase/auth"
import { auth } from "./firebase"

// Admin email whitelist - only these emails can access admin panel
const ADMIN_EMAILS = ["mi6062610@gmail.com"]

interface AuthContextType {
  user: User | null
  loading: boolean
  isAdmin: boolean
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const isAdmin = user ? ADMIN_EMAILS.includes(user.email || "") : false

  const signIn = async (email: string, password: string) => {
    // Check if email is in admin whitelist before allowing sign in
    if (!ADMIN_EMAILS.includes(email)) {
      throw new Error("Access denied. You are not authorized to access the admin panel.")
    }
    await signInWithEmailAndPassword(auth, email, password)
  }

  const signOut = async () => {
    await firebaseSignOut(auth)
  }

  return (
    <AuthContext.Provider value={{ user, loading, isAdmin, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
