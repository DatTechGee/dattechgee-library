import { useCart } from "@/stores/cartStore";
import { Button } from "@/components/ui/button";
import { X, Trash2, ShoppingBag } from "lucide-react";

export default function CartModal() {
  const { items, isOpen, closeCart, removeItem, getTotalPrice, getTotalItems } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50" onClick={closeCart} />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background z-50 shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-2">
            <ShoppingBag className="size-5" />
            <h2 className="text-lg font-semibold">Cart ({getTotalItems()})</h2>
          </div>
          <button onClick={closeCart} className="p-1 hover:bg-muted rounded-lg">
            <X className="size-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <ShoppingBag className="size-12 mx-auto mb-4 opacity-40" />
              <p className="font-medium">Your cart is empty</p>
              <p className="text-sm mt-1">Browse books and add them to your cart</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.bookId} className="flex gap-4 p-4 rounded-xl border">
                  <div className="w-12 h-16 rounded bg-gradient-to-br from-primary to-[#2d6fbf] flex items-center justify-center shrink-0">
                    <span className="text-primary-foreground font-bold text-[10px] uppercase text-center leading-tight">
                      {item.title.split(" ").slice(0, 2).join(" ")}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm truncate">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.author}</p>
                    <p className="text-sm font-semibold text-primary mt-1">
                      ₦{item.price.toLocaleString()}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(item.bookId)}
                    className="p-1 hover:bg-destructive/10 hover:text-destructive rounded-lg self-start"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t p-6 space-y-4">
            <div className="flex items-center justify-between text-lg font-semibold">
              <span>Total</span>
              <span>₦{getTotalPrice().toLocaleString()}</span>
            </div>
            <Button className="w-full" size="lg" onClick={() => { closeCart(); window.location.href = "/checkout"; }}>
              Proceed to Checkout
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
