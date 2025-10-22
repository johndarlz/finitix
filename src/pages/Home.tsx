import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, Shield, Globe, MessageCircle, Lightbulb, Gem, CheckCircle } from "lucide-react";
import heroInnovation from "@/assets/hero-innovation.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import dataAnalytics from "@/assets/data-analytics.jpg";
import { ProjectSubmissionForm } from "@/components/ProjectSubmissionForm";
import { ConsultationRequestForm } from "@/components/ConsultationRequestForm";
import { InnovationHubApplicationForm } from "@/components/InnovationHubApplicationForm";

const Home = () => {
  const [projectFormOpen, setProjectFormOpen] = useState(false);
  const [consultationFormOpen, setConsultationFormOpen] = useState(false);
  const [innovationFormOpen, setInnovationFormOpen] = useState(false);

  const strengths = [
    { icon: Zap, title: "Lightning Fast", description: "Rapid development and scalable deployment" },
    { icon: Shield, title: "Secure & Reliable", description: "Enterprise-grade security, 99.9% uptime" },
    { icon: Globe, title: "Global Reach", description: "Serving clients across the world" },
    { icon: MessageCircle, title: "Community Driven", description: "Building ecosystems where everyone grows" },
    { icon: Lightbulb, title: "Innovation First", description: "Turning ideas into impact" },
    { icon: Gem, title: "Premium Quality", description: "Affordable excellence" },
  ];

  const processSteps = [
    { step: "01", title: "Discovery", description: "Understanding your vision and requirements" },
    { step: "02", title: "Strategy", description: "Crafting the perfect roadmap for success" },
    { step: "03", title: "Development", description: "Building with cutting-edge technology" },
    { step: "04", title: "Launch", description: "Deploying your solution to the world" },
    { step: "05", title: "Support", description: "Ongoing maintenance and optimization" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Split Layout */}
      <section className="min-h-screen flex items-center pt-24 pb-12" aria-label="Hero section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="animate-fade-in">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold mb-4 leading-tight">
                <span className="text-gradient">Finitix</span> - Digital Services Platform
              </h1>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-8 leading-tight">
                Expert Web Development Agency & App Development Company
              </h2>
              
              <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                Finitix is a friendly <strong>digital services company</strong> specializing in <strong>web development</strong>, 
                <strong> mobile app development</strong>, <strong>AI software development</strong>, and <strong>MVP development services</strong>. 
                We help startups, businesses, and entrepreneurs transform ideas into scalable, high-performance digital products. 
                As a leading <strong>software solutions provider</strong>, we deliver custom software solutions, SaaS platforms, 
                and AI automation services that drive growth and innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="glow-effect bg-gradient-primary hover:shadow-glow-purple text-lg px-8 py-6"
                  onClick={() => setProjectFormOpen(true)}
                >
                  Start Your Project
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary/50 hover:bg-primary/10 text-lg px-8 py-6"
                >
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-primary" size={20} />
                  <span>ISO 27001 Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-primary" size={20} />
                  <span>99.9% Uptime SLA</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-primary" size={20} />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>

            {/* Right Side - Innovation Image */}
            <div className="animate-scale-in">
              <div className="relative">
                <img
                  src={heroInnovation}
                  alt="Finitix digital services platform - Web development, app development, and AI solutions for startups and businesses"
                  className="rounded-2xl shadow-glow-purple w-full h-auto"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Who We Are */}
      <section className="py-20" aria-label="About Finitix">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in mb-12">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Leading <span className="text-gradient">Digital Services Company</span>
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Finitix is a <strong>product-first software company</strong> and <strong>web development agency</strong> dedicated to 
              delivering exceptional digital services. Our team of expert developers, designers, and strategists specializes in 
              <strong>website design and development</strong>, <strong>mobile app design</strong>, <strong>AI automation services</strong>, 
              and <strong>software consulting</strong>. We partner with startups, small businesses, and enterprises to create 
              innovative technology solutions that solve real-world problems and drive measurable business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="animate-scale-in">
              <img
                src={teamCollaboration}
                alt="Finitix team collaboration - Expert software developers and designers working on digital solutions"
                className="rounded-2xl shadow-glow w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Card className="p-6 bg-card border-border/50 hover:border-primary/50 transition-smooth">
                <h3 className="text-xl font-heading font-semibold mb-3 text-gradient">Product-First Development Approach</h3>
                <p className="text-foreground/80">
                  As a <strong>startup product development</strong> specialist, we follow agile methodologies and 
                  product-first principles. Our <strong>custom software solutions</strong> process includes discovery, 
                  strategic planning, rapid prototyping, iterative development, and continuous optimization to ensure 
                  your digital product achieves market success.
                </p>
              </Card>
              <Card className="p-6 bg-card border-border/50 hover:border-primary/50 transition-smooth">
                <h3 className="text-xl font-heading font-semibold mb-3 text-gradient">Enterprise-Grade Quality Standards</h3>
                <p className="text-foreground/80">
                  Our <strong>software solutions provider</strong> team delivers enterprise-grade quality with ISO 27001 
                  certified security, 99.9% uptime SLA, and comprehensive testing. Every <strong>web application</strong>, 
                  <strong>mobile app</strong>, or <strong>SaaS solution</strong> we build follows industry best practices, 
                  ensuring scalability, performance, and long-term maintainability.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Strengths */}
      <section className="py-20 bg-card" aria-label="Why choose Finitix">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-4">
            Why Choose <span className="text-gradient">Finitix</span> as Your Digital Services Partner
          </h2>
          <p className="text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
            As a leading <strong>app development company</strong> and <strong>web development agency</strong>, we combine 
            technical excellence with business strategy to deliver digital solutions that drive growth, innovation, and competitive advantage.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-background border-border/50 hover:border-primary/50 transition-smooth hover:shadow-glow-purple animate-scale-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-primary group-hover:animate-glow-pulse flex-shrink-0">
                      <Icon className="text-primary-foreground" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-primary transition-smooth">
                        {strength.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{strength.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20" aria-label="Development process">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Our <span className="text-gradient">Software Development Process</span>
            </h2>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Our proven <strong>MVP development</strong> and <strong>software consulting</strong> methodology ensures 
              successful delivery from concept to launch, with transparent communication and agile iteration at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((process, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border/50 hover:border-primary/50 transition-smooth hover:shadow-glow text-center animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl font-heading font-bold text-gradient mb-4 group-hover:scale-110 transition-smooth">
                  {process.step}
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-primary transition-smooth">
                  {process.title}
                </h3>
                <p className="text-sm text-muted-foreground">{process.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Innovation Hub Section */}
      <section className="py-20 bg-card" aria-label="Innovation Hub">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in mb-12">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Join Our <span className="text-gradient">Innovation Hub</span> for Startups
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              The Finitix Innovation Hub connects startups, entrepreneurs, and businesses with expert <strong>software development</strong> 
              resources, mentorship, and strategic partnerships. Access our network of developers, designers, and business strategists 
              to accelerate your <strong>startup product development</strong> journey. We offer technical expertise in <strong>AI software development</strong>, 
              <strong>SaaS solutions</strong>, and <strong>custom software solutions</strong> to help you build, launch, and scale innovative digital products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="glow-effect bg-gradient-primary hover:shadow-glow-purple text-lg px-8 py-6"
                onClick={() => setInnovationFormOpen(true)}
              >
                Join Innovation Hub
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 text-lg px-8 py-6"
              >
                <Link to="/innovation-hub">Explore Innovation Hub</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <blockquote className="text-3xl md:text-5xl font-heading font-bold text-center text-gradient italic">
            "We make the impossible… inevitable."
          </blockquote>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <Card className="p-12 bg-gradient-glow border-primary/20 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                💡 Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-foreground/80 mb-8">
                Whether you're a startup with a groundbreaking idea or an enterprise seeking digital 
                transformation, we're here to help. Let's discuss your project and explore how we can 
                turn your vision into a market-leading solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="glow-effect bg-gradient-primary hover:shadow-glow-purple text-lg px-8 py-6"
                  onClick={() => setConsultationFormOpen(true)}
                >
                  Schedule a Free Consultation
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary/50 hover:bg-primary/10 text-lg px-8 py-6"
                >
                  <Link to="/innovation-hub">Explore Partnerships</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Forms */}
      <ProjectSubmissionForm open={projectFormOpen} onOpenChange={setProjectFormOpen} />
      <ConsultationRequestForm open={consultationFormOpen} onOpenChange={setConsultationFormOpen} />
      <InnovationHubApplicationForm open={innovationFormOpen} onOpenChange={setInnovationFormOpen} />
    </div>
  );
};

export default Home;
