import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Award, Users } from "lucide-react";
import environmentalHero from "@/assets/environmental-hero.jpg";

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
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Sobre a <span className="text-secondary">HIDROSPHERA</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-body">
              Somos uma empresa especializada em dar suporte às diversas áreas do meio ambiente, 
              comprometida em oferecer as melhores soluções para seus projetos ambientais.
            </p>
          </div>

          {/* Features Grid - Moved to top */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-body">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          {/* Mission and Values Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800">
                Nossa Missão
              </h3>
              <p className="text-gray-600 leading-relaxed font-body">
                A Hidrosphera tem como missão proporcionar soluções ambientais inovadoras e 
                sustentáveis, contribuindo para o desenvolvimento de projetos que harmonizem 
                crescimento econômico com preservação ambiental.
              </p>
              <p className="text-gray-600 leading-relaxed font-body">
                Nossa equipe multidisciplinar trabalha com dedicação para entregar resultados 
                excepcionais, sempre priorizando a eficiência, economia e responsabilidade 
                ambiental em cada projeto desenvolvido.
              </p>
            </div>

            {/* Visual Content */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={environmentalHero} 
                  alt="Tecnologia ambiental sustentável da HIDROSPHERA"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-hero bg-opacity-90 flex items-center justify-center p-8">
                  <div className="text-white text-center">
                    <h4 className="text-2xl font-bold mb-6">Nossa Visão</h4>
                    <ul className="space-y-4 text-left">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        Ser referência em consultoria ambiental no Brasil
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        Promover desenvolvimento sustentável
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        Inovar constantemente em soluções ambientais
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        Construir um futuro mais verde para todos
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600 font-body">Projetos Realizados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-gray-600 font-body">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-gray-600 font-body">Clientes Atendidos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600 font-body">Especialistas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;