import type { Book, FAQ, Stat, Step } from "@/types";

export const categories: { name: string; slug: string }[] = [
  { name: "All", slug: "all" },
  { name: "Personal Growth", slug: "personal-growth" },
  { name: "Productivity", slug: "productivity" },
  { name: "Stoicism", slug: "stoicism" },
  { name: "Psychology", slug: "psychology" },
  { name: "Success", slug: "success" },
  { name: "Leadership", slug: "leadership" },
];

export const books: Book[] = [
  {
    _id: "g1", slug: "think-and-grow-rich", title: "Think and Grow Rich",
    author: "Napoleon Hill", category: "success", featured: true, price: 1500,
    description: "The landmark personal finance classic that distills the principles of success from over 500 of America's most successful people. A timeless guide to wealth creation and achievement.",
    coverGradient: "from-amber-500 via-yellow-600 to-orange-700",
    coverImage: "https://covers.openlibrary.org/b/id/14542536-L.jpg",
    gutenbergId: 17309,
    downloadLinks: [
      { format: "epub", url: "https://www.gutenberg.org/ebooks/17309.epub3.images" },
      { format: "txt", url: "https://www.gutenberg.org/ebooks/17309.txt.utf-8" },
    ],
  },
  {
    _id: "g2", slug: "meditations", title: "Meditations",
    author: "Marcus Aurelius", category: "stoicism", featured: true, price: 1200,
    description: "Personal writings of the Roman Emperor on Stoic philosophy. Timeless wisdom on self-discipline, resilience, and inner peace that has guided leaders for centuries.",
    coverGradient: "from-indigo-600 via-blue-700 to-sky-800",
    coverImage: "https://covers.openlibrary.org/b/id/12032600-L.jpg",
    gutenbergId: 2680,
    downloadLinks: [
      { format: "epub", url: "https://www.gutenberg.org/ebooks/2680.epub3.images" },
      { format: "txt", url: "https://www.gutenberg.org/ebooks/2680.txt.utf-8" },
    ],
  },
  {
    _id: "g3", slug: "art-of-war", title: "The Art of War",
    author: "Sun Tzu", category: "leadership", featured: true, price: 1200,
    description: "Ancient Chinese military treatise on strategy and tactics. Its principles of leadership, competition, and strategic thinking apply powerfully to business and personal growth.",
    coverGradient: "from-red-600 via-orange-600 to-amber-600",
    coverImage: "https://covers.openlibrary.org/b/id/4849549-L.jpg",
    gutenbergId: 132,
    downloadLinks: [
      { format: "epub", url: "https://www.gutenberg.org/ebooks/132.epub3.images" },
      { format: "txt", url: "https://www.gutenberg.org/ebooks/132.txt.utf-8" },
    ],
  },
  {
    _id: "g4", slug: "republic", title: "The Republic",
    author: "Plato", category: "psychology", featured: true, price: 1400,
    description: "A Socratic dialogue on justice, wisdom, and the ideal life. Foundational Western philosophy that explores what it means to live well and think clearly.",
    coverGradient: "from-violet-600 via-purple-700 to-indigo-800",
    coverImage: "https://covers.openlibrary.org/b/id/9981103-L.jpg",
    gutenbergId: 1497,
    downloadLinks: [
      { format: "epub", url: "https://www.gutenberg.org/ebooks/1497.epub3.images" },
      { format: "txt", url: "https://www.gutenberg.org/ebooks/1497.txt.utf-8" },
    ],
  },
  {
    _id: "g5", slug: "wealth-of-nations", title: "The Wealth of Nations",
    author: "Adam Smith", category: "success", price: 1800,
    description: "The foundational work of modern economics. Understanding markets, division of labor, and free enterprise is essential for anyone building a career or business.",
    coverGradient: "from-yellow-600 via-amber-700 to-orange-800",
    coverImage: "https://covers.openlibrary.org/b/id/12816911-L.jpg",
    gutenbergId: 3300,
    downloadLinks: [
      { format: "epub", url: "https://www.gutenberg.org/ebooks/3300.epub3.images" },
      { format: "txt", url: "https://www.gutenberg.org/ebooks/3300.txt.utf-8" },
    ],
  },
  {
    _id: "g6", slug: "self-reliance-and-other-essays", title: "Self-Reliance and Other Essays",
    author: "Ralph Waldo Emerson", category: "personal-growth", featured: true, price: 1100,
    description: "The essential transcendentalist text on independence, nonconformity, and trusting yourself. Emerson's essays remain a powerful call to authenticity and personal power.",
    coverGradient: "from-green-600 via-emerald-700 to-teal-800",
    coverImage: "https://covers.openlibrary.org/b/id/3879921-L.jpg",
    gutenbergId: 166,
    downloadLinks: [
      { format: "epub", url: "https://www.gutenberg.org/ebooks/166.epub3.images" },
      { format: "txt", url: "https://www.gutenberg.org/ebooks/166.txt.utf-8" },
    ],
  },
  {
    _id: "g7", slug: "enjoy-your-problems", title: "How to Solve It",
    author: "George Polya", category: "productivity", price: 1400,
    description: "A legendary problem-solving handbook. Polya's four-step method teaches you how to tackle any challenge — math, business, or life — with structured thinking.",
    coverGradient: "from-teal-500 via-cyan-600 to-blue-700",
    coverImage: "https://covers.openlibrary.org/b/id/8404335-L.jpg",
    gutenbergId: 19200,
    downloadLinks: [
      { format: "epub", url: "https://www.gutenberg.org/ebooks/19200.epub3.images" },
      { format: "txt", url: "https://www.gutenberg.org/ebooks/19200.txt.utf-8" },
    ],
  },
  {
    _id: "g8", slug: "the-33-strategies-of-war", title: "On War",
    author: "Carl von Clausewitz", category: "leadership", price: 1800,
    description: "The most influential treatise on military strategy ever written. Its concepts of friction, fog of war, and center of gravity apply directly to competitive strategy.",
    coverGradient: "from-slate-600 via-gray-700 to-zinc-800",
    coverImage: "https://covers.openlibrary.org/b/id/11322559-L.jpg",
    gutenbergId: 1938,
    downloadLinks: [
      { format: "epub", url: "https://www.gutenberg.org/ebooks/1938.epub3.images" },
      { format: "txt", url: "https://www.gutenberg.org/ebooks/1938.txt.utf-8" },
    ],
  },
  {
    _id: "g9", slug: "nioberthus", title: "Ethics",
    author: "Baruch Spinoza", category: "psychology", price: 1600,
    description: "A masterpiece of philosophy exploring the nature of emotions, human freedom, and the path to blessedness through reason. Foundational to modern psychology.",
    coverGradient: "from-purple-600 via-violet-700 to-indigo-800",
    coverImage: "https://covers.openlibrary.org/b/id/5763886-L.jpg",
    gutenbergId: 3786,
    downloadLinks: [
      { format: "epub", url: "https://www.gutenberg.org/ebooks/3786.epub3.images" },
      { format: "txt", url: "https://www.gutenberg.org/ebooks/3786.txt.utf-8" },
    ],
  },
  {
    _id: "g10", slug: "as-a-man-thinketh", title: "As a Man Thinketh",
    author: "James Allen", category: "personal-growth", featured: true, price: 900,
    description: "A classic self-help essay on the power of thought to shape character, circumstances, and destiny. Short, profound, and life-changing.",
    coverGradient: "from-rose-500 via-pink-600 to-fuchsia-700",
    coverImage: "https://covers.openlibrary.org/b/id/12066355-L.jpg",
    gutenbergId: 2088,
    downloadLinks: [
      { format: "epub", url: "https://www.gutenberg.org/ebooks/2088.epub3.images" },
      { format: "txt", url: "https://www.gutenberg.org/ebooks/2088.txt.utf-8" },
    ],
  },
  {
    _id: "g11", slug: "the-enchiridion", title: "The Enchiridion",
    author: "Epictetus", category: "stoicism", featured: true, price: 900,
    description: "The essential handbook of Stoic philosophy. Epictetus teaches what is in our control and what is not — the key to tranquility and effective action.",
    coverGradient: "from-emerald-500 via-teal-600 to-cyan-700",
    coverImage: "https://covers.openlibrary.org/b/id/12622080-L.jpg",
    gutenbergId: 1486,
    downloadLinks: [
      { format: "epub", url: "https://www.gutenberg.org/ebooks/1486.epub3.images" },
      { format: "txt", url: "https://www.gutenberg.org/ebooks/1486.txt.utf-8" },
    ],
  },
  {
    _id: "g12", slug: "total-power", title: "The Art of Public Speaking",
    author: "Dale Carnegie", category: "productivity", price: 1200,
    description: "Carnegie's timeless guide to effective communication, persuasion, and leadership. Essential skills for anyone who wants to influence and inspire others.",
    coverGradient: "from-orange-500 via-red-500 to-rose-600",
    coverImage: "https://covers.openlibrary.org/b/id/4947875-L.jpg",
    gutenbergId: 1212,
    downloadLinks: [
      { format: "epub", url: "https://www.gutenberg.org/ebooks/1212.epub3.images" },
      { format: "txt", url: "https://www.gutenberg.org/ebooks/1212.txt.utf-8" },
    ],
  },
];

