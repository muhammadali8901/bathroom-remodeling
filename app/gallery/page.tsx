"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { getFeaturedGalleryItems } from "@/lib/actions/gallery"
import type { GalleryItem } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight, ArrowLeftRight } from "lucide-react"
import { defaultGalleryItems } from "@/lib/seed-blog"

const categories = [
  { value: "all", label: "All Projects" },
  { value: "bathroom", label: "Bathroom" },
  { value: "kitchen", label: "Kitchen" },
  { value: "shower", label: "Shower" },
  { value: "vanity", label: "Vanity" },
]

export default function GalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [showBefore, setShowBefore] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const data = await getFeaturedGalleryItems()
      // If no items from database, use default gallery items
      if (data.length === 0) {
        const defaultItems = defaultGalleryItems.map((item, index) => ({
          ...item,
          id: `default-${index}`,
          createdAt: new Date(),
        })) as GalleryItem[]
        setItems(defaultItems)
      } else {
        setItems(data)
      }
      setLoading(false)
    }
    fetchData()
  }, [])

  const filteredItems = selectedCategory === "all" 
    ? items 
    : items.filter(item => item.category === selectedCategory)

  const currentIndex = selectedItem ? filteredItems.findIndex(item => item.id === selectedItem.id) : -1

  function handlePrev() {
    if (currentIndex > 0) {
      setSelectedItem(filteredItems[currentIndex - 1])
      setShowBefore(false)
    }
  }

  function handleNext() {
    if (currentIndex < filteredItems.length - 1) {
      setSelectedItem(filteredItems[currentIndex + 1])
      setShowBefore(false)
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-24 md:py-32 bg-secondary">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="text-sm font-medium tracking-widest text-primary uppercase">
                Our Work
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground text-balance">
                Project Gallery
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Browse our portfolio of completed bathroom and kitchen remodeling projects. 
                Each transformation showcases our commitment to quality and craftsmanship.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b border-border bg-card sticky top-20 z-30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.value)}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="aspect-[4/3] bg-muted rounded-lg" />
                  </div>
                ))}
              </div>
            ) : filteredItems.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground">No projects found in this category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedItem(item)}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                        <h3 className="text-white font-serif font-semibold">{item.title}</h3>
                        <p className="text-white/80 text-sm capitalize">{item.category}</p>
                      </div>
                      {(item.beforeImage && item.afterImage) && (
                        <div className="absolute top-4 right-4">
                          <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded">
                            Before/After
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
              onClick={() => setSelectedItem(null)}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 text-white hover:text-primary transition-colors z-10"
              >
                <X className="h-8 w-8" />
              </button>

              {currentIndex > 0 && (
                <button
                  onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                  className="absolute left-4 p-2 text-white hover:text-primary transition-colors z-10"
                >
                  <ChevronLeft className="h-10 w-10" />
                </button>
              )}

              {currentIndex < filteredItems.length - 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); handleNext(); }}
                  className="absolute right-4 p-2 text-white hover:text-primary transition-colors z-10"
                >
                  <ChevronRight className="h-10 w-10" />
                </button>
              )}

              <div 
                className="relative max-w-5xl max-h-[85vh] mx-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={
                      showBefore && selectedItem.beforeImage 
                        ? selectedItem.beforeImage 
                        : selectedItem.afterImage || selectedItem.imageUrl
                    }
                    alt={selectedItem.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white text-xl font-serif font-semibold">{selectedItem.title}</h3>
                  {selectedItem.description && (
                    <p className="text-white/80 mt-2">{selectedItem.description}</p>
                  )}
                  
                  {selectedItem.beforeImage && selectedItem.afterImage && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-4 bg-white/10 border-white/30 text-white hover:bg-white/20"
                      onClick={() => setShowBefore(!showBefore)}
                    >
                      <ArrowLeftRight className="mr-2 h-4 w-4" />
                      {showBefore ? "Show After" : "Show Before"}
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}
