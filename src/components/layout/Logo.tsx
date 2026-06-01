import Image from "next/image";
import { LOGO } from "@/lib/constants";
import { cn } from "@/lib/utils";

type LogoSize = "sm" | "md" | "lg" | "xl";

interface LogoProps {
  className?: string;
  size?: LogoSize;
  priority?: boolean;
}

const sizeStyles: Record<LogoSize, string> = {
  sm: "h-11 w-auto sm:h-12 md:h-[60px] lg:h-[65px]",
  md: "h-10 w-auto md:h-12",
  lg: "h-12 w-auto md:h-14",
  xl: "h-16 w-auto sm:h-20 md:h-28 lg:h-32",
};

export function Logo({ className, size = "md", priority = false }: LogoProps) {
  return (
    <Image
      src={LOGO.src}
      alt={LOGO.alt}
      width={LOGO.width}
      height={LOGO.height}
      priority={priority}
      className={cn("object-contain object-left", sizeStyles[size], className)}
    />
  );
}
