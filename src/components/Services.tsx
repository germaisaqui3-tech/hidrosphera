import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Droplets, 
  Leaf, 
  Zap, 
  Recycle,
  Shield,
  Microscope,
  ArrowRight
} from 'lucide-react';
import labTesting from '@/assets/lab-testing.jpg';
import renewableEnergyWide from '@/assets/renewable-energy-wide.jpg';
import fieldWork from '@/assets/field-work.jpg';
import wasteManagementWide from '@/assets/waste-management-wide.jpg';

const Services = () => {
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
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50"
              >
                {/* Service Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-primary/70 group-hover:bg-gradient-primary/60 transition-colors duration-300"></div>
                  
                  {/* Icon and Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-background/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                      {service.highlight}
                    </Badge>
                  </div>
                </div>

                {/* Service Content */}
                <CardHeader>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>

                   {/* Features List */}
                   <div className="space-y-2 max-h-48 overflow-y-auto">
                     {service.features.map((feature, idx) => (
                       <div key={idx} className="flex items-start space-x-2">
                         <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                         <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                       </div>
                     ))}
                   </div>

                  <Button 
                    variant="outline" 
                    className="w-full group/btn mt-4"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Saiba Mais
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-subtle rounded-2xl p-8 border border-border/50">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Precisa de uma solução personalizada?
              </h3>
              <p className="text-muted-foreground mb-6">
                Nossa equipe de especialistas está pronta para desenvolver a solução ideal 
                para os desafios específicos do seu projeto.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Shield className="mr-2 w-5 h-5" />
                  Consultoria Gratuita
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Microscope className="mr-2 w-5 h-5" />
                  Orçamento Personalizado
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;