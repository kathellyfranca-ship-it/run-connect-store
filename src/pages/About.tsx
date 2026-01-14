import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Target, Users, Trophy, Calendar } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-secondary-foreground mb-6">
              QUEM <span className="text-primary">SOMOS</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary-foreground/80">
              Uma comunidade apaixonada por corrida, unida pelo desejo de evoluir juntos e transformar vidas através do esporte.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                NOSSA <span className="text-primary">HISTÓRIA</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A RunCrew nasceu da paixão de um grupo de amigos que se encontravam todas as manhãs para correr. O que começou como treinos informais se transformou em algo maior: uma comunidade vibrante de pessoas que compartilham o amor pela corrida.
                </p>
                <p>
                  Desde 2020, temos crescido e acolhido corredores de todos os níveis. Iniciantes encontram apoio para dar seus primeiros passos, enquanto atletas experientes encontram parceiros para treinos mais desafiadores.
                </p>
                <p>
                  Mais do que um grupo de corrida, somos uma família. Celebramos cada conquista, apoiamos nos momentos difíceis e criamos memórias inesquecíveis a cada quilômetro percorrido juntos.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { number: '200+', label: 'Membros Ativos' },
                { number: '50k+', label: 'KM Percorridos' },
                { number: '30+', label: 'Provas Completadas' },
                { number: '4', label: 'Anos de História' },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-muted p-6 rounded-2xl text-center"
                >
                  <span className="font-display text-4xl md:text-5xl text-primary block mb-2">
                    {stat.number}
                  </span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
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
              NOSSOS <span className="text-primary">VALORES</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: 'Inclusão',
                description: 'Todo mundo é bem-vindo, independente do ritmo ou experiência.',
              },
              {
                icon: Target,
                title: 'Disciplina',
                description: 'Consistência nos treinos é a chave para alcançar nossos objetivos.',
              },
              {
                icon: Trophy,
                title: 'Celebração',
                description: 'Cada conquista, grande ou pequena, merece ser comemorada.',
              },
              {
                icon: Calendar,
                title: 'Compromisso',
                description: 'Estamos presentes, apoiando uns aos outros em cada passo.',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-2xl shadow-card"
              >
                <div className="w-12 h-12 mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <value.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-xl mb-2 text-card-foreground">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-4xl md:text-5xl text-secondary-foreground mb-8">
              NOSSA <span className="text-primary">MISSÃO</span>
            </h2>
            <p className="text-xl md:text-2xl text-secondary-foreground/80 leading-relaxed">
              "Inspirar pessoas a descobrirem seu potencial através da corrida, criando uma comunidade acolhedora onde todos possam evoluir juntos, um passo de cada vez."
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
