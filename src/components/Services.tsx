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
      title: 'Análise e Tratamento de Águas',
      description: 'Monitoramento completo da qualidade da água, análises físico-químicas e microbiológicas.',
      image: labTesting,
      features: ['Análises laboratoriais', 'Tratamento de efluentes', 'Monitoramento contínuo', 'Consultoria técnica'],
      highlight: 'Laboratório certificado'
    },
    {
      icon: Zap,
      title: 'Energia Renovável',
      description: 'Projetos sustentáveis em energia solar, eólica e soluções de eficiência energética.',
      image: renewableEnergyWide,
      features: ['Energia solar', 'Energia eólica', 'Eficiência energética', 'Consultoria em sustentabilidade'],
      highlight: 'Certificação ANEEL'
    },
    {
      icon: Microscope,
      title: 'Consultoria Ambiental',
      description: 'Assessoria especializada em licenciamento ambiental e estudos de impacto.',
      image: fieldWork,
      features: ['Licenciamento ambiental', 'EIA/RIMA', 'Monitoramento ambiental', 'Perícias técnicas'],
      highlight: 'Equipe multidisciplinar'
    },
    {
      icon: Recycle,
      title: 'Gestão de Resíduos',
      description: 'Soluções completas para gerenciamento, tratamento e destinação adequada de resíduos.',
      image: wasteManagementWide,
      features: ['Gestão de resíduos', 'Reciclagem', 'Compostagem', 'Destinação final'],
      highlight: 'ISO 14001'
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
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
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