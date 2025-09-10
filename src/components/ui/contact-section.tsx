import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle
} from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contato@hidrosphera.com.br",
      link: "mailto:contato@hidrosphera.com.br"
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 9999-9999",
      link: "tel:+5511999999999"
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "São Paulo, SP - Brasil",
      link: null
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Seg-Sex: 8h às 18h",
      link: null
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem Enviada!",
        description: "Entraremos em contato em breve. Obrigado pelo interesse!",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Entre em Contato
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Estamos prontos para atender suas necessidades ambientais. 
              Fale conosco e descubra como podemos ajudar seu projeto.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center">
                  <Send className="mr-3 text-primary" size={24} />
                  Solicite um Orçamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Seu nome completo"
                        className="border-border focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="seu@email.com"
                        className="border-border focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(11) 99999-9999"
                        className="border-border focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Nome da empresa"
                        className="border-border focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Serviço de Interesse</Label>
                    <Input
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      placeholder="Ex: Licenciamento Ambiental, EIA/RIMA, etc."
                      className="border-border focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Descreva seu projeto ou necessidade..."
                      rows={4}
                      className="border-border focus:ring-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-ocean text-white hover:shadow-ocean transition-all duration-300 py-3"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Enviando...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send size={18} className="mr-2" />
                        Enviar Mensagem
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Cards */}
              <div className="grid gap-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-soft hover:shadow-ocean transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-ocean rounded-lg flex items-center justify-center">
                          <info.icon className="text-white" size={20} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{info.title}</h3>
                          {info.link ? (
                            <a 
                              href={info.link}
                              className="text-primary hover:text-primary-light transition-colors"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{info.content}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Additional Info */}
              <Card className="border-0 shadow-soft bg-gradient-nature">
                <CardContent className="p-6 text-white">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <CheckCircle className="mr-3" size={24} />
                    Por que nos escolher?
                  </h3>
                  <ul className="space-y-2 text-white/90">
                    <li>✓ Resposta rápida em até 24 horas</li>
                    <li>✓ Orçamento gratuito e sem compromisso</li>
                    <li>✓ Equipe especializada e experiente</li>
                    <li>✓ Acompanhamento personalizado</li>
                    <li>✓ Preços competitivos</li>
                  </ul>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="border-0 shadow-soft bg-accent">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Precisa de uma solução urgente?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Entre em contato direto conosco
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button 
                      variant="outline"
                      className="flex-1"
                      asChild
                    >
                      <a href="tel:+5511999999999">
                        <Phone size={16} className="mr-2" />
                        Ligar Agora
                      </a>
                    </Button>
                    <Button 
                      className="flex-1 bg-gradient-ocean text-white"
                      asChild
                    >
                      <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;