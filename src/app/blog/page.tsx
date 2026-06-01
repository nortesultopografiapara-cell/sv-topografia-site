import type { Metadata } from "next";
import { ArrowLeft, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog",
  description: `Blog da ${COMPANY.name} — artigos sobre topografia, engenharia e geoprocessamento.`,
};

export default function BlogPage() {
  return (
    <section className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-petrol to-navy-dark text-cyan mb-6">
            <Newspaper size={32} />
          </div>
          <h1 className="text-4xl font-bold text-navy-dark mb-4">Blog</h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Em breve publicaremos artigos sobre topografia, tecnologia, drones,
            GIS e novidades do setor de engenharia e geoprocessamento.
          </p>
          <Button href="/" variant="secondary">
            <ArrowLeft size={18} />
            Voltar ao site
          </Button>
        </div>
      </div>
    </section>
  );
}
