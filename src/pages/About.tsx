import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Heart, Lightbulb } from "lucide-react";
import aboutTeamImage from "@/assets/about-team-collaboration.jpg";
import aboutInnovationImage from "@/assets/about-innovation-lab.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8 flex items-center justify-start space-x-4">
                <img 
                  src="/lovable-uploads/eefd4944-88fe-498f-8d1e-f4b8b0ee4616.png" 
                  alt="Finitix Logo" 
                  className="h-12 w-auto animate-fade-in"
                />
                <div className="flex flex-col">
                  <h1 className="text-4xl md:text-5xl font-bold">
                    About <span className="bg-gradient-primary bg-clip-text text-transparent">Finitix</span>
                  </h1>
                  <p className="text-lg text-primary font-semibold -mt-1">begin beyond</p>
                </div>
              </div>
              <p className="text-xl text-muted-foreground">
                We are more than just a business name—we're a movement. A promise that no idea is too big, 
                no dream too far, and no ambition too expensive to bring to life.
              </p>
            </div>
            <div className="relative">
              <img 
                src={aboutTeamImage} 
                alt="About Finitix Team" 
                className="rounded-lg shadow-elegant w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <Card className="bg-gradient-card shadow-primary hover:shadow-elegant transition-all duration-500 transform hover:scale-[1.02]">
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

            <div className="relative">
              <img 
                src={aboutInnovationImage} 
                alt="Innovation Lab" 
                className="rounded-lg shadow-elegant w-full h-auto"
              />
            </div>

            <Card className="bg-gradient-card shadow-secondary hover:shadow-elegant transition-all duration-500 transform hover:scale-[1.02]">
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

      {/* Founder Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Founder of Finitix</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Visionary leadership driving innovation and excellence in every solution we create.
            </p>
          </div>

          <motion.div 
            className="relative bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Jnaneswar</h3>
                  <p className="text-primary font-medium text-lg">Founder & CEO</p>
                </div>
                
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    As the visionary behind Finitix, Jnaneswar has always believed in the power of technology to transform lives. 
                    With a passion for innovation and a commitment to excellence, he leads our team in creating solutions that 
                    make a real difference in the world.
                  </p>
                  <p>
                    His journey began with a simple yet powerful idea: to build a company that doesn't just follow trends but 
                    sets them, creating meaningful impact through technology.
                  </p>
                </div>
                
                <div className="pt-4">
                  <h4 className="font-semibold mb-3">Vision Behind Finitix</h4>
                  <div className="space-y-3">
                    {[
                      "To create a world where innovative technology is accessible to everyone, not just the privileged few.",
                      "To build solutions that solve real problems and improve people's lives in meaningful ways.",
                      "To foster a culture of creativity, excellence, and continuous learning."
                    ].map((item, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-1.5">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                        </div>
                        <p className="text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 mx-auto lg:mx-0 rounded-full overflow-hidden border-4 border-primary/20">
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <svg className="w-24 h-24 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary/10 rounded-full"></div>
              </div>
            </div>
          </motion.div>
          
          {/* Team Philosophy */}
          <motion.div 
            className="mt-16 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6">Our Team Philosophy</h3>
            <p className="text-muted-foreground leading-relaxed">
              At Finitix, we believe in the power of a small, dedicated team that thinks big. 
              Each member brings unique skills and perspectives, united by a shared commitment to 
              excellence and innovation. Together, we're not just building products—we're shaping 
              the future of technology.
            </p>
            <div className="mt-8 flex justify-center space-x-2">
              {['Innovation', 'Excellence', 'Integrity', 'Impact'].map((value, i) => (
                <span key={i} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                  {value}
                </span>
              ))}
            </div>
          </motion.div>
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
