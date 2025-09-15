import { Card, CardContent } from '@/components/ui/card';
import { 
  Trophy,
  Users,
  Briefcase,
  Award,
  Clock,
  Leaf
} from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Clock,
      number: '23+',
      label: 'Anos de Experiência',
      description: 'Desde 2001 oferecendo soluções ambientais'
    },
    {
      icon: Briefcase,
      number: '500+',
      label: 'Projetos Concluídos',
      description: 'Projetos ambientais executados com sucesso'
    },
    {
      icon: Users,
      number: '150+',
      label: 'Clientes Atendidos',
      description: 'Empresas que confiam em nossos serviços'
    },
    {
      icon: Award,
      number: '15+',
      label: 'Certificações',
      description: 'Certificações e acreditações técnicas'
    },
    {
      icon: Leaf,
      number: '1M+',
      label: 'Toneladas CO₂',
      description: 'Redução de emissões alcançada'
    },
    {
      icon: Trophy,
      number: '98%',
      label: 'Satisfação',
      description: 'Índice de satisfação dos clientes'
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Resultados que <span className="text-primary">Falam por Si</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mais de duas décadas construindo um futuro mais sustentável através de 
              soluções ambientais eficientes e inovadoras.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className="group text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50 bg-background/80 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  {/* Icon */}
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-6 h-6 text-primary-foreground" />
                  </div>

                  {/* Number */}
                  <div className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {stat.number}
                  </div>

                  {/* Label */}
                  <div className="text-sm font-semibold text-foreground mb-2">
                    {stat.label}
                  </div>

                  {/* Description */}
                  <div className="text-xs text-muted-foreground leading-relaxed">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-2 text-muted-foreground">
              <Leaf className="w-5 h-5 text-primary" />
              <span className="text-sm">
                Compromisso com a sustentabilidade e responsabilidade ambiental
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;