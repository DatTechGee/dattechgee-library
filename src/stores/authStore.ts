import { create } from "zustand";
import { toast } from "sonner";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: "user" | "admin";
  isVerified: boolean;
}

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

function nameFromEmail(email: string) {
  const part = email.split("@")[0];
  return part.charAt(0).toUpperCase() + part.slice(1);
}

export const useAuth = create<AuthState>((set) => ({
  user: JSON.parse(localStorage.getItem("user") || "null"),
  token: localStorage.getItem("auth_token"),
  loading: false,

  login: async (email, _password) => {
    set({ loading: true });
    await new Promise((r) => setTimeout(r, 600));
    const firstName = nameFromEmail(email);
    const user: User = {
      id: `u-${Date.now()}`,
      firstName,
      lastName: "",
      email,
      role: "admin",
      isVerified: true,
    };
    const token = `tok_${btoa(email)}_${Date.now()}`;
    localStorage.setItem("auth_token", token);
    localStorage.setItem("user", JSON.stringify(user));
    set({ user, token, loading: false });
    toast.success(`Welcome, ${firstName}!`);
  },

  logout: () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user");
    set({ user: null, token: null });
    toast.success("Logged out");
  },
}));
