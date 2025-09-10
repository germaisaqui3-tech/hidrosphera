import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Droplets, Recycle } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 text-primary-lighter/20 animate-float">
          <Droplets size={40} />
        </div>
        <div className="absolute top-32 right-20 text-secondary-lighter/20 animate-float" style={{ animationDelay: "1s" }}>
          <Leaf size={35} />
        </div>
        <div className="absolute bottom-20 left-20 text-primary-lighter/20 animate-float" style={{ animationDelay: "2s" }}>
          <Recycle size={30} />
        </div>
        <div className="absolute bottom-40 right-10 text-secondary-lighter/20 animate-float" style={{ animationDelay: "0.5s" }}>
          <Droplets size={25} />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Hero Title */}
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 animate-fade-in">
            Soluções Ambientais
            <span className="block text-secondary-light">Inteligentes</span>
          </h1>

          {/* Hero Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Oferecemos excelentes soluções para necessidades relativas à área ambiental 
            na criação de projetos eficientes e econômicos.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button
              onClick={() => scrollToSection("#servicos")}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 hover:shadow-soft transition-all duration-300 font-semibold px-8 py-3"
            >
              Nossos Serviços
              <ArrowRight className="ml-2" size={20} />
            </Button>
            
            <Button
              onClick={() => scrollToSection("#contato")}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300 font-semibold px-8 py-3"
            >
              Fale Conosco
            </Button>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-white/80">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80">Projetos Realizados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-white/80">Satisfação dos Clientes</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;