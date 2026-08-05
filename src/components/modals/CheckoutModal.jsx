// src/components/modals/CheckoutModal.jsx
import { useTheme } from "../../context/ThemeContext";
import useModal from "../../hooks/useModal";
import Button from "../ui/Button";

export default function CheckoutModal() {
  const { theme } = useTheme();
  const { isOpen } = useModal();

  // In a real app, this would be controlled by global state or URL params
  // For now, we expose a global handler for demo purposes
  if (typeof window !== "undefined") {
    window.openCheckout = () => {
      // This is a hack for the demo; in production use a proper state manager
      document.getElementById("checkout-overlay")?.classList.add("show");
      document.body.style.overflow = "hidden";
    };

    window.closeCheckout = () => {
      document.getElementById("checkout-overlay")?.classList.remove("show");
      document.body.style.overflow = "";
    };
  }

  if (!isOpen) return null;

  return (
    <div
      id="checkout-overlay"
      className="fixed inset-0 z-[100] flex items-center justify-center p-5 bg-gray-900/60 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target.id === "checkout-overlay") window.closeCheckout?.();
      }}
    >
      <div
        className={[
          "relative w-full max-w-md rounded-3xl p-9 shadow-2xl",
          theme.background.card,
        ].join(" ")}
      >
        {/* Close button */}
        <button
          onClick={window.closeCheckout}
          className={[
            "absolute top-5 right-5 w-8 h-8 rounded-full border flex items-center justify-center text-sm",
            theme.background.card,
            theme.border.muted,
            theme.text.secondary,
            "hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",
          ].join(" ")}
          aria-label="Close checkout"
        >
          ✕
        </button>

        <h3
          className={[
            "font-serif text-xl font-semibold mb-1.5",
            theme.text.primary,
          ].join(" ")}
        >
          Upgrade to Revu Pro
        </h3>
        <p className={["text-sm mb-6", theme.text.secondary].join(" ")}>
          Full access to stroke tracing, deck cloning, and analytics.
        </p>

        {/* Summary */}
        <div
          className={[
            "rounded-xl p-4 flex justify-between items-center mb-6",
            theme.background.secondary,
          ].join(" ")}
        >
          <span className={["text-sm", theme.text.secondary].join(" ")}>
            Pro plan — <span id="modal-period">monthly</span>
          </span>
          <b
            className={["font-serif text-xl", theme.text.primary].join(" ")}
            id="modal-price"
          >
            $6.00
          </b>
        </div>

        {/* Payment methods */}
        <div className="flex gap-2 mb-5">
          {["💳 Card", "🅿 PayPal", "🍎 Apple Pay", "G Pay"].map((method) => (
            <span
              key={method}
              className={[
                "px-2.5 py-1.5 rounded-lg border text-xs font-mono",
                theme.background.card,
                theme.border.muted,
                theme.text.muted,
              ].join(" ")}
            >
              {method}
            </span>
          ))}
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert(
              "This is a demo checkout UI — wire this to your real Stripe integration.",
            );
          }}
        >
          <div className="mb-4">
            <label
              className={[
                "block text-xs font-semibold mb-1.5",
                theme.text.muted,
              ].join(" ")}
            >
              Card number
            </label>
            <input
              type="text"
              placeholder="4242 4242 4242 4242"
              inputMode="numeric"
              className={[
                "w-full px-3.5 py-3 rounded-xl border text-sm",
                theme.background.secondary,
                theme.border.muted,
                theme.text.primary,
                "focus:outline-none focus:ring-2 focus:ring-offset-1",
                theme.ring.focus,
              ].join(" ")}
            />
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div>
              <label
                className={[
                  "block text-xs font-semibold mb-1.5",
                  theme.text.muted,
                ].join(" ")}
              >
                Expiry
              </label>
              <input
                type="text"
                placeholder="MM / YY"
                className={[
                  "w-full px-3.5 py-3 rounded-xl border text-sm",
                  theme.background.secondary,
                  theme.border.muted,
                  theme.text.primary,
                  "focus:outline-none focus:ring-2 focus:ring-offset-1",
                  theme.ring.focus,
                ].join(" ")}
              />
            </div>
            <div>
              <label
                className={[
                  "block text-xs font-semibold mb-1.5",
                  theme.text.muted,
                ].join(" ")}
              >
                CVC
              </label>
              <input
                type="text"
                placeholder="123"
                inputMode="numeric"
                className={[
                  "w-full px-3.5 py-3 rounded-xl border text-sm",
                  theme.background.secondary,
                  theme.border.muted,
                  theme.text.primary,
                  "focus:outline-none focus:ring-2 focus:ring-offset-1",
                  theme.ring.focus,
                ].join(" ")}
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              className={[
                "block text-xs font-semibold mb-1.5",
                theme.text.muted,
              ].join(" ")}
            >
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className={[
                "w-full px-3.5 py-3 rounded-xl border text-sm",
                theme.background.secondary,
                theme.border.muted,
                theme.text.primary,
                "focus:outline-none focus:ring-2 focus:ring-offset-1",
                theme.ring.focus,
              ].join(" ")}
            />
          </div>

          <Button variant="accent" className="w-full">
            Pay & upgrade
          </Button>
        </form>

        <div
          className={[
            "flex items-center justify-center gap-1.5 mt-4 text-xs",
            theme.text.muted,
          ].join(" ")}
        >
          <span>🔒</span>
          Payments handled securely by Stripe
        </div>
      </div>
    </div>
  );
}
