"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Map,
  LayoutGrid,
  FileText,
  Wallet,
  Receipt,
  Users,
  BarChart3,
  AlertTriangle,
  ExternalLink,
  LogIn,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SV_LOTES } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

const featureIcons = [
  Map,
  LayoutGrid,
  FileText,
  Wallet,
  Receipt,
  Users,
  BarChart3,
  AlertTriangle,
];

function SvlotesPrint() {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-navy-dark/60 backdrop-blur-sm shadow-2xl shadow-black/40 overflow-hidden">
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={IMAGES.svlotes.print}
          alt="Print do sistema SV LOTES — gestão de loteamentos"
          fill
          loading="lazy"
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      <div className="px-5 py-4 border-t border-white/10 bg-white/5">
        <p className="text-sm text-white/70 leading-relaxed text-center">
          {SV_LOTES.printCaption}
        </p>
      </div>
    </div>
  );
}

export function SvLotes() {
  return (
    <section
      id="sv-lotes"
      className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-navy-dark via-petrol to-navy-dark"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(132,204,22,0.08)_0%,_transparent_60%)] pointer-events-none" />

      <div className="container relative mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-brand-green mb-4">
              Plataforma Exclusiva
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              SV LOTES
              <span className="block text-xl md:text-2xl font-medium text-brand-green mt-2">
                Gestão Inteligente para Loteadoras
              </span>
            </h2>
            <p className="mt-5 text-lg text-white/80 leading-relaxed">
              {SV_LOTES.subtitle}
            </p>
            <p className="mt-4 text-white/60 leading-relaxed">
              {SV_LOTES.description}
            </p>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SV_LOTES.features.map((feature, i) => {
                const Icon = featureIcons[i] ?? CheckCircle2;
                return (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-white/70"
                  >
                    <Icon
                      size={16}
                      className="shrink-0 mt-0.5 text-brand-green"
                    />
                    <span>{feature}</span>
                  </li>
                );
              })}
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                href={SV_LOTES.links.site}
                variant="brand"
                size="lg"
                external
              >
                Conhecer o SV LOTES
                <ExternalLink size={18} />
              </Button>
              <Button
                href={SV_LOTES.links.login}
                variant="outline"
                size="lg"
                external
              >
                <LogIn size={18} />
                Acessar Plataforma
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-brand-green/5 blur-2xl pointer-events-none" />
            <SvlotesPrint />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
