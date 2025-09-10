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
              <Card 
                key={index} 
                className="border-0 shadow-soft hover:shadow-ocean transition-all duration-300 group overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ${
                    service.color === 'primary' ? 'bg-gradient-ocean' : 'bg-gradient-nature'
                  }`}>
                    <service.icon className="text-white" size={24} />
                  </div>
                  <CardTitle className="text-xl text-center text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="text-secondary mr-2 flex-shrink-0" size={16} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Services */}
          <div className="bg-accent rounded-2xl p-8 md:p-12 text-center">
            <Building className="text-primary mx-auto mb-6" size={48} />
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-4">
              Consultoria Especializada
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              Além dos nossos serviços principais, oferecemos consultoria especializada em diversas 
              áreas ambientais, adaptada às necessidades específicas de cada projeto.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <BarChart3 className="text-primary mx-auto mb-2" size={24} />
                <div className="font-semibold text-foreground">Diagnóstico Ambiental</div>
              </div>
              <div className="text-center">
                <Shield className="text-secondary mx-auto mb-2" size={24} />
                <div className="font-semibold text-foreground">Auditoria Ambiental</div>
              </div>
              <div className="text-center">
                <TreePine className="text-primary mx-auto mb-2" size={24} />
                <div className="font-semibold text-foreground">Educação Ambiental</div>
              </div>
            </div>

            <Button 
              onClick={scrollToContact}
              className="bg-gradient-ocean text-white hover:shadow-ocean transition-all duration-300 px-8 py-3"
            >
              Solicite um Orçamento
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;