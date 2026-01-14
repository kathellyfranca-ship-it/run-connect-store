import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, MapPin, Instagram } from 'lucide-react';

const Contact = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      'Olá! Vim pelo site e gostaria de mais informações sobre a RunCrew.'
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-secondary-foreground mb-4">
              <span className="text-primary">CONTATO</span>
            </h1>
            <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
              Quer fazer parte da comunidade ou tem alguma dúvida? Entre em contato conosco!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-muted p-8 md:p-12 rounded-3xl text-center mb-12"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[hsl(142_70%_45%)] flex items-center justify-center">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                Fale pelo WhatsApp
              </h2>
              <p className="text-muted-foreground mb-6">
                A forma mais rápida de entrar em contato conosco. Respondemos em poucos minutos!
              </p>
              <Button
                variant="whatsapp"
                size="xl"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle size={20} />
                Iniciar Conversa
              </Button>
            </motion.div>

            {/* Other Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid md:grid-cols-3 gap-6"
            >
              <div className="bg-card p-6 rounded-2xl shadow-card text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-1">E-mail</h3>
                <a
                  href="mailto:contato@runcrew.com.br"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  contato@runcrew.com.br
                </a>
              </div>

              <div className="bg-card p-6 rounded-2xl shadow-card text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-1">Instagram</h3>
                <a
                  href="https://instagram.com/runcrew"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  @runcrew
                </a>
              </div>

              <div className="bg-card p-6 rounded-2xl shadow-card text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-1">Localização</h3>
                <p className="text-sm text-muted-foreground">
                  São Paulo, SP
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-12 bg-secondary">
        <div className="container px-4">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="font-display text-2xl text-secondary-foreground mb-3">
              Horário de Atendimento
            </h3>
            <p className="text-secondary-foreground/70">
              Segunda a Sexta: 9h às 18h<br />
              Sábado: 9h às 12h
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
