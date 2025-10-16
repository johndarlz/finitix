import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center animate-fade-in">
        <h1 className="text-9xl font-heading font-bold text-gradient mb-4">404</h1>
        <h2 className="text-3xl font-heading font-semibold mb-4">Page Not Found</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button
          asChild
          size="lg"
          className="glow-effect bg-gradient-primary hover:shadow-glow-purple"
        >
          <Link to="/">
            <Home size={20} />
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
