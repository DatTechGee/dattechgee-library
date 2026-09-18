import { useState, useEffect } from "react";
import { Search, Download, ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import Container from "@/components/layout/Container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/shared/animations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { books, categories } from "@/data";
import { useCart } from "@/stores/cartStore";
import { cn } from "@/lib/utils";
import BookCover from "@/components/shared/BookCover";

export default function BrowseSection() {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState("all");
  const [sortBy, setSortBy] = useState("title");
  const { addItem } = useCart();

  useEffect(() => {
    const onSearch = (e: Event) => {
      const q = (e as CustomEvent<string>).detail ?? "";
      setQuery(q);
      setTab("all");
    };
    window.addEventListener("library-search", onSearch);
    return () => window.removeEventListener("library-search", onSearch);
  }, []);

  const q = query.toLowerCase();
  const filtered = books
    .filter(
      (book) =>
        (tab === "all" || book.category === tab) &&
        (book.title.toLowerCase().includes(q) ||
          book.author.toLowerCase().includes(q))
    )
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      return a.title.localeCompare(b.title);
    });

  return (
    <section id="browse" className="py-24 scroll-anchor">
      <Container>
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Browse &amp; Discover
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Discover your next great read
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Find the perfect book in your area of interest
            </p>
          </div>
        </Reveal>

        {/* Search + sort */}
        <Reveal delay={0.1}>
          <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by book title or author..."
                className="h-12 pl-10 rounded-lg shadow-sm"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="h-12 px-4 rounded-lg border bg-background text-sm"
            >
              <option value="title">Sort by Title</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </Reveal>

        {/* Category tabs */}
        <Reveal delay={0.15}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setTab(cat.slug)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors touch-target",
                  tab === cat.slug
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </Reveal>

        {filtered.length === 0 ? (
          <Reveal>
            <div className="text-center py-12 text-muted-foreground">
              <p className="text-lg font-medium mb-1">No books found</p>
              <p className="text-sm">Try a different title, author, or category.</p>
            </div>
          </Reveal>
        ) : (
          <StaggerGroup
            key={tab + query}
            className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((book) => (
              <StaggerItem key={book._id}>
                <article className="h-full p-6 rounded-xl border bg-card group hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <BookCover title={book.title} author={book.author} coverImage={book.coverImage}
                      size="sm"
                      className="w-16 !aspect-[3/4]"
                    />
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                        {book.category}
                      </span>
                      {book.discountPrice && (
                        <span className="text-xs text-destructive line-through">
                          â‚¦{book.price.toLocaleString()}
                        </span>
                      )}
                      <span className="text-lg font-bold text-primary">
                        â‚¦{(book.discountPrice || book.price).toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-1 line-clamp-1">{book.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">by {book.author}</p>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{book.description}</p>
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      className="gap-1.5"
                      onClick={() =>
                        addItem({
                          bookId: book._id,
                          title: book.title,
                          author: book.author,
                          price: book.discountPrice || book.price,
                        })
                      }
                    >
                      <ShoppingCart className="size-3.5" />
                      Add to Cart
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="gap-1.5"
                      onClick={() => toast.success(`"${book.title}" download started`)}
                    >
                      <Download className="size-3.5" />
                      Download
                    </Button>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        )}
      </Container>
    </section>
  );
}
