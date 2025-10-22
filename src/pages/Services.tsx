import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code, Palette, Brain, Smartphone, Cloud, TrendingUp, CheckCircle } from "lucide-react";
import servicesWorkspace from "@/assets/services-workspace.jpg";
import dataAnalytics from "@/assets/data-analytics.jpg";
import { ConsultationRequestForm } from "@/components/ConsultationRequestForm";

const Services = () => {
  const [consultationFormOpen, setConsultationFormOpen] = useState(false);
  const services = [
    {
      icon: Code,
      title: "Product Engineering",
      description: "End-to-end product development from ideation to launch, with focus on scalability and performance.",
      features: [
        "Full-stack development",
        "Microservices architecture",
        "API design & integration",
        "Database optimization",
      ],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive, beautiful interfaces that users love, backed by research and best practices.",
      features: [
        "User research & personas",
        "Wireframing & prototyping",
        "Design systems",
        "Usability testing",
      ],
    },
    {
      icon: Brain,
      title: "AI-Powered Solutions",
      description: "Leveraging artificial intelligence to build intelligent systems that automate and optimize.",
      features: [
        "Machine learning models",
        "Natural language processing",
        "Computer vision",
        "Predictive analytics",
      ],
    },
    {
      icon: Smartphone,
      title: "Web & Mobile App Development",
      description: "Building responsive, performant applications for web and mobile platforms that scale.",
      features: [
        "Progressive web apps",
        "Native iOS & Android",
        "Cross-platform solutions",
        "Real-time features",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Infrastructure setup, CI/CD pipelines, and cloud optimization for reliable deployments.",
      features: [
        "AWS, Azure, GCP",
        "Container orchestration",
        "Automated testing",
        "Performance monitoring",
      ],
    },
    {
      icon: TrendingUp,
      title: "Digital Transformation Consulting",
      description: "Strategic guidance to help businesses modernize and leverage technology effectively.",
      features: [
        "Technology roadmapping",
        "Legacy system migration",
        "Process automation",
        "Change management",
      ],
    },
  ];

  const techStack = {
    frontend: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "Python", "Java", "Go", ".NET"],
    mobile: ["React Native", "Flutter", "Swift", "Kotlin"],
    cloud: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
    database: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "DynamoDB"],
    ai: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face", "LangChain"],
  };

  const industries = [
    { name: "FinTech", description: "Payment solutions, banking apps, trading platforms" },
    { name: "HealthTech", description: "Telemedicine, health records, wellness apps" },
    { name: "E-Commerce", description: "Online stores, marketplaces, inventory systems" },
    { name: "EdTech", description: "Learning platforms, course management, assessment tools" },
    { name: "SaaS", description: "Business tools, productivity software, analytics platforms" },
    { name: "Enterprise", description: "ERP systems, CRM solutions, workflow automation" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            From concept to code—we provide comprehensive software development services that transform 
            your ideas into scalable, high-performance digital products.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-20 animate-scale-in">
          <img
            src={servicesWorkspace}
            alt="Professional Development Workspace"
            className="rounded-2xl shadow-glow-purple w-full h-auto max-h-[500px] object-cover"
          />
        </div>

        {/* Services Grid */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">
            What <span className="text-gradient">We Offer</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="p-8 bg-card border-border/50 hover:border-primary/50 transition-smooth hover:shadow-glow-purple animate-scale-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col h-full">
                    <div className="p-4 rounded-xl bg-gradient-primary w-fit mb-4 group-hover:animate-glow-pulse">
                      <Icon className="text-primary-foreground" size={28} />
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-smooth">
                      {service.title}
                    </h3>
                    <p className="text-foreground/80 mb-4">{service.description}</p>
                    <div className="mt-auto space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="text-primary flex-shrink-0" size={16} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-20 bg-card rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">
            Our <span className="text-gradient">Technology Stack</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(techStack).map(([category, technologies], index) => (
              <Card
                key={category}
                className="p-6 bg-background border-border/50 hover:border-primary/50 transition-smooth animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-heading font-semibold mb-4 capitalize text-primary">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted rounded-full text-sm text-foreground/80 hover:bg-primary/20 transition-smooth"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-center">
            Industries <span className="text-gradient">We Serve</span>
          </h2>
          <p className="text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
            Our expertise spans across multiple sectors, delivering tailored solutions for diverse business needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border/50 hover:border-primary/50 transition-smooth hover:shadow-glow animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-smooth">
                  {industry.name}
                </h3>
                <p className="text-sm text-muted-foreground">{industry.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Process & Methodology */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Our <span className="text-gradient">Methodology</span>
              </h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                We follow industry best practices and agile methodologies to ensure your project is delivered 
                on time, within budget, and exceeds expectations.
              </p>
              <div className="space-y-4">
                <Card className="p-4 bg-card border-border/50">
                  <h4 className="font-heading font-semibold mb-2">Agile Development</h4>
                  <p className="text-sm text-muted-foreground">
                    Iterative approach with regular feedback loops and continuous improvement
                  </p>
                </Card>
                <Card className="p-4 bg-card border-border/50">
                  <h4 className="font-heading font-semibold mb-2">Quality Assurance</h4>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive testing at every stage to ensure bug-free, reliable software
                  </p>
                </Card>
                <Card className="p-4 bg-card border-border/50">
                  <h4 className="font-heading font-semibold mb-2">Transparent Communication</h4>
                  <p className="text-sm text-muted-foreground">
                    Regular updates, demos, and open channels to keep you informed throughout
                  </p>
                </Card>
              </div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <img
                src={dataAnalytics}
                alt="Development Methodology"
                className="rounded-2xl shadow-glow-purple w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-gradient-glow rounded-2xl p-12 mb-12 border border-primary/20 animate-fade-in">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-gradient">
              "Your Idea. Your Power. Your Future."
            </h2>
            <p className="text-lg text-foreground/80 mb-8">
              We're not just service providers—we're your technology partners. Your success is our success, 
              and we're committed to delivering solutions that drive real business value.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <span className="px-6 py-3 bg-card rounded-full border border-primary/30">🤝 Collaboration</span>
              <span className="px-6 py-3 bg-card rounded-full border border-primary/30">💡 Innovation</span>
              <span className="px-6 py-3 bg-card rounded-full border border-primary/30">🎯 Impact</span>
              <span className="px-6 py-3 bg-card rounded-full border border-primary/30">⚡ Excellence</span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and explore how our services can help you achieve your goals.
          </p>
          <Button
            size="lg"
            className="glow-effect bg-gradient-primary hover:shadow-glow-purple text-lg px-8 py-6"
            onClick={() => setConsultationFormOpen(true)}
          >
            Schedule a Free Consultation
          </Button>
        </div>
      </div>

      <ConsultationRequestForm open={consultationFormOpen} onOpenChange={setConsultationFormOpen} />
    </div>
  );
};

export default Services;
