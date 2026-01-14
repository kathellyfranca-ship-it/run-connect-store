import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types/product';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Olá! Tenho interesse no produto:\n\n*${product.name}*\nPreço: ${formatPrice(product.price)}\n\nGostaria de mais informações para finalizar a compra.`
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  const isInStock = product.stock > 0;
  const isLowStock = product.stock > 0 && product.stock <= 5;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="overflow-hidden group hover:shadow-athletic transition-all duration-300 bg-card">
        <div className="aspect-square overflow-hidden relative">
          <img
            src={product.imageUrl || '/placeholder.svg'}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {!isInStock && (
            <div className="absolute inset-0 bg-secondary/80 flex items-center justify-center">
              <Badge variant="destructive" className="text-sm font-semibold">
                Esgotado
              </Badge>
            </div>
          )}
          {isLowStock && isInStock && (
            <Badge className="absolute top-3 right-3 bg-warning text-warning-foreground">
              Últimas unidades
            </Badge>
          )}
        </div>
        <CardContent className="p-4 space-y-3">
          <div>
            <h3 className="font-semibold text-lg text-card-foreground line-clamp-1">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
              {product.description}
            </p>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="font-display text-2xl text-primary">
              {formatPrice(product.price)}
            </span>
            {isInStock && (
              <span className="text-xs text-muted-foreground">
                {product.stock} em estoque
              </span>
            )}
          </div>

          <Button
            variant="whatsapp"
            className="w-full"
            onClick={handleWhatsAppClick}
            disabled={!isInStock}
          >
            <MessageCircle size={18} />
            Comprar via WhatsApp
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};
