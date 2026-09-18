import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LayoutDashboard, BookOpen, FolderTree, ShoppingCart, Users, Settings, LogOut, Plus, Edit, Trash2, Eye } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { useAuth } from "@/stores/authStore";
import { books, categories } from "@/data";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { icon: LayoutDashboard, label: "Overview", tab: "overview" },
  { icon: BookOpen, label: "Books", tab: "books" },
  { icon: FolderTree, label: "Categories", tab: "categories" },
  { icon: ShoppingCart, label: "Orders", tab: "orders" },
  { icon: Users, label: "Users", tab: "users" },
  { icon: Settings, label: "Settings", tab: "settings" },
];

const mockOrders = [
  { id: "ORD-001", user: "John Doe", books: 3, total: 8500, status: "completed", date: "2024-01-15" },
  { id: "ORD-002", user: "Jane Smith", books: 1, total: 2500, status: "pending", date: "2024-01-14" },
  { id: "ORD-003", user: "Bob Wilson", books: 2, total: 6000, status: "completed", date: "2024-01-13" },
];

const adminStats = [
  { label: "Total Books", value: books.length.toString(), icon: BookOpen, color: "from-blue-500 to-blue-600" },
  { label: "Categories", value: categories.length.toString(), icon: FolderTree, color: "from-green-500 to-green-600" },
  { label: "Orders", value: "47", icon: ShoppingCart, color: "from-purple-500 to-purple-600" },
  { label: "Users", value: "1,234", icon: Users, color: "from-orange-500 to-orange-600" },
];

