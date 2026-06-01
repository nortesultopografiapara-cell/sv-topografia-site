"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

export function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 hover:bg-[#20BD5A] hover:scale-110 transition-all duration-300 animate-pulse-soft"
    >
      <MessageCircle size={28} fill="white" />
    </a>
  );
}
