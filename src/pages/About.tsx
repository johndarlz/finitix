import { Card } from "@/components/ui/card";
import { Target, Eye, Lightbulb, Award, Users, TrendingUp, Globe, Heart } from "lucide-react";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import officeSpace from "@/assets/office-space.jpg";

const About = () => {
  const coreValues = [
    { icon: Lightbulb, title: "Innovation", description: "We constantly push boundaries and embrace new technologies" },
    { icon: Heart, title: "Integrity", description: "Honesty and transparency in everything we do" },
    { icon: Users, title: "Collaboration", description: "Working together to achieve extraordinary results" },
    { icon: Award, title: "Excellence", description: "Delivering nothing less than the best quality" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            About <span className="text-gradient">FINITIX</span>
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            We are a product-based software company on a mission to transform how businesses leverage 
            technology. Through innovation, dedication, and a relentless pursuit of excellence, we build 
            digital solutions that create lasting impact.
          </p>
        </div>

        {/* Hero Image Section */}
        <div className="mb-20 animate-scale-in">
          <img
            src={teamCollaboration}
            alt="FINITIX Team Collaboration"
            className="rounded-2xl shadow-glow-purple w-full h-auto max-h-[500px] object-cover"
          />
        </div>

        {/* Company Story */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center">
              Our <span className="text-gradient">Story</span>
            </h2>
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                FINITIX was born from a simple yet powerful belief: technology should be accessible to 
                everyone, not just the privileged few. Founded by visionary entrepreneur Jnaneswar Kandukuri, 
                our company started with a mission to bridge the gap between innovative ideas and their 
                real-world implementation.
              </p>
              <p>
                What began as a small team of passionate developers has grown into a global technology 
                partner serving clients across continents. We've helped startups launch groundbreaking 
                products, enabled enterprises to undergo digital transformation, and empowered countless 
                businesses to achieve their technological goals.
              </p>
              <p>
                Today, FINITIX stands as a testament to what's possible when innovation meets dedication. 
                We continue to push boundaries, challenge conventions, and create solutions that don't just 
                follow trends—they set them.
              </p>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Philosophy */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 bg-card border-border/50 hover:border-primary/50 transition-smooth hover:shadow-glow animate-scale-in group">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-gradient-primary mb-4 group-hover:animate-glow-pulse">
                  <Target className="text-primary-foreground" size={32} />
                </div>
                <h2 className="text-2xl font-heading font-bold mb-4 group-hover:text-primary transition-smooth">
                  Mission
                </h2>
                <p className="text-foreground/80">
                  To empower innovators worldwide by turning visionary ideas into high-quality, scalable 
                  digital products that drive meaningful change and create lasting value for businesses 
                  and society.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-card border-border/50 hover:border-primary/50 transition-smooth hover:shadow-glow-purple animate-scale-in group" style={{ animationDelay: "0.1s" }}>
              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-gradient-primary mb-4 group-hover:animate-glow-pulse">
                  <Eye className="text-primary-foreground" size={32} />
                </div>
                <h2 className="text-2xl font-heading font-bold mb-4 group-hover:text-primary transition-smooth">
                  Vision
                </h2>
                <p className="text-foreground/80">
                  To create a world where innovative technology is accessible to everyone, where ideas 
                  flow freely into implementation, and where digital transformation is within reach for 
                  businesses of all sizes.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-card border-border/50 hover:border-primary/50 transition-smooth hover:shadow-glow animate-scale-in group" style={{ animationDelay: "0.2s" }}>
              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-gradient-primary mb-4 group-hover:animate-glow-pulse">
                  <Lightbulb className="text-primary-foreground" size={32} />
                </div>
                <h2 className="text-2xl font-heading font-bold mb-4 group-hover:text-primary transition-smooth">
                  Philosophy
                </h2>
                <p className="text-foreground/80">
                  "Challenges are not roadblocks—they're opportunities." We believe that every problem 
                  is a chance to innovate, every obstacle is an opportunity to excel, and every limitation 
                  is an invitation to push boundaries.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-20 bg-card rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">
            Our <span className="text-gradient">Core Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="p-4 rounded-full bg-gradient-primary w-fit mx-auto mb-4">
                    <Icon className="text-primary-foreground" size={32} />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Future Goals 2050 */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">
            Our Future <span className="text-gradient">Vision 2050</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-10 bg-gradient-glow border-primary/20 mb-8">
              <p className="text-xl text-foreground/80 leading-relaxed text-center mb-8">
                By 2050, FINITIX aims to be a global leader in technology innovation, empowering billions 
                of people worldwide with accessible, intelligent, and sustainable digital solutions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="text-primary text-2xl">🌍</div>
                    <div>
                      <h4 className="font-heading font-semibold mb-2">Global Impact</h4>
                      <p className="text-foreground/80">
                        Serve 1 billion+ users across 100+ countries with transformative technology solutions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-primary text-2xl">🤖</div>
                    <div>
                      <h4 className="font-heading font-semibold mb-2">AI Leadership</h4>
                      <p className="text-foreground/80">
                        Pioneer next-generation AI systems that augment human capabilities and solve complex challenges
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-primary text-2xl">🌱</div>
                    <div>
                      <h4 className="font-heading font-semibold mb-2">Sustainable Tech</h4>
                      <p className="text-foreground/80">
                        Build carbon-neutral infrastructure and promote eco-friendly technology practices
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="text-primary text-2xl">🎓</div>
                    <div>
                      <h4 className="font-heading font-semibold mb-2">Education Revolution</h4>
                      <p className="text-foreground/80">
                        Democratize quality education through intelligent learning platforms accessible to all
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-primary text-2xl">💡</div>
                    <div>
                      <h4 className="font-heading font-semibold mb-2">Innovation Ecosystem</h4>
                      <p className="text-foreground/80">
                        Create a thriving network of 10,000+ innovation hubs worldwide fostering entrepreneurship
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-primary text-2xl">🏥</div>
                    <div>
                      <h4 className="font-heading font-semibold mb-2">Healthcare Access</h4>
                      <p className="text-foreground/80">
                        Transform healthcare delivery with AI-powered diagnostics and telemedicine for underserved communities
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            <blockquote className="text-2xl md:text-3xl font-heading font-bold text-center text-gradient italic">
              "Building tomorrow's technology, today—for a better world in 2050."
            </blockquote>
          </div>
        </section>

        {/* Founder Section */}
        <section className="bg-gradient-glow rounded-2xl p-12 mb-12 border border-primary/20 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center">
              Meet Our <span className="text-gradient">Founder</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 flex justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-primary flex items-center justify-center">
                  <div className="text-6xl font-heading font-bold text-primary-foreground">JK</div>
                </div>
              </div>
              <div className="md:col-span-2 space-y-4">
                <div>
                  <h3 className="text-2xl font-heading font-semibold mb-2">Jnaneswar Kandukuri</h3>
                  <p className="text-lg text-primary mb-4">Founder & CEO</p>
                </div>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  "As the visionary behind Finitix, I believe in the transformative power of technology. 
                  My journey in tech began with a simple question: How can we make innovation accessible 
                  to everyone? Today, FINITIX is the answer to that question."
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  With over a decade of experience in software development and business strategy, Jnaneswar 
                  has led FINITIX to become a trusted partner for businesses seeking digital excellence. His 
                  philosophy is simple: build solutions that don't follow trends—set them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Office Culture */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Our <span className="text-gradient">Culture</span>
            </h2>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              At FINITIX, we foster a culture of innovation, collaboration, and continuous learning. 
              We believe that great products are built by great teams, and we invest heavily in creating 
              an environment where creativity thrives.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Globe className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-heading font-semibold mb-1">Remote-First Culture</h4>
                  <p className="text-sm text-muted-foreground">
                    Work from anywhere while staying connected with our global team
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-heading font-semibold mb-1">Continuous Growth</h4>
                  <p className="text-sm text-muted-foreground">
                    Regular training, workshops, and opportunities to learn new technologies
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-heading font-semibold mb-1">Team Collaboration</h4>
                  <p className="text-sm text-muted-foreground">
                    Cross-functional teams working together to solve complex challenges
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src={officeSpace}
              alt="FINITIX Office Space"
              className="rounded-2xl shadow-glow-purple w-full h-auto"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
