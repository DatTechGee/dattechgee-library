import { Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import LibraryPage from "@/pages/LibraryPage";
import BookDetailPage from "@/pages/BookDetailPage";
import AboutPage from "@/pages/AboutPage";
import CheckoutPage from "@/pages/CheckoutPage";
import NotFoundPage from "@/pages/NotFoundPage";
import LoginPage from "@/pages/auth/LoginPage";
import OtpPage from "@/pages/auth/OtpPage";
import ForgotPasswordPage from "@/pages/auth/ForgotPasswordPage";
import ResetPasswordPage from "@/pages/auth/ResetPasswordPage";
import DashboardPage from "@/pages/dashboard/DashboardPage";
import AdminPage from "@/pages/admin/AdminPage";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<HomePage />} />
      <Route path="/library" element={<LibraryPage />} />
      <Route path="/book/:slug" element={<BookDetailPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />

      {/* Auth */}
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/otp" element={<OtpPage />} />
      <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/auth/reset-password" element={<ResetPasswordPage />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<DashboardPage />} />

      {/* Admin */}
      <Route path="/admin" element={<AdminPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}