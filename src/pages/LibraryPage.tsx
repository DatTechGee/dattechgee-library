import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, ShoppingCart, Check, Grid3X3, List } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/shared/animations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { books, categories } from "@/data";
import { useCart } from "@/stores/cartStore";
import { cn } from "@/lib/utils";
import BookCover from "@/components/shared/BookCover";

export default function LibraryPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [activeCategory, setActiveCategory] = useState(searchParams.get("tab") || "all");
  const [sortBy, setSortBy] = useState("created_at");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const { addItem, items } = useCart();

  useEffect(() => {
    const cat = searchParams.get("tab");
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  const q = query.toLowerCase();
  const filtered = books
    .filter(
      (book) =>
        (activeCategory === "all" || book.category === activeCategory) &&
        (book.title.toLowerCase().includes(q) ||
          book.author.toLowerCase().includes(q) ||
          (book.category).toLowerCase().includes(q))
    )
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      return a.title.localeCompare(b.title);
    });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <Container>
          {/* Header */}
          <Reveal>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">
                Book Library
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our curated collection of books across multiple categories
              </p>
            </div>
          </Reveal>

          {/* Search + Filters */}
          <Reveal delay={0.1}>
            <div className="flex flex-col lg:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input
                  placeholder="Search books, authors, categories..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="h-12 pl-10 rounded-lg"
                />
              </div>
              <div className="flex gap-3">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="h-12 px-4 rounded-lg border bg-background text-sm"
                >
                  <option value="created_at">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="title">Title A-Z</option>
                </select>
                <div className="flex border rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={cn("p-2.5 transition-colors", viewMode === "grid" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80")}
                  >
                    <Grid3X3 className="size-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={cn("p-2.5 transition-colors", viewMode === "list" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80")}
                  >
                    <List className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Category tabs */}
          <Reveal delay={0.15}>
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => {
                    setActiveCategory(cat.slug);
                    const params = new URLSearchParams(searchParams);
                    params.set("tab", cat.slug);
                    setSearchParams(params);
                  }}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all",
                    activeCategory === cat.slug
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  )}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Results count */}
          <Reveal delay={0.2}>
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">
                Showing {filtered.length} {filtered.length === 1 ? "book" : "books"}
              </p>
            </div>
          </Reveal>

          {/* Book grid/list */}
          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <Reveal key="empty">
                <div className="text-center py-20">
                  <Search className="size-16 text-muted-foreground/30 mx-auto mb-4" />
                  <p className="text-xl font-semibold mb-2">No books found</p>
                  <p className="text-muted-foreground">Try a different search term or category</p>
                </div>
              </Reveal>
            ) : viewMode === "grid" ? (
              <StaggerGroup key="grid" className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filtered.map((book) => {
                  const inCart = items.some((item) => item.bookId === book._id);
                  return (
                    <StaggerItem key={book._id}>
                      <motion.div
                        whileHover={{ y: -4 }}
                        className="group bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
                      >
                        <Link to={`/book/${book.slug || book._id}`}>
                          <div className="relative overflow-hidden">
                            <BookCover title={book.title} author={book.author} coverImage={book.coverImage}
                              category={book.category}
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  if (inCart) {
                                    toast.success("Book is already in cart!");
                                  } else {
                                    addItem({
                                      bookId: book._id,
                                      title: book.title,
                                      author: book.author,
                                      price: book.discountPrice || book.price,
                                    });
                                    toast.success("Added to cart!");
                                  }
                                }}
                                className={`px-6 py-3 rounded-lg font-semibold flex items-center gap-2 ${inCart ? "bg-green-500 text-white" : "bg-white text-foreground"}`}
                              >
                                {inCart ? <><Check className="w-5 h-5" /> In Cart</> : <><ShoppingCart className="w-5 h-5" /> Add to Cart</>}
                              </button>
                            </div>
                          </div>
                        </Link>
                        <div className="p-5 flex-1 flex flex-col">
                          <h3 className="font-bold text-lg text-foreground mb-1 line-clamp-1 group-hover:text-primary transition-colors">
                            {book.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-2">by {book.author}</p>
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">{book.description}</p>
                          <div className="flex items-center justify-between pt-3 border-t border-border">
                            <span className="text-xl font-black text-primary">
                              â‚¦{(book.discountPrice || book.price).toLocaleString()}
                            </span>
                            {book.discountPrice && (
                              <span className="text-sm text-muted-foreground line-through">
                                â‚¦{book.price.toLocaleString()}
                              </span>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    </StaggerItem>
                  );
                })}
              </StaggerGroup>
            ) : (
              <StaggerGroup key="list" className="space-y-4">
                {filtered.map((book) => {
                  const inCart = items.some((item) => item.bookId === book._id);
                  return (
                    <StaggerItem key={book._id}>
                      <motion.div
                        whileHover={{ x: 4 }}
                        className="group flex gap-6 p-6 bg-card border border-border rounded-2xl shadow-lg hover:shadow-xl transition-all"
                      >
                        <Link to={`/book/${book.slug || book._id}`} className="shrink-0">
                          <BookCover title={book.title} author={book.author} coverImage={book.coverImage}
                            category={book.category}
                            size="sm"
                          />
                        </Link>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <span className="text-xs text-primary font-semibold">{book.category}</span>
                              <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">{book.title}</h3>
                              <p className="text-sm text-muted-foreground">by {book.author}</p>
                            </div>
                            <div className="text-right shrink-0">
                              <p className="text-xl font-black text-primary">â‚¦{(book.discountPrice || book.price).toLocaleString()}</p>
                              {book.discountPrice && (
                                <p className="text-sm text-muted-foreground line-through">â‚¦{book.price.toLocaleString()}</p>
                              )}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2 mt-2 mb-3">{book.description}</p>
                          <Button
                            size="sm"
                            onClick={() => {
                              if (inCart) {
                                toast.success("Book is already in cart!");
                              } else {
                                addItem({
                                  bookId: book._id,
                                  title: book.title,
                                  author: book.author,
                                  price: book.discountPrice || book.price,
                                });
                                toast.success("Added to cart!");
                              }
                            }}
                            className={cn("gap-1.5", inCart && "bg-green-500 hover:bg-green-600")}
                          >
                            {inCart ? <><Check className="size-3.5" /> In Cart</> : <><ShoppingCart className="size-3.5" /> Add to Cart</>}
                          </Button>
                        </div>
                      </motion.div>
                    </StaggerItem>
                  );
                })}
              </StaggerGroup>
            )}
          </AnimatePresence>
        </Container>
      </main>
      <Footer />
    </div>
  );
}