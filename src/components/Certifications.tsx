import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Award, FileCheck, Globe, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      icon: Shield,
      title: 'Licenças Ambientais',
      items: ['IBAMA', 'Órgãos Estaduais', 'Municipais'],
      description: 'Registros e licenças para operação em consultoria ambiental'
    },
    {
      icon: Award,
      title: 'Certificações ISO',
      items: ['ISO 14001', 'ISO 9001', 'ISO 45001'],
      description: 'Certificações internacionais de qualidade e gestão ambiental'
    },
    {
      icon: FileCheck,
      title: 'Registros Profissionais',
      items: ['CREA-SP', 'CREA-RJ', 'CRQ', 'CRBio'],
      description: 'Registros nos conselhos profissionais competentes'
    },
    {
      icon: Globe,
      title: 'Acreditações',
      items: ['INMETRO', 'ANA', 'CETESB'],
      description: 'Acreditações para análises e estudos ambientais'
    }
  ];

  const achievements = [
    'Empresa certificada para consultoria ambiental',
    'Laboratório credenciado para análises ambientais',
    'Equipe técnica registrada nos órgãos competentes',
    'Processos auditados e certificados',
    'Participação em câmaras técnicas ambientais'
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Certificações e <span className="text-primary">Licenças</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nossa qualificação técnica é respaldada por certificações e registros oficiais, 
              garantindo a conformidade legal e a excelência de nossos serviços.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <cert.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground">
                    {cert.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground">
                    {cert.description}
                  </p>
                  
                  <div className="space-y-2">
                    {cert.items.map((item, itemIndex) => (
                      <Badge key={itemIndex} variant="outline" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Achievements Section */}
          <div className="bg-gradient-subtle rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              Qualificações e Reconhecimentos
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">
                    {achievement}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;