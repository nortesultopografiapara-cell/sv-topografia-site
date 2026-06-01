import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import {
  InstagramIcon,
  FacebookIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/components/ui/SocialIcons";
import { Logo } from "./Logo";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

const socialLinks = [
  { icon: InstagramIcon, href: COMPANY.social.instagram, label: "Instagram" },
  { icon: FacebookIcon, href: COMPANY.social.facebook, label: "Facebook" },
  { icon: LinkedinIcon, href: COMPANY.social.linkedin, label: "LinkedIn" },
  { icon: YoutubeIcon, href: COMPANY.social.youtube, label: "YouTube" },
];

const footerNavLinks = NAV_LINKS.filter((link) => link.href !== "/blog");

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan mb-5">
      {children}
    </h3>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-navy-dark text-white overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 items-start">
          {/* Coluna 1 — Marca */}
          <div className="min-w-0 sm:col-span-2 lg:col-span-1">
            <Logo size="md" />
            <p className="mt-5 text-sm text-white/60 leading-relaxed max-w-xs">
              {COMPANY.slogan}. Soluções completas em topografia, engenharia e
              geoprocessamento.
            </p>
            <div className="flex gap-2.5 mt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-white/60 hover:bg-cyan hover:text-navy-dark transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Coluna 2 — Navegação */}
          <div className="min-w-0">
            <FooterHeading>Navegação</FooterHeading>
            <ul className="space-y-2.5">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-cyan transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 — Contato */}
          <div className="min-w-0">
            <FooterHeading>Contato</FooterHeading>
            <ul className="space-y-3.5">
              <li>
                <a
                  href={`tel:+${COMPANY.phone}`}
                  className="flex items-start gap-3 text-sm text-white/60 hover:text-cyan transition-colors duration-200"
                >
                  <Phone size={15} className="shrink-0 mt-0.5 text-cyan/70" />
                  <span>{COMPANY.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-3 text-sm text-white/60 hover:text-cyan transition-colors duration-200"
                >
                  <Mail size={15} className="shrink-0 mt-0.5 text-cyan/70" />
                  <span className="break-all leading-relaxed">
                    {COMPANY.email}
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin size={15} className="shrink-0 mt-0.5 text-cyan/70" />
                <address className="not-italic leading-relaxed">
                  {COMPANY.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </li>
            </ul>
          </div>

          {/* Coluna 4 — Horário */}
          <div className="min-w-0">
            <FooterHeading>Horário de Atendimento</FooterHeading>
            <div className="flex items-start gap-3 text-sm text-white/60">
              <Clock size={15} className="shrink-0 mt-0.5 text-cyan/70" />
              <p className="leading-relaxed">
                Segunda a Sexta: 8h às 18h
                <br />
                Sábado: 8h às 12h
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40 text-center sm:text-left">
            © {currentYear} {COMPANY.name}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/30">
            Desenvolvido com precisão e tecnologia
          </p>
        </div>
      </div>
    </footer>
  );
}
