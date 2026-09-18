import { useState } from "react";
import { Link } from "react-router-dom";
import { LayoutDashboard, ShoppingCart, Download, LogOut, BookOpen, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/stores/authStore";
import { useCart } from "@/stores/cartStore";
import { useLibrary } from "@/stores/libraryStore";
import { books } from "@/data";
import { cn } from "@/lib/utils";

const tabs = [
  { key: "overview", label: "Overview", icon: LayoutDashboard },
  { key: "downloads", label: "My Books", icon: Download },
  { key: "cart", label: "Cart", icon: ShoppingCart },
];

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const { items } = useCart();
  const { purchased } = useLibrary();
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <Container>
          <div className="grid md:grid-cols-[240px_1fr] gap-8">
            {/* Sidebar */}
            <aside className="space-y-2">
              <div className="p-4 bg-card border rounded-xl mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <span className="text-primary font-bold text-lg">{user?.firstName?.[0] || "U"}</span>
                </div>
                <p className="font-semibold">{user?.firstName || "User"} {user?.lastName}</p>
                <p className="text-xs text-muted-foreground">{user?.email}</p>
              </div>
              {tabs.map((t) => (
                <button key={t.key} onClick={() => setActiveTab(t.key)}
                  className={cn("w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors text-left",
                    activeTab === t.key ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                  )}>
                  <t.icon className="size-4" /> {t.label}
                  {t.key === "cart" && items.length > 0 && (
                    <span className="ml-auto w-5 h-5 rounded-full bg-secondary text-secondary-foreground text-[10px] font-bold flex items-center justify-center">{items.length}</span>
                  )}
                </button>
              ))}
              <button onClick={logout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-destructive hover:bg-destructive/10 text-left">
                <LogOut className="size-4" /> Sign Out
              </button>
            </aside>

            {/* Content */}
            <div>
              {activeTab === "overview" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h1 className="text-2xl font-black mb-6">Welcome back, {user?.firstName || "Reader"}!</h1>
                  <div className="grid sm:grid-cols-3 gap-4 mb-8">
                    <div className="p-6 bg-card border rounded-xl">
                      <p className="text-sm text-muted-foreground mb-1">Purchased Books</p>
                      <p className="text-3xl font-black text-primary">{purchased.length}</p>
                    </div>
                    <div className="p-6 bg-card border rounded-xl">
                      <p className="text-sm text-muted-foreground mb-1">Cart Items</p>
                      <p className="text-3xl font-black text-primary">{items.length}</p>
                    </div>
                    <div className="p-6 bg-card border rounded-xl">
                      <p className="text-sm text-muted-foreground mb-1">Total Spent</p>
                      <p className="text-3xl font-black text-primary">Demo</p>
                    </div>
                  </div>
                  {purchased.length === 0 ? (
                    <div className="text-center py-12 bg-card border rounded-xl">
                      <BookOpen className="size-12 text-muted-foreground/30 mx-auto mb-3" />
                      <p className="text-lg font-semibold mb-1">No books yet</p>
                      <p className="text-muted-foreground mb-4">Browse the library and make your first purchase</p>
                      <Link to="/library"><Button>Browse Library</Button></Link>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <h2 className="font-bold">Recent Purchases</h2>
                      {purchased.slice(-3).reverse().map((book) => (
                        <Link key={book.bookId} to={`/book/${book.slug}`}>
                          <div className="flex items-center gap-3 p-3 bg-card border rounded-lg hover:border-primary/40 transition-colors">
                            <div className={cn("w-10 h-14 rounded bg-gradient-to-br shrink-0", book.coverGradient || "from-blue-500 to-blue-700")} />
                            <div className="flex-1 min-w-0">
                              <p className="font-semibold text-sm line-clamp-1">{book.title}</p>
                              <p className="text-xs text-muted-foreground">{book.author}</p>
                            </div>
                            <ExternalLink className="size-4 text-muted-foreground shrink-0" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}

              {activeTab === "downloads" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h1 className="text-2xl font-black mb-6">My Books</h1>
                  {purchased.length === 0 ? (
                    <div className="text-center py-16 bg-card border rounded-xl">
                      <Download className="size-12 text-muted-foreground/30 mx-auto mb-3" />
                      <p className="text-lg font-semibold mb-1">No downloads yet</p>
                      <p className="text-muted-foreground mb-4">Purchase books to start downloading</p>
                      <Link to="/library"><Button>Browse Library</Button></Link>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {purchased.map((book) => (
                        <div key={book.bookId} className="flex gap-4 p-4 bg-card border rounded-xl">
                          <div className={cn("w-16 h-22 rounded-lg bg-gradient-to-br shrink-0", book.coverGradient || "from-blue-500 to-blue-700")} />
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold">{book.title}</h3>
                            <p className="text-sm text-muted-foreground mb-3">by {book.author}</p>
                            <div className="flex flex-wrap gap-2">
                              {book.formats.map((fmt) => {
                                const bookData = books.find((b) => b._id === book.bookId);
                                const dl = bookData?.downloadLinks?.find((d) => d.format === fmt);
                                return (
                                  <a key={fmt} href={dl?.url || "#"} target="_blank" rel="noopener noreferrer"
                                    className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-xs font-semibold hover:bg-primary/20 transition-colors flex items-center gap-1">
                                    <Download className="size-3" /> {fmt.toUpperCase()}
                                  </a>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}

              {activeTab === "cart" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h1 className="text-2xl font-black mb-6">Cart</h1>
                  {items.length === 0 ? (
                    <div className="text-center py-16 bg-card border rounded-xl">
                      <ShoppingCart className="size-12 text-muted-foreground/30 mx-auto mb-3" />
                      <p className="text-lg font-semibold mb-1">Cart is empty</p>
                      <p className="text-muted-foreground mb-4">Add some books to get started</p>
                      <Link to="/library"><Button>Browse Library</Button></Link>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {items.map((item) => (
                        <div key={item.bookId} className="flex gap-4 p-4 bg-card border rounded-xl">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold line-clamp-1">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">by {item.author}</p>
                          </div>
                          <p className="font-bold text-primary">₦{item.price.toLocaleString()}</p>
                        </div>
                      ))}
                      <Link to="/checkout"><Button size="lg" className="w-full mt-4">Proceed to Checkout</Button></Link>
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}