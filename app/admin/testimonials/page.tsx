"use client"

import { useState, useEffect } from "react"
import { AdminShell } from "@/components/admin/admin-shell"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { getTestimonials, createTestimonial, updateTestimonial, deleteTestimonial } from "@/lib/actions/testimonials"
import type { Testimonial } from "@/lib/types"
import { Plus, Pencil, Trash2, Star, Eye, EyeOff } from "lucide-react"

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    rating: 5,
    text: "",
    service: "",
    imageUrl: "",
    featured: false,
  })

  useEffect(() => {
    fetchTestimonials()
  }, [])

  async function fetchTestimonials() {
    const data = await getTestimonials()
    setTestimonials(data)
    setLoading(false)
  }

  async function handleSubmit() {
    if (editingTestimonial) {
      await updateTestimonial(editingTestimonial.id, formData)
    } else {
      await createTestimonial(formData)
    }
    setDialogOpen(false)
    setEditingTestimonial(null)
    resetForm()
    fetchTestimonials()
  }

  async function handleDelete(id: string) {
    if (confirm("Are you sure you want to delete this testimonial?")) {
      await deleteTestimonial(id)
      fetchTestimonials()
    }
  }

  async function toggleFeatured(testimonial: Testimonial) {
    await updateTestimonial(testimonial.id, { featured: !testimonial.featured })
    fetchTestimonials()
  }

  function resetForm() {
    setFormData({
      name: "",
      location: "",
      rating: 5,
      text: "",
      service: "",
      imageUrl: "",
      featured: false,
    })
  }

  function openEditDialog(testimonial: Testimonial) {
    setEditingTestimonial(testimonial)
    setFormData({
      name: testimonial.name,
      location: testimonial.location || "",
      rating: testimonial.rating,
      text: testimonial.text,
      service: testimonial.service || "",
      imageUrl: testimonial.imageUrl || "",
      featured: testimonial.featured,
    })
    setDialogOpen(true)
  }

  function openNewDialog() {
    setEditingTestimonial(null)
    resetForm()
    setDialogOpen(true)
  }

  return (
    <AdminShell 
      title="Testimonials" 
      description="Manage customer reviews and testimonials"
      actions={
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openNewDialog}>
              <Plus className="mr-2 h-4 w-4" />
              Add Testimonial
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>{editingTestimonial ? "Edit Testimonial" : "Add Testimonial"}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4 max-h-[70vh] overflow-y-auto">
              <div className="space-y-2">
                <Label htmlFor="name">Customer Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John D."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="Gilbert, AZ"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="service">Service</Label>
                <Input
                  id="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  placeholder="Bathroom Remodel"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rating">Rating</Label>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating: star })}
                      className="p-1"
                    >
                      <Star 
                        className={`h-6 w-6 ${star <= formData.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="text">Review Text</Label>
                <Textarea
                  id="text"
                  value={formData.text}
                  onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                  placeholder="Customer review..."
                  rows={4}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="imageUrl">Customer Photo URL (optional)</Label>
                <Input
                  id="imageUrl"
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  placeholder="https://..."
                />
              </div>
              <Button onClick={handleSubmit} className="w-full">
                {editingTestimonial ? "Update" : "Add"} Testimonial
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      }
    >
      <Card>
        <CardContent className="p-0">
          {loading ? (
            <div className="p-8 text-center text-muted-foreground">Loading testimonials...</div>
          ) : testimonials.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-muted-foreground mb-4">No testimonials yet</p>
              <Button onClick={openNewDialog}>
                <Plus className="mr-2 h-4 w-4" />
                Add First Testimonial
              </Button>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Review</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-24">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {testimonials.map((testimonial) => (
                  <TableRow key={testimonial.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <p className="text-sm text-muted-foreground line-clamp-2 max-w-md">
                        {testimonial.text}
                      </p>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-0.5">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      {testimonial.featured ? (
                        <Badge>Featured</Badge>
                      ) : (
                        <Badge variant="secondary">Hidden</Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8"
                          onClick={() => openEditDialog(testimonial)}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8"
                          onClick={() => toggleFeatured(testimonial)}
                        >
                          {testimonial.featured ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 text-destructive"
                          onClick={() => handleDelete(testimonial.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </AdminShell>
  )
}
