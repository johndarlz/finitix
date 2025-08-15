import Layout from "@/components/Layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to turn your possibilities into realities? Let's start the conversation. 
              We're here to help you begin beyond.
            </p>
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
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone (Optional)</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help you?" />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project or idea..." 
                      rows={5}
                    />
                  </div>
                  
                  <Button variant="hero" size="lg" className="w-full">
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
                      <p className="text-muted-foreground">hello@finitiix.com</p>
                      <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <Phone className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Call Us</h4>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-sm text-muted-foreground">Mon-Fri, 9 AM - 6 PM EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-accent rounded-lg">
                      <MapPin className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Visit Us</h4>
                      <p className="text-muted-foreground">Innovation Hub, Tech City</p>
                      <p className="text-sm text-muted-foreground">By appointment only</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-muted rounded-lg">
                      <Clock className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Business Hours</h4>
                      <p className="text-muted-foreground">Monday - Friday</p>
                      <p className="text-sm text-muted-foreground">9:00 AM - 6:00 PM EST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-primary text-white">
                <CardHeader>
                  <CardTitle className="text-xl">Ready to Begin Beyond?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90 mb-4">
                    Whether you're an individual with a big idea, a startup looking to scale, 
                    or a small business ready to innovate, we're here to help turn your 
                    possibilities into realities.
                  </p>
                  <ul className="space-y-2 text-sm text-white/80">
                    <li>• Free initial consultation</li>
                    <li>• Custom solution design</li>
                    <li>• Affordable pricing plans</li>
                    <li>• Ongoing support & maintenance</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
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
    </Layout>
  );
};

export default Contact;