"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Eye, Heart, History, Building2 } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ABOUT } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

const institutionalPhotos = [
  {
    src: IMAGES.about.equipe,
    title: "Nossa Equipe",
    description:
      "Profissionais qualificados em topografia, geodésia e engenharia, prontos para atender projetos em todo o Brasil.",
  },
  {
    src: IMAGES.about.escritorio,
    title: "Nosso Escritório",
    description:
      "Estrutura completa em Parauapebas-PA, com tecnologia de ponta para levantamentos, processamento e projetos.",
  },
];

const cards = [
  {
    icon: History,
    title: "Nossa História",
    content: ABOUT.history,
    accent: "from-petrol to-petrol-light",
  },
  {
    icon: Target,
    title: "Missão",
    content: ABOUT.mission,
    accent: "from-brand-green-dark to-brand-green",
  },
  {
    icon: Eye,
    title: "Visão",
    content: ABOUT.vision,
    accent: "from-petrol to-brand-green-dark",
  },
];

export function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionTitle
          label="Sobre a Empresa"
          title="Excelência em cada coordenada"
          description="Conheça a SV Topografia & Projetos — referência em soluções geoespaciais e de engenharia."
        />

        {/* Bloco institucional com fotos reais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {institutionalPhotos.map((photo, i) => (
            <motion.div
              key={photo.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-gray-100 shadow-lg shadow-navy-dark/5"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-navy-dark/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {photo.title}
                </h3>
                <p className="text-sm text-white/75 leading-relaxed">
                  {photo.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-start gap-4 rounded-2xl bg-gray-50 border border-gray-100 p-6 mb-16"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-dark text-brand-green">
            <Building2 size={24} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-navy-dark mb-2">
              Estrutura da Empresa
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Desde 2010, a SV Topografia & Projetos conta com equipamentos RTK,
              drones, estações totais e equipe multidisciplinar para entregar
              soluções completas — do levantamento de campo ao projeto
              executivo e geoprocessamento.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-gray-50 rounded-2xl p-8 hover:shadow-xl hover:shadow-petrol/10 transition-all duration-500 border border-gray-100"
            >
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${card.accent} text-white mb-5`}
              >
                <card.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-navy-dark mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{card.content}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-green to-petrol text-white">
              <Heart size={24} />
            </div>
            <h3 className="text-2xl font-bold text-navy-dark">Nossos Valores</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT.values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative overflow-hidden rounded-2xl bg-navy-dark p-6 text-white group hover:bg-petrol transition-colors duration-500"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-green/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-green/20 transition-colors" />
                <h4 className="text-lg font-bold text-brand-green mb-2 relative">
                  {value.title}
                </h4>
                <p className="text-white/70 text-sm leading-relaxed relative">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
