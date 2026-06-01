"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ScanLine,
  Plane,
  Satellite,
  Crosshair,
  Monitor,
  Truck,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TECHNOLOGY } from "@/lib/constants";
import type { EquipmentIcon } from "@/types";

const iconMap: Record<EquipmentIcon, LucideIcon> = {
  ScanLine,
  Plane,
  Satellite,
  Crosshair,
  Monitor,
  Truck,
};

export function Technology() {
  return (
    <section
      id="tecnologia"
      className="relative py-20 md:py-28 overflow-hidden bg-navy-dark"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,212,255,0.06)_0%,_transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(132,204,22,0.06)_0%,_transparent_50%)] pointer-events-none" />

      <div className="container relative mx-auto px-4 md:px-6 lg:px-8">
        <SectionTitle
          label={TECHNOLOGY.label}
          title={TECHNOLOGY.title}
          description={TECHNOLOGY.description}
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TECHNOLOGY.items.map((item, i) => {
            const Icon = iconMap[item.icon as EquipmentIcon];

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 hover:border-cyan/30 transition-colors duration-500"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/40 to-navy-dark/10 opacity-70 group-hover:opacity-95 transition-opacity duration-500" />

                <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-navy-dark/80 border border-cyan/30 text-cyan backdrop-blur-sm group-hover:bg-cyan group-hover:text-navy-dark group-hover:border-cyan transition-all duration-500">
                  <Icon size={20} />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white font-bold text-lg leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mt-2 line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 md:mt-16 pt-10 border-t border-white/10"
        >
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {TECHNOLOGY.badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2 text-sm font-medium text-white/80"
              >
                <CheckCircle2
                  size={16}
                  className="shrink-0 text-brand-green"
                />
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
