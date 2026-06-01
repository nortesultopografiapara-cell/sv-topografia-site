"use client";

import { motion } from "framer-motion";
import {
  Pickaxe,
  Route,
  LayoutGrid,
  Mountain,
  FileCheck,
  Building2,
  Layers,
  Plane,
} from "lucide-react";
import { EXPERIENCE } from "@/lib/constants";
import type { LucideIcon } from "lucide-react";

const sectorIcons: LucideIcon[] = [
  Pickaxe,
  Route,
  LayoutGrid,
  Mountain,
  FileCheck,
  Building2,
  Layers,
  Plane,
];

export function Experience() {
  return (
    <section id="experiencia" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-14 md:mb-16"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-brand-green-dark mb-3">
            Nossa Trajetória
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-dark leading-tight">
            {EXPERIENCE.title}
          </h2>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            {EXPERIENCE.text}
          </p>
          <p className="mt-4 text-gray-500 leading-relaxed">
            Ao longo dos anos a empresa participou de centenas de projetos nos
            setores:
          </p>
        </motion.div>

        {/* Setores */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-5 mb-16 md:mb-20">
          {EXPERIENCE.sectors.map((sector, i) => {
            const Icon = sectorIcons[i] ?? Layers;
            return (
              <motion.div
                key={sector}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex flex-col items-center text-center p-4 md:p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-brand-green/30 hover:shadow-md hover:shadow-brand-green/5 transition-all duration-300"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-dark text-brand-green mb-3">
                  <Icon size={20} />
                </div>
                <span className="text-sm font-semibold text-navy-dark leading-snug">
                  {sector}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline — desktop horizontal */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-green/20 via-brand-green to-brand-green/20" />
            <div className="grid grid-cols-5 gap-4">
              {EXPERIENCE.timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex flex-col items-center text-center pt-0"
                >
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-navy-dark border-2 border-brand-green shadow-lg shadow-brand-green/20">
                    <span className="text-xs font-bold text-brand-green">
                      {item.year}
                    </span>
                  </div>
                  <p className="mt-4 text-sm font-medium text-navy-dark leading-snug px-1">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline — mobile/tablet vertical */}
        <div className="lg:hidden relative pl-8">
          <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gradient-to-b from-brand-green/20 via-brand-green to-brand-green/20" />
          <div className="space-y-8">
            {EXPERIENCE.timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative"
              >
                <div className="absolute -left-8 top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-navy-dark border-2 border-brand-green">
                  <div className="h-2 w-2 rounded-full bg-brand-green" />
                </div>
                <div className="ml-2">
                  <span className="inline-block text-sm font-bold text-brand-green-dark bg-brand-green/10 px-2.5 py-0.5 rounded-full mb-1.5">
                    {item.year}
                  </span>
                  <p className="text-sm font-medium text-navy-dark leading-relaxed">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
