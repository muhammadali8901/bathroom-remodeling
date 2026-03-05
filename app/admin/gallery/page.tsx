"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { AdminShell } from "@/components/admin/admin-shell"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { getGalleryItems, createGalleryItem, updateGalleryItem, deleteGalleryItem } from "@/lib/actions/gallery"
import type { GalleryItem } from "@/lib/types"
import { Plus, Pencil, Trash2, Eye, EyeOff, Grid, List } from "lucide-react"

const categories = [
  { value: "bathroom", label: "Bathroom Remodeling" },
  { value: "kitchen", label: "Kitchen Remodeling" },
  { value: "shower", label: "Shower Remodel" },
  { value: "vanity", label: "Vanity & Countertops" },
]

export default function AdminGalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([])
  const [loading, setLoading] = useState(true)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: "",
    category: "",
    beforeImage: "",
    afterImage: "",
    featured: false,
  })

  useEffect(() => {
    fetchItems()
  }, [])

  async function fetchItems() {
    const data = await getGalleryItems()
    setItems(data)
    setLoading(false)
  }

  async function handleSubmit() {
    if (editingItem) {
      await updateGalleryItem(editingItem.id, formData)
    } else {
      await createGalleryItem(formData)
    }
    setDialogOpen(false)
    setEditingItem(null)
    resetForm()
    fetchItems()
  }

  async function handleDelete(id: string) {
    if (confirm("Are you sure you want to delete this gallery item?")) {
      await deleteGalleryItem(id)
      fetchItems()
    }
  }

  async function toggleFeatured(item: GalleryItem) {
    await updateGalleryItem(item.id, { featured: !item.featured })
    fetchItems()
  }

  function resetForm() {
    setFormData({
      title: "",
      description: "",
      imageUrl: "",
      category: "",
      beforeImage: "",
      afterImage: "",
      featured: false,
    })
  }

  function openEditDialog(item: GalleryItem) {
    setEditingItem(item)
    setFormData({
      title: item.title,
      description: item.description || "",
      imageUrl: item.imageUrl,
      category: item.category,
      beforeImage: item.beforeImage || "",
      afterImage: item.afterImage || "",
      featured: item.featured,
    })
    setDialogOpen(true)
  }

  function openNewDialog() {
    setEditingItem(null)
    resetForm()
    setDialogOpen(true)
  }

  return (
    <AdminShell 
      title="Gallery" 
      description="Manage project photos and before/after images"
      actions={
        <div className="flex items-center gap-2">
          <div className="flex items-center border rounded-lg">
            <Button 
              variant={viewMode === "grid" ? "default" : "ghost"} 
              size="sm"
              onClick={() => setViewMode("grid")}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button 
              variant={viewMode === "list" ? "default" : "ghost"} 
              size="sm"
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={openNewDialog}>
                <Plus className="mr-2 h-4 w-4" />
                Add Image
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
              <DialogHeader>
                <DialogTitle>{editingItem ? "Edit Gallery Item" : "Add Gallery Item"}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4 max-h-[70vh] overflow-y-auto">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Project title"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData({ ...formData, category: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat.value} value={cat.value}>
                          {cat.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="imageUrl">Main Image URL</Label>
                  <Input
                    id="imageUrl"
                    value={formData.imageUrl}
                    onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                    placeholder="https://..."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="beforeImage">Before Image URL (optional)</Label>
                  <Input
                    id="beforeImage"
                    value={formData.beforeImage}
                    onChange={(e) => setFormData({ ...formData, beforeImage: e.target.value })}
                    placeholder="https://..."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="afterImage">After Image URL (optional)</Label>
                  <Input
                    id="afterImage"
                    value={formData.afterImage}
                    onChange={(e) => setFormData({ ...formData, afterImage: e.target.value })}
                    placeholder="https://..."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Project description"
                    rows={3}
                  />
                </div>
                <Button onClick={handleSubmit} className="w-full">
                  {editingItem ? "Update" : "Add"} Gallery Item
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      }
    >
      {loading ? (
        <div className="p-8 text-center text-muted-foreground">Loading gallery...</div>
      ) : items.length === 0 ? (
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-muted-foreground mb-4">No gallery items yet</p>
            <Button onClick={openNewDialog}>
              <Plus className="mr-2 h-4 w-4" />
              Add First Image
            </Button>
          </CardContent>
        </Card>
      ) : viewMode === "grid" ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <Card key={item.id} className="overflow-hidden group">
              <div className="relative aspect-square">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <Button 
                    variant="secondary" 
                    size="icon"
                    onClick={() => openEditDialog(item)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="icon"
                    onClick={() => toggleFeatured(item)}
                  >
                    {item.featured ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="icon"
                    onClick={() => handleDelete(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                {item.featured && (
                  <div className="absolute top-2 left-2 px-2 py-1 bg-primary text-primary-foreground text-xs rounded">
                    Featured
                  </div>
                )}
              </div>
              <CardContent className="p-3">
                <p className="font-medium text-sm truncate">{item.title}</p>
                <p className="text-xs text-muted-foreground capitalize">{item.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="p-0">
            <div className="divide-y">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-4 p-4">
                  <div className="relative h-16 w-20 rounded overflow-hidden bg-muted">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{item.title}</p>
                    <p className="text-sm text-muted-foreground capitalize">{item.category}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => openEditDialog(item)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => toggleFeatured(item)}
                    >
                      {item.featured ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="text-destructive"
                      onClick={() => handleDelete(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </AdminShell>
  )
}
