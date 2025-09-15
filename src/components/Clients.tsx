import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, Building, Factory, Zap, Droplets, Code, University } from 'lucide-react';

const ClientsAndPartners = () => {
  const clientCategories = [
    {
      title: 'Indústrias',
      icon: Factory,
      color: 'bg-blue-500',
      clients: [
        { name: 'Petrobras', sector: 'Petróleo e Gás', projects: '15+ projetos' },
        { name: 'Vale', sector: 'Mineração', projects: '12+ projetos' },
        { name: 'Braskem', sector: 'Petroquímica', projects: '8+ projetos' },
        { name: 'Suzano', sector: 'Papel e Celulose', projects: '10+ projetos' }
      ]
    },
    {
      title: 'Energia',
      icon: Zap,
      color: 'bg-yellow-500',
      clients: [
        { name: 'CPFL Energia', sector: 'Energia Elétrica', projects: '6+ projetos' },
        { name: 'Enel', sector: 'Energia Renovável', projects: '9+ projetos' },
        { name: 'Casa dos Ventos', sector: 'Energia Eólica', projects: '4+ projetos' },
        { name: 'Atlas Renewable', sector: 'Solar/Eólica', projects: '7+ projetos' }
      ]
    },
    {
      title: 'Saneamento',
      icon: Droplets,
      color: 'bg-blue-400',
      clients: [
        { name: 'SABESP', sector: 'Saneamento', projects: '20+ projetos' },
        { name: 'COPASA', sector: 'Água e Esgoto', projects: '14+ projetos' },
        { name: 'Aegea', sector: 'Saneamento', projects: '11+ projetos' },
        { name: 'BRK Ambiental', sector: 'Tratamento', projects: '8+ projetos' }
      ]
    },
    {
      title: 'Corporações',
      icon: Building,
      color: 'bg-gray-500',
      clients: [
        { name: 'Ambev', sector: 'Bebidas', projects: '5+ projetos' },
        { name: 'JBS', sector: 'Alimentos', projects: '7+ projetos' },
        { name: 'Embraer', sector: 'Aeroespacial', projects: '3+ projetos' },
        { name: 'Gerdau', sector: 'Siderurgia', projects: '6+ projetos' }
      ]
    }
  ];

  const partnerCategories = [
    {
      title: 'Parceiros Tecnológicos',
      icon: Code,
      partners: [
        { name: 'TechCorp', logo: '/lovable-uploads/08ea1e2b-5e3b-4354-a67f-a340be11a525.png' },
        { name: 'InnovateLab', logo: '/lovable-uploads/fcf401fe-3388-42b7-8866-12a428c4f724.png' },
        { name: 'EcoTech Solutions', logo: '/lovable-uploads/08ea1e2b-5e3b-4354-a67f-a340be11a525.png' },
        { name: 'GreenInnovate', logo: '/lovable-uploads/fcf401fe-3388-42b7-8866-12a428c4f724.png' }
      ]
    },
    {
      title: 'Parceiros Institucionais',
      icon: University,
      partners: [
        { name: 'Instituto Ambiental', logo: '/lovable-uploads/08ea1e2b-5e3b-4354-a67f-a340be11a525.png' },
        { name: 'Universidade Federal', logo: '/lovable-uploads/fcf401fe-3388-42b7-8866-12a428c4f724.png' },
        { name: 'Órgão Regulador', logo: '/lovable-uploads/08ea1e2b-5e3b-4354-a67f-a340be11a525.png' },
        { name: 'Fundação Verde', logo: '/lovable-uploads/fcf401fe-3388-42b7-8866-12a428c4f724.png' }
      ]
    }
  ];

  const testimonials = [
    {
      quote: "A HIDROSPHERA superou nossas expectativas com soluções inovadoras para tratamento de efluentes industriais.",
      client: "Diretor Ambiental",
      company: "Grande Indústria Petroquímica",
      project: "Sistema de Tratamento Avançado"
    },
    {
      quote: "Profissionais extremamente qualificados que entregaram resultados acima do esperado em tempo recorde.",
      client: "Gerente de Sustentabilidade",
      company: "Empresa de Energia Renovável",
      project: "Licenciamento Ambiental"
    }
  ];

  return (
    <section id="clients" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Clientes e <span className="text-primary">Parceiros</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Atendemos grandes corporações e trabalhamos com parceiros estratégicos 
              para entregar soluções ambientais de excelência e resultados comprovados.
            </p>
          </div>

          {/* Tabs for Clients and Partners */}
          <Tabs defaultValue="clients" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="clients" className="text-lg">Nossos Clientes</TabsTrigger>
              <TabsTrigger value="partners" className="text-lg">Nossos Parceiros</TabsTrigger>
            </TabsList>

            {/* Clients Tab */}
            <TabsContent value="clients" className="space-y-16">

              {/* Client Categories */}
              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                {clientCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center`}>
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {category.title}
                      </h3>
                    </div>
                    
                    <div className="grid gap-4">
                      {category.clients.map((client, index) => (
                        <Card 
                          key={index}
                          className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50"
                        >
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start">
                              <div className="space-y-1">
                                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                  {client.name}
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                  {client.sector}
                                </p>
                              </div>
                              <Badge variant="secondary" className="text-xs">
                                {client.projects}
                              </Badge>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonials */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-center text-foreground">
                  O que nossos clientes dizem
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <Card 
                      key={index}
                      className="group hover:shadow-elegant transition-all duration-300 border-border/50"
                    >
                      <CardContent className="p-6 space-y-4">
                        <blockquote className="text-muted-foreground italic leading-relaxed">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="space-y-1">
                          <div className="font-semibold text-foreground">
                            {testimonial.client}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial.company} • {testimonial.project}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Partners Tab */}
            <TabsContent value="partners" className="space-y-16">
              {/* Partner Categories */}
              <div className="space-y-16">
                {partnerCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="space-y-8">
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <category.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-2xl font-bold text-center text-foreground">
                        {category.title}
                      </h3>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {category.partners.map((partner, index) => (
                        <Card 
                          key={index}
                          className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm"
                        >
                          <CardContent className="flex items-center justify-center p-6 h-24">
                            <div className="relative w-full h-full flex items-center justify-center">
                              <img
                                src={partner.logo}
                                alt={`Logo ${partner.name}`}
                                className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded"></div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-subtle rounded-2xl p-8 border border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Quer trabalhar conosco?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Seja como cliente ou parceiro estratégico, estamos prontos para colaborar 
                e entregar soluções ambientais de excelência.
              </p>
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Entre em Contato
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsAndPartners;