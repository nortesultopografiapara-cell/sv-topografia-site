import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "whatsapp" | "brand";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  external?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-cyan text-navy-dark font-semibold hover:bg-cyan-light shadow-lg shadow-cyan/20",
  brand:
    "bg-brand-green text-navy-dark font-semibold hover:bg-brand-green-light shadow-lg shadow-brand-green/25",
  secondary:
    "bg-petrol text-white font-semibold hover:bg-petrol-light shadow-lg shadow-petrol/20",
  outline:
    "border-2 border-white/30 text-white font-semibold hover:bg-white/10 backdrop-blur-sm",
  whatsapp:
    "bg-[#25D366] text-white font-semibold hover:bg-[#20BD5A] shadow-lg shadow-[#25D366]/30",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-base rounded-xl",
  lg: "px-8 py-4 text-lg rounded-xl",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  external = false,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
