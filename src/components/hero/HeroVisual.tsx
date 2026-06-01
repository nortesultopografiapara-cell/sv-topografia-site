"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/images";

const heroCards = [
  {
    src: IMAGES.hero.levantamento,
    alt: "Levantamento topográfico em campo",
    label: "Levantamento",
    position: "main" as const,
  },
  {
    src: IMAGES.hero.drone,
    alt: "Drone RTK profissional para aerolevantamento",
    label: "Drone RTK",
    position: "drone" as const,
  },
  {
    src: IMAGES.hero.obra,
    alt: "Obra e processamento topográfico",
    label: "Obra",
    position: "obra" as const,
  },
  {
    src: IMAGES.hero.infraestrutura,
    alt: "Aerolevantamento com drone RTK",
    label: "Aerolevantamento",
    position: "infra" as const,
  },
];

export function HeroVisual() {
  const main = heroCards.find((c) => c.position === "main")!;
  const drone = heroCards.find((c) => c.position === "drone")!;
  const obra = heroCards.find((c) => c.position === "obra")!;
  const infra = heroCards.find((c) => c.position === "infra")!;

  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto lg:max-w-none lg:aspect-[4/5]">
      <div className="absolute inset-0 rounded-3xl bg-brand-green/5 blur-3xl" />

      {/* Imagem principal — Levantamento */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute inset-4 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
      >
        <Image
          src={main.src}
          alt={main.alt}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 80vw, 40vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy-dark/20 to-transparent" />
        <span className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-wider bg-brand-green text-navy-dark px-2.5 py-1 rounded">
          {main.label}
        </span>
      </motion.div>

      {/* Drone RTK */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="absolute top-0 right-0 w-[48%] aspect-[4/3] rounded-xl overflow-hidden border border-white/15 shadow-xl z-10"
      >
        <Image
          src={drone.src}
          alt={drone.alt}
          fill
          loading="lazy"
          className="object-cover"
          sizes="200px"
        />
        <div className="absolute inset-0 bg-navy-dark/20" />
        <span className="absolute bottom-2 left-2 text-[10px] font-semibold uppercase tracking-wider bg-brand-green text-navy-dark px-2 py-0.5 rounded">
          {drone.label}
        </span>
      </motion.div>

      {/* Obra */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.65 }}
        className="absolute bottom-8 left-0 w-[44%] aspect-square rounded-xl overflow-hidden border border-white/15 shadow-xl z-10"
      >
        <Image
          src={obra.src}
          alt={obra.alt}
          fill
          loading="lazy"
          className="object-cover"
          sizes="200px"
        />
        <div className="absolute inset-0 bg-navy-dark/20" />
        <span className="absolute bottom-2 left-2 text-[10px] font-semibold uppercase tracking-wider bg-white/90 text-navy-dark px-2 py-0.5 rounded">
          {obra.label}
        </span>
      </motion.div>

      {/* Aerolevantamento */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="absolute bottom-0 right-4 w-[38%] aspect-[3/2] rounded-xl overflow-hidden border border-white/15 shadow-xl z-10"
      >
        <Image
          src={infra.src}
          alt={infra.alt}
          fill
          loading="lazy"
          className="object-cover"
          sizes="180px"
        />
        <div className="absolute inset-0 bg-navy-dark/20" />
        <span className="absolute bottom-2 left-2 text-[10px] font-semibold uppercase tracking-wider bg-white/90 text-navy-dark px-2 py-0.5 rounded">
          {infra.label}
        </span>
      </motion.div>

      <div
        className="absolute inset-0 rounded-3xl pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}
