import Layout from "@/components/Layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Brain, 
  Shield, 
  Music, 
  Pill, 
  ArrowRight,
  Users,
  DollarSign,
  Globe,
  Zap,
  Heart,
  Camera
} from "lucide-react";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "FINITIXHUB",
      tagline: "Learn, Earn, Teach, and Showcase on One Unified Platform",
      description: "An all-in-one micro-freelancing, learning, and collaboration ecosystem where users can learn new skills, earn money via micro-projects, teach courses, and showcase portfolios to attract global clients.",
      icon: <GraduationCap className="h-8 w-8" />,
      features: [
        "Skill Bartering: Exchange skills without money",
        "Micro-Freelancing: Short projects with instant payouts", 
        "Global Access: Connect worldwide",
        "Portfolio Hub: Professional project showcase"
      ],
      impact: "Breaks down geographical and financial barriers to skill development and earning",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      id: 2,
      name: "LifeosFinitiix",
      tagline: "Clarity, Control, Consistency in a Distracted World",
      description: "An AI-powered, all-in-one personal operating system that integrates productivity, wellness, financial tracking, lifelong learning, and digital companionship into a single secure ecosystem.",
      icon: <Brain className="h-8 w-8" />,
      features: [
        "Productivity Suite: AI task management & smart reminders",
        "Wellness Tracker: Mental health & habit building",
        "Financial Dashboard: Expense tracking & budgeting",
        "Digital Companion: Private AI assistant"
      ],
      impact: "Complete autonomy over data, routines, and goals with AI efficiency and privacy protection",
      color: "text-purple-500", 
      bgColor: "bg-purple-50"
    },
    {
      id: 3,
      name: "SAFE-X",
      tagline: "Always Listening, Always Protecting",
      description: "India's Most Trusted Emergency Assistant App - a voice-activated emergency safety app designed for instant help in critical situations, especially for women, children, and vulnerable individuals.",
      icon: <Shield className="h-8 w-8" />,
      features: [
        "Voice Command Activation: Trigger emergency calls instantly",
        "Auto Location Sharing: Real-time location to contacts",
        "Stealth Mode: Silent activation without alerting attackers",
        "Wearable Integration: Works with smart bands"
      ],
      impact: "A life-saving digital companion for personal safety in urban and rural areas",
      color: "text-red-500",
      bgColor: "bg-red-50"
    },
    {
      id: 4,
      name: "SyncBeats",
      tagline: "One Beat. Many Devices",
      description: "Multi-Device Music & Audio Sync App that lets you sync audio playback across multiple smartphones, turning them into one giant speaker system—perfect for hostels, group travel, or parties.",
      icon: <Music className="h-8 w-8" />,
      features: [
        "Host-Guest System: One phone controls, others join easily",
        "Perfect Sync: Exact time alignment across devices",
        "Offline Mode: Works without internet",
        "Custom Playlists: Host controls group playlist"
      ],
      impact: "No need for expensive speakers—turns any gathering into shared audio experience",
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      id: 5,
      name: "MediSnap+",
      tagline: "Know Your Pills. Take Them Safely",
      description: "Pill Identifier & Medication Safety Coach that uses AI and image recognition to identify pills instantly and provide real-time dosage guidance, safety checks, and medication reminders.",
      icon: <Pill className="h-8 w-8" />,
      features: [
        "Pill Identification: Snap picture to identify medication",
        "Safety Alerts: Warns about dangerous interactions",
        "Habit Tracker: Medicine reminders on time",
        "Medical History: Tracks prescriptions for accuracy"
      ],
      impact: "Improves medication safety and prevents mistakes, especially for elderly or chronically ill",
      color: "text-orange-500",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Product Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Innovative solutions designed to empower, educate, and protect. 
              Each product addresses real-world challenges with cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {products.map((product, index) => (
              <Card key={product.id} className={`group hover:shadow-elegant transition-all duration-500 transform hover:scale-[1.02] ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                  {/* Product Info */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className={`${product.color} p-3 rounded-lg ${product.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                        {product.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{product.name}</h3>
                        <p className="text-sm text-muted-foreground">{product.tagline}</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Key Features:</h4>
                      <ul className="space-y-1">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 bg-gradient-card rounded-lg border border-border">
                      <h4 className="font-semibold text-foreground mb-2 flex items-center">
                        <Zap className="h-4 w-4 text-primary mr-2" />
                        Impact
                      </h4>
                      <p className="text-sm text-muted-foreground">{product.impact}</p>
                    </div>

                    <Button variant="outline" className="group">
                      Learn More 
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  {/* Visual/Stats Section */}
                  <div className="space-y-6 flex flex-col justify-center">
                    <div className="grid grid-cols-2 gap-4">
                      <Card className="text-center p-4 bg-gradient-card">
                        <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                        <p className="text-sm font-semibold">Global Reach</p>
                        <p className="text-xs text-muted-foreground">Worldwide Access</p>
                      </Card>
                      <Card className="text-center p-4 bg-gradient-card">
                        <Globe className="h-6 w-6 text-secondary mx-auto mb-2" />
                        <p className="text-sm font-semibold">Multi-Platform</p>
                        <p className="text-xs text-muted-foreground">Cross Device</p>
                      </Card>
                    </div>
                    
                    <div className="text-center p-6 bg-gradient-primary rounded-lg text-white">
                      <h4 className="text-lg font-semibold mb-2">Coming Soon</h4>
                      <p className="text-sm opacity-90">
                        Be the first to experience the future of {product.name.toLowerCase()}
                      </p>
                      <Badge variant="secondary" className="mt-3 bg-white/20 text-white">
                        Beta Access Available
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Impact by Numbers
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "5", label: "Innovative Products", icon: <Zap className="h-6 w-6" /> },
              { number: "∞", label: "Possibilities", icon: <Globe className="h-6 w-6" /> },
              { number: "100%", label: "Affordable", icon: <DollarSign className="h-6 w-6" /> },
              { number: "24/7", label: "Always Available", icon: <Heart className="h-6 w-6" /> }
            ].map((stat, index) => (
              <Card key={index} className="text-center p-6 group hover:shadow-elegant transition-all duration-300 transform hover:scale-105">
                <div className="text-primary mb-3 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Ideas?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join the revolution. Experience products that turn possibilities into realities.
          </p>
          <Button variant="secondary" size="xl">
            Get Early Access <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Products;