import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Search, 
  Shield, 
  Recycle, 
  Droplets, 
  TreePine,
  Building,
  BarChart3,
  CheckCircle
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: FileText,
      title: "Licenciamento Ambiental",
      description: "Assessoria completa para obtenção de licenças ambientais",
      features: ["Licença Prévia", "Licença de Instalação", "Licença de Operação", "Renovação de Licenças"],
      color: "primary"
    },
    {
      icon: Search,
      title: "Estudos Ambientais",
      description: "Elaboração de estudos técnicos e relatórios ambientais",
      features: ["EIA/RIMA", "Estudo de Impacto de Vizinhança", "Plano de Controle Ambiental", "Relatório Ambiental"],
      color: "secondary"
    },
    {
      icon: Droplets,
      title: "Recursos Hídricos",
      description: "Gestão e outorga de recursos hídricos",
      features: ["Outorga de Uso", "Plano de Recursos Hídricos", "Cadastro de Usuários", "Monitoramento"],
      color: "primary"
    },
    {
      icon: Recycle,
      title: "Gestão de Resíduos",
      description: "Planos de gerenciamento e destinação de resíduos",
      features: ["PGRS", "Coleta Seletiva", "Destinação Final", "Treinamentos"],
      color: "secondary"
    },
    {
      icon: Shield,
      title: "Monitoramento Ambiental",
      description: "Acompanhamento e controle de indicadores ambientais",
      features: ["Qualidade do Ar", "Qualidade da Água", "Ruído", "Solo"],
      color: "primary"
    },
    {
      icon: TreePine,
      title: "Recuperação de Áreas",
      description: "Projetos de recuperação e reabilitação ambiental",
      features: ["PRAD", "Revegetação", "Bioengenharia", "Monitoramento"],
      color: "secondary"
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Nossos Serviços
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Oferecemos uma gama completa de serviços ambientais para atender todas as suas necessidades, 
              sempre com foco na eficiência e sustentabilidade.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group text-center"
              >
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 ${
                  service.color === 'primary' ? 'bg-primary' : 'bg-secondary'
                }`}>
                  <service.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed font-body">
                  {service.description}
                </p>
                  
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600 font-body">
                      <CheckCircle className="text-secondary mr-2 flex-shrink-0" size={16} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="mt-6 w-full bg-gray-100 hover:bg-primary hover:text-white text-gray-700 py-2 px-4 rounded-lg transition-all duration-300 font-medium text-sm">
                  Saiba Mais
                </button>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-2xl p-12 shadow-sm">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Precisa de uma solução personalizada?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed font-body">
              Entre em contato conosco e descubra como podemos ajudar a tornar seu projeto 
              uma realidade sustentável e eficiente.
            </p>
            <Button 
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wide"
            >
              SOLICITAR ORÇAMENTO GRATUITO
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;