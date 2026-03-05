"use client"

import { useState, useEffect, use } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { AdminShell } from "@/components/admin/admin-shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { getPostById, createPost, updatePost, getCategories } from "@/lib/actions/blog"
import type { BlogPost, Category } from "@/lib/types"
import { ArrowLeft, Save, Eye, Loader2 } from "lucide-react"

interface BlogEditorPageProps {
  params: Promise<{ id: string }>
}

export default function BlogEditorPage({ params }: BlogEditorPageProps) {
  const { id } = use(params)
  const router = useRouter()
  const isNew = id === "new"

  const [loading, setLoading] = useState(!isNew)
  const [saving, setSaving] = useState(false)
  const [categories, setCategories] = useState<Category[]>([])
  const [post, setPost] = useState<Partial<BlogPost>>({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    featuredImage: "",
    category: "",
    author: "Admin",
    status: "draft",
    metaTitle: "",
    metaDescription: "",
    keywords: [],
    tags: [],
    readTime: 5,
  })

  useEffect(() => {
    async function fetchData() {
      const cats = await getCategories()
      setCategories(cats)
      
      if (!isNew) {
        const data = await getPostById(id)
        if (data) {
          setPost(data)
        }
      }
      setLoading(false)
    }
    fetchData()
  }, [id, isNew])

  function generateSlug(title: string) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
  }

  function handleTitleChange(title: string) {
    setPost(prev => ({
      ...prev,
      title,
      slug: prev.slug || generateSlug(title),
      metaTitle: prev.metaTitle || title
    }))
  }

  async function handleSave(status?: "draft" | "published") {
    setSaving(true)
    try {
      const postData = {
        ...post,
        status: status || post.status,
        publishedAt: status === "published" && !post.publishedAt 
          ? new Date().toISOString() 
          : post.publishedAt
      }
      
      if (isNew) {
        await createPost(postData as Omit<BlogPost, "id" | "createdAt" | "updatedAt">)
      } else {
        await updatePost(id, postData as Partial<BlogPost>)
      }
      
      router.push("/admin/blog")
    } catch (error) {
      console.error("Error saving post:", error)
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <AdminShell title="Loading..." description="">
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </AdminShell>
    )
  }

  return (
    <AdminShell 
      title={isNew ? "New Blog Post" : "Edit Post"} 
      description={isNew ? "Create a new blog article" : `Editing: ${post.title}`}
      actions={
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={() => handleSave("draft")} disabled={saving}>
            <Save className="mr-2 h-4 w-4" />
            Save Draft
          </Button>
          <Button onClick={() => handleSave("published")} disabled={saving}>
            {saving ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Eye className="mr-2 h-4 w-4" />
            )}
            Publish
          </Button>
        </div>
      }
    >
      <Link 
        href="/admin/blog" 
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Posts
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={post.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="Enter post title"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="slug">URL Slug</Label>
                <Input
                  id="slug"
                  value={post.slug}
                  onChange={(e) => setPost({ ...post, slug: e.target.value })}
                  placeholder="post-url-slug"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea
                  id="excerpt"
                  value={post.excerpt}
                  onChange={(e) => setPost({ ...post, excerpt: e.target.value, metaDescription: post.metaDescription || e.target.value })}
                  placeholder="Brief description for previews..."
                  rows={3}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="content">Content (HTML)</Label>
                <Textarea
                  id="content"
                  value={post.content}
                  onChange={(e) => setPost({ ...post, content: e.target.value })}
                  placeholder="<p>Write your article content here...</p>"
                  rows={15}
                  className="font-mono text-sm"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={post.category}
                  onValueChange={(value) => setPost({ ...post, category: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat.id} value={cat.slug}>
                        {cat.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="author">Author</Label>
                <Input
                  id="author"
                  value={post.author}
                  onChange={(e) => setPost({ ...post, author: e.target.value })}
                  placeholder="Author name"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="readTime">Read Time (minutes)</Label>
                <Input
                  id="readTime"
                  type="number"
                  value={post.readTime}
                  onChange={(e) => setPost({ ...post, readTime: parseInt(e.target.value) || 5 })}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="featuredImage">Featured Image URL</Label>
                <Input
                  id="featuredImage"
                  value={post.featuredImage}
                  onChange={(e) => setPost({ ...post, featuredImage: e.target.value })}
                  placeholder="https://..."
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="tags">Tags (comma-separated)</Label>
                <Input
                  id="tags"
                  value={post.tags?.join(", ")}
                  onChange={(e) => setPost({ ...post, tags: e.target.value.split(",").map(t => t.trim()).filter(Boolean) })}
                  placeholder="bathroom, remodeling, tips"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">SEO</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="metaTitle">Meta Title</Label>
                <Input
                  id="metaTitle"
                  value={post.metaTitle}
                  onChange={(e) => setPost({ ...post, metaTitle: e.target.value })}
                  placeholder="SEO title"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="metaDescription">Meta Description</Label>
                <Textarea
                  id="metaDescription"
                  value={post.metaDescription}
                  onChange={(e) => setPost({ ...post, metaDescription: e.target.value })}
                  placeholder="SEO description"
                  rows={3}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="keywords">Keywords (comma-separated)</Label>
                <Input
                  id="keywords"
                  value={post.keywords?.join(", ")}
                  onChange={(e) => setPost({ ...post, keywords: e.target.value.split(",").map(k => k.trim()).filter(Boolean) })}
                  placeholder="bathroom remodel, renovation"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminShell>
  )
}
