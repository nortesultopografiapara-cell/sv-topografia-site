"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionTitle({
  label,
  title,
  description,
  align = "center",
  light = false,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center mx-auto max-w-3xl" : "text-left max-w-2xl"
      )}
    >
      <span
        className={cn(
          "inline-block text-sm font-semibold uppercase tracking-widest mb-3",
          light ? "text-cyan" : "text-cyan-dark"
        )}
      >
        {label}
      </span>
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold leading-tight",
          light ? "text-white" : "text-navy-dark"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            light ? "text-white/70" : "text-gray-600"
          )}
        >
          {description}
        </p>
      )}
      <div
        className={cn(
          "mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-cyan to-petrol",
          align === "center" && "mx-auto"
        )}
      />
    </motion.div>
  );
}
