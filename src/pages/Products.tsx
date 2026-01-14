import { Layout } from '@/components/layout/Layout';
import { ProductCard } from '@/components/products/ProductCard';
import { useProducts } from '@/hooks/useProducts';
import { motion } from 'framer-motion';
import { Loader2, PackageX } from 'lucide-react';

const Products = () => {
  const { products, loading, error } = useProducts();

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
              NOSSOS <span className="text-primary">PRODUTOS</span>
            </h1>
            <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
              Vista a camisa da RunCrew! Confira nossa linha exclusiva de produtos e faça seu pedido diretamente pelo WhatsApp.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-20">
        <div className="container px-4">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-10 h-10 animate-spin text-primary" />
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-destructive">{error}</p>
            </div>
          ) : products.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <PackageX className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="font-display text-2xl text-foreground mb-2">
                Nenhum produto disponível
              </h3>
              <p className="text-muted-foreground">
                Novos produtos serão adicionados em breve!
              </p>
            </motion.div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* WhatsApp Info */}
      <section className="py-12 bg-muted">
        <div className="container px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-display text-2xl text-foreground mb-3">
              Como funciona?
            </h3>
            <p className="text-muted-foreground text-sm">
              Escolha o produto desejado e clique em "Comprar via WhatsApp". Você será direcionado para nosso WhatsApp com uma mensagem pré-preenchida. Basta confirmar o pedido e combinar a forma de pagamento e entrega!
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
