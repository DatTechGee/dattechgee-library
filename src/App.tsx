import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import CartModal from "./components/layout/CartModal";
import { ThemeProvider } from "./providers/ThemeProvider";
import { LenisProvider } from "./providers/LenisProvider";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  useEffect(() => {
    const preloader = document.getElementById("preloader");
    if (preloader) {
      preloader.style.opacity = "0";
      setTimeout(() => preloader.remove(), 400);
    }
  }, []);

  return (
    <ThemeProvider>
      <LenisProvider>
        <BrowserRouter>
          <AppRoutes />
          <CartModal />
        </BrowserRouter>
        <Toaster />
      </LenisProvider>
    </ThemeProvider>
  );
}