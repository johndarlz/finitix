import { Link } from "react-router-dom";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/finitix-logo.png";

const Footer = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Innovation Hub", path: "/innovation-hub" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="relative border-t border-border/50 bg-gradient-to-br from-card via-card to-primary/5 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Tagline */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3 group">
              <img src={logo} alt="FINITIX Logo" className="h-12 w-auto transition-transform group-hover:scale-110 transition-smooth" />
              <div>
                <h2 className="text-2xl font-heading font-bold text-gradient">FINITIX</h2>
                <p className="text-sm text-muted-foreground">Beyond Begin</p>
              </div>
            </Link>
            <p className="text-foreground/70 leading-relaxed max-w-md">
              Turning visionary ideas into reality through innovative technology solutions. 
              We build digital products that drive growth and create lasting impact.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-3 mt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-3 rounded-xl bg-gradient-to-br from-muted to-muted/50 hover:from-primary hover:to-secondary text-foreground hover:text-primary-foreground transition-smooth glow-effect-purple hover:scale-110 group"
                  >
                    <Icon size={20} className="group-hover:rotate-12 transition-smooth" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-6 text-gradient">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-foreground/70 hover:text-primary transition-smooth flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300" />
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-6 text-gradient">Get In Touch</h3>
            <div className="space-y-3 text-foreground/70">
              <p className="text-sm leading-relaxed">
                Ready to transform your business with cutting-edge technology?
              </p>
              <Link to="/contact">
                <Button 
                  size="sm" 
                  className="bg-gradient-primary hover:shadow-glow-purple transition-smooth mt-2"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} FINITIX. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-smooth">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-smooth">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-smooth">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
