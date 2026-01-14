import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useProducts } from '@/hooks/useProducts';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Product, ProductFormData } from '@/types/product';
import { toast } from 'sonner';
import { Loader2, LogOut, Plus, Pencil, Trash2, Package } from 'lucide-react';

const AdminDashboard = () => {
  const { logout } = useAuth();
  const { products, loading, addProduct, updateProduct, deleteProduct } = useProducts();
  const navigate = useNavigate();
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formLoading, setFormLoading] = useState(false);
  const [formData, setFormData] = useState<ProductFormData>({
    name: '',
    price: 0,
    description: '',
    stock: 0,
    imageUrl: '',
  });

  const resetForm = () => {
    setFormData({
      name: '',
      price: 0,
      description: '',
      stock: 0,
      imageUrl: '',
    });
    setEditingProduct(null);
  };

  const handleOpenDialog = (product?: Product) => {
    if (product) {
      setEditingProduct(product);
      setFormData({
        name: product.name,
        price: product.price,
        description: product.description,
        stock: product.stock,
        imageUrl: product.imageUrl,
      });
    } else {
      resetForm();
    }
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    resetForm();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);

    try {
      if (editingProduct) {
        await updateProduct(editingProduct.id, formData);
        toast.success('Produto atualizado com sucesso!');
      } else {
        await addProduct(formData);
        toast.success('Produto criado com sucesso!');
      }
      handleCloseDialog();
    } catch (error) {
      toast.error('Erro ao salvar produto');
    } finally {
      setFormLoading(false);
    }
  };

  const handleDelete = async (product: Product) => {
    if (confirm(`Tem certeza que deseja excluir "${product.name}"?`)) {
      try {
        await deleteProduct(product.id);
        toast.success('Produto excluído com sucesso!');
      } catch (error) {
        toast.error('Erro ao excluir produto');
      }
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate('/admin/login');
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-muted">
      {/* Header */}
      <header className="bg-secondary text-secondary-foreground py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Package className="w-6 h-6 text-primary" />
            <span className="font-display text-xl">
              ADMIN <span className="text-primary">PANEL</span>
            </span>
          </div>
          <Button variant="ghost" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="font-display text-2xl">
              Gerenciar <span className="text-primary">Produtos</span>
            </CardTitle>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={() => handleOpenDialog()}>
                  <Plus className="w-4 h-4 mr-2" />
                  Novo Produto
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle className="font-display text-xl">
                    {editingProduct ? 'Editar Produto' : 'Novo Produto'}
                  </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="price">Preço (R$)</Label>
                    <Input
                      id="price"
                      type="number"
                      step="0.01"
                      min="0"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) || 0 })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Descrição</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      rows={3}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="stock">Estoque</Label>
                    <Input
                      id="stock"
                      type="number"
                      min="0"
                      value={formData.stock}
                      onChange={(e) => setFormData({ ...formData, stock: parseInt(e.target.value) || 0 })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="imageUrl">URL da Imagem</Label>
                    <Input
                      id="imageUrl"
                      type="url"
                      placeholder="https://exemplo.com/imagem.jpg"
                      value={formData.imageUrl}
                      onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                      required
                    />
                  </div>
                  <div className="flex gap-3 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1"
                      onClick={handleCloseDialog}
                    >
                      Cancelar
                    </Button>
                    <Button type="submit" className="flex-1" disabled={formLoading}>
                      {formLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Salvando...
                        </>
                      ) : (
                        'Salvar'
                      )}
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-12">
                <Package className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground">Nenhum produto cadastrado</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Imagem</TableHead>
                      <TableHead>Nome</TableHead>
                      <TableHead>Preço</TableHead>
                      <TableHead>Estoque</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell>
                          <img
                            src={product.imageUrl || '/placeholder.svg'}
                            alt={product.name}
                            className="w-12 h-12 object-cover rounded-lg"
                          />
                        </TableCell>
                        <TableCell className="font-medium">{product.name}</TableCell>
                        <TableCell>{formatPrice(product.price)}</TableCell>
                        <TableCell>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              product.stock === 0
                                ? 'bg-destructive/10 text-destructive'
                                : product.stock <= 5
                                ? 'bg-warning/10 text-warning'
                                : 'bg-success/10 text-success'
                            }`}
                          >
                            {product.stock} un.
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleOpenDialog(product)}
                            >
                              <Pencil className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleDelete(product)}
                            >
                              <Trash2 className="w-4 h-4 text-destructive" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminDashboard;
