import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  FileText, 
  TrendingUp, 
  Calendar,
  Mail,
  Phone,
  Building,
  Clock,
  DollarSign,
  Target,
  BarChart3,
  RefreshCw
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  created_at: string;
}

interface WorkWithUsSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  project_idea: string;
  budget_range?: string;
  timeline?: string;
  product_name?: string;
  created_at: string;
}

const Admin = () => {
  const [contactSubmissions, setContactSubmissions] = useState<ContactSubmission[]>([]);
  const [workWithUsSubmissions, setWorkWithUsSubmissions] = useState<WorkWithUsSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchData = async () => {
    setLoading(true);
    try {
      const [contactData, workWithUsData] = await Promise.all([
        supabase.from('contact_submissions').select('*').order('created_at', { ascending: false }),
        supabase.from('work_with_us_submissions').select('*').order('created_at', { ascending: false })
      ]);

      if (contactData.error) throw contactData.error;
      if (workWithUsData.error) throw workWithUsData.error;

      setContactSubmissions(contactData.data || []);
      setWorkWithUsSubmissions(workWithUsData.data || []);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch data. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getBudgetColor = (budget?: string) => {
    if (!budget) return "bg-gray-100 text-gray-700";
    if (budget.includes('under-10k')) return "bg-green-100 text-green-700";
    if (budget.includes('10k-25k')) return "bg-blue-100 text-blue-700";
    if (budget.includes('25k-50k')) return "bg-purple-100 text-purple-700";
    if (budget.includes('50k-100k')) return "bg-orange-100 text-orange-700";
    if (budget.includes('over-100k')) return "bg-red-100 text-red-700";
    return "bg-gray-100 text-gray-700";
  };

  const stats = [
    {
      title: "Total Contact Forms",
      value: contactSubmissions.length,
      icon: <Mail className="h-6 w-6" />,
      color: "text-blue-500"
    },
    {
      title: "Work With Us Forms",
      value: workWithUsSubmissions.length,
      icon: <Users className="h-6 w-6" />,
      color: "text-green-500"
    },
    {
      title: "Total Submissions",
      value: contactSubmissions.length + workWithUsSubmissions.length,
      icon: <FileText className="h-6 w-6" />,
      color: "text-purple-500"
    },
    {
      title: "This Month",
      value: [...contactSubmissions, ...workWithUsSubmissions].filter(
        sub => new Date(sub.created_at).getMonth() === new Date().getMonth()
      ).length,
      icon: <TrendingUp className="h-6 w-6" />,
      color: "text-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <div className="bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/eefd4944-88fe-498f-8d1e-f4b8b0ee4616.png" 
                alt="Finitix Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h1 className="text-3xl font-bold">Finitix Admin Dashboard</h1>
                <p className="text-white/80">Manage submissions and analytics</p>
              </div>
            </div>
            <Button 
              onClick={fetchData} 
              variant="secondary"
              disabled={loading}
              className="flex items-center space-x-2"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  </div>
                  <div className={`${stat.color}`}>
                    {stat.icon}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Submissions */}
        <Tabs defaultValue="contact" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="contact" className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>Contact Forms ({contactSubmissions.length})</span>
            </TabsTrigger>
            <TabsTrigger value="work-with-us" className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>Work With Us ({workWithUsSubmissions.length})</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="contact" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>Contact Form Submissions</span>
                </CardTitle>
                <CardDescription>
                  General inquiries and contact requests from the website
                </CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="flex justify-center py-8">
                    <RefreshCw className="h-6 w-6 animate-spin text-primary" />
                  </div>
                ) : contactSubmissions.length === 0 ? (
                  <p className="text-center text-muted-foreground py-8">No contact submissions yet.</p>
                ) : (
                  <div className="space-y-4">
                    {contactSubmissions.map((submission) => (
                      <Card key={submission.id} className="border-l-4 border-l-blue-500">
                        <CardContent className="p-6">
                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            <div className="lg:col-span-2">
                              <div className="flex items-start justify-between mb-3">
                                <div>
                                  <h4 className="font-semibold text-lg">{submission.name}</h4>
                                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                    <span className="flex items-center">
                                      <Mail className="h-3 w-3 mr-1" />
                                      {submission.email}
                                    </span>
                                    {submission.phone && (
                                      <span className="flex items-center">
                                        <Phone className="h-3 w-3 mr-1" />
                                        {submission.phone}
                                      </span>
                                    )}
                                  </div>
                                </div>
                                <Badge variant="outline" className="flex items-center">
                                  <Clock className="h-3 w-3 mr-1" />
                                  {formatDate(submission.created_at)}
                                </Badge>
                              </div>
                              <div className="bg-muted/50 p-3 rounded-lg">
                                <p className="text-sm">{submission.message}</p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="work-with-us" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Work With Us Submissions</span>
                </CardTitle>
                <CardDescription>
                  Project ideas and collaboration requests from potential clients
                </CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="flex justify-center py-8">
                    <RefreshCw className="h-6 w-6 animate-spin text-primary" />
                  </div>
                ) : workWithUsSubmissions.length === 0 ? (
                  <p className="text-center text-muted-foreground py-8">No work with us submissions yet.</p>
                ) : (
                  <div className="space-y-4">
                    {workWithUsSubmissions.map((submission) => (
                      <Card key={submission.id} className="border-l-4 border-l-green-500">
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            {/* Header */}
                            <div className="flex items-start justify-between">
                              <div>
                                <h4 className="font-semibold text-lg">{submission.name}</h4>
                                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                  <span className="flex items-center">
                                    <Mail className="h-3 w-3 mr-1" />
                                    {submission.email}
                                  </span>
                                  {submission.phone && (
                                    <span className="flex items-center">
                                      <Phone className="h-3 w-3 mr-1" />
                                      {submission.phone}
                                    </span>
                                  )}
                                  {submission.company && (
                                    <span className="flex items-center">
                                      <Building className="h-3 w-3 mr-1" />
                                      {submission.company}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <Badge variant="outline" className="flex items-center">
                                <Clock className="h-3 w-3 mr-1" />
                                {formatDate(submission.created_at)}
                              </Badge>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                              {submission.budget_range && (
                                <Badge className={getBudgetColor(submission.budget_range)}>
                                  <DollarSign className="h-3 w-3 mr-1" />
                                  {submission.budget_range.replace('-', ' - ').toUpperCase()}
                                </Badge>
                              )}
                              {submission.timeline && (
                                <Badge variant="secondary">
                                  <Calendar className="h-3 w-3 mr-1" />
                                  {submission.timeline.replace('-', ' ').toUpperCase()}
                                </Badge>
                              )}
                              {submission.product_name && (
                                <Badge variant="outline">
                                  <Target className="h-3 w-3 mr-1" />
                                  {submission.product_name}
                                </Badge>
                              )}
                            </div>

                            {/* Project Description */}
                            <div className="bg-muted/50 p-4 rounded-lg">
                              <h5 className="font-medium mb-2">Project Idea:</h5>
                              <p className="text-sm text-muted-foreground">{submission.project_idea}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
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