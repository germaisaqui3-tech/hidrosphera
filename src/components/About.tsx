import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Users, Target, Lightbulb, GraduationCap, Shield, FileCheck, Globe, User, Beaker, Briefcase, Mail } from 'lucide-react';
const About = () => {
  const features = [{
    icon: Award,
    title: 'Excelência',
    description: 'Mais de 24 anos de experiência em soluções ambientais sustentáveis'
  }, {
    icon: Users,
    title: 'Equipe Especializada',
    description: 'Profissionais qualificados em diversas áreas ambientais'
  }, {
    icon: Target,
    title: 'Resultados Eficientes',
    description: 'Projetos econômicos e de alta performance para nossos clientes'
  }, {
    icon: Lightbulb,
    title: 'Inovação',
    description: 'Soluções tecnológicas avançadas para desafios ambientais'
  }];
  return <section id="about" className="py-20 bg-accent/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sobre a <span className="text-primary">HIDROSPHERA</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A HIDROSPHERA é estruturada por uma equipe titulada e qualificada, apresentando um corpo técnico multidisciplinar 
              para dar suporte às diversas áreas do meio ambiente. Oferecemos excelência em soluções ambientais desde 2001.
            </p>
          </div>

          {/* Technical Team Section */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2 space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">Corpo Técnico Multidisciplinar</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nossa equipe é composta por profissionais titulados e qualificados em diversas áreas ambientais:
                  engenheiros ambientais, químicos, biólogos, geólogos e especialistas em sustentabilidade.
                  Cada projeto é conduzido por especialistas com formação específica e experiência comprovada.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 lg:justify-end">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <GraduationCap className="w-3 h-3" />
                  Mestres e Doutores
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  Certificações Técnicas
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <FileCheck className="w-3 h-3" />
                  Registro nos CREAs
                </Badge>
              </div>
            </div>
          </div>

          {/* Features Grid - Full Width */}
          <div className="mb-16">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team Members Section - Full Width */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Nossa Equipe</h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Conheça os profissionais especializados que lideram nossos projetos ambientais.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Cristiane Mayara */}
              <Card className="hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Cristiane Mayara Reis Oliveira
                      </h4>
                      <div className="space-y-1 mb-3">
                        <Badge variant="secondary" className="text-xs">
                          <GraduationCap className="w-3 h-3 mr-1" />
                          Engenheira Ambiental e Sanitarista
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          <Shield className="w-3 h-3 mr-1" />
                          Engenheira de Segurança do Trabalho
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          <Briefcase className="w-3 h-3 mr-1" />
                          Engenheira da Qualidade
                        </Badge>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Mail className="w-4 h-4 mr-2" />
                        <span className="truncate">mro.or.come@gmail.com</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Nilcéia Terezinha */}
              <Card className="hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Nilcéia Terezinha de Oliveira
                      </h4>
                      <div className="space-y-1 mb-3">
                        <Badge variant="secondary" className="text-xs">
                          <Beaker className="w-3 h-3 mr-1" />
                          Técnica em Química
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          <Globe className="w-3 h-3 mr-1" />
                          Tecnóloga em Meio Ambiente
                        </Badge>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Mail className="w-4 h-4 mr-2" />
                        <span className="truncate">noliveirater@yahoo.com.br</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Mission, Vision, Values - Three Column Layout */}
          <div className="mb-16">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">Missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fornecer soluções ambientais eficientes e econômicas que contribuam para a preservação 
                  do meio ambiente e o desenvolvimento sustentável, com base em conhecimento técnico 
                  especializado e inovação tecnológica.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">Visão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser reconhecida como referência nacional em soluções ambientais inovadoras, 
                  contribuindo ativamente para um planeta mais sustentável através da excelência 
                  técnica e compromisso com resultados mensuráveis.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">Valores</h3>
                <div className="grid grid-cols-2 gap-2">
                  <ul className="space-y-1 text-muted-foreground">
                    <li className="flex items-center"><div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>Determinação</li>
                    <li className="flex items-center"><div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>Companheirismo</li>
                    <li className="flex items-center"><div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>Organização</li>
                    <li className="flex items-center"><div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>Profissionalismo</li>
                  </ul>
                  <ul className="space-y-1 text-muted-foreground">
                    <li className="flex items-center"><div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>Dinamismo</li>
                    <li className="flex items-center"><div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>Respeito</li>
                    <li className="flex items-center"><div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>Comunicação</li>
                    <li className="flex items-center"><div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>Humildade</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button variant="default" size="lg">
                Conheça Nossa História
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">100+</div>
              <div className="text-muted-foreground">Projetos Realizados</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">24+</div>
              <div className="text-muted-foreground">Anos de Experiência</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">100+</div>
              <div className="text-muted-foreground">Clientes Satisfeitos</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;