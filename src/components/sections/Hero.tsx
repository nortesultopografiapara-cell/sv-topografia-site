"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { HeroVisual } from "@/components/hero/HeroVisual";
import { Button } from "@/components/ui/Button";
import { HERO, getWhatsAppUrl } from "@/lib/constants";

function TopographicBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.07]"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        {[60, 120, 180, 240, 300, 360, 420, 480, 540, 600, 660, 720].map(
          (y, i) => (
            <path
              key={y}
              d={`M0,${y} C200,${y - 40 + i * 3} 400,${y + 30} 600,${y - 10} C800,${y - 40} 1000,${y + 20} 1200,${y}`}
              fill="none"
              stroke="#84cc16"
              strokeWidth="1.5"
            />
          )
        )}
      </svg>
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-green/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-petrol/20 rounded-full blur-[100px]" />
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-navy-deep"
    >
      <TopographicBackground />

      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy-dark to-[#0d2137]" />

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Conteúdo */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold text-white leading-[1.12] tracking-tight uppercase"
            >
              Topografia, Engenharia e Geotecnologia de{" "}
              <span className="text-brand-green">Alta Precisão</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-lg md:text-xl text-white/85 leading-relaxed font-medium"
            >
              {HERO.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-4 text-base text-white/55 leading-relaxed max-w-xl"
            >
              {HERO.institutional}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Button href="#contato" variant="brand" size="lg">
                Solicitar Orçamento
                <ArrowRight size={20} />
              </Button>
              <Button
                href={getWhatsAppUrl()}
                variant="whatsapp"
                size="lg"
                external
              >
                <MessageCircle size={22} />
                Falar no WhatsApp
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-8"
            >
              {HERO.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-bold text-brand-green">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-white/50 mt-1 leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Visual composto */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="relative mt-4 lg:mt-0"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
