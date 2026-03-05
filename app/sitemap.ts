import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config'
import { getPublishedPosts } from '@/lib/actions/blog'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/gallery',
    '/blog',
    '/bathroom-remodeling',
    '/kitchen-remodeling',
    '/financing',
    '/privacy-policy',
    '/terms-of-service',
  ]

  const staticEntries = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: page === '' ? 1 : 0.8,
  }))

  // Blog posts
  const posts = await getPublishedPosts()
  const blogEntries = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.createdAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticEntries, ...blogEntries]
}
