import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { ChevronRight, Users, Target, Heart } from 'lucide-react';
import heroImage from '@/assets/hero-runners.jpg';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Comunidade de corredores"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="container relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-secondary-foreground leading-none mb-6">
              CORRA COM<br />
              <span className="text-primary">PROPÓSITO</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary-foreground/80 mb-8 max-w-lg">
              Somos uma comunidade de corredores unidos pela paixão de superar limites e conquistar novos objetivos juntos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/sobre">
                  Conheça a Comunidade
                  <ChevronRight size={20} />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/produtos">
                  Ver Produtos
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              NOSSA ESSÊNCIA
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Valores que guiam cada passo da nossa jornada
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Comunidade',
                description: 'Correr junto é mais do que treinar. É criar laços, compartilhar conquistas e se apoiar nos desafios.',
              },
              {
                icon: Target,
                title: 'Superação',
                description: 'Cada treino é uma oportunidade de ser melhor que ontem. Celebramos cada passo da evolução.',
              },
              {
                icon: Heart,
                title: 'Paixão',
                description: 'O amor pela corrida nos move. É o que nos faz acordar cedo, enfrentar o frio e comemorar cada quilômetro.',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-8 rounded-2xl shadow-card text-center group hover:shadow-athletic transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <value.icon size={28} className="text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl mb-3 text-card-foreground">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-display text-4xl md:text-5xl text-secondary-foreground mb-6">
              VISTA A CAMISA DA<br />
              <span className="text-primary">NOSSA COMUNIDADE</span>
            </h2>
            <p className="text-secondary-foreground/70 max-w-xl mx-auto mb-8">
              Confira nossa linha exclusiva de camisetas, bonés e acessórios. Faça seu pedido fácil pelo WhatsApp!
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/produtos">
                Ver Todos os Produtos
                <ChevronRight size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
