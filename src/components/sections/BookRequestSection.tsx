import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import Container from "@/components/layout/Container";
import { Reveal } from "@/components/shared/animations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function BookRequestSection() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("Book request submitted successfully!");
    setTitle("");
    setAuthor("");
    setNotes("");
    setLoading(false);
  };

  return (
    <section className="py-24 bg-muted/30">
      <Container>
        <Reveal>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Book Requests
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Can&apos;t find what you&apos;re looking for?
            </h2>
            <p className="text-muted-foreground mb-8">
              Submit a book request and we&apos;ll do our best to add it to our collection.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Book Title *</label>
              <Input
                placeholder="Enter the book title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Author Name (Optional)</label>
              <Input
                placeholder="Author name"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Additional Notes (Optional)</label>
              <textarea
                placeholder="Any additional information that might help us find this book..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full min-h-[100px] px-3 py-2 rounded-lg border bg-background text-sm resize-none focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <Button type="submit" className="w-full gap-2" disabled={loading}>
              {loading ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
              Submit Request
            </Button>
          </form>
        </Reveal>
      </Container>
    </section>
  );
}
