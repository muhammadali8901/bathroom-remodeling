export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage: string;
  category: string;
  author: string;
  status: "draft" | "published";
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  tags: string[];
  readTime: number;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  author: string;
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  content: string;
  service: string;
  image?: string;
  featured?: boolean;
  createdAt: Date;
}

export interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
  beforeImage?: string;
  afterImage?: string;
  category: string;
  description?: string;
  featured?: boolean;
  createdAt: Date;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  createdAt: Date;
  status: 'new' | 'contacted' | 'converted' | 'closed';
}

export interface SEOSettings {
  homepageTitle: string;
  homepageDescription: string;
  bathroomTitle: string;
  bathroomDescription: string;
  kitchenTitle: string;
  kitchenDescription: string;
  businessName: string;
  businessPhone: string;
  businessEmail: string;
  businessAddress: string;
}
