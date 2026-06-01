"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { COMPANY, SERVICES, getWhatsAppUrl } from "@/lib/constants";

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const message = formData.get("message") as string;
    const service = formData.get("service") as string;

    const whatsappMessage = `Olá! Meu nome é ${name}. Tenho interesse em ${service}. ${message}`;
    window.open(getWhatsAppUrl(whatsappMessage), "_blank");

    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionTitle
          label="Contato"
          title="Solicite seu orçamento"
          description="Entre em contato conosco e receba uma proposta personalizada para o seu projeto."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <CheckCircle size={64} className="text-cyan mb-4" />
                <h3 className="text-2xl font-bold text-navy-dark mb-2">
                  Mensagem enviada!
                </h3>
                <p className="text-gray-600 mb-6">
                  Redirecionamos você para o WhatsApp. Em breve entraremos em
                  contato.
                </p>
                <Button
                  variant="secondary"
                  onClick={() => setIsSubmitted(false)}
                >
                  Enviar nova mensagem
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-navy-dark mb-1.5"
                  >
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-navy-dark mb-1.5"
                    >
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-navy-dark mb-1.5"
                    >
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-navy-dark mb-1.5"
                  >
                    Serviço de interesse *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Selecione um serviço
                    </option>
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-navy-dark mb-1.5"
                  >
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all resize-none"
                    placeholder="Descreva seu projeto ou dúvida..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {isLoading ? (
                    "Enviando..."
                  ) : (
                    <>
                      <Send size={18} />
                      Enviar Mensagem
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-navy-dark to-petrol rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Informações de Contato</h3>
              <ul className="space-y-5">
                <li>
                  <a
                    href={`tel:+${COMPANY.phone}`}
                    className="flex items-center gap-4 group"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 group-hover:bg-cyan transition-colors">
                      <Phone size={20} className="text-cyan group-hover:text-navy-dark" />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm">Telefone / WhatsApp</p>
                      <p className="font-semibold">{COMPANY.phoneDisplay}</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="flex items-center gap-4 group"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 group-hover:bg-cyan transition-colors">
                      <Mail size={20} className="text-cyan group-hover:text-navy-dark" />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm">E-mail</p>
                      <p className="font-semibold">{COMPANY.email}</p>
                    </div>
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                    <MapPin size={20} className="text-cyan" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">Localização</p>
                    <p className="font-semibold">
                      {COMPANY.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gray-200 h-64 md:h-80">
              <iframe
                src={COMPANY.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização SV Topografia & Projetos"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
