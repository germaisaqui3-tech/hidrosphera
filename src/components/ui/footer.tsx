import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <img
                src="/lovable-uploads/5b5d3104-0e01-4807-b0b7-0c30cea62190.png"
                alt="Hidrosphera Logo"
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-white/80 leading-relaxed max-w-md">
                Especializada em dar suporte às diversas áreas do meio ambiente, 
                oferecendo excelentes soluções para necessidades relativas à área 
                ambiental na criação de projetos eficientes e econômicos.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("#inicio")}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#sobre")}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#servicos")}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#projetos")}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Projetos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#contato")}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center text-white/80">
                <Mail size={16} className="mr-3 flex-shrink-0" />
                <a 
                  href="mailto:contato@hidrosphera.com.br"
                  className="hover:text-white transition-colors"
                >
                  contato@hidrosphera.com.br
                </a>
              </div>
              <div className="flex items-center text-white/80">
                <Phone size={16} className="mr-3 flex-shrink-0" />
                <a 
                  href="tel:+5511999999999"
                  className="hover:text-white transition-colors"
                >
                  (11) 9999-9999
                </a>
              </div>
              <div className="flex items-center text-white/80">
                <MapPin size={16} className="mr-3 flex-shrink-0" />
                <span>São Paulo, SP - Brasil</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        <div className="flex flex-col md:flex-row justify-between items-center text-white/60 text-sm">
          <p>
            © {currentYear} Hidrosphera Consultoria Ambiental. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;