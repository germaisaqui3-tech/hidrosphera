import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Award, Users } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Compromisso Ambiental",
      description: "Atuamos com responsabilidade e dedicação na preservação do meio ambiente"
    },
    {
      icon: Target,
      title: "Soluções Eficientes",
      description: "Desenvolvemos projetos econômicos e sustentáveis para cada necessidade"
    },
    {
      icon: Award,
      title: "Excelência Técnica",
      description: "Equipe especializada com ampla experiência em consultoria ambiental"
    },
    {
      icon: Users,
      title: "Parceria Confiável",
      description: "Relacionamento próximo e transparente com nossos clientes"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Sobre a Hidrosphera
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Somos uma empresa especializada em dar suporte às diversas áreas do meio ambiente, 
              comprometida em oferecer as melhores soluções para seus projetos ambientais.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-serif font-semibold text-foreground">
                Nossa Missão
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A Hidrosphera tem como missão proporcionar soluções ambientais inovadoras e 
                sustentáveis, contribuindo para o desenvolvimento de projetos que harmonizem 
                crescimento econômico com preservação ambiental.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nossa equipe multidisciplinar trabalha com dedicação para entregar resultados 
                excepcionais, sempre priorizando a eficiência, economia e responsabilidade 
                ambiental em cada projeto desenvolvido.
              </p>

              <div className="pt-4">
                <h4 className="text-xl font-semibold text-foreground mb-4">Nossos Valores:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Sustentabilidade e responsabilidade ambiental
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Excelência técnica e inovação
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Transparência e ética profissional
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Compromisso com resultados de qualidade
                  </li>
                </ul>
              </div>
            </div>

            {/* Image/Visual Content */}
            <div className="relative">
              <div className="bg-gradient-ocean rounded-2xl p-8 shadow-ocean">
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <h4 className="text-xl font-semibold text-white mb-4">
                    Por que escolher a Hidrosphera?
                  </h4>
                  <ul className="space-y-3 text-white/90">
                    <li>✓ Equipe especializada e experiente</li>
                    <li>✓ Soluções personalizadas para cada cliente</li>
                    <li>✓ Compromisso com prazos e qualidade</li>
                    <li>✓ Acompanhamento completo dos projetos</li>
                    <li>✓ Preços competitivos e transparentes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-ocean transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;