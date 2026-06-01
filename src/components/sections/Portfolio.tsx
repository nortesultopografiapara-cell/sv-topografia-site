"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PORTFOLIO_CATEGORIES, PORTFOLIO_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>("todos");

  const usedCategories = new Set(PORTFOLIO_ITEMS.map((item) => item.category));

  const visibleCategories = PORTFOLIO_CATEGORIES.filter(
    (cat) =>
      cat.id === "todos" ||
      usedCategories.has(cat.id as (typeof PORTFOLIO_ITEMS)[number]["category"])
  );

  const filteredItems =
    activeCategory === "todos"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-navy-dark">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionTitle
          label="Portfólio"
          title="Obras e projetos executados"
          description="Conheça alguns dos nossos trabalhos em loteamentos, rodovias, obras e aerolevantamentos."
          light
        />

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {visibleCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === cat.id
                  ? "bg-brand-green text-navy-dark shadow-lg shadow-brand-green/25"
                  : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-brand-green mb-1">
                    {item.categoryLabel}
                  </span>
                  <h3 className="text-white font-bold text-lg leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-snug mt-1.5 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
