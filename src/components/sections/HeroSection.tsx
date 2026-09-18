import { Link } from "react-router-dom";
import { Star, ShoppingCart, Check } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import Container from "@/components/layout/Container";
import { Reveal } from "@/components/shared/animations";
import { books } from "@/data";
import { useCart } from "@/stores/cartStore";
import BookCover from "@/components/shared/BookCover";

const featuredBooks = books.filter((b) => b.featured).slice(0, 6);

export default function HeroSection() {
  const { addItem, items } = useCart();

  return (
    <section className="py-20 bg-background">
      <Container>
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
              <Star className="w-4 h-4 text-secondary" />
              <span className="text-sm font-semibold text-secondary">Handpicked for You</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
              Featured Books
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our curated selection of must-read books from top authors around the world
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBooks.map((book, i) => {
            const inCart = items.some((item) => item.bookId === book._id);
            return (
              <Reveal key={book._id} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
                >
                  <Link to={`/book/${book.slug || book._id}`}>
                    <div className="relative overflow-hidden">
                      <BookCover title={book.title} author={book.author} coverImage={book.coverImage}
                        category={book.category}
                        size="lg"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-bold rounded-full">
                          Featured
                        </span>
                      </div>
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
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-xs text-primary font-semibold mb-2">
                      {book.category}
                    </p>
                    <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">by {book.author}</p>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                      {book.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-black text-primary">
                          â‚¦{(book.discountPrice || book.price).toLocaleString()}
                        </span>
                        {book.discountPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            â‚¦{book.price.toLocaleString()}
                          </span>
                        )}
                      </div>
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