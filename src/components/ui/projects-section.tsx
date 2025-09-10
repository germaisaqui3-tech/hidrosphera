import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Factory, 
  Building2, 
  Truck, 
  Home,
  MapPin,
  Calendar,
  CheckCircle
} from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Indústria Alimentícia - SP",
      category: "Licenciamento Industrial",
      location: "São Paulo, SP",
      year: "2024",
      description: "Licenciamento ambiental completo para indústria de processamento de alimentos",
      status: "Concluído",
      icon: Factory,
      tags: ["LI", "LO", "Monitoramento"]
    },
    {
      title: "Complexo Residencial",
      category: "Estudo de Impacto",
      location: "Rio de Janeiro, RJ",
      year: "2023",
      description: "EIV e licenciamento para empreendimento residencial de grande porte",
      status: "Concluído",
      icon: Home,
      tags: ["EIV", "Licenciamento", "PRAD"]
    },
    {
      title: "Centro Logístico",
      category: "Gestão de Resíduos",
      location: "Minas Gerais, MG",
      year: "2024",
      description: "PGRS e sistema de gestão ambiental para centro de distribuição",
      status: "Em Andamento",
      icon: Truck,
      tags: ["PGRS", "ISO 14001", "Treinamento"]
    },
    {
      title: "Edifício Comercial",
      category: "Certificação Ambiental",
      location: "Brasília, DF",
      year: "2023",
      description: "Consultoria para certificação LEED em edifício corporativo",
      status: "Concluído",
      icon: Building2,
      tags: ["LEED", "Eficiência Energética", "Sustentabilidade"]
    }
  ];

  const stats = [
    { number: "500+", label: "Projetos Realizados" },
    { number: "15+", label: "Anos de Experiência" },
    { number: "12", label: "Estados Atendidos" },
    { number: "100%", label: "Projetos Aprovados" }
  ];

  return (
    <section id="projetos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Nossos <span className="text-secondary">Projetos</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-body">
              Conheça alguns dos projetos que desenvolvemos com excelência, 
              demonstrando nosso compromisso com soluções ambientais eficientes.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gradient-ocean"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Sistema de Tratamento de Efluentes</h3>
                <p className="text-gray-600 text-sm mb-3 font-body">Projeto de sistema de tratamento para indústria alimentícia</p>
                <div className="flex items-center text-xs text-gray-500 mb-4">
                  <MapPin size={12} className="mr-1" />
                  São Paulo, SP
                  <Calendar size={12} className="ml-3 mr-1" />
                  2024
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Licenciamento</span>
                  <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full">EIA/RIMA</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gradient-nature"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Complexo Residencial Sustentável</h3>
                <p className="text-gray-600 text-sm mb-3 font-body">EIV e licenciamento para empreendimento de grande porte</p>
                <div className="flex items-center text-xs text-gray-500 mb-4">
                  <MapPin size={12} className="mr-1" />
                  Rio de Janeiro, RJ
                  <Calendar size={12} className="ml-3 mr-1" />
                  2023
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">EIV</span>
                  <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full">PRAD</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Centro Logístico Ambiental</h3>
                <p className="text-gray-600 text-sm mb-3 font-body">PGRS e gestão ambiental para centro de distribuição</p>
                <div className="flex items-center text-xs text-gray-500 mb-4">
                  <MapPin size={12} className="mr-1" />
                  Minas Gerais, MG
                  <Calendar size={12} className="ml-3 mr-1" />
                  2024
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">PGRS</span>
                  <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full">ISO 14001</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Quer ver mais projetos?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed font-body">
              Entre em contato conosco e conheça nosso portfólio completo de projetos ambientais
            </p>
            <button
              onClick={() => {
                const element = document.querySelector("#contato");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300"
            >
              SOLICITAR PORTFÓLIO COMPLETO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;