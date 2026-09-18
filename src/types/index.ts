// ── Legacy template types (used by data/index.ts and UI components) ──
export interface Feature {
  title: string;
  description: string;
  icon?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  avatar?: string;
  image?: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Benefit {
  title: string;
  description: string;
}

export interface GalleryItem {
  title: string;
  src: string;
}

export interface LogoItem {
  name: string;
  src?: string;
}

// ── Library platform types ──
export interface Book {
  _id: string;
  title: string;
  author: string;
  description: string;
  price: number;
  discountPrice?: number;
  category: string;
  availableFormats?: { pdf?: boolean; epub?: boolean; txt?: boolean; mobi?: boolean };
  slug?: string;
  featured?: boolean;
  coverGradient?: string;
  coverImage?: string;
  gutenbergId?: number;
  downloadLinks?: { format: string; url: string }[];
  isbn?: string;
  pages?: number;
  language?: string;
  publishedDate?: string;
}

export interface Category {
  _id: string;
  name: string;
  description?: string;
  slug: string;
  bookCount?: number;
}

export interface Order {
  _id: string;
  orderCode: string;
  items: { book: Book; quantity: number; price: number }[];
  totalAmount: number;
  status: "pending" | "processing" | "completed" | "cancelled" | "failed";
  paymentMethod?: string;
  paymentReference?: string;
  createdAt: string;
}

export interface BookRequest {
  _id: string;
  title: string;
  author?: string;
  additionalNotes?: string;
  status: "pending" | "fulfilled" | "rejected";
  createdAt: string;
}
