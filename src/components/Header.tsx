import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    // Se não estamos na página inicial, navegue para ela primeiro
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 120; // Altura do header + padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const menuItems = [
    { label: 'Início', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { label: 'Sobre', action: () => scrollToSection('about') },
    { label: 'Serviços', action: () => scrollToSection('services') },
    // { label: 'Parceiros', action: () => scrollToSection('clients') },
    // { label: 'Portfólio', action: () => scrollToSection('portfolio') },
    { label: 'Contato', action: () => scrollToSection('contact') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/fcf401fe-3388-42b7-8866-12a428c4f724.png" 
              alt="HIDROSPHERA Logo" 
              className="h-16 w-auto hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium bg-transparent border-none cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => scrollToSection('contact')}
            >
              Entre em Contato
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    item.action();
                    setIsMenuOpen(false);
                  }}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium bg-transparent border-none cursor-pointer text-left"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                variant="hero" 
                size="sm" 
                className="w-fit"
                onClick={() => {
                  scrollToSection('contact');
                  setIsMenuOpen(false);
                }}
              >
                Entre em Contato
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;