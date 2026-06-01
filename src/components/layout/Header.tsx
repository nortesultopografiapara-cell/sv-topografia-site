"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS, getWhatsAppUrl } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-navy-dark/95 backdrop-blur-md shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6 lg:px-8">
        <Link href="#inicio" aria-label="Ir para o início" className="shrink-0">
          <Logo size="sm" priority />
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-cyan transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button href={getWhatsAppUrl()} variant="whatsapp" size="sm" external>
            WhatsApp
          </Button>
          <Button href="#contato" variant="primary" size="sm">
            Solicitar Orçamento
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={cn(
          "lg:hidden fixed inset-0 top-0 bg-navy-dark/98 backdrop-blur-lg transition-all duration-300 z-40",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        <nav
          className="flex flex-col items-center justify-center h-full gap-8"
          aria-label="Navegação mobile"
        >
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-semibold text-white hover:text-cyan transition-colors"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-4 mt-8 w-full max-w-xs px-4">
            <Button href={getWhatsAppUrl()} variant="whatsapp" external>
              WhatsApp
            </Button>
            <Button href="#contato" variant="primary" onClick={() => setIsOpen(false)}>
              Solicitar Orçamento
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
