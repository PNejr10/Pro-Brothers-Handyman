import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({ variant = "primary", className = "", ...props }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition " +
    "focus:outline-none focus:ring-2 focus:ring-offset-2";

  const styles =
    variant === "primary"
      ? "bg-brand-navy text-brand-cream hover:opacity-90 shadow-soft focus:ring-brand-gold"
      : "border border-brand-navy/30 text-brand-navy bg-white/0 hover:bg-white/60 focus:ring-brand-gold";

  return <button className={`${base} ${styles} ${className}`} {...props} />;
}