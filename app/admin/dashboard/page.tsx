"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { AdminShell } from "@/components/admin/admin-shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getLeadsCount, getRecentLeads } from "@/lib/actions/leads"
import { getPostsCount, getRecentPosts } from "@/lib/actions/blog"
import { getTestimonialsCount } from "@/lib/actions/testimonials"
import { getGalleryCount } from "@/lib/actions/gallery"
import type { Lead, BlogPost } from "@/lib/types"
import { 
  Users, 
  FileText, 
  Image, 
  MessageSquare, 
  TrendingUp, 
  Clock,
  ArrowRight,
  Plus
} from "lucide-react"

interface DashboardStats {
  leads: number
  posts: number
  testimonials: number
  gallery: number
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<DashboardStats>({ leads: 0, posts: 0, testimonials: 0, gallery: 0 })
  const [recentLeads, setRecentLeads] = useState<Lead[]>([])
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const [leadsCount, postsCount, testimonialsCount, galleryCount, leads, posts] = await Promise.all([
        getLeadsCount(),
        getPostsCount(),
        getTestimonialsCount(),
        getGalleryCount(),
        getRecentLeads(5),
        getRecentPosts(5)
      ])
      
      setStats({
        leads: leadsCount,
        posts: postsCount,
        testimonials: testimonialsCount,
        gallery: galleryCount
      })
      setRecentLeads(leads)
      setRecentPosts(posts)
      setLoading(false)
    }
    fetchData()
  }, [])

  const statCards = [
    { title: "Total Leads", value: stats.leads, icon: Users, href: "/admin/leads", color: "text-blue-600" },
    { title: "Blog Posts", value: stats.posts, icon: FileText, href: "/admin/blog", color: "text-green-600" },
    { title: "Testimonials", value: stats.testimonials, icon: MessageSquare, href: "/admin/testimonials", color: "text-amber-600" },
    { title: "Gallery Items", value: stats.gallery, icon: Image, href: "/admin/gallery", color: "text-purple-600" },
  ]

  return (
    <AdminShell 
      title="Dashboard" 
      description="Overview of your website content and leads"
    >
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat) => (
          <Link key={stat.title} href={stat.href}>
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-3xl font-semibold text-foreground mt-1">
                      {loading ? "-" : stat.value}
                    </p>
                  </div>
                  <div className={`p-3 rounded-full bg-secondary ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Leads */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-serif">Recent Leads</CardTitle>
            <Button asChild variant="ghost" size="sm">
              <Link href="/admin/leads">
                View All <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="animate-pulse flex items-center gap-4">
                    <div className="h-10 w-10 bg-muted rounded-full" />
                    <div className="flex-1">
                      <div className="h-4 bg-muted rounded w-1/2 mb-2" />
                      <div className="h-3 bg-muted rounded w-1/3" />
                    </div>
                  </div>
                ))}
              </div>
            ) : recentLeads.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-8">No leads yet</p>
            ) : (
              <div className="space-y-4">
                {recentLeads.map((lead) => (
                  <div key={lead.id} className="flex items-center gap-4">
                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{lead.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{lead.email}</p>
                    </div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {new Date(lead.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recent Posts */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-serif">Recent Posts</CardTitle>
            <div className="flex items-center gap-2">
              <Button asChild variant="outline" size="sm">
                <Link href="/admin/blog/new">
                  <Plus className="mr-1 h-4 w-4" /> New Post
                </Link>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <Link href="/admin/blog">
                  View All <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="animate-pulse flex items-center gap-4">
                    <div className="h-10 w-10 bg-muted rounded" />
                    <div className="flex-1">
                      <div className="h-4 bg-muted rounded w-3/4 mb-2" />
                      <div className="h-3 bg-muted rounded w-1/4" />
                    </div>
                  </div>
                ))}
              </div>
            ) : recentPosts.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-sm text-muted-foreground mb-4">No posts yet</p>
                <Button asChild size="sm">
                  <Link href="/admin/blog/new">
                    <Plus className="mr-1 h-4 w-4" /> Create First Post
                  </Link>
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <Link 
                    key={post.id} 
                    href={`/admin/blog/${post.id}`}
                    className="flex items-center gap-4 group"
                  >
                    <div className="h-10 w-10 bg-secondary rounded flex items-center justify-center">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
                        {post.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {post.status === "published" ? (
                          <span className="text-green-600">Published</span>
                        ) : (
                          <span className="text-amber-600">Draft</span>
                        )}
                      </p>
                    </div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      {post.views || 0} views
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AdminShell>
  )
}
