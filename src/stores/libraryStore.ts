import { create } from "zustand";

export interface PurchasedBook {
  bookId: string;
  title: string;
  author: string;
  slug: string;
  coverGradient?: string;
  formats: string[];
  purchasedAt: string;
  downloadUrl?: string;
}

interface LibraryState {
  purchased: PurchasedBook[];
  addPurchase: (book: PurchasedBook) => void;
  isPurchased: (bookId: string) => boolean;
  getBook: (bookId: string) => PurchasedBook | undefined;
}

export const useLibrary = create<LibraryState>((set, get) => ({
  purchased: JSON.parse(localStorage.getItem("purchased_books") || "[]"),

  addPurchase: (book) => {
    const current = get().purchased;
    if (current.some((b) => b.bookId === book.bookId)) return;
    const updated = [...current, book];
    localStorage.setItem("purchased_books", JSON.stringify(updated));
    set({ purchased: updated });
  },

  isPurchased: (bookId) => get().purchased.some((b) => b.bookId === bookId),

  getBook: (bookId) => get().purchased.find((b) => b.bookId === bookId),
}));
