import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Technology } from "@/components/sections/Technology";
import { SvLotes } from "@/components/sections/SvLotes";
import { Portfolio } from "@/components/sections/Portfolio";
import { WorksGallery } from "@/components/sections/WorksGallery";
import { Contact } from "@/components/sections/Contact";
import { COMPANY } from "@/lib/constants";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: COMPANY.name,
  description: COMPANY.description,
  slogan: COMPANY.slogan,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://svtopografia.com.br",
  telephone: `+${COMPANY.phone}`,
  email: COMPANY.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua 02, Quadra 123, Lote 05, Nova Carajás",
    addressLocality: "Parauapebas",
    addressRegion: "PA",
    addressCountry: "BR",
  },
  areaServed: "Brasil",
  serviceType: [
    "Levantamento Topográfico",
    "Georreferenciamento",
    "Aerolevantamento com Drone",
    "LiDAR",
    "Projetos de Loteamentos",
    "Projetos Rodoviários",
    "GIS e Geoprocessamento",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Experience />
      <About />
      <Services />
      <Technology />
      <SvLotes />
      <Portfolio />
      <WorksGallery />
      <Contact />
    </>
  );
}
