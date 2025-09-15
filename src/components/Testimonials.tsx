import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Carlos Silva',
      position: 'Diretor de Sustentabilidade',
      company: 'Indústria Alpha',
      content: 'A HIDROSPHERA transformou nossa gestão ambiental. O projeto de tratamento de efluentes reduziu nossos custos em 40% e garantiu total compliance ambiental.',
      rating: 5,
      initials: 'CS'
    },
    {
      name: 'Ana Costa',
      position: 'Gerente de Operações',
      company: 'Empresa Beta',
      content: 'Excelente trabalho no licenciamento ambiental. A equipe é altamente qualificada e conseguiu acelerar nosso processo de aprovação em 6 meses.',
      rating: 5,
      initials: 'AC'
    },
    {
      name: 'Roberto Lima',
      position: 'CEO',
      company: 'Corporação Gamma',
      content: 'Parceria de longa data. A HIDROSPHERA nos ajudou a implementar um sistema de energia solar que já gerou uma economia de R$ 2 milhões anuais.',
      rating: 5,
      initials: 'RL'
    },
    {
      name: 'Marina Santos',
      position: 'Diretora Técnica',
      company: 'Grupo Delta',
      content: 'Profissionais extremamente competentes. O monitoramento ambiental implementado por eles nos deu total segurança e credibilidade junto aos órgãos reguladores.',
      rating: 5,
      initials: 'MS'
    },
    {
      name: 'Paulo Henrique',
      position: 'Coordenador Ambiental',
      company: 'TechCorp',
      content: 'Superaram nossas expectativas no projeto de gestão de resíduos. Implementaram soluções inovadoras que aumentaram nossa taxa de reciclagem para 95%.',
      rating: 5,
      initials: 'PH'
    },
    {
      name: 'Luciana Oliveira',
      position: 'Gerente de Sustentabilidade',
      company: 'EcoTech Solutions',
      content: 'A consultoria especializada da HIDROSPHERA foi fundamental para obtermos a certificação ISO 14001. Processo eficiente e muito bem estruturado.',
      rating: 5,
      initials: 'LO'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              O que Nossos <span className="text-primary">Clientes Dizem</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A confiança dos nossos clientes é construída através de resultados concretos e 
              soluções que realmente fazem a diferença em seus negócios.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50 relative overflow-hidden"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-8 h-8 text-primary" />
                </div>

                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.position}
                      </div>
                      <div className="text-sm text-primary font-medium">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              </Card>
            ))}
          </div>

          {/* Bottom Stats */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Taxa de Satisfação</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">Clientes Ativos</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">23 Anos</div>
                <div className="text-sm text-muted-foreground">De Experiência</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;