import { Link } from 'react-router-dom';
import { MessageCircle, Instagram, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <span className="font-display text-2xl tracking-wider">
              RUN<span className="text-primary">CREW</span>
            </span>
            <p className="mt-4 text-secondary-foreground/70 text-sm leading-relaxed">
              Comunidade de corredores unidos pela paixão de superar limites e conquistar novos objetivos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-primary">
              Links Rápidos
            </h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">
                Início
              </Link>
              <Link to="/sobre" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">
                Quem Somos
              </Link>
              <Link to="/produtos" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">
                Produtos
              </Link>
              <Link to="/contato" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">
                Contato
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-primary">
              Redes Sociais
            </h4>
            <div className="flex gap-4">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:contato@runcrew.com.br"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-foreground/10 text-center">
          <p className="text-secondary-foreground/50 text-sm">
            © {currentYear} RunCrew. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
