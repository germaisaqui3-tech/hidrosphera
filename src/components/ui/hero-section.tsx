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
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-20 text-white/10 animate-float">
          <Droplets size={60} />
        </div>
        <div className="absolute top-20 right-32 text-white/10 animate-float" style={{ animationDelay: "1s" }}>
          <Leaf size={45} />
        </div>
        <div className="absolute bottom-32 left-32 text-white/10 animate-float" style={{ animationDelay: "2s" }}>
          <Recycle size={40} />
        </div>
        <div className="absolute bottom-40 right-20 text-white/10 animate-float" style={{ animationDelay: "0.5s" }}>
          <Droplets size={35} />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Hero Title */}
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 animate-fade-in tracking-tight">
            HIDROS<span className="text-secondary-light">PHERA</span>
          </h1>

          {/* Hero Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-4 font-light animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Consultoria Ambiental especializada em soluções sustentáveis
          </p>

          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in font-body" style={{ animationDelay: "0.3s" }}>
            Oferecemos excelentes soluções para suas necessidades ambientais com projetos eficientes, sustentáveis e econômicos
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in mb-16" style={{ animationDelay: "0.4s" }}>
            <Button
              onClick={() => scrollToSection("#servicos")}
              size="lg"
              className="bg-white text-primary hover:bg-gray-50 transition-all duration-300 font-semibold px-8 py-4 rounded-full text-sm uppercase tracking-wide"
            >
              NOSSOS SERVIÇOS
            </Button>
            
            <Button
              onClick={() => scrollToSection("#contato")}
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 font-semibold px-8 py-4 rounded-full text-sm uppercase tracking-wide"
            >
              CONTATO
            </Button>
          </div>

          {/* Hero Stats - Moved to separate icons section */}
          <div className="flex justify-center items-center space-x-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Droplets className="text-white" size={24} />
            </div>
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Leaf className="text-white" size={24} />
            </div>
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Recycle className="text-white" size={24} />
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