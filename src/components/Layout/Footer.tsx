import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-subtle border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/eefd4944-88fe-498f-8d1e-f4b8b0ee4616.png" 
                alt="Finitix Logo" 
                className="h-10 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Finitix
                </span>
                <span className="text-sm text-muted-foreground -mt-1">begin beyond</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              We turn possibilities into realities. Affordable. Innovative. Limitless. 
              Empowering individuals, startups, and small businesses with cutting-edge solutions.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/work-with-us" className="text-muted-foreground hover:text-primary transition-colors">
                  Work With Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-foreground mb-2 flex items-center">
                  <Mail className="h-4 w-4 text-primary mr-2" />
                  Email Us
                </h4>
                <p className="text-muted-foreground">finitix.official@gmail.com</p>
                <p className="text-xs text-muted-foreground">We'll respond within 24 hours</p>
              </div>
              
              <div>
                <h4 className="font-medium text-foreground mb-2 flex items-center">
                  <Phone className="h-4 w-4 text-primary mr-2" />
                  Call Us
                </h4>
                <p className="text-muted-foreground">+91 78158 79588</p>
                <p className="text-muted-foreground">+91 95152 71439</p>
              </div>
              
              <div>
                <h4 className="font-medium text-foreground mb-2 flex items-center">
                  <MapPin className="h-4 w-4 text-primary mr-2" />
                  Online Platform
                </h4>
                <p className="text-muted-foreground">Digital-first company</p>
                <p className="text-xs text-muted-foreground">Serving clients globally</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Finitix. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/admin-auth" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;