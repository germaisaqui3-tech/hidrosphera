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
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Entre em <span className="text-secondary">Contato</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-body">
              Estamos prontos para atender suas necessidades ambientais. 
              Fale conosco e descubra como podemos ajudar seu projeto.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <info.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{info.title}</h3>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-primary hover:text-primary/80 transition-colors font-body"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600 font-body">{info.content}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Contact Form Card */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Send className="mr-3 text-primary" size={24} />
                  Formulário de Mensagens
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-700 font-body">Nome Completo</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Seu nome completo"
                        className="mt-1 border-gray-200 focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-body">E-mail</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="seu@email.com"
                        className="mt-1 border-gray-200 focus:border-primary focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-gray-700 font-body">Telefone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(11) 99999-9999"
                        className="mt-1 border-gray-200 focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company" className="text-gray-700 font-body">Empresa</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Nome da empresa"
                        className="mt-1 border-gray-200 focus:border-primary focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service" className="text-gray-700 font-body">Serviço de Interesse</Label>
                    <Input
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      placeholder="Ex: Licenciamento Ambiental, EIA/RIMA, etc."
                      className="mt-1 border-gray-200 focus:border-primary focus:ring-primary"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-body">Mensagem</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Descreva seu projeto ou necessidade..."
                      rows={4}
                      className="mt-1 border-gray-200 focus:border-primary focus:ring-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-semibold"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
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
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-6">
              <div className="bg-primary rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">
                  Por que escolher a Hidrosphera?
                </h3>
                <ul className="space-y-3 text-white/90 font-body">
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 flex-shrink-0" size={16} />
                    Resposta rápida em até 24 horas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 flex-shrink-0" size={16} />
                    Orçamento gratuito e sem compromisso
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 flex-shrink-0" size={16} />
                    Equipe especializada e experiente
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 flex-shrink-0" size={16} />
                    Acompanhamento personalizado
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 flex-shrink-0" size={16} />
                    Preços competitivos
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Precisa de atendimento urgente?
                </h3>
                <p className="text-gray-600 mb-4 font-body">
                  Entre em contato direto conosco
                </p>
                <div className="flex flex-col gap-3">
                  <a 
                    href="tel:+5511999999999"
                    className="bg-secondary hover:bg-secondary/90 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                  >
                    <Phone size={16} className="mr-2" />
                    Ligar Agora
                  </a>
                  <a 
                    href="https://wa.me/5511999999999" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;