import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import TrendingSection from "@/components/sections/TrendingSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import JoinSection from "@/components/sections/JoinSection";
import BookRequestSection from "@/components/sections/BookRequestSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";

// Homepage section order matches live DatTechGeelibrary.com exactly:
// 1. Featured Books (Handpicked for You)
// 2. Explore by Category
// 3. Popular Right Now (Bestsellers / New Arrivals tabs)
// 4. How It Works (3 steps)
// 5. Stats + Join CTA
// 6. Book Requests
// 7. FAQ
// 8. Contact
// 9. Footer
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <CategoriesSection />
        <TrendingSection />
        <HowItWorksSection />
        <JoinSection />
        <BookRequestSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}