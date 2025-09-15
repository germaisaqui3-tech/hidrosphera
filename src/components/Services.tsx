import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Droplets, 
  Recycle,
  Shield,
  Microscope,
  ArrowRight,
  CheckCircle,
  Eye,
  ChevronDown
} from 'lucide-react';
import { useState } from 'react';
import labTesting from '@/assets/lab-testing.jpg';
import renewableEnergyWide from '@/assets/renewable-energy-wide.jpg';
import fieldWork from '@/assets/field-work.jpg';
import wasteManagementWide from '@/assets/waste-management-wide.jpg';

const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleFeatures = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  const services = [
    {
      icon: Droplets,
      title: 'Tratamento de Efluentes e Águas',
      description: 'Soluções completas para tratamento de águas e efluentes industriais com tecnologia avançada.',
      image: labTesting,
      features: [
        'Realização de estudos de tratabilidade e viabilidade técnica e econômica',
        'Elaboração de projetos básicos e executivos de ETE',
        'Elaboração de projetos de ampliação e adequação de ETE',
        'Realização de estudos para adequação operacional de ETE e partidas de ETE',
        'Realização do acompanhamento de operação de ETE',
        'Realização de amostragens de efluentes',
        'Acompanhamento de operação de ETA'
      ],
      highlight: 'Laboratório certificado'
    },
    {
      icon: Recycle,
      title: 'Resíduos Sólidos',
      description: 'Gestão sustentável e eficiente de resíduos sólidos com foco na economia circular.',
      image: wasteManagementWide,
      features: [
        'Elaboração de plano de gerenciamento de resíduos sólidos - PGRS',
        'Elaboração de projetos de depósitos temporários de resíduos - DTR',
        'Elaboração de projetos de implantação da coleta seletiva',
        'Assessoria e treinamento de operação do Sistema MTR - MG para emissão de MTR',
        'Assessoria e treinamento de operação do Sistema MTR - MG para preenchimento e envio da DMR'
      ],
      highlight: 'ISO 14001'
    },
    {
      icon: Microscope,
      title: 'Gestão Ambiental',
      description: 'Consultoria especializada em licenciamento ambiental e conformidade regulatória.',
      image: fieldWork,
      features: [
        'Elaboração de estudos ambientais (LAS, RAS, RCA, PCA e RADA) para fins de obtenção, ampliação e renovação de Licença Ambiental',
        'Acompanhamento do cumprimento das condicionantes de licença ambiental, TAC e outorga',
        'Emissão de Certificado de Uso Insignificante da Água',
        'Elaboração e envio da Declaração de Carga Poluidora (DCP)',
        'Elaboração e envio do RAPP junto ao IBAMA',
        'Elaboração e envio do INRS junto ao SINIR'
      ],
      highlight: 'Equipe multidisciplinar'
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nossos <span className="text-primary">Serviços</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferecemos soluções completas e personalizadas para todos os seus desafios ambientais, 
              com tecnologia de ponta e equipe altamente qualificada.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card 
                key={index}
                className={`group overflow-hidden hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border-border/50 bg-gradient-to-br from-background to-background/50 animate-fade-in ${
                  index % 2 === 0 ? 'lg:animate-slide-in-left' : 'lg:animate-slide-in-right'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Service Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} - serviços ambientais profissionais`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent group-hover:from-primary/70 transition-all duration-500"></div>
                  
                  {/* Floating Icon */}
                  <div className="absolute top-4 left-4 transform group-hover:scale-110 transition-transform duration-300">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30 shadow-lg">
                      <service.icon className="w-7 h-7 text-white drop-shadow-sm" />
                    </div>
                  </div>
                  
                  {/* Highlight Badge */}
                  <div className="absolute top-4 right-4 transform group-hover:scale-105 transition-transform duration-300">
                    <Badge variant="secondary" className="bg-white/25 backdrop-blur-md text-white border-white/40 shadow-lg font-medium">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      {service.highlight}
                    </Badge>
                  </div>

                  {/* Bottom Overlay with Title Preview */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <h3 className="text-white font-semibold text-lg leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Service Content */}
                <CardContent className="p-6 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features Preview */}
                  <div className="space-y-2">
                    {service.features.slice(0, expandedService === index ? service.features.length : 3).map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3 group/item">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200"></div>
                        <span className="text-sm text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors duration-200">
                          {feature}
                        </span>
                      </div>
                    ))}
                    
                    {service.features.length > 3 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleFeatures(index)}
                        className="text-primary hover:text-primary/80 p-0 h-auto font-medium group/expand"
                      >
                        <Eye className="w-3 h-3 mr-1" />
                        {expandedService === index ? 'Ver menos' : `Ver todos (${service.features.length})`}
                        <ChevronDown className={`ml-1 w-3 h-3 transition-transform duration-200 ${
                          expandedService === index ? 'rotate-180' : ''
                        }`} />
                      </Button>
                    )}
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full group/btn mt-6 hover:bg-primary hover:text-primary-foreground border-primary/20 hover:border-primary"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Saiba Mais
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced CTA Section */}
          <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 rounded-3xl p-8 md:p-12 border border-primary/10 shadow-elegant">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-32 h-32 bg-primary rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-secondary rounded-full translate-x-20 translate-y-20"></div>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left Content */}
                <div className="text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                    Precisa de uma solução{' '}
                    <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                      personalizada?
                    </span>
                  </h3>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    Nossa equipe de especialistas está pronta para desenvolver a solução ideal 
                    para os desafios específicos do seu projeto.
                  </p>
                  
                  {/* Stats */}
                  <div className="flex flex-wrap gap-6 justify-center md:justify-start mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">15+</div>
                      <div className="text-sm text-muted-foreground">Anos de experiência</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">500+</div>
                      <div className="text-sm text-muted-foreground">Projetos realizados</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">98%</div>
                      <div className="text-sm text-muted-foreground">Satisfação do cliente</div>
                    </div>
                  </div>
                </div>
                
                {/* Right Content - Buttons */}
                <div className="space-y-4">
                  <Button 
                    variant="hero" 
                    size="lg"
                    className="w-full group"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Shield className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    Consultoria Gratuita
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="w-full group border-primary/30 hover:bg-primary hover:text-primary-foreground"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Microscope className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    Orçamento Personalizado
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;