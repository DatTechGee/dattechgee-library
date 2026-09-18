import axios from "axios";

const API_BASE = "https://api.DatTechGeelibrary.com/api/v1";

const api = axios.create({
  baseURL: API_BASE,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem("auth_token");
      localStorage.removeItem("user");
      window.location.href = "/auth/login?session=expired";
    }
    return Promise.reject(err);
  }
);

// â”€â”€ Auth â”€â”€
export const authAPI = {
  login: (data: { email: string; password: string }) =>
    api.post("/auth/login", data),
  verifyOtp: (data: { email: string; otp: string }) =>
    api.post("/auth/verify-otp", data),
  resendOtp: (data: { email: string }) =>
    api.post("/auth/resend-otp", data),
  forgotPassword: (data: { email: string }) =>
    api.post("/auth/forgot-password", data),
  resetPassword: (data: { email: string; otp: string; password: string }) =>
    api.post("/auth/reset-password", data),
  changePassword: (data: { currentPassword: string; newPassword: string }) =>
    api.post("/auth/change-password", data),
  getProfile: () => api.get("/auth/profile"),
  updateProfile: (data: Record<string, string>) =>
    api.put("/auth/profile", data),
  logout: () => api.post("/auth/logout"),
};

// â”€â”€ Books â”€â”€
export const booksAPI = {
  list: (params?: Record<string, string>) =>
    api.get("/public/books", { params }),
  get: (id: string) => api.get(`/public/books/${id}`),
  featured: () => api.get("/public/books/featured"),
  latest: () => api.get("/public/books/latest"),
  popular: () => api.get("/public/books/popular"),
  related: (id: string) => api.get(`/public/books/${id}/related`),
  trackDownload: (id: string) => api.post(`/public/books/${id}/track-download`),
  create: (data: FormData) =>
    api.post("/books", data, { headers: { "Content-Type": "multipart/form-data" } }),
  update: (id: string, data: FormData) =>
    api.put(`/books/${id}`, data, { headers: { "Content-Type": "multipart/form-data" } }),
  delete: (id: string) => api.delete(`/books/${id}`),
};

// â”€â”€ Categories â”€â”€
export const categoriesAPI = {
  list: () => api.get("/public/categories"),
  get: (id: string) => api.get(`/public/categories/${id}`),
  all: () => api.get("/categories/all"),
  create: (data: { name: string; description?: string }) =>
    api.post("/categories", data),
  update: (id: string, data: { name: string; description?: string }) =>
    api.put(`/categories/${id}`, data),
  delete: (id: string) => api.delete(`/categories/${id}`),
};

// â”€â”€ Orders â”€â”€
export const ordersAPI = {
  create: (data: { items: { bookId: string; quantity: number }[] }) =>
    api.post("/public/orders", data),
  get: (id: string) => api.get(`/public/orders/${id}`),
  list: () => api.get("/public/orders"),
  stats: () => api.get("/orders/stats"),
};

// â”€â”€ Payments â”€â”€
export const paymentsAPI = {
  paystackInit: (data: { orderId: string; email: string; amount: number }) =>
    api.post("/public/payments/paystack/initialize", data),
  paystackVerify: (data: { reference: string }) =>
    api.post("/public/payments/paystack/verify", data),
  flutterwaveInit: (data: { orderId: string; email: string; amount: number }) =>
    api.post("/public/payments/flutterwave/initialize", data),
  flutterwaveVerify: (data: { tx_ref: string }) =>
    api.post("/public/payments/flutterwave/verify", data),
  paypalCreate: (data: { orderId: string }) =>
    api.post("/public/payments/paypal/create", data),
  paypalCapture: (data: { orderId: string; paypalOrderId: string }) =>
    api.post("/public/payments/paypal/capture", data),
};

// â”€â”€ Book Requests â”€â”€
export const bookRequestsAPI = {
  create: (data: { title: string; author?: string; additionalNotes?: string }) =>
    api.post("/public/book-requests", data),
  get: (id: string) => api.get(`/public/book-requests/${id}`),
};

// â”€â”€ Admin â”€â”€
export const adminAPI = {
  dashboard: () => api.get("/admin/dashboard"),
  dashboardStats: () => api.get("/dashboard/stats"),
  overview: () => api.get("/dashboard/overview"),
  popularBooks: () => api.get("/dashboard/popular-books"),
  recentOrders: () => api.get("/dashboard/recent-orders"),
};

export default api;
