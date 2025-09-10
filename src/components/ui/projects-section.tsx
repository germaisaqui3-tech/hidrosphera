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
    <section id="projetos" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Projetos em Destaque
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Conheça alguns dos projetos que desenvolvemos com excelência, 
              demonstrando nosso compromisso com soluções ambientais eficientes.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-soft hover:shadow-ocean transition-all duration-300 group overflow-hidden"
              >
                <CardContent className="p-6">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-ocean rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <project.icon className="text-white" size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {project.title}
                        </h3>
                        <p className="text-sm text-primary font-medium">
                          {project.category}
                        </p>
                      </div>
                    </div>
                    <Badge 
                      variant={project.status === "Concluído" ? "default" : "secondary"}
                      className={project.status === "Concluído" ? "bg-secondary text-white" : ""}
                    >
                      {project.status === "Concluído" && <CheckCircle className="mr-1" size={12} />}
                      {project.status}
                    </Badge>
                  </div>

                  {/* Project Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Details */}
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-1" />
                      {project.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {project.year}
                    </div>
                  </div>

                  {/* Project Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="outline" 
                        className="text-xs border-primary/20 text-primary"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-card rounded-2xl p-8 md:p-12 shadow-soft">
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-4">
              Seu Projeto Pode Ser o Próximo
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              Entre em contato conosco e descubra como podemos ajudar a tornar seu projeto 
              uma realidade sustentável e eficiente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.querySelector("#contato");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-3 bg-gradient-ocean text-white rounded-lg font-semibold hover:shadow-ocean transition-all duration-300"
              >
                Iniciar Projeto
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector("#servicos");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300"
              >
                Ver Todos os Serviços
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;