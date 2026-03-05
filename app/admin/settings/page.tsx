"use client"

import { AdminShell } from "@/components/admin/admin-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { siteConfig } from "@/lib/site-config"
import { Building2, Phone, Mail, MapPin, Globe, Clock } from "lucide-react"

export default function AdminSettingsPage() {
  return (
    <AdminShell 
      title="Settings" 
      description="Site configuration and information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              Business Information
            </CardTitle>
            <CardDescription>
              Your company details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Building2 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Company Name</p>
                <p className="font-medium">{siteConfig.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">{siteConfig.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">{siteConfig.email}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Location
            </CardTitle>
            <CardDescription>
              Service area and address
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Address</p>
                <p className="font-medium">{siteConfig.address.street}</p>
                <p className="font-medium">{siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Globe className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Website</p>
                <p className="font-medium">{siteConfig.url}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Business Hours
            </CardTitle>
            <CardDescription>
              Operating schedule
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Monday - Friday</span>
                <span className="font-medium">{siteConfig.hours.weekdays}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Saturday</span>
                <span className="font-medium">{siteConfig.hours.saturday}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Sunday</span>
                <span className="font-medium">{siteConfig.hours.sunday}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Firebase Configuration</CardTitle>
            <CardDescription>
              Database and authentication settings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              To configure Firebase, set the following environment variables:
            </p>
            <div className="bg-muted p-4 rounded-lg font-mono text-xs space-y-1">
              <p>NEXT_PUBLIC_FIREBASE_API_KEY</p>
              <p>NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN</p>
              <p>NEXT_PUBLIC_FIREBASE_PROJECT_ID</p>
              <p>NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET</p>
              <p>NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID</p>
              <p>NEXT_PUBLIC_FIREBASE_APP_ID</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminShell>
  )
}
