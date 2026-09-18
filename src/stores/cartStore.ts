import { create } from "zustand";
import { toast } from "sonner";

export interface CartItem {
  bookId: string;
  title: string;
  author: string;
  price: number;
  slug?: string;
  coverGradient?: string;
  downloadLinks?: { format: string; url: string }[];
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (bookId: string) => void;
  updateQuantity: (bookId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export const useCart = create<CartState>((set, get) => ({
  items: JSON.parse(localStorage.getItem("cart") || "[]"),
  isOpen: false,

  addItem: (item) => {
    const { items } = get();
    const existing = items.find((i) => i.bookId === item.bookId);
    if (existing) {
      toast.info("Already in cart!");
      return;
    }
    const newItems = [...items, { ...item, quantity: 1 }];
    localStorage.setItem("cart", JSON.stringify(newItems));
    set({ items: newItems });
    toast.success("Added to cart!");
  },

  removeItem: (bookId) => {
    const newItems = get().items.filter((i) => i.bookId !== bookId);
    localStorage.setItem("cart", JSON.stringify(newItems));
    set({ items: newItems });
  },

  updateQuantity: (bookId, quantity) => {
    if (quantity < 1) return get().removeItem(bookId);
    const newItems = get().items.map((i) =>
      i.bookId === bookId ? { ...i, quantity } : i
    );
    localStorage.setItem("cart", JSON.stringify(newItems));
    set({ items: newItems });
  },

  clearCart: () => {
    localStorage.removeItem("cart");
    set({ items: [] });
  },

  toggleCart: () => set((s) => ({ isOpen: !s.isOpen })),
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),

  getTotalPrice: () =>
    get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),

  getTotalItems: () =>
    get().items.reduce((sum, i) => sum + i.quantity, 0),
}));
