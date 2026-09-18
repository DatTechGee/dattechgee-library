import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Check, Download, Star, Eye, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { Reveal } from "@/components/shared/animations";
import { Button } from "@/components/ui/button";
import { books } from "@/data";
import { useCart } from "@/stores/cartStore";
import { useLibrary } from "@/stores/libraryStore";
import BookCover from "@/components/shared/BookCover";

export default function BookDetailPage() {
  const { slug } = useParams();
  const { addItem, items } = useCart();
  const { isPurchased } = useLibrary();

  const book = books.find((b) => b.slug === slug || b._id === slug);

  if (!book) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-20">
          <Container>
            <div className="text-center py-20">
              <BookOpen className="size-16 text-muted-foreground/30 mx-auto mb-4" />
              <h1 className="text-2xl font-bold mb-2">Book not found</h1>
              <p className="text-muted-foreground mb-6">The book you&apos;re looking for doesn&apos;t exist.</p>
              <Link to="/library"><Button>Browse Library</Button></Link>
            </div>
          </Container>
        </main>
        <Footer />
      </div>
    );
  }

  const inCart = items.some((item) => item.bookId === book._id);
  const purchased = isPurchased(book._id);
  const relatedBooks = books.filter((b) => b._id !== book._id && b.category === book.category).slice(0, 3);

  const handleDownload = (format: string, url?: string) => {
    if (url) {
      toast.success(`Opening ${format.toUpperCase()} download...`);
      window.open(url, "_blank");
    } else {
      toast.info(`${format.toUpperCase()} not available for this book`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <Container>
          <Link to="/library" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="size-4" /> Back to Library
          </Link>

          <div className="grid lg:grid-cols-[400px_1fr] gap-12 mb-16">
            <Reveal>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <BookCover title={book.title} author={book.author} coverImage={book.coverImage} category={book.category} size="lg" />
                {purchased && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                      <Check className="size-3" /> Purchased
                    </span>
                  </div>
                )}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-6">
                <div>
                  <span className="text-sm text-primary font-semibold">{book.category}</span>
                  <h1 className="text-3xl md:text-4xl font-black mt-1 mb-2">{book.title}</h1>
                  <p className="text-lg text-muted-foreground">by {book.author}</p>
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className={i <= 4 ? "size-4 fill-secondary text-secondary" : "size-4 text-muted-foreground"} />
                    ))}
                    <span className="text-sm text-muted-foreground ml-1">(4.0)</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Eye className="size-4" /> 1.2k views
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Download className="size-4" /> 340 downloads
                  </div>
                </div>

                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-black text-primary">₦{book.price.toLocaleString()}</span>
                  <span className="text-sm text-muted-foreground bg-green-500/10 text-green-600 px-2 py-0.5 rounded-full font-medium">
                    Demo checkout
                  </span>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Description</h3>
                  <p className="text-muted-foreground leading-relaxed">{book.description}</p>
                </div>

                {/* Download formats */}
                {purchased && book.downloadLinks && book.downloadLinks.length > 0 && (
                  <div className="p-4 bg-green-500/5 border border-green-500/20 rounded-xl">
                    <h3 className="font-semibold mb-3 text-green-700 dark:text-green-400">Download Your Book</h3>
                    <div className="flex flex-wrap gap-3">
                      {book.downloadLinks.map((dl) => (
                        <button
                          key={dl.format}
                          onClick={() => handleDownload(dl.format, dl.url)}
                          className="px-5 py-2.5 bg-green-500 text-white rounded-xl font-semibold text-sm hover:bg-green-600 transition-colors flex items-center gap-2"
                        >
                          <Download className="size-4" /> {dl.format.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Available formats info */}
                {!purchased && book.downloadLinks && (
                  <div>
                    <h3 className="font-semibold mb-3">Available Formats (after purchase)</h3>
                    <div className="flex flex-wrap gap-3">
                      {book.downloadLinks.map((dl) => (
                        <span key={dl.format} className="px-5 py-2.5 bg-muted rounded-xl font-semibold text-sm flex items-center gap-2 text-muted-foreground">
                          <Download className="size-4" /> {dl.format.toUpperCase()}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Add to cart */}
                <div className="flex gap-3 pt-4">
                  {!purchased ? (
                    <Button
                      size="lg"
                      className={`flex-1 gap-2 ${inCart ? "bg-green-500 hover:bg-green-600" : ""}`}
                      onClick={() => {
                        if (inCart) {
                          toast.success("Book is already in cart!");
                        } else {
                          addItem({
                            bookId: book._id,
                            title: book.title,
                            author: book.author,
                            price: book.price,
                            slug: book.slug,
                            coverGradient: book.coverGradient,
                            downloadLinks: book.downloadLinks,
                          });
                          toast.success("Added to cart!");
                        }
                      }}
                    >
                      {inCart ? <><Check className="size-5" /> In Cart</> : <><ShoppingCart className="size-5" /> Add to Cart</>}
                    </Button>
                  ) : (
                    <Link to="/dashboard" className="flex-1">
                      <Button size="lg" className="w-full gap-2 bg-green-500 hover:bg-green-600">
                        <Download className="size-5" /> Go to My Library
                      </Button>
                    </Link>
                  )}
                </div>

                {book.gutenbergId && (
                  <p className="text-xs text-muted-foreground">
                    Source: Project Gutenberg ID #{book.gutenbergId} — Free public domain book
                  </p>
                )}
              </div>
            </Reveal>
          </div>

          {relatedBooks.length > 0 && (
            <Reveal>
              <div>
                <h2 className="text-2xl font-bold mb-6">Related Books</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedBooks.map((rb) => (
                    <Link key={rb._id} to={`/book/${rb.slug || rb._id}`}>
                      <motion.div whileHover={{ y: -4 }} className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                        <BookCover title={rb.title} author={rb.author} coverImage={rb.coverImage} size="sm" />
                        <div className="p-4">
                          <h3 className="font-bold line-clamp-1">{rb.title}</h3>
                          <p className="text-sm text-muted-foreground">by {rb.author}</p>
                          <p className="text-lg font-black text-primary mt-2">₦{rb.price.toLocaleString()}</p>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          )}
        </Container>
      </main>
      <Footer />
    </div>
  );
}