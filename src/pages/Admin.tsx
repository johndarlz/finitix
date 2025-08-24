import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Users, 
  Package, 
  MessageSquare, 
  Lightbulb, 
  UserPlus, 
  Phone,
  Plus,
  Trash2,
  Edit,
  Shield,
  LogOut,
  Settings,
  BarChart3,
  FileText
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroLogo from "/lovable-uploads/eefd4944-88fe-498f-8d1e-f4b8b0ee4616.png";

const Admin = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Authentication check
  useEffect(() => {
    checkAuth();
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'SIGNED_IN' && session) {
          await checkAdminAccess(session.user);
        } else if (event === 'SIGNED_OUT') {
          navigate('/admin-auth');
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const checkAuth = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/admin-auth');
        return;
      }
      await checkAdminAccess(session.user);
    } catch (error) {
      console.error('Auth check error:', error);
      navigate('/admin-auth');
    }
  };

  const checkAdminAccess = async (user: any) => {
    try {
      const { data: adminProfile, error } = await supabase
        .from('admin_profiles')
        .select('*')
        .eq('user_id', user.id)
        .eq('is_active', true)
        .single();

      if (error || !adminProfile) {
        toast({
          title: "Access Denied",
          description: "Admin privileges required",
          variant: "destructive"
        });
        await supabase.auth.signOut();
        navigate('/admin-auth');
        return;
      }

      setUser(user);
      setIsLoading(false);
      fetchData();
    } catch (error) {
      console.error('Admin access check error:', error);
      navigate('/admin-auth');
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  // Data states
  const [contactMessages, setContactMessages] = useState<any[]>([]);
  const [productInterests, setProductInterests] = useState<any[]>([]);
  const [ideaSubmissions, setIdeaSubmissions] = useState<any[]>([]);
  const [teamApplications, setTeamApplications] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [teamMembers, setTeamMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch all data
  const fetchData = async () => {
    setLoading(true);
    try {
      const [
        contactRes,
        interestsRes,
        ideasRes,
        applicationsRes,
        productsRes,
        teamRes
      ] = await Promise.all([
        supabase.from('contact_messages').select('*').order('created_at', { ascending: false }),
        supabase.from('product_interests').select('*').order('created_at', { ascending: false }),
        supabase.from('idea_submissions').select('*').order('created_at', { ascending: false }),
        supabase.from('team_applications').select('*').order('created_at', { ascending: false }),
        supabase.from('products').select('*').eq('is_active', true).order('display_order'),
        supabase.from('team_members').select('*').eq('is_active', true).order('display_order')
      ]);

      setContactMessages(contactRes.data || []);
      setProductInterests(interestsRes.data || []);
      setIdeaSubmissions(ideasRes.data || []);
      setTeamApplications(applicationsRes.data || []);
      setProducts(productsRes.data || []);
      setTeamMembers(teamRes.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast({
        title: "Error",
        description: "Failed to load data",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  // Add/remove product
  const [newProduct, setNewProduct] = useState({ name: "", tagline: "", description: "" });
  const addProduct = async () => {
    if (!newProduct.name || !newProduct.tagline || !newProduct.description) {
      toast({ title: "Missing fields", description: "Fill all product fields." });
      return;
    }
    const { error } = await supabase.from("products").insert({ 
      ...newProduct, 
      is_active: true, 
      impact: "Product impact description",
      features: []
    });
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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Verifying admin access...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur border-b border-border/40 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <img src={heroLogo} alt="Finitix Logo" className="h-8 w-auto" />
              <div>
                <h1 className="text-xl font-bold text-primary">Finitix Admin</h1>
                <p className="text-sm text-muted-foreground">Management Dashboard</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Admin</span>
              </div>
              <Button variant="outline" size="sm" onClick={handleSignOut}>
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card border-primary/20 hover:shadow-elegant transition-all">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Products</CardTitle>
              <Package className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{products.length}</div>
              <p className="text-xs text-muted-foreground">Active products</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-primary/20 hover:shadow-elegant transition-all">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Team Members</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{teamMembers.length}</div>
              <p className="text-xs text-muted-foreground">Active members</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-primary/20 hover:shadow-elegant transition-all">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Contact Messages</CardTitle>
              <MessageSquare className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{contactMessages.length}</div>
              <p className="text-xs text-muted-foreground">New messages</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-primary/20 hover:shadow-elegant transition-all">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Idea Submissions</CardTitle>
              <Lightbulb className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{ideaSubmissions.length}</div>
              <p className="text-xs text-muted-foreground">New ideas</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="products" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 bg-white/50 backdrop-blur">
            <TabsTrigger value="products" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Products
            </TabsTrigger>
            <TabsTrigger value="team" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Team
            </TabsTrigger>
            <TabsTrigger value="contact" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Messages
            </TabsTrigger>
            <TabsTrigger value="ideas" className="flex items-center gap-2">
              <Lightbulb className="h-4 w-4" />
              Ideas
            </TabsTrigger>
            <TabsTrigger value="interests" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Interests
            </TabsTrigger>
            <TabsTrigger value="applications" className="flex items-center gap-2">
              <UserPlus className="h-4 w-4" />
              Applications
            </TabsTrigger>
          </TabsList>

          <TabsContent value="products" className="space-y-6">
            <Card className="bg-gradient-card border-primary/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Package className="h-5 w-5 text-primary" />
                      Product Management
                    </CardTitle>
                    <CardDescription>Add, edit, and manage product portfolio</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <Input 
                    placeholder="Product Name" 
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  />
                  <Input 
                    placeholder="Tagline" 
                    value={newProduct.tagline}
                    onChange={(e) => setNewProduct({ ...newProduct, tagline: e.target.value })}
                  />
                  <Button onClick={addProduct} className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Product
                  </Button>
                </div>
                <Textarea 
                  placeholder="Product Description" 
                  value={newProduct.description}
                  onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                  className="mb-4"
                />
                
                <Separator className="my-6" />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Current Products</h3>
                  {products.map((product) => (
                    <Card key={product.id} className="p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg">{product.name}</h4>
                          <p className="text-muted-foreground">{product.tagline}</p>
                          <p className="text-sm mt-2">{product.description}</p>
                        </div>
                        <Button 
                          variant="destructive" 
                          size="sm" 
                          onClick={() => removeProduct(product.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </Card>
                  ))}
                  {products.length === 0 && (
                    <p className="text-muted-foreground text-center py-8">No products yet</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="team" className="space-y-6">
            <Card className="bg-gradient-card border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Team Management
                </CardTitle>
                <CardDescription>Add and manage team members</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <Input 
                    placeholder="Member Name" 
                    value={newMember.name}
                    onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                  />
                  <Input 
                    placeholder="Position" 
                    value={newMember.position}
                    onChange={(e) => setNewMember({ ...newMember, position: e.target.value })}
                  />
                  <Button onClick={addMember} className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Member
                  </Button>
                </div>
                <Textarea 
                  placeholder="Member Description" 
                  value={newMember.description}
                  onChange={(e) => setNewMember({ ...newMember, description: e.target.value })}
                  className="mb-4"
                />
                
                <Separator className="my-6" />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Current Team</h3>
                  {teamMembers.map((member) => (
                    <Card key={member.id} className="p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg">{member.name}</h4>
                          <p className="text-muted-foreground">{member.position}</p>
                          <p className="text-sm mt-2">{member.description}</p>
                        </div>
                        <Button 
                          variant="destructive" 
                          size="sm" 
                          onClick={() => removeMember(member.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </Card>
                  ))}
                  {teamMembers.length === 0 && (
                    <p className="text-muted-foreground text-center py-8">No team members yet</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact" className="space-y-6">
            <Card className="bg-gradient-card border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  Contact Messages
                </CardTitle>
                <CardDescription>Messages from the contact form</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contactMessages.map((message) => (
                    <Card key={message.id} className="p-4 bg-background/50">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold">{message.name}</h4>
                          <p className="text-sm text-muted-foreground">{message.email}</p>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {new Date(message.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      {message.phone && (
                        <p className="text-sm text-muted-foreground mb-2">
                          <Phone className="h-4 w-4 inline mr-1" />
                          {message.phone}
                        </p>
                      )}
                      <p className="text-sm bg-muted/30 p-2 rounded">{message.message}</p>
                    </Card>
                  ))}
                  {contactMessages.length === 0 && (
                    <p className="text-muted-foreground text-center py-8">No messages yet</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ideas" className="space-y-6">
            <Card className="bg-gradient-card border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  Idea Submissions
                </CardTitle>
                <CardDescription>Ideas submitted through the work with us form</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {ideaSubmissions.map((idea) => (
                    <Card key={idea.id} className="p-4 bg-background/50">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold">{idea.name}</h4>
                          <p className="text-sm text-muted-foreground">{idea.email}</p>
                          <Badge variant="outline" className="mt-1">{idea.idea_title}</Badge>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {new Date(idea.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="font-medium">Problem:</span>
                          <p className="text-muted-foreground">{idea.problem_statement}</p>
                        </div>
                        <div>
                          <span className="font-medium">Solution:</span>
                          <p className="text-muted-foreground">{idea.solution_description}</p>
                        </div>
                        {idea.target_audience && (
                          <div>
                            <span className="font-medium">Target Audience:</span>
                            <p className="text-muted-foreground">{idea.target_audience}</p>
                          </div>
                        )}
                      </div>
                    </Card>
                  ))}
                  {ideaSubmissions.length === 0 && (
                    <p className="text-muted-foreground text-center py-8">No ideas yet</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="interests" className="space-y-6">
            <Card className="bg-gradient-card border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Product Interest Submissions
                </CardTitle>
                <CardDescription>View all product interest inquiries</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {productInterests.map((interest) => (
                    <Card key={interest.id} className="p-4 bg-background/50">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold">{interest.name}</h4>
                          <p className="text-sm text-muted-foreground">{interest.email}</p>
                          <Badge variant="outline" className="mt-1">{interest.product_name}</Badge>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {new Date(interest.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      {interest.phone && (
                        <p className="text-sm text-muted-foreground mb-2">
                          <Phone className="h-4 w-4 inline mr-1" />
                          {interest.phone}
                        </p>
                      )}
                      {interest.message && (
                        <p className="text-sm bg-muted/30 p-2 rounded">{interest.message}</p>
                      )}
                    </Card>
                  ))}
                  {productInterests.length === 0 && (
                    <p className="text-muted-foreground text-center py-8">No product interests yet</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications" className="space-y-6">
            <Card className="bg-gradient-card border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserPlus className="h-5 w-5 text-primary" />
                  Team Applications
                </CardTitle>
                <CardDescription>Review job applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teamApplications.map((application) => (
                    <Card key={application.id} className="p-4 bg-background/50">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold">{application.name}</h4>
                          <p className="text-sm text-muted-foreground">{application.email}</p>
                          <Badge variant="secondary" className="mt-1">{application.position}</Badge>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {new Date(application.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="font-medium">Experience:</span>
                          <p className="text-muted-foreground">{application.experience}</p>
                        </div>
                        
                        {application.portfolio_url && (
                          <div>
                            <span className="font-medium">Portfolio:</span>
                            <a 
                              href={application.portfolio_url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-primary hover:underline ml-1"
                            >
                              View Portfolio
                            </a>
                          </div>
                        )}
                        
                        <div>
                          <span className="font-medium">Motivation:</span>
                          <p className="text-muted-foreground bg-muted/30 p-2 rounded mt-1">
                            {application.motivation}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                  {teamApplications.length === 0 && (
                    <p className="text-muted-foreground text-center py-8">No applications yet</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;