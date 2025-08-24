import Layout from "@/components/Layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Users, Rocket, Star, Upload, FileText, Code, Palette, Megaphone, Handshake } from "lucide-react";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const WorkWithUs = () => {
  const { toast } = useToast();
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Work With Us – Show Your <span className="bg-gradient-primary bg-clip-text text-transparent">Power</span> to the World
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Do you have an idea that can solve a real-world problem?
              Do you dream of seeing your creation impact millions of lives?
              At Finitix, we believe the next big revolution can come from anyone — maybe YOU.
            </p>
            <div className="flex justify-center mb-8">
              <img 
                src={teamCollaboration} 
                alt="Team collaboration and innovation" 
                className="rounded-lg shadow-elegant max-w-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why This Exists */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why This Exists
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We created this space for innovators, creators, and dreamers to come forward, share their ideas, 
              and if possible, build it with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Lightbulb className="h-8 w-8" />,
                title: "Share Your Idea",
                description: "Tell us your problem-solving concept in simple words.",
                color: "text-yellow-500"
              },
              {
                icon: <Handshake className="h-8 w-8" />,
                title: "Collaborate With Us",
                description: "If your idea aligns with our mission, we'll help you develop, market, and launch it.",
                color: "text-primary"
              },
              {
                icon: <Star className="h-8 w-8" />,
                title: "Become a Hero",
                description: "Your innovation could change the world.",
                color: "text-secondary"
              }
            ].map((step, index) => (
              <Card key={index} className="text-center group hover:shadow-elegant transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <div className={`${step.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Idea Submission Form */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Submit Your Idea
            </h2>
            <p className="text-lg text-muted-foreground">
              Share your vision with us and let's turn it into reality
            </p>
          </div>

          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Upload className="h-6 w-6 text-primary mr-3" />
                Idea Submission Form
              </CardTitle>
              <CardDescription>
                Tell us about your innovative idea and how it can solve real-world problems
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <form className="space-y-6" onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const fd = new FormData(form);
                const name = `${fd.get('firstName') || ''} ${fd.get('lastName') || ''}`.trim();
                const email = String(fd.get('email') || '');
                const phone = String(fd.get('phone') || '');
                const idea_title = String(fd.get('ideaTitle') || '');
                const problem_statement = String(fd.get('problemStatement') || '');
                const solution_description = String(fd.get('solution') || '');
                const target_audience = String(fd.get('targetAudience') || '');
                const additional_info = String(fd.get('additionalInfo') || '');
                const { error } = await supabase.from('idea_submissions').insert({
                  name,
                  email,
                  phone: phone || null,
                  idea_title,
                  problem_statement,
                  solution_description,
                  target_audience: target_audience || null,
                  additional_info: additional_info || null,
                });
                if (error) {
                  toast({ title: 'Failed to submit idea', description: error.message, variant: 'destructive' });
                } else {
                  toast({ title: 'Idea submitted!', description: 'We will review and get back to you.' });
                  form.reset();
                }
              }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" name="firstName" placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" name="lastName" placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="john@example.com" />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" />
                </div>
                
                <div>
                  <Label htmlFor="ideaTitle">Idea Title</Label>
                  <Input id="ideaTitle" name="ideaTitle" placeholder="Your innovative solution name" />
                </div>
                
                <div>
                  <Label htmlFor="problemStatement">What Problem Does It Solve?</Label>
                  <Textarea 
                    id="problemStatement"
                    name="problemStatement" 
                    placeholder="Describe the real-world problem your idea addresses..." 
                    rows={3}
                  />
                </div>
                
                <div>
                  <Label htmlFor="solution">Your Solution</Label>
                  <Textarea 
                    id="solution" 
                    name="solution"
                    placeholder="Explain how your idea solves the problem..." 
                    rows={4}
                  />
                </div>
                
                <div>
                  <Label htmlFor="targetAudience">Target Audience</Label>
                  <Input id="targetAudience" name="targetAudience" placeholder="Who will benefit from your solution?" />
                </div>
                
                <div>
                  <Label htmlFor="additionalInfo">Additional Information</Label>
                  <Textarea 
                    id="additionalInfo" 
                    name="additionalInfo"
                    placeholder="Any prototypes, research, or additional details..." 
                    rows={3}
                  />
                </div>
                
                <Button variant="hero" size="lg" className="w-full" type="submit">
                  Submit Your Idea <Rocket className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Join the Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join the Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Looking to be part of something revolutionary? Apply to join our team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Code className="h-8 w-8" />,
                title: "Developer",
                description: "Full-stack developers, mobile app developers, AI/ML engineers",
                skills: ["React", "Node.js", "Python", "Mobile Development"]
              },
              {
                icon: <Palette className="h-8 w-8" />,
                title: "Designer",
                description: "UI/UX designers, graphic designers, product designers",
                skills: ["Figma", "Adobe Suite", "User Research", "Prototyping"]
              },
              {
                icon: <Megaphone className="h-8 w-8" />,
                title: "Marketer",
                description: "Digital marketers, content creators, growth hackers",
                skills: ["SEO/SEM", "Social Media", "Content Strategy", "Analytics"]
              }
            ].map((role, index) => (
              <Card key={index} className="hover:shadow-primary transition-all duration-300">
                <CardHeader>
                  <div className="text-primary mb-4">
                    {role.icon}
                  </div>
                  <CardTitle className="text-xl">{role.title}</CardTitle>
                  <CardDescription>{role.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {role.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="max-w-2xl mx-auto shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Users className="h-6 w-6 text-primary mr-3" />
                Team Application Form
              </CardTitle>
              <CardDescription>
                Tell us about your skills and how you'd like to contribute
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <form className="space-y-6" onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const fd = new FormData(form);
                const name = String(fd.get('applicantName') || '');
                const email = String(fd.get('applicantEmail') || '');
                const position = String(fd.get('position') || '');
                const experience = String(fd.get('experience') || '');
                const portfolio_url = String(fd.get('portfolio') || '');
                const motivation = String(fd.get('motivation') || '');
                const { error } = await supabase.from('team_applications').insert({
                  name,
                  email,
                  position,
                  experience,
                  portfolio_url: portfolio_url || null,
                  motivation,
                });
                if (error) {
                  toast({ title: 'Failed to apply', description: error.message, variant: 'destructive' });
                } else {
                  toast({ title: 'Application submitted!', description: 'We will reach out soon.' });
                  form.reset();
                }
              }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="applicantName">Full Name</Label>
                    <Input id="applicantName" name="applicantName" placeholder="Your full name" />
                  </div>
                  <div>
                    <Label htmlFor="applicantEmail">Email</Label>
                    <Input id="applicantEmail" name="applicantEmail" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="position">Position Applying For</Label>
                  <Input id="position" name="position" placeholder="Developer / Designer / Marketer / Other" />
                </div>
                
                <div>
                  <Label htmlFor="experience">Experience & Skills</Label>
                  <Textarea 
                    id="experience"
                    name="experience" 
                    placeholder="Tell us about your experience, skills, and what makes you unique..." 
                    rows={4}
                  />
                </div>
                
                <div>
                  <Label htmlFor="portfolio">Portfolio/Resume Link</Label>
                  <Input id="portfolio" name="portfolio" placeholder="LinkedIn, GitHub, Portfolio website, etc." />
                </div>
                
                <div>
                  <Label htmlFor="motivation">Why Finitix?</Label>
                  <Textarea 
                    id="motivation" 
                    name="motivation"
                    placeholder="What excites you about joining Finitix?" 
                    rows={3}
                  />
                </div>
                
                <Button variant="hero" size="lg" className="w-full" type="submit">
                  Apply to Join <Users className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            This is not a company — this is the future for you.
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Bring out your inner hero. Use the power of technology. Make history.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl">
              Submit Your Idea
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
              Join the Team
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WorkWithUs;