import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Rocket, Trophy, Network, Target, Zap, Globe, CheckCircle } from "lucide-react";
import innovationLab from "@/assets/innovation-lab.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";

const InnovationHub = () => {
  const opportunities = [
    {
      icon: Users,
      title: "Collaboration Opportunities",
      description: "Partner with us on innovative projects and bring your ideas to life together.",
      benefits: [
        "Access to technical expertise",
        "Shared resources and infrastructure",
        "Joint market opportunities",
        "Co-innovation initiatives",
      ],
    },
    {
      icon: Rocket,
      title: "Startup Partnerships",
      description: "We support early-stage startups with technical expertise and strategic guidance.",
      benefits: [
        "Technology consulting",
        "MVP development support",
        "Mentorship programs",
        "Funding connections",
      ],
    },
    {
      icon: Trophy,
      title: "Innovation Challenges",
      description: "Join our hackathons and challenges to solve real-world problems with cutting-edge tech.",
      benefits: [
        "Prize pools and recognition",
        "Networking opportunities",
        "Learning experiences",
        "Project implementation",
      ],
    },
    {
      icon: Network,
      title: "Global Talent Network",
      description: "Connect with a community of developers, designers, and innovators worldwide.",
      benefits: [
        "Skill development programs",
        "Project collaborations",
        "Knowledge sharing",
        "Career opportunities",
      ],
    },
  ];

  const ecosystemBenefits = [
    {
      icon: Target,
      title: "Strategic Direction",
      description: "Get expert guidance on technology strategy and product roadmap",
    },
    {
      icon: Zap,
      title: "Rapid Prototyping",
      description: "Fast-track your ideas from concept to working prototype",
    },
    {
      icon: Globe,
      title: "Market Access",
      description: "Leverage our network to reach customers globally",
    },
    {
      icon: Users,
      title: "Talent Pool",
      description: "Access to skilled professionals across multiple domains",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            The FINITIX <span className="text-gradient">Innovation Hub</span>
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            More than a company—we're an innovation ecosystem. At FINITIX, we bring together entrepreneurs, 
            developers, designers, and visionaries to create the future of technology.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-20 animate-scale-in">
          <img
            src={innovationLab}
            alt="Innovation Lab"
            className="rounded-2xl shadow-glow-purple w-full h-auto max-h-[500px] object-cover"
          />
        </div>

        {/* About Innovation Hub */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              What is the <span className="text-gradient">Innovation Hub?</span>
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              The FINITIX Innovation Hub is our commitment to fostering a thriving ecosystem of innovation. 
              It's where startups find their technical foundation, where enterprises discover cutting-edge 
              solutions, and where talented individuals connect to build the next generation of technology.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              We believe that innovation happens at the intersection of great ideas and great execution. 
              Through our Hub, we provide the resources, expertise, and network to turn possibilities into 
              realities.
            </p>
          </div>
        </section>

        {/* Opportunities Grid */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">
            How You Can <span className="text-gradient">Get Involved</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {opportunities.map((opportunity, index) => {
              const Icon = opportunity.icon;
              return (
                <Card
                  key={index}
                  className="p-10 bg-card border-border/50 hover:border-primary/50 transition-smooth hover:shadow-glow animate-scale-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div className="p-4 rounded-xl bg-gradient-primary flex-shrink-0 group-hover:animate-glow-pulse">
                      <Icon className="text-primary-foreground" size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-semibold mb-3 group-hover:text-primary transition-smooth">
                        {opportunity.title}
                      </h3>
                      <p className="text-foreground/80 text-lg">{opportunity.description}</p>
                    </div>
                  </div>
                  <div className="space-y-2 ml-[72px]">
                    {opportunity.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="text-primary flex-shrink-0" size={16} />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </section>


        {/* Ecosystem Benefits */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Join Our <span className="text-gradient">Innovation Ecosystem</span>
              </h2>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Being part of the FINITIX Innovation Hub means more than just access to resources. 
                It means becoming part of a community that believes in the power of collaboration, 
                innovation, and shared success.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ecosystemBenefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-gradient-primary flex-shrink-0">
                        <Icon className="text-primary-foreground" size={20} />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold mb-1">{benefit.title}</h4>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <img
                src={teamCollaboration}
                alt="Innovation Ecosystem"
                className="rounded-2xl shadow-glow w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="bg-gradient-glow rounded-2xl p-12 border border-primary/20 animate-fade-in mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center">
              Why Join the <span className="text-gradient">Innovation Hub</span>?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="text-primary text-2xl">✓</div>
                <div>
                  <h4 className="font-heading font-semibold mb-1">Access to Expertise</h4>
                  <p className="text-foreground/80">
                    Work with experienced developers, designers, and business strategists who have built 
                    successful products across industries.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-primary text-2xl">✓</div>
                <div>
                  <h4 className="font-heading font-semibold mb-1">Cutting-Edge Technology</h4>
                  <p className="text-foreground/80">
                    Leverage the latest tools, frameworks, and platforms to build solutions that are 
                    future-ready and scalable.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-primary text-2xl">✓</div>
                <div>
                  <h4 className="font-heading font-semibold mb-1">Community Support</h4>
                  <p className="text-foreground/80">
                    Be part of a thriving innovation ecosystem where ideas are shared, challenges are 
                    solved together, and success is celebrated.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-primary text-2xl">✓</div>
                <div>
                  <h4 className="font-heading font-semibold mb-1">Real-World Impact</h4>
                  <p className="text-foreground/80">
                    Build solutions that solve real problems, reach real users, and create meaningful 
                    change in the world.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-primary text-2xl">✓</div>
                <div>
                  <h4 className="font-heading font-semibold mb-1">Flexible Partnership Models</h4>
                  <p className="text-foreground/80">
                    Whether you need technical co-founding, project collaboration, or strategic consulting, 
                    we have partnership models that fit your needs.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-primary text-2xl">✓</div>
                <div>
                  <h4 className="font-heading font-semibold mb-1">Growth Opportunities</h4>
                  <p className="text-foreground/80">
                    Access to our network of investors, mentors, and industry leaders who can help take 
                    your venture to the next level.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">
            Ready to Innovate Together?
          </h2>
          <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
            Whether you're a startup founder, an enterprise innovator, or a talented individual with a 
            vision, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="glow-effect bg-gradient-primary hover:shadow-glow-purple text-lg px-8 py-6"
            >
              <Link to="/contact">Join the Innovation Hub</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 text-lg px-8 py-6"
            >
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovationHub;
