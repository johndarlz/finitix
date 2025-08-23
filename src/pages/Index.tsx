import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, Globe, Users, Rocket, Star, GraduationCap, Brain, Music, Pill } from "lucide-react";
import finitixHubIcon from "@/assets/finitixhub-icon.png";
import lifeosIcon from "@/assets/lifeos-icon.png";
import syncBeatsIcon from "@/assets/syncbeats-icon.png";
import mediSnapIcon from "@/assets/medisnap-icon.png";
import heroLogo from "/lovable-uploads/eefd4944-88fe-498f-8d1e-f4b8b0ee4616.png";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "FINITIXHUB",
      description: "Learn, earn, teach, and showcase on one unified platform",
      icon: finitixHubIcon,
      link: "/products#finitixhub"
    },
      description: "AI-powered personal operating system for life management",
      icon: lifeosIcon,
      link: "/products#lifeos"
    },
    {
      id: 4,
      name: "SyncBeats",
      description: "Multi-device music sync for shared audio experiences",
      icon: syncBeatsIcon,
      link: "/products#syncbeats"
    },
    {
      id: 5,
      name: "MediSnap+",
      description: "Pill identifier and medication safety coach",
      icon: mediSnapIcon,
      link: "/products#medisnap"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <img src={heroLogo} alt="Finitix Logo" className="h-12 w-auto opacity-90" />
            </div>
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Finitix
                </span>
              </h1>
              <p className="text-lg text-primary font-semibold -mt-2">begin beyond</p>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We turn possibilities into realities. <br />
              <span className="text-primary font-semibold">Affordable. Innovative. Limitless.</span>
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Empowering individuals, startups, and small businesses by providing affordable, 
              high-quality services, training, and platforms that help people start, grow, and succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/products">
                  Explore Products <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
                Who We Are
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Finitix is a product-based software company dedicated to creating innovative digital solutions that tackle real-world problems. 
                  Finitix focuses on quality, innovation, and impact.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe that the best products aren't just functional — they inspire, empower, and make life easier.
                </p>
              </div>
            </div>
            
            <Card className="p-8 bg-gradient-card border-primary/20 hover:shadow-elegant transition-all duration-500 transform hover:scale-[1.02] animate-fade-in">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                <span className="text-primary font-semibold">Empowering individuals and startups</span> by providing affordable, 
                high-quality services, training, and platforms that help people start, grow, and succeed.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We don't just follow trends — we identify the gaps that matter and create future-ready solutions from scratch. 
                Every product we launch is built with the user at the center and technology as the enabler.
              </p>
            </Card>
          </div>
          
          {/* Products Showcase */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-12">Our Innovation Portfolio</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <Card key={product.id} className="group hover:shadow-elegant transition-all duration-500 transform hover:scale-105 bg-gradient-card border-border">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-lg overflow-hidden group-hover:scale-110 transition-transform duration-300">
                      <img 
                        src={product.icon} 
                        alt={`${product.name} Icon`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <CardDescription className="text-sm">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Button variant="outline" size="sm" asChild className="group">
                      <Link to={product.link}>
                        Go Through This <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We Make the Impossible… <span className="text-secondary">Inevitable.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              At Finitix, challenges are not roadblocks—they're opportunities. 
              If someone says it can't be done, that's where we begin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Lightning Fast",
                description: "Rapid development and deployment of innovative solutions that scale"
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Secure & Reliable", 
                description: "Enterprise-grade security with 99.9% uptime guarantee"
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Global Reach",
                description: "Connecting talent and opportunities across geographical boundaries"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Community Driven",
                description: "Building ecosystems where everyone can learn, earn, and grow together"
              },
              {
                icon: <Rocket className="h-8 w-8" />,
                title: "Innovation First",
                description: "Cutting-edge technology that transforms ideas into reality"
              },
              {
                icon: <Star className="h-8 w-8" />,
                title: "Premium Quality",
                description: "Affordable pricing without compromising on excellence"
              }
            ].map((feature, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 transform hover:scale-105 bg-gradient-card border-border">
                <CardHeader>
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Contact Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
              Why Contact Us?
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 bg-gradient-card border-primary/20 hover:shadow-elegant transition-all duration-500 transform hover:scale-[1.02] animate-fade-in">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  At Finitix, we believe every connection can spark something extraordinary. Whether you have a business idea, 
                  need help turning your dream into reality, want to collaborate, or simply wish to explore new opportunities — 
                  we are here to listen, guide, and make things happen.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We're not just a team; we are your partners in innovation. Your questions, ideas, or challenges are the fuel that drives us forward.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Work With Us Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Idea. Your Power. <span className="text-primary">Your Future.</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            💡 Got an idea to solve a real-world problem? We want to hear it!
            Share your vision with us and let's turn it into reality. The world needs your innovation — and Finitix will be your launchpad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/work-with-us">
                Submit Your Idea <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/work-with-us">Join the Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Begin Beyond?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of innovators who are already transforming their possibilities into realities.
          </p>
          <Button variant="secondary" size="xl" asChild>
            <Link to="/contact">
              Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
