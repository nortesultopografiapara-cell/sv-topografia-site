"use client";

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

function DashboardMockup() {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-navy-dark/60 backdrop-blur-sm shadow-2xl shadow-black/40 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
        <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
        <div className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        <span className="ml-3 text-xs text-white/40 font-mono">
          svlotes.com.br — dashboard
        </span>
      </div>

      <div className="p-4 space-y-4">
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Disponíveis", value: "48", color: "text-cyan" },
            { label: "Reservados", value: "12", color: "text-yellow-400" },
            { label: "Vendidos", value: "86", color: "text-green-400" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg bg-white/5 border border-white/5 p-2.5 text-center"
            >
              <p className={`text-lg font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-[10px] text-white/40 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="relative rounded-xl bg-gradient-to-br from-petrol/80 to-navy-dark border border-cyan/20 h-44 overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-sm border border-cyan/30 bg-cyan/10"
              style={{
                width: `${18 + (i % 3) * 8}%`,
                height: `${14 + (i % 2) * 6}%`,
                top: `${12 + Math.floor(i / 3) * 38}%`,
                left: `${8 + (i % 3) * 28}%`,
              }}
            />
          ))}
          <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-md bg-navy-dark/80 px-2 py-1 border border-cyan/30">
            <Map size={12} className="text-cyan" />
            <span className="text-[10px] text-cyan font-medium">Mapa GIS</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg bg-white/5 border border-white/5 p-2.5">
            <div className="h-1.5 w-12 rounded bg-cyan/60 mb-2" />
            <div className="space-y-1">
              <div className="h-1 w-full rounded bg-white/10" />
              <div className="h-1 w-4/5 rounded bg-white/10" />
            </div>
          </div>
          <div className="rounded-lg bg-white/5 border border-white/5 p-2.5">
            <div className="h-1.5 w-10 rounded bg-green-400/60 mb-2" />
            <div className="space-y-1">
              <div className="h-1 w-full rounded bg-white/10" />
              <div className="h-1 w-3/5 rounded bg-white/10" />
            </div>
          </div>
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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(0,212,255,0.08)_0%,_transparent_60%)] pointer-events-none" />

      <div className="container relative mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-cyan mb-4">
              Plataforma Exclusiva
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              SV LOTES
              <span className="block text-xl md:text-2xl font-medium text-cyan mt-2">
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
                      className="shrink-0 mt-0.5 text-cyan"
                    />
                    <span>{feature}</span>
                  </li>
                );
              })}
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                href={SV_LOTES.links.site}
                variant="primary"
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
            <div className="absolute -inset-4 rounded-3xl bg-cyan/5 blur-2xl pointer-events-none" />
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
