import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const ADMIN_PASSWORD = "Sujatha@1234";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [projectSubmissions, setProjectSubmissions] = useState<any[]>([]);
  const [consultationRequests, setConsultationRequests] = useState<any[]>([]);
  const [innovationApplications, setInnovationApplications] = useState<any[]>([]);
  const [contactMessages, setContactMessages] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const authStatus = sessionStorage.getItem("adminAuthenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
      fetchAllData();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem("adminAuthenticated", "true");
      fetchAllData();
      toast.success("Access granted");
    } else {
      toast.error("Invalid password");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("adminAuthenticated");
    navigate("/");
  };

  const fetchAllData = async () => {
    try {
      const [projects, consultations, innovations, contacts] = await Promise.all([
        supabase.from("project_submissions").select("*").order("created_at", { ascending: false }),
        supabase.from("consultation_requests").select("*").order("created_at", { ascending: false }),
        supabase.from("innovation_hub_applications").select("*").order("created_at", { ascending: false }),
        supabase.from("contact_messages").select("*").order("created_at", { ascending: false }),
      ]);

      if (projects.data) setProjectSubmissions(projects.data);
      if (consultations.data) setConsultationRequests(consultations.data);
      if (innovations.data) setInnovationApplications(innovations.data);
      if (contacts.data) setContactMessages(contacts.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to load data");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Admin Access</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Admin Dashboard</h1>
          <Button onClick={handleLogout} variant="outline">
            Logout
          </Button>
        </div>

        <Tabs defaultValue="projects" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="projects">Projects ({projectSubmissions.length})</TabsTrigger>
            <TabsTrigger value="consultations">Consultations ({consultationRequests.length})</TabsTrigger>
            <TabsTrigger value="innovations">Innovation Hub ({innovationApplications.length})</TabsTrigger>
            <TabsTrigger value="contacts">Contact Messages ({contactMessages.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="space-y-4">
            {projectSubmissions.map((submission) => (
              <Card key={submission.id}>
                <CardHeader>
                  <CardTitle>{submission.project_name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p><strong>Description:</strong> {submission.project_description}</p>
                  <p><strong>Key Features:</strong> {submission.key_features}</p>
                  <p><strong>Deadline:</strong> {submission.project_deadline || "Not specified"}</p>
                  <p><strong>Team Members:</strong> {submission.team_members || "Not specified"}</p>
                  <p><strong>Contact:</strong> {submission.contact_details}</p>
                  {submission.additional_notes && <p><strong>Notes:</strong> {submission.additional_notes}</p>}
                  <p className="text-sm text-muted-foreground">Submitted: {new Date(submission.created_at).toLocaleString()}</p>
                </CardContent>
              </Card>
            ))}
            {projectSubmissions.length === 0 && <p className="text-center text-muted-foreground">No project submissions yet</p>}
          </TabsContent>

          <TabsContent value="consultations" className="space-y-4">
            {consultationRequests.map((request) => (
              <Card key={request.id}>
                <CardHeader>
                  <CardTitle>{request.full_name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p><strong>Email:</strong> {request.email}</p>
                  <p><strong>Phone:</strong> {request.phone}</p>
                  <p><strong>Company:</strong> {request.company_name || "Not specified"}</p>
                  <p><strong>Type:</strong> {request.consultation_type}</p>
                  <p><strong>Description:</strong> {request.project_description}</p>
                  <p><strong>Goal:</strong> {request.main_goal}</p>
                  <p><strong>Expected Outcome:</strong> {request.expected_outcome}</p>
                  <p><strong>Preferred Date:</strong> {request.preferred_date || "Not specified"}</p>
                  <p><strong>Preferred Time:</strong> {request.preferred_time || "Not specified"}</p>
                  <p><strong>Meeting Mode:</strong> {request.meeting_mode}</p>
                  {request.how_heard && <p><strong>How Heard:</strong> {request.how_heard}</p>}
                  <p className="text-sm text-muted-foreground">Submitted: {new Date(request.created_at).toLocaleString()}</p>
                </CardContent>
              </Card>
            ))}
            {consultationRequests.length === 0 && <p className="text-center text-muted-foreground">No consultation requests yet</p>}
          </TabsContent>

          <TabsContent value="innovations" className="space-y-4">
            {innovationApplications.map((application) => (
              <Card key={application.id}>
                <CardHeader>
                  <CardTitle>{application.full_name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p><strong>Email:</strong> {application.email}</p>
                  <p><strong>Phone:</strong> {application.phone || "Not specified"}</p>
                  <p><strong>Company:</strong> {application.company_name || "Not specified"}</p>
                  <p><strong>Role:</strong> {application.role_position || "Not specified"}</p>
                  <p><strong>Project Idea:</strong> {application.project_idea}</p>
                  <p><strong>Problem Solved:</strong> {application.problem_solved || "Not specified"}</p>
                  <p><strong>Support Needed:</strong> {application.support_needed}</p>
                  <p><strong>Project Stage:</strong> {application.project_stage || "Not specified"}</p>
                  {application.how_heard && <p><strong>How Heard:</strong> {application.how_heard}</p>}
                  <p className="text-sm text-muted-foreground">Submitted: {new Date(application.created_at).toLocaleString()}</p>
                </CardContent>
              </Card>
            ))}
            {innovationApplications.length === 0 && <p className="text-center text-muted-foreground">No innovation hub applications yet</p>}
          </TabsContent>

          <TabsContent value="contacts" className="space-y-4">
            {contactMessages.map((message) => (
              <Card key={message.id}>
                <CardHeader>
                  <CardTitle>{message.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p><strong>Email:</strong> {message.email}</p>
                  <p><strong>Company:</strong> {message.company || "Not specified"}</p>
                  <p><strong>Message:</strong> {message.message}</p>
                  <p className="text-sm text-muted-foreground">Submitted: {new Date(message.created_at).toLocaleString()}</p>
                </CardContent>
              </Card>
            ))}
            {contactMessages.length === 0 && <p className="text-center text-muted-foreground">No contact messages yet</p>}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