export const faqs: FAQ[] = [
  { question: "What kind of books are available?", answer: "Self-development classics, stoic philosophy, productivity guides, leadership wisdom, and personal growth books from Project Gutenberg — all free public domain titles." },
  { question: "How do I download books?", answer: "Browse the library, click any book to see details, then click Add to Cart. Complete our demo checkout to unlock instant EPUB and TXT downloads." },
  { question: "Are these books really free?", answer: "Yes! All books are from Project Gutenberg, a library of over 60,000 free ebooks. We charge a small platform fee for curation." },
  { question: "Can I read offline?", answer: "Yes! Downloaded books are saved to your library and accessible anytime, even without internet." },
  { question: "Is the payment real?", answer: "No — this is a demo checkout. No money is charged. You can test the full purchase flow safely." },
];

export const stats: Stat[] = [
  { value: "60K+", label: "Free Books" },
  { value: "100%", label: "Open Source" },
  { value: "3", label: "Formats" },
  { value: "24/7", label: "Access" },
];

export const processSteps: Step[] = [
  { number: "01", title: "Browse", description: "Explore our curated collection of classic literature, philosophy, science, and more." },
  { number: "02", title: "Purchase", description: "Add books to cart and complete our demo checkout in seconds." },
  { number: "03", title: "Download", description: "Get instant access to EPUB and TXT files. Read anywhere, anytime." },
];

export const newReleases = books.filter((b) => b.featured);

// Stub exports for sections that reference them
export const testimonials: { name: string; role: string; quote: string }[] = [
  { name: "Sarah M.", role: "Entrepreneur", quote: "DatTechGee Library gave me instant access to the classics that shaped my mindset. Meditations alone was worth it." },
  { name: "James K.", role: "Student", quote: "I needed these books for my personal growth journey. The downloads are fast and the selection is incredible." },
  { name: "Priya D.", role: "Software Engineer", quote: "Think and Grow Rich and The Art of War changed how I approach business. Best investment in myself." },
];
export const team: { name: string; role: string }[] = [
  { name: "DatTechGee Library", role: "Platform" },
];
export const pricing: { name: string; price: string; period: string; features: string[]; highlighted?: boolean }[] = [];
export const galleryItems: { title: string; src: string }[] = [];
export const products: unknown[] = [];
export const features: { title: string; description: string }[] = [];
export const benefits: { title: string; description: string }[] = [];
export const logos: { name: string }[] = [];