export default function AdminPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    if (!user || user.role !== "admin") navigate("/auth/login");
  }, [user, navigate]);

  if (!user || user.role !== "admin") return null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <Container>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="lg:w-64 shrink-0">
              <div className="bg-card border border-border rounded-2xl p-6 sticky top-24">
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white font-bold text-lg">
                    A
                  </div>
                  <div>
                    <p className="font-semibold">Admin</p>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                  </div>
                </div>
                <nav className="space-y-1">
                  {sidebarLinks.map((link) => (
                    <button
                      key={link.tab}
                      onClick={() => setActiveTab(link.tab)}
                      className={cn(
                        "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                        activeTab === link.tab
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      <link.icon className="size-4" />
                      {link.label}
                    </button>
                  ))}
                  <button
                    onClick={() => { logout(); navigate("/"); }}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-destructive hover:bg-destructive/10 transition-all"
                  >
                    <LogOut className="size-4" />
                    Sign Out
                  </button>
                </nav>
              </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 min-w-0">
              {activeTab === "overview" && (
                <div className="space-y-8">
                  <h1 className="text-3xl font-black">Admin Dashboard</h1>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {adminStats.map((stat) => (
                      <motion.div
                        key={stat.label}
                        whileHover={{ y: -2 }}
                        className="bg-card border border-border rounded-2xl p-6 shadow-lg"
                      >
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3`}>
                          <stat.icon className="w-5 h-5 text-white" />
                        </div>
                        <p className="text-2xl font-black">{stat.value}</p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                      </motion.div>
                    ))}
                  </div>
                  <div className="bg-card border border-border rounded-2xl p-6">
                    <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-3 font-semibold text-muted-foreground">Order</th>
                            <th className="text-left py-3 font-semibold text-muted-foreground">User</th>
                            <th className="text-left py-3 font-semibold text-muted-foreground">Books</th>
                            <th className="text-left py-3 font-semibold text-muted-foreground">Total</th>
                            <th className="text-left py-3 font-semibold text-muted-foreground">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                          {mockOrders.map((order) => (
                            <tr key={order.id} className="hover:bg-muted/50">
                              <td className="py-3 font-medium">{order.id}</td>
                              <td className="py-3">{order.user}</td>
                              <td className="py-3">{order.books}</td>
                              <td className="py-3 font-semibold">â‚¦{order.total.toLocaleString()}</td>
                              <td className="py-3">
                                <span className={cn(
                                  "px-2 py-0.5 rounded-full text-xs font-medium",
                                  order.status === "completed" ? "bg-green-500/10 text-green-500" : "bg-yellow-500/10 text-yellow-500"
                                )}>
                                  {order.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "books" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-black">Books</h1>
                    <button className="px-4 py-2 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2">
                      <Plus className="size-4" /> Add Book
                    </button>
                  </div>
                  <div className="bg-card border border-border rounded-2xl overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border bg-muted/50">
                            <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Title</th>
                            <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Author</th>
                            <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Category</th>
                            <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Price</th>
                            <th className="text-right py-3 px-4 font-semibold text-muted-foreground">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                          {books.slice(0, 8).map((book) => (
                            <tr key={book._id} className="hover:bg-muted/50">
                              <td className="py-3 px-4 font-medium">{book.title}</td>
                              <td className="py-3 px-4 text-muted-foreground">{book.author}</td>
                              <td className="py-3 px-4">
                                <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                                  {book.category}
                                </span>
                              </td>
                              <td className="py-3 px-4 font-semibold">â‚¦{book.price.toLocaleString()}</td>
                              <td className="py-3 px-4 text-right">
                                <div className="flex items-center justify-end gap-1">
                                  <button className="p-1.5 hover:bg-muted rounded-lg transition-colors">
                                    <Eye className="size-4" />
                                  </button>
                                  <button className="p-1.5 hover:bg-muted rounded-lg transition-colors">
                                    <Edit className="size-4" />
                                  </button>
                                  <button className="p-1.5 hover:bg-destructive/10 hover:text-destructive rounded-lg transition-colors">
                                    <Trash2 className="size-4" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "categories" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-black">Categories</h1>
                    <button className="px-4 py-2 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2">
                      <Plus className="size-4" /> Add Category
                    </button>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categories.filter(c => c.slug !== "all").map((cat) => (
                      <div key={cat.slug} className="bg-card border border-border rounded-2xl p-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold">{cat.name}</h3>
                          <div className="flex gap-1">
                            <button className="p-1.5 hover:bg-muted rounded-lg"><Edit className="size-4" /></button>
                            <button className="p-1.5 hover:bg-destructive/10 hover:text-destructive rounded-lg"><Trash2 className="size-4" /></button>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">0 books</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "orders" && (
                <div className="space-y-6">
                  <h1 className="text-3xl font-black">Orders</h1>
                  <div className="bg-card border border-border rounded-2xl overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border bg-muted/50">
                            <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Order</th>
                            <th className="text-left py-3 px-4 font-semibold text-muted-foreground">User</th>
                            <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Books</th>
                            <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Total</th>
                            <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Status</th>
                            <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Date</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                          {mockOrders.map((order) => (
                            <tr key={order.id} className="hover:bg-muted/50">
                              <td className="py-3 px-4 font-medium">{order.id}</td>
                              <td className="py-3 px-4">{order.user}</td>
                              <td className="py-3 px-4">{order.books}</td>
                              <td className="py-3 px-4 font-semibold">â‚¦{order.total.toLocaleString()}</td>
                              <td className="py-3 px-4">
                                <span className={cn(
                                  "px-2 py-0.5 rounded-full text-xs font-medium",
                                  order.status === "completed" ? "bg-green-500/10 text-green-500" : "bg-yellow-500/10 text-yellow-500"
                                )}>
                                  {order.status}
                                </span>
                              </td>
                              <td className="py-3 px-4 text-muted-foreground">{order.date}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "users" && (
                <div className="space-y-6">
                  <h1 className="text-3xl font-black">Users</h1>
                  <div className="bg-card border border-border rounded-2xl p-12 text-center">
                    <Users className="size-16 text-muted-foreground/30 mx-auto mb-4" />
                    <p className="text-xl font-semibold mb-2">User management</p>
                    <p className="text-muted-foreground">Connect to the backend API to manage users</p>
                  </div>
                </div>
              )}

              {activeTab === "settings" && (
                <div className="space-y-6">
                  <h1 className="text-3xl font-black">Admin Settings</h1>
                  <div className="bg-card border border-border rounded-2xl p-6">
                    <h3 className="font-semibold mb-4">Site Settings</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Site Name</label>
                        <input defaultValue="DatTechGee Library" className="w-full mt-1 px-4 py-2.5 rounded-lg border bg-background text-sm" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Site Description</label>
                        <textarea defaultValue="Global Digital Books & Education Platform" className="w-full mt-1 px-4 py-2.5 rounded-lg border bg-background text-sm min-h-[80px]" />
                      </div>
                      <button className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                        Save Settings
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}