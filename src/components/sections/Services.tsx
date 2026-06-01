"use client";

import { motion } from "framer-motion";
import {
  Map,
  Globe,
  Plane,
  ScanLine,
  LayoutGrid,
  Route,
  Mountain,
  Box,
  FileCheck,
  Layers,
  type LucideIcon,
} from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SERVICES } from "@/lib/constants";
import type { ServiceIcon } from "@/types";

const iconMap: Record<ServiceIcon, LucideIcon> = {
  Map,
  Globe,
  Plane,
  ScanLine,
  LayoutGrid,
  Route,
  Mountain,
  Box,
  FileCheck,
  Layers,
};

export function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionTitle
          label="Serviços"
          title="Soluções completas para seu projeto"
          description="Do levantamento de campo ao projeto executivo — tecnologia de ponta e equipe especializada."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 5) * 0.06 }}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-cyan/30 hover:shadow-xl hover:shadow-cyan/5 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-petrol to-navy-dark text-cyan group-hover:from-cyan group-hover:to-cyan-dark group-hover:text-navy-dark transition-all duration-500 mb-4">
                  <Icon size={22} />
                </div>
                <h3 className="text-base font-bold text-navy-dark mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
