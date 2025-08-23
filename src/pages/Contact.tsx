import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Send, MessageCircle, Zap, Heart, Shield, ArrowRight, Lightbulb } from "lucide-react";
import contactTeamImage from "@/assets/contact-team.jpg";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  return (
    <div>
      {/* Hero Section with Image */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold">
                  Get in <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
                </h1>
                <p className="text-lg text-primary font-semibold -mt-1">begin beyond</p>
              </div>
              <p className="text-xl text-muted-foreground mb-8">
                Ready to turn your possibilities into realities? Let's start the conversation. 
                We're here to help you begin beyond.
              </p>
            </div>
            <div className="relative">
              <img 
                src={contactTeamImage} 
                alt="Contact our team" 
                className="rounded-lg shadow-elegant w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <MessageCircle className="h-6 w-6 text-primary mr-3" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
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
                  const subject = String(fd.get('subject') || '');
                  const message = String(fd.get('message') || '');
                  const fullMessage = subject ? `${subject}\n\n${message}` : message;
                  const { error } = await supabase.from('contact_messages').insert({
                    name,
                    email,
                    phone: phone || null,
                    message: fullMessage,
                  });
                  if (error) {
                    // @ts-ignore
                    const { toast } = await import("@/hooks/use-toast");
                    toast.toast({ title: 'Failed to send', description: error.message, variant: 'destructive' });
                  } else {
                    // @ts-ignore
                    const { toast } = await import("@/hooks/use-toast");
                    toast.toast({ title: 'Message sent!', description: 'We will reply within 24 hours.' });
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
                    <Label htmlFor="phone">Phone (Optional)</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" placeholder="How can we help you?" />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      placeholder="Tell us about your project or idea..." 
                      rows={5}
                    />
                  </div>
                  
                  <Button variant="hero" size="lg" className="w-full" type="submit">
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-gradient-card shadow-primary">
                <CardHeader>
                  <CardTitle className="text-2xl">Let's Connect</CardTitle>
                  <CardDescription>
                    Multiple ways to reach us. Choose what works best for you.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email Us</h4>
                      <p className="text-muted-foreground">finitix.official@gmail.com</p>
                      <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <Phone className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Call Us</h4>
                      <p className="text-muted-foreground">+91 78158 79588</p>
                      <p className="text-muted-foreground">+91 95152 71439</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-accent rounded-lg">
                      <MapPin className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Online Platform</h4>
                      <p className="text-muted-foreground">Digital-first company</p>
                      <p className="text-sm text-muted-foreground">Serving clients globally</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Finitix Section */}
              <Card className="bg-gradient-card border-primary/20 hover:shadow-elegant transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Heart className="h-5 w-5 text-primary mr-2" />
                    Why Finitix?
                  </CardTitle>
                  <CardDescription>
                    Because Finitix is not just a company — it's a future you can be a part of.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { icon: <Zap className="h-4 w-4" />, text: "Turn possibilities into realities", color: "text-yellow-500" },
                      { icon: <Shield className="h-4 w-4" />, text: "Provide affordable, high-quality solutions", color: "text-blue-500" },
                      { icon: <Heart className="h-4 w-4" />, text: "Give every idea a fair chance to shine", color: "text-red-500" },
                      { icon: <Lightbulb className="h-4 w-4" />, text: "Support real people solving real problems", color: "text-green-500" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-all duration-300 group">
                        <div className={`${item.color} group-hover:scale-110 transition-transform duration-300`}>
                          {item.icon}
                        </div>
                        <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 italic">
                    We are here to help you grow, whether you're a dreamer, creator, innovator, or entrepreneur.
                  </p>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      {/* Idea Submission Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl font-bold flex items-center justify-center">
                <Lightbulb className="h-8 w-8 mr-3 text-yellow-300 animate-pulse" />
                💡 Got an idea to solve a real-world problem?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-xl text-white/90 leading-relaxed">
                We want to hear it! Share your vision with us and let's turn it into reality. 
                The world needs your innovation — and Finitix will be your launchpad.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <h4 className="text-lg font-semibold mb-3 text-white">📤 Submit Your Idea</h4>
                  <p className="text-white/80 text-sm mb-4">
                    Use our comprehensive form to share your innovative concepts with our team.
                  </p>
                  <Button variant="secondary" size="lg" asChild className="w-full group">
                    <Link to="/work-with-us">
                      Idea Submission Form <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
                
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <h4 className="text-lg font-semibold mb-3 text-white">What You Get</h4>
                  <ul className="space-y-2 text-sm text-white/80 text-left">
                    <li className="flex items-center">
                      <Zap className="h-3 w-3 mr-2 text-yellow-300" />
                      Free initial consultation
                    </li>
                    <li className="flex items-center">
                      <Shield className="h-3 w-3 mr-2 text-blue-300" />
                      Custom solution design
                    </li>
                    <li className="flex items-center">
                      <Heart className="h-3 w-3 mr-2 text-red-300" />
                      Affordable pricing plans
                    </li>
                    <li className="flex items-center">
                      <Lightbulb className="h-3 w-3 mr-2 text-green-300" />
                      Ongoing support & maintenance
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our services and approach.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How do you make premium solutions affordable?",
                answer: "We leverage efficient processes, modern technology, and a streamlined approach to deliver high-quality solutions without the premium price tag."
              },
              {
                question: "What industries do you serve?",
                answer: "We work across multiple sectors including education, healthcare, entertainment, productivity, and safety—essentially any industry that can benefit from digital innovation."
              },
              {
                question: "Do you work with international clients?",
                answer: "Yes! Our solutions are designed for global reach. We work with clients worldwide and our products are built to scale internationally."
              },
              {
                question: "What's your typical project timeline?",
                answer: "Project timelines vary based on complexity, but we pride ourselves on rapid development. Most projects are completed within 2-12 weeks."
              }
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-primary transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {faq.answer}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;