import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-lg shadow-primary/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent hover:opacity-80 transition-opacity"
              >
                Whale Wzrd
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('services')}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection('cases')}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                Кейсы
              </button>
              <button
                onClick={() => scrollToSection('blog')}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                Блог
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                Контакты
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
              >
                Получить консультацию
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg bg-card/50 backdrop-blur-sm border border-border"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-background/95 backdrop-blur-xl"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative h-full flex flex-col items-center justify-center space-y-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-2xl text-foreground/80 hover:text-primary transition-colors"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection('cases')}
              className="text-2xl text-foreground/80 hover:text-primary transition-colors"
            >
              Кейсы
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="text-2xl text-foreground/80 hover:text-primary transition-colors"
            >
              Блог
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-2xl text-foreground/80 hover:text-primary transition-colors"
            >
              Контакты
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
            >
              Получить консультацию
            </Button>
          </div>
        </div>
      )}
    </>
  );
}