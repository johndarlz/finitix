import Layout from "@/components/Layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Heart, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Finitix</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are more than just a business name—we're a movement. A promise that no idea is too big, 
              no dream too far, and no ambition too expensive to bring to life.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-gradient-card shadow-primary">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg leading-relaxed">
                  To bridge the gap between ambitious ideas and achievable realities by delivering 
                  affordable, accessible, and impactful solutions to people who have dreams but limited resources.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-secondary">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Eye className="h-8 w-8 text-secondary" />
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg leading-relaxed">
                  By 2032, Finitix aims to become a multi-sector powerhouse operating across Digital Solutions, 
                  Education, Technology, Finance, Consumer Apps, and multiple innovative business verticals.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do and every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Affordability",
                description: "Premium solutions shouldn't require premium prices. We make excellence accessible to everyone.",
                color: "text-red-500"
              },
              {
                icon: <Lightbulb className="h-8 w-8" />,
                title: "Innovation",
                description: "We don't just follow trends—we create them. Every solution pushes boundaries.",
                color: "text-yellow-500"
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Limitless Thinking",
                description: "No idea is too ambitious. We see possibilities where others see impossibilities.",
                color: "text-primary"
              }
            ].map((value, index) => (
              <Card key={index} className="text-center group hover:shadow-elegant transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <div className={`${value.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Beyond What You Think
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Finitix is not bound by what exists today—we create what's next. 
              We think past the obvious, past the expected, past the limits others accept.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                badge: "Revolution",
                title: "We're Changing the Market",
                description: "We're not just competing in the market—we're changing the market. Finitix challenges the outdated belief that premium solutions must come with premium prices."
              },
              {
                badge: "Empowerment", 
                title: "Leveling the Playing Field",
                description: "We're empowering individuals, small businesses, and dreamers to access the same creative, technical, and strategic firepower that big corporations enjoy."
              },
              {
                badge: "Innovation",
                title: "Making the Impossible Inevitable",
                description: "At Finitix, challenges are not roadblocks—they're opportunities. If someone says it can't be done, that's where we begin."
              }
            ].map((item, index) => (
              <Card key={index} className="bg-gradient-card border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {item.badge}
                    </Badge>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg text-muted-foreground">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision 2032 */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Vision 2032
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              By 2032, Finitix aims to:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "₹2000+ Crore",
                subtitle: "Turnover"
              },
              {
                title: "Multiple Industries",
                subtitle: "Tech, Education, Health, Agriculture"
              },
              {
                title: "Millions",
                subtitle: "Employment & Freelance Opportunities"
              },
              {
                title: "Global Brand",
                subtitle: "Born in India"
              }
            ].map((item, index) => (
              <div key={index} className="text-center text-white">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/80">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The visionary minds behind Finitix, dedicated to turning possibilities into realities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rahul Sharma",
                role: "Founder & CEO",
                image: "/src/assets/founder-portrait.jpg",
                description: "Visionary entrepreneur with 8+ years in tech innovation. Passionate about solving real-world problems through technology."
              },
              {
                name: "Priya Patel", 
                role: "Co-Founder & CTO",
                image: "/src/assets/cofounder-portrait.jpg",
                description: "Technical architect and product strategist. Expert in scalable solutions and emerging technologies."
              },
              {
                name: "Amit Kumar",
                role: "Lead Developer",
                image: "/src/assets/developer-portrait.jpg", 
                description: "Full-stack developer and AI enthusiast. Builds robust, user-centric applications that scale globally."
              }
            ].map((member, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-primary/10 mb-4 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-primary opacity-20"></div>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <div className="text-primary font-medium">{member.role}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {member.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Beyond?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us in rewriting the rules and making the impossible inevitable.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;