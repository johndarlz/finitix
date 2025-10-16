import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Globe, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import officeSpace from "@/assets/office-space.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("contact_messages").insert([formData]);

      if (error) throw error;

      toast.success("Message sent successfully! We'll get back to you within 24 hours.");
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      console.error("Error submitting message:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      primary: "finitix.official@gmail.com",
      secondary: "Response within 24 hours",
      href: "mailto:finitix.official@gmail.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      primary: "+91 78158 79588",
      secondary: "+91 95152 71439",
      href: "tel:+917815879588",
    },
    {
      icon: Globe,
      title: "Global Presence",
      primary: "Serving clients worldwide",
      secondary: "Digital-first company",
      href: null,
    },
    {
      icon: Clock,
      title: "Business Hours",
      primary: "24/7 Support Available",
      secondary: "Office Hours: 9 AM - 6 PM IST",
      href: null,
    },
  ];

  const officeLocations = [
    {
      region: "Asia Pacific",
      description: "Primary development center with 24/7 operations",
    },
    {
      region: "North America",
      description: "Strategic partnerships and client services",
    },
    {
      region: "Europe",
      description: "Innovation hub and enterprise solutions",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Let's Build the <span className="text-gradient">Future Together</span>
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Want to explore partnership opportunities? Or just want to say hello? 
            We're here and ready to help turn your vision into reality.
          </p>
        </div>

        {/* Office Image */}
        <div className="mb-20 animate-scale-in">
          <img
            src={officeSpace}
            alt="FINITIX Office"
            className="rounded-2xl shadow-glow-purple w-full h-auto max-h-[500px] object-cover"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
          {/* Contact Form */}
          <Card className="p-8 bg-card border-border/50 animate-scale-in">
            <h2 className="text-2xl font-heading font-bold mb-2">Send Us a Message</h2>
            <p className="text-muted-foreground mb-6">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-foreground mb-2 block">
                  Full Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="bg-muted border-border"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-foreground mb-2 block">
                  Email Address <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="bg-muted border-border"
                  required
                />
              </div>
              <div>
                <Label htmlFor="company" className="text-foreground mb-2 block">
                  Company Name (Optional)
                </Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className="bg-muted border-border"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-foreground mb-2 block">
                  Message <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, idea, or inquiry..."
                  rows={6}
                  className="bg-muted border-border resize-none"
                  required
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full glow-effect bg-gradient-primary hover:shadow-glow-purple"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-scale-in" style={{ animationDelay: "0.1s" }}>
            <div>
              <h2 className="text-2xl font-heading font-bold mb-6">Get in Touch</h2>
              <p className="text-foreground/80 mb-6">
                Choose the best way to reach us. We're available through multiple channels to ensure 
                you get the support you need, when you need it.
              </p>
            </div>
            
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-card border-border/50 hover:border-primary/50 transition-smooth hover:shadow-glow group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-primary group-hover:animate-glow-pulse flex-shrink-0">
                      <Icon className="text-primary-foreground" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-primary transition-smooth">
                        {method.title}
                      </h3>
                      {method.href ? (
                        <a
                          href={method.href}
                          className="text-foreground/80 hover:text-primary transition-smooth block mb-1"
                        >
                          {method.primary}
                        </a>
                      ) : (
                        <p className="text-foreground/80 mb-1">{method.primary}</p>
                      )}
                      <p className="text-sm text-muted-foreground">{method.secondary}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Office Locations */}
        <section className="mb-20 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-center">
            Our <span className="text-gradient">Global Presence</span>
          </h2>
          <p className="text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
            With a distributed team across continents, we provide round-the-clock service and support 
            to clients worldwide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {officeLocations.map((location, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border/50 hover:border-primary/50 transition-smooth hover:shadow-glow group text-center"
              >
                <MapPin className="mx-auto mb-4 text-primary group-hover:scale-110 transition-smooth" size={32} />
                <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-smooth">
                  {location.region}
                </h3>
                <p className="text-sm text-muted-foreground">{location.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="bg-card rounded-2xl p-12 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-center">
              Frequently <span className="text-gradient">Asked Questions</span>
            </h2>
            <p className="text-center text-foreground/80 mb-12">
              Quick answers to common questions about our services and processes
            </p>
            <div className="space-y-6">
              <Card className="p-6 bg-background border-border/50">
                <h3 className="text-lg font-heading font-semibold mb-2">How long does a typical project take?</h3>
                <p className="text-foreground/80">
                  Project timelines vary based on scope and complexity. A simple MVP can be delivered in 
                  4-6 weeks, while complex enterprise solutions may take 3-6 months. We'll provide a detailed 
                  timeline during our initial consultation.
                </p>
              </Card>
              <Card className="p-6 bg-background border-border/50">
                <h3 className="text-lg font-heading font-semibold mb-2">What is your pricing model?</h3>
                <p className="text-foreground/80">
                  We offer flexible pricing models including fixed-price projects, time & materials, and 
                  dedicated team arrangements. The best model depends on your project requirements and we'll 
                  help you choose during our consultation.
                </p>
              </Card>
              <Card className="p-6 bg-background border-border/50">
                <h3 className="text-lg font-heading font-semibold mb-2">Do you provide post-launch support?</h3>
                <p className="text-foreground/80">
                  Absolutely! We offer comprehensive post-launch support including maintenance, updates, 
                  bug fixes, and feature enhancements. We're committed to your long-term success.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
