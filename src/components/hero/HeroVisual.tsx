"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Radio,
  Crosshair,
  Map,
  Plane,
  Layers,
} from "lucide-react";

const equipment = [
  { icon: Plane, label: "Drone RTK", position: "top-4 right-4" },
  { icon: Radio, label: "GNSS RTK", position: "bottom-28 left-2" },
  { icon: Crosshair, label: "Estação Total", position: "top-1/2 -translate-y-1/2 left-4" },
  { icon: Map, label: "Loteamento", position: "bottom-4 right-8" },
];

export function HeroVisual() {
  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto lg:max-w-none lg:aspect-[4/5]">
      {/* Glow */}
      <div className="absolute inset-0 rounded-3xl bg-brand-green/5 blur-3xl" />

      {/* Main map / loteamento card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute inset-4 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
      >
        <Image
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
          alt="Geoprocessamento e análise GIS"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 80vw, 40vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-dark/40 to-transparent" />
        {/* Contour lines overlay */}
        <svg
          className="absolute inset-0 w-full h-full opacity-30"
          viewBox="0 0 400 400"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {[40, 80, 120, 160, 200, 240, 280, 320].map((y, i) => (
            <path
              key={y}
              d={`M0,${y + i * 8} Q100,${y - 20} 200,${y + 10} T400,${y - 5}`}
              fill="none"
              stroke="#84cc16"
              strokeWidth="1"
            />
          ))}
        </svg>
        <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-lg bg-navy-dark/80 border border-brand-green/30 px-3 py-1.5">
          <Layers size={14} className="text-brand-green" />
          <span className="text-xs font-medium text-white">Curvas de Nível</span>
        </div>
      </motion.div>

      {/* Drone RTK card */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="absolute top-0 right-0 w-[48%] aspect-[4/3] rounded-xl overflow-hidden border border-white/15 shadow-xl z-10"
      >
        <Image
          src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=500&q=80"
          alt="Drone RTK profissional para aerolevantamento"
          fill
          className="object-cover"
          sizes="200px"
        />
        <div className="absolute inset-0 bg-navy-dark/30" />
        <span className="absolute bottom-2 left-2 text-[10px] font-semibold uppercase tracking-wider bg-brand-green text-navy-dark px-2 py-0.5 rounded">
          Drone RTK
        </span>
      </motion.div>

      {/* Obra / infraestrutura card */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.65 }}
        className="absolute bottom-8 left-0 w-[44%] aspect-square rounded-xl overflow-hidden border border-white/15 shadow-xl z-10"
      >
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&q=80"
          alt="Obra de infraestrutura e engenharia"
          fill
          className="object-cover"
          sizes="200px"
        />
        <div className="absolute inset-0 bg-navy-dark/30" />
        <span className="absolute bottom-2 left-2 text-[10px] font-semibold uppercase tracking-wider bg-white/90 text-navy-dark px-2 py-0.5 rounded">
          Infraestrutura
        </span>
      </motion.div>

      {/* Loteamento card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="absolute bottom-0 right-4 w-[38%] aspect-[3/2] rounded-xl overflow-hidden border border-white/15 shadow-xl z-10"
      >
        <Image
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&q=80"
          alt="Projeto de loteamento"
          fill
          className="object-cover"
          sizes="180px"
        />
        <div className="absolute inset-0 bg-navy-dark/30" />
        <span className="absolute bottom-2 left-2 text-[10px] font-semibold uppercase tracking-wider bg-white/90 text-navy-dark px-2 py-0.5 rounded">
          Loteamento
        </span>
      </motion.div>

      {/* Equipment badges */}
      {equipment.map(({ icon: Icon, label, position }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
          className={`absolute ${position} hidden md:flex items-center gap-1.5 rounded-full bg-navy-dark/90 border border-brand-green/40 px-3 py-1.5 shadow-lg z-20`}
        >
          <Icon size={12} className="text-brand-green" />
          <span className="text-[10px] font-medium text-white whitespace-nowrap">
            {label}
          </span>
        </motion.div>
      ))}

      {/* Grid overlay */}
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
