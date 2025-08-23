import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface ProductInterestFormProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

interface ProductOption {
  id: string;
  name: string;
}

const ProductInterestForm = ({ isOpen, onClose, productName }: ProductInterestFormProps) => {
  const { toast } = useToast();
  const [products, setProducts] = useState<ProductOption[]>([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    product_name: productName || "",
    message: "",
  });

  useEffect(() => {
    setForm((prev) => ({ ...prev, product_name: productName || prev.product_name }));
  }, [productName]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("id, name")
        .eq("is_active", true)
        .order("display_order", { ascending: true });
      if (!error) setProducts(data as ProductOption[]);
    };
    fetchProducts();
  }, []);

  const handleChange = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from("product_interests").insert({
      name: form.name,
      email: form.email,
      phone: form.phone || null,
      product_name: form.product_name || "General",
      message: form.message || null,
    });
    setLoading(false);
    if (error) {
      toast({ title: "Submission failed", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: "Thanks for your interest!", description: "We will contact you within 24 hours." });
    onClose();
    setForm({ name: "", email: "", phone: "", product_name: "", message: "" });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Are You Interested?
          </DialogTitle>
        </DialogHeader>
        <Card className="border-0 shadow-none">
          <CardContent className="p-0">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input id="name" required value={form.name} onChange={(e) => handleChange("name", e.target.value)} />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" required value={form.email} onChange={(e) => handleChange("email", e.target.value)} />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} />
              </div>
              <div>
                <Label>Product</Label>
                <Select value={form.product_name} onValueChange={(v) => handleChange("product_name", v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a product" />
                  </SelectTrigger>
                  <SelectContent>
                    {products.map((p) => (
                      <SelectItem key={p.id} value={p.name}>{p.name}</SelectItem>
                    ))}
                    <SelectItem value="General">General</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" rows={3} value={form.message} onChange={(e) => handleChange("message", e.target.value)} />
              </div>

              <div className="bg-gradient-card p-3 rounded-lg text-sm text-muted-foreground">
                <div className="flex items-center gap-2 font-medium text-foreground">
                  <Zap className="h-4 w-4 text-primary" /> What happens next?
                </div>
                <ul className="mt-2 list-disc pl-5">
                  <li>We review and respond within 24 hours</li>
                  <li>Quick call to understand your needs</li>
                  <li>Personalized plan and next steps</li>
                </ul>
              </div>

              <Button type="submit" disabled={loading} className="w-full">
                {loading ? "Submitting..." : (<>
                  Send Interest <Send className="ml-2 h-4 w-4" />
                </>)}
              </Button>
            </form>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default ProductInterestForm;
