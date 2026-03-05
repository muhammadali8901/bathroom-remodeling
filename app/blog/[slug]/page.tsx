import { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { getPostBySlug, getRelatedPosts } from "@/lib/actions/blog"
import { siteConfig } from "@/lib/site-config"
import { Calendar, Clock, ArrowLeft, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BlogArticleJsonLd } from "@/components/seo/json-ld"
import { defaultBlogPost } from "@/lib/seed-blog"
import type { BlogPost } from "@/lib/types"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

async function getPostData(slug: string): Promise<BlogPost | null> {
  const post = await getPostBySlug(slug)
  if (post) return post
  
  // Check if this is the default blog post
  if (slug === defaultBlogPost.slug) {
    return {
      ...defaultBlogPost,
      id: "default-post",
      readTime: 12,
    }
  }
  return null
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostData(slug)
  
  if (!post) {
    return {
      title: "Post Not Found"
    }
  }

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      type: "article",
      publishedTime: post.publishedAt || post.createdAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      images: post.featuredImage ? [post.featuredImage] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      images: post.featuredImage ? [post.featuredImage] : undefined,
    }
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getPostData(slug)
  
  if (!post) {
    notFound()
  }

  const relatedPosts = await getRelatedPosts(post.category, post.id)

  return (
    <>
      <BlogArticleJsonLd
        title={post.title}
        description={post.excerpt}
        url={`${siteConfig.url}/blog/${post.slug}`}
        image={post.featuredImage || "/images/blog-placeholder.jpg"}
        datePublished={post.publishedAt || post.createdAt}
        dateModified={post.updatedAt}
        author={post.author}
      />
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
              
              <span className="text-sm font-medium tracking-widest text-primary uppercase">
                {post.category}
              </span>
              
              <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground text-balance leading-tight">
                {post.title}
              </h1>
              
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.publishedAt || post.createdAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readTime} min read
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        {post.featuredImage && (
          <section className="relative -mt-8 mb-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Article Content */}
        <article className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div 
                className="prose prose-lg max-w-none
                  prose-headings:font-serif prose-headings:text-foreground
                  prose-p:text-muted-foreground prose-p:leading-relaxed
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-foreground
                  prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground
                  prose-li:text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </article>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <section className="pb-12">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-secondary text-sm text-muted-foreground rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground">
                Ready to Start Your Remodeling Project?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Contact us today for a free consultation and estimate on your bathroom or kitchen renovation.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">Get Free Estimate</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={`tel:${siteConfig.phone}`}>Call {siteConfig.phone}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-8">
                  Related Articles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <Link 
                      key={relatedPost.id} 
                      href={`/blog/${relatedPost.slug}`}
                      className="group block"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden rounded-lg mb-4">
                        <Image
                          src={relatedPost.featuredImage || "/images/blog-placeholder.jpg"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">
                        {relatedPost.category}
                      </span>
                      <h3 className="mt-2 text-lg font-serif font-semibold text-foreground group-hover:text-primary transition-colors text-balance">
                        {relatedPost.title}
                      </h3>
                      <div className="mt-3 inline-flex items-center gap-2 text-sm text-primary font-medium group-hover:gap-3 transition-all">
                        Read More <ArrowRight className="h-4 w-4" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
