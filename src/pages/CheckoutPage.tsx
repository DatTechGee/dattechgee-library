import { useState } from "react";
import { Link } from "react-router-dom";
import { CreditCard, Loader2, CheckCircle, ArrowLeft, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { useCart } from "@/stores/cartStore";
import { useLibrary } from "@/stores/libraryStore";

type Stage = "review" | "processing" | "success";

export default function CheckoutPage() {
  const { items, getTotalPrice, clearCart } = useCart();
  const { addPurchase } = useLibrary();
  const [stage, setStage] = useState<Stage>("review");
  const [processingText, setProcessingText] = useState("Initializing...");

  const handlePayment = async () => {
    setStage("processing");
    const steps = [
      "Initializing Paystack...",
      "Processing payment...",
      "Verifying transaction...",
      "Unlocking books...",
    ];
    for (let i = 0; i < steps.length; i++) {
      setProcessingText(steps[i]);
      await new Promise((r) => setTimeout(r, 700));
    }
    items.forEach((item) => {
      addPurchase({
        bookId: item.bookId,
        title: item.title,
        author: item.author,
        slug: item.slug || item.bookId,
        coverGradient: item.coverGradient || "from-blue-500 to-blue-700",
        formats: ["epub", "txt"],
        purchasedAt: new Date().toISOString(),
      });
    });
    clearCart();
    setStage("success");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <Container>
          <Link to="/library" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="size-4" /> Continue Shopping
          </Link>

          <AnimatePresence mode="wait">
            {stage === "review" && (
              <motion.div key="review" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                <h1 className="text-3xl font-black mb-8">Checkout</h1>
                {items.length === 0 ? (
                  <div className="text-center py-16">
                    <ShoppingCart className="size-16 text-muted-foreground/30 mx-auto mb-4" />
                    <h2 className="text-xl font-bold mb-2">Cart is empty</h2>
                    <p className="text-muted-foreground mb-6">Add some books to get started</p>
                    <Link to="/library"><Button>Browse Library</Button></Link>
                  </div>
                ) : (
                  <div className="grid lg:grid-cols-[1fr_380px] gap-8">
                    <div className="space-y-4">
                      {items.map((item) => (
                        <div key={item.bookId} className="flex gap-4 p-4 bg-card border rounded-xl">
                          <div className="w-12 h-16 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shrink-0">
                            <span className="text-white font-bold text-xs text-center px-1 leading-tight">
                              {item.title.split(" ").slice(0, 2).join(" ")}
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold line-clamp-1">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">by {item.author}</p>
                          </div>
                          <p className="font-bold text-primary shrink-0">₦{item.price.toLocaleString()}</p>
                        </div>
                      ))}
                    </div>

                    <div className="bg-card border rounded-2xl p-6 h-fit sticky top-28">
                      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                      <div className="space-y-2 mb-4 text-sm">
                        <div className="flex justify-between"><span className="text-muted-foreground">Books ({items.length})</span><span>₦{getTotalPrice().toLocaleString()}</span></div>
                        <div className="flex justify-between"><span className="text-muted-foreground">Platform fee</span><span className="text-green-500">Free</span></div>
                        <div className="border-t pt-2 flex justify-between font-bold text-lg">
                          <span>Total</span>
                          <span className="text-primary">₦{getTotalPrice().toLocaleString()}</span>
                        </div>
                      </div>

                      <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-3 mb-4 text-xs text-muted-foreground">
                        This is a demo checkout. No real payment will be processed.
                      </div>

                      <Button onClick={handlePayment} className="w-full gap-2" size="lg">
                        <CreditCard className="size-5" /> Pay ₦{getTotalPrice().toLocaleString()}
                      </Button>

                      <p className="text-xs text-muted-foreground text-center mt-3">
                        Powered by Paystack (Demo Mode)
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {stage === "processing" && (
              <motion.div key="processing" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-center py-20">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Loader2 className="size-10 text-primary animate-spin" />
                </div>
                <h2 className="text-2xl font-bold mb-2">{processingText}</h2>
                <p className="text-muted-foreground">Please don&apos;t close this page...</p>
              </motion.div>
            )}

            {stage === "success" && (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }}>
                  <CheckCircle className="size-20 text-green-500 mx-auto mb-6" />
                </motion.div>
                <h2 className="text-3xl font-black mb-2">Payment Successful!</h2>
                <p className="text-muted-foreground mb-2">Your books have been unlocked</p>
                <p className="text-sm text-muted-foreground mb-8">Check your email for download links (Demo mode)</p>
                <div className="flex gap-4 justify-center">
                  <Link to="/dashboard"><Button size="lg">Go to My Library</Button></Link>
                  <Link to="/library"><Button size="lg" variant="outline">Browse More Books</Button></Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </main>
      <Footer />
    </div>
  );
}