import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Users,
  FileText,
  Calendar,
  Mail,
  Phone,
  Clock,
  DollarSign,
  Target,
  RefreshCw,
  Plus,
  Trash2,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  message: string;
  created_at: string;
}

interface ProductInterest {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  product_name: string;
  message?: string | null;
  created_at: string;
}

interface IdeaSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  idea_title: string;
  problem_statement: string;
  solution_description: string;
  target_audience?: string | null;
  additional_info?: string | null;
  created_at: string;
}

interface TeamApplication {
  id: string;
  name: string;
  email: string;
  position: string;
  experience: string;
  portfolio_url?: string | null;
  motivation: string;
  created_at: string;
}

interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
}

interface TeamMember {
  id: string;
  name: string;
  position: string;
  description: string;
}

const Admin = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);

  const [contact, setContact] = useState<ContactMessage[]>([]);
  const [interests, setInterests] = useState<ProductInterest[]>([]);
  const [ideas, setIdeas] = useState<IdeaSubmission[]>([]);
  const [applications, setApplications] = useState<TeamApplication[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [team, setTeam] = useState<TeamMember[]>([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [c, i, d, a, p, t] = await Promise.all([
        supabase.from("contact_messages").select("*").order("created_at", { ascending: false }),
        supabase.from("product_interests").select("*").order("created_at", { ascending: false }),
        supabase.from("idea_submissions").select("*").order("created_at", { ascending: false }),
        supabase.from("team_applications").select("*").order("created_at", { ascending: false }),
        supabase.from("products").select("id,name,tagline,description").order("display_order", { ascending: true }),
        supabase.from("team_members").select("id,name,position,description").order("display_order", { ascending: true }),
      ]);

      if (c.error) throw c.error;
      if (i.error) throw i.error;
      if (d.error) throw d.error;
      if (a.error) throw a.error;
      if (p.error) throw p.error;
      if (t.error) throw t.error;

      setContact((c.data as ContactMessage[]) || []);
      setInterests((i.data as ProductInterest[]) || []);
      setIdeas((d.data as IdeaSubmission[]) || []);
      setApplications((a.data as TeamApplication[]) || []);
      setProducts((p.data as Product[]) || []);
      setTeam((t.data as TeamMember[]) || []);
    } catch (error: any) {
      toast({ title: "Error", description: error.message || "Failed to fetch data.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const formatDate = (s: string) => new Date(s).toLocaleString();

  // Add/remove product
  const [newProduct, setNewProduct] = useState({ name: "", tagline: "", description: "" });
  const addProduct = async () => {
    if (!newProduct.name || !newProduct.tagline || !newProduct.description) {
      toast({ title: "Missing fields", description: "Fill all product fields." });
      return;
    }
    const { error } = await supabase.from("products").insert({ ...newProduct, is_active: true });
    if (error) return toast({ title: "Error", description: error.message, variant: "destructive" });
    setNewProduct({ name: "", tagline: "", description: "" });
    fetchData();
    toast({ title: "Product added" });
  };
  const removeProduct = async (id: string) => {
    const { error } = await supabase.from("products").delete().eq("id", id);
    if (error) return toast({ title: "Error", description: error.message, variant: "destructive" });
    fetchData();
    toast({ title: "Product removed" });
  };

  // Add/remove team member
  const [newMember, setNewMember] = useState({ name: "", position: "", description: "" });
  const addMember = async () => {
    if (!newMember.name || !newMember.position || !newMember.description) {
      toast({ title: "Missing fields", description: "Fill all member fields." });
      return;
    }
    const { error } = await supabase.from("team_members").insert({ ...newMember, is_active: true });
    if (error) return toast({ title: "Error", description: error.message, variant: "destructive" });
    setNewMember({ name: "", position: "", description: "" });
    fetchData();
    toast({ title: "Team member added" });
  };
  const removeMember = async (id: string) => {
    const { error } = await supabase.from("team_members").delete().eq("id", id);
    if (error) return toast({ title: "Error", description: error.message, variant: "destructive" });
    fetchData();
    toast({ title: "Team member removed" });
  };

  const stats = [
    { title: "Contact Messages", value: contact.length, icon: <Mail className="h-6 w-6" />, color: "text-blue-500" },
    { title: "Product Interests", value: interests.length, icon: <Target className="h-6 w-6" />, color: "text-green-500" },
    { title: "Idea Submissions", value: ideas.length, icon: <FileText className="h-6 w-6" />, color: "text-purple-500" },
    { title: "Team Applications", value: applications.length, icon: <Users className="h-6 w-6" />, color: "text-orange-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <div className="bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src="/lovable-uploads/eefd4944-88fe-498f-8d1e-f4b8b0ee4616.png" alt="Finitix Logo" className="h-12 w-auto" />
              <div>
                <h1 className="text-3xl font-bold">Finitix Admin Panel</h1>
                <p className="text-white/80">Manage products, team, and submissions</p>
              </div>
            </div>
            <Button onClick={fetchData} variant="secondary" disabled={loading} className="flex items-center space-x-2">
              <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
              <span>Refresh</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((s, i) => (
            <Card key={i} className="hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{s.title}</p>
                    <p className="text-3xl font-bold text-foreground">{s.value}</p>
                  </div>
                  <div className={`${s.color}`}>{s.icon}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs */}
        <Tabs defaultValue="contact" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="contact">Contact</TabsTrigger>
            <TabsTrigger value="interests">Interests</TabsTrigger>
            <TabsTrigger value="ideas">Ideas</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
          </TabsList>

          {/* Contact */}
          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>Contact Messages</span>
                </CardTitle>
                <CardDescription>General inquiries from the website</CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="flex justify-center py-8"><RefreshCw className="h-6 w-6 animate-spin text-primary" /></div>
                ) : contact.length === 0 ? (
                  <p className="text-center text-muted-foreground py-8">No messages yet.</p>
                ) : (
                  <div className="space-y-4">
                    {contact.map((m) => (
                      <Card key={m.id} className="border-l-4 border-l-blue-500">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="font-semibold text-lg">{m.name}</h4>
                              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                <span className="flex items-center"><Mail className="h-3 w-3 mr-1" />{m.email}</span>
                                {m.phone && <span className="flex items-center"><Phone className="h-3 w-3 mr-1" />{m.phone}</span>}
                              </div>
                            </div>
                            <Badge variant="outline" className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />{formatDate(m.created_at)}
                            </Badge>
                          </div>
                          <div className="bg-muted/50 p-3 rounded-lg"><p className="text-sm">{m.message}</p></div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Interests */}
          <TabsContent value="interests">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-primary" />
                  <span>Product Interests</span>
                </CardTitle>
                <CardDescription>Leads from the Products page</CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="flex justify-center py-8"><RefreshCw className="h-6 w-6 animate-spin text-primary" /></div>
                ) : interests.length === 0 ? (
                  <p className="text-center text-muted-foreground py-8">No interests yet.</p>
                ) : (
                  <div className="space-y-4">
                    {interests.map((m) => (
                      <Card key={m.id} className="border-l-4 border-l-green-500">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="font-semibold text-lg">{m.name}</h4>
                              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                <span className="flex items-center"><Mail className="h-3 w-3 mr-1" />{m.email}</span>
                                {m.phone && <span className="flex items-center"><Phone className="h-3 w-3 mr-1" />{m.phone}</span>}
                                <Badge variant="secondary">{m.product_name}</Badge>
                              </div>
                            </div>
                            <Badge variant="outline" className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />{formatDate(m.created_at)}
                            </Badge>
                          </div>
                          {m.message && <div className="bg-muted/50 p-3 rounded-lg"><p className="text-sm">{m.message}</p></div>}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Ideas */}
          <TabsContent value="ideas">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <span>Idea Submissions</span>
                </CardTitle>
                <CardDescription>Ideas shared from Work With Us</CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="flex justify-center py-8"><RefreshCw className="h-6 w-6 animate-spin text-primary" /></div>
                ) : ideas.length === 0 ? (
                  <p className="text-center text-muted-foreground py-8">No ideas yet.</p>
                ) : (
                  <div className="space-y-4">
                    {ideas.map((m) => (
                      <Card key={m.id} className="border-l-4 border-l-purple-500">
                        <CardContent className="p-6 space-y-3">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-semibold text-lg">{m.name}</h4>
                              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                <span className="flex items-center"><Mail className="h-3 w-3 mr-1" />{m.email}</span>
                                {m.phone && <span className="flex items-center"><Phone className="h-3 w-3 mr-1" />{m.phone}</span>}
                              </div>
                            </div>
                            <Badge variant="outline" className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />{formatDate(m.created_at)}
                            </Badge>
                          </div>
                          <div className="bg-muted/50 p-3 rounded-lg">
                            <p className="text-sm"><strong>Title:</strong> {m.idea_title}</p>
                            <p className="text-sm mt-2"><strong>Problem:</strong> {m.problem_statement}</p>
                            <p className="text-sm mt-2"><strong>Solution:</strong> {m.solution_description}</p>
                            {m.target_audience && <p className="text-sm mt-2"><strong>Audience:</strong> {m.target_audience}</p>}
                            {m.additional_info && <p className="text-sm mt-2"><strong>Additional:</strong> {m.additional_info}</p>}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Applications */}
          <TabsContent value="applications">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Team Applications</span>
                </CardTitle>
                <CardDescription>Team join requests</CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="flex justify-center py-8"><RefreshCw className="h-6 w-6 animate-spin text-primary" /></div>
                ) : applications.length === 0 ? (
                  <p className="text-center text-muted-foreground py-8">No applications yet.</p>
                ) : (
                  <div className="space-y-4">
                    {applications.map((m) => (
                      <Card key={m.id} className="border-l-4 border-l-orange-500">
                        <CardContent className="p-6 space-y-3">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-semibold text-lg">{m.name}</h4>
                              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                <span className="flex items-center"><Mail className="h-3 w-3 mr-1" />{m.email}</span>
                                <Badge variant="secondary">{m.position}</Badge>
                              </div>
                            </div>
                            <Badge variant="outline" className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />{formatDate(m.created_at)}
                            </Badge>
                          </div>
                          <div className="bg-muted/50 p-3 rounded-lg">
                            <p className="text-sm"><strong>Experience:</strong> {m.experience}</p>
                            {m.portfolio_url && <p className="text-sm mt-2"><strong>Portfolio:</strong> {m.portfolio_url}</p>}
                            <p className="text-sm mt-2"><strong>Motivation:</strong> {m.motivation}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Products management */}
          <TabsContent value="products" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Plus className="h-5 w-5 text-primary" />Add Product</CardTitle>
                <CardDescription>Manage items in Our Innovation Portfolio</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Input placeholder="Name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
                <Input placeholder="Tagline" value={newProduct.tagline} onChange={(e) => setNewProduct({ ...newProduct, tagline: e.target.value })} />
                <Textarea placeholder="Description" value={newProduct.description} onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} />
                <Button onClick={addProduct}>Add Product</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Products</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {products.length === 0 ? (
                  <p className="text-muted-foreground">No products yet.</p>
                ) : (
                  products.map((p) => (
                    <div key={p.id} className="flex items-start justify-between border p-3 rounded-lg">
                      <div>
                        <div className="font-semibold">{p.name}</div>
                        <div className="text-sm text-muted-foreground">{p.tagline}</div>
                      </div>
                      <Button variant="destructive" size="sm" onClick={() => removeProduct(p.id)}>
                        <Trash2 className="h-4 w-4 mr-1" /> Remove
                      </Button>
                    </div>
                  ))
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Team management */}
          <TabsContent value="team" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Plus className="h-5 w-5 text-primary" />Add Team Member</CardTitle>
                <CardDescription>Update the Meet Our Team section</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Input placeholder="Name" value={newMember.name} onChange={(e) => setNewMember({ ...newMember, name: e.target.value })} />
                <Input placeholder="Position" value={newMember.position} onChange={(e) => setNewMember({ ...newMember, position: e.target.value })} />
                <Textarea placeholder="Short description" value={newMember.description} onChange={(e) => setNewMember({ ...newMember, description: e.target.value })} />
                <Button onClick={addMember}>Add Member</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Team Members</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {team.length === 0 ? (
                  <p className="text-muted-foreground">No team members yet.</p>
                ) : (
                  team.map((m) => (
                    <div key={m.id} className="flex items-start justify-between border p-3 rounded-lg">
                      <div>
                        <div className="font-semibold">{m.name}</div>
                        <div className="text-sm text-muted-foreground">{m.position}</div>
                      </div>
                      <Button variant="destructive" size="sm" onClick={() => removeMember(m.id)}>
                        <Trash2 className="h-4 w-4 mr-1" /> Remove
                      </Button>
                    </div>
                  ))
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
