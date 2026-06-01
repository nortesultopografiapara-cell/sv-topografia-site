"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ExternalLink,
  LogIn,
  CheckCircle2,
  Map,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SvLotesGallery } from "@/components/sections/SvLotesGallery";
import { SV_LOTES } from "@/lib/constants";

function SvlotesMainPrint() {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-navy-dark/60 backdrop-blur-sm shadow-2xl shadow-black/40 overflow-hidden group">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={SV_LOTES.mainImage.src}
          alt={SV_LOTES.mainImage.alt}
          fill
          priority
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-lg bg-navy-dark/90 border border-brand-green/40 px-3 py-1.5">
          <Map size={14} className="text-brand-green" />
          <span className="text-xs font-semibold text-white">
            {SV_LOTES.mainImage.label}
          </span>
        </div>
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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,212,255,0.05)_0%,_transparent_50%)] pointer-events-none" />

      <div className="container relative mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
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
              {SV_LOTES.title}
            </h2>
            <p className="mt-3 text-xl md:text-2xl font-medium text-brand-green">
              {SV_LOTES.subtitle}
            </p>

            <p className="mt-5 text-lg text-white/80 leading-relaxed">
              {SV_LOTES.description}
            </p>
            <p className="mt-4 text-white/60 leading-relaxed">
              {SV_LOTES.descriptionExtended}
            </p>

            <div className="mt-6 rounded-xl border border-brand-green/30 bg-brand-green/10 px-5 py-4">
              <p className="text-sm md:text-base text-white/90 leading-relaxed">
                <span className="font-semibold text-brand-green">Destaque: </span>
                {SV_LOTES.highlight}
              </p>
            </div>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
              {SV_LOTES.badges.map((badge) => (
                <li
                  key={badge}
                  className="flex items-center gap-2.5 text-sm text-white/75"
                >
                  <CheckCircle2
                    size={16}
                    className="shrink-0 text-brand-green"
                  />
                  <span>{badge}</span>
                </li>
              ))}
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
            className="relative lg:sticky lg:top-28"
          >
            <div className="absolute -inset-4 rounded-3xl bg-brand-green/5 blur-2xl pointer-events-none" />
            <SvlotesMainPrint />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 md:mt-20 pt-12 border-t border-white/10"
        >
          <SvLotesGallery />
        </motion.div>
      </div>
    </section>
  );
}
