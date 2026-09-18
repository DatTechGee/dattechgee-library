import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart, Check } from "lucide-react";
import { toast } from "sonner";
import Container from "@/components/layout/Container";
import { Reveal } from "@/components/shared/animations";
import { books } from "@/data";
import { useCart } from "@/stores/cartStore";
import { cn } from "@/lib/utils";
import BookCover from "@/components/shared/BookCover";

const bestsellers = books.filter((b) => b.featured).slice(0, 4);
const newArrivals = books.slice(4, 8);

export default function TrendingSection() {
  const [tab, setTab] = useState<"bestsellers" | "new">("bestsellers");
  const { addItem, items } = useCart();
  const list = tab === "bestsellers" ? bestsellers : newArrivals;

  return (
    <section className="py-20 bg-background">
      <Container>
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
              Popular Right Now
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover what readers around the world are loving
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex justify-center gap-4 mb-12">
            {[
              { key: "bestsellers" as const, label: "Bestsellers" },
              { key: "new" as const, label: "New Arrivals" },
            ].map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={cn(
                  "px-6 py-3 rounded-xl font-semibold transition-all",
                  tab === t.key
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {list.map((book, i) => {
            const inCart = items.some((item) => item.bookId === book._id);
            return (
              <Reveal key={book._id} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
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
                          className={`px-5 py-2.5 rounded-lg font-semibold flex items-center gap-2 text-sm ${inCart ? "bg-green-500 text-white" : "bg-white text-foreground"}`}
                        >
                          {inCart ? <><Check className="w-4 h-4" /> In Cart</> : <><ShoppingCart className="w-4 h-4" /> Add to Cart</>}
                        </button>
                      </div>
                    </div>
                  </Link>
                  <div className="p-4">
                    <p className="text-xs text-primary font-semibold mb-1">
                      {book.category}
                    </p>
                    <h3 className="font-bold text-foreground mb-1 line-clamp-1 group-hover:text-primary transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">by {book.author}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-black text-primary">
                        â‚¦{(book.discountPrice || book.price).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}