import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, X, Minimize2, Maximize2, Send, Bot, User } from 'lucide-react';

const AIBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const chatRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Hi! I'm Jessi, your Finitix assistant. I can help you learn about our products, services, and answer any questions about the website. How can I help you today?",
      timestamp: new Date().toLocaleTimeString()
    }
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: message,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(message);
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        type: 'bot',
        content: botResponse,
        timestamp: new Date().toLocaleTimeString()
      }]);
    }, 1000);

    setMessage('');
  };

  const getBotResponse = (userMessage: string) => {
    const msg = userMessage.toLowerCase();
    
    if (msg.includes('product') || msg.includes('app')) {
      return "Great! Finitix has 4 amazing products: FINITIXHUB (learning & earning platform where you can learn skills, earn money, teach courses), LifeosFinitiix (AI-powered personal operating system for productivity & wellness), SyncBeats (multi-device music sync app), and MediSnap+ (AI pill identifier & medication safety coach). Which one interests you most?";
    }
    
    if (msg.includes('finitixhub') || msg.includes('learning') || msg.includes('freelancing')) {
      return "FINITIXHUB is our flagship learning & earning platform! Features: Skill Bartering (exchange skills without money), Micro-Freelancing (short projects with instant payouts), Global Access (connect worldwide), Portfolio Hub (showcase your work). It breaks down barriers to skill development and earning opportunities!";
    }
    
    if (msg.includes('lifeos') || msg.includes('productivity') || msg.includes('ai assistant')) {
      return "LifeosFinitiix is your AI-powered personal operating system! It includes: Productivity Suite (AI task management), Wellness Tracker (mental health & habits), Financial Dashboard (expense tracking), and Digital Companion (private AI assistant). Complete autonomy over your data with AI efficiency!";
    }
    
    if (msg.includes('syncbeats') || msg.includes('music') || msg.includes('sync')) {
      return "SyncBeats turns multiple smartphones into one giant speaker system! Features: Host-Guest System (one controls, others join), Perfect Sync (exact time alignment), Offline Mode (no internet needed), Custom Playlists. Perfect for parties, hostels, group travel!";
    }
    
    if (msg.includes('medisnap') || msg.includes('pill') || msg.includes('medication')) {
      return "MediSnap+ is your pill identification & medication safety coach! Features: Pill Identification (snap photos to identify), Safety Alerts (warns about interactions), Habit Tracker (medicine reminders), Medical History (tracks prescriptions). Improves medication safety, especially for elderly!";
    }
    
    if (msg.includes('contact') || msg.includes('reach')) {
      return "You can contact us at finitix.official@gmail.com or call +91 78158 79588 / +91 95152 71439. We respond within 24 hours! You can also use our contact form on the Contact page or submit ideas through our Work With Us page.";
    }
    
    if (msg.includes('price') || msg.includes('cost') || msg.includes('affordable')) {
      return "Finitix believes in affordable innovation! We provide premium solutions at accessible prices. Our motto: Affordable. Innovative. Limitless. Contact us for specific pricing based on your needs. We also offer flexible payment plans and free initial consultations.";
    }
    
    if (msg.includes('work') || msg.includes('job') || msg.includes('career') || msg.includes('idea')) {
      return "Exciting! Visit our 'Work With Us' page to submit your innovative ideas or apply to join our team. We're always looking for innovators, developers, designers, and dreamers! Got an idea to solve a real-world problem? We want to hear it!";
    }
    
    if (msg.includes('about') || msg.includes('company') || msg.includes('finitix')) {
      return "Finitix is a product-based software company that turns possibilities into realities! We create innovative digital solutions for real-world problems - making life simpler, safer, and smarter. We focus on quality, innovation, and impact. Mission: Empowering individuals and startups with affordable, high-quality solutions.";
    }
    
    if (msg.includes('features') || msg.includes('why choose')) {
      return "Why choose Finitix? ⚡ Lightning Fast development, 🛡️ Secure & Reliable (99.9% uptime), 🌍 Global Reach, 👥 Community Driven, 🚀 Innovation First, ⭐ Premium Quality at affordable prices. We make the impossible inevitable!";
    }
    
    return "I'd be happy to help! You can ask me about our products (FINITIXHUB, LifeosFinitiix, SyncBeats, MediSnap+), pricing, how to contact us, career opportunities, or anything else about Finitix. What would you like to know?";
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isOpen || isMinimized) return;
    setIsDragging(true);
    const rect = e.currentTarget.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !isOpen || isMinimized) return;
    const newX = e.clientX - dragOffset.x;
    const newY = e.clientY - dragOffset.y;
    
    // Keep within viewport bounds
    const maxX = window.innerWidth - 400;
    const maxY = window.innerHeight - 400;
    
    setPosition({
      x: Math.max(0, Math.min(newX, maxX)),
      y: Math.max(0, Math.min(newY, maxY))
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full h-14 w-14 shadow-elegant bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
          size="icon"
        >
          <MessageCircle className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
          <Badge className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground animate-pulse">
            Jessi
          </Badge>
        </Button>
      </div>
    );
  }

  return (
    <div 
      className={`fixed z-50 transition-all duration-300 ${isMinimized ? 'w-80' : 'w-96'}`}
      style={{ 
        left: isOpen ? `${position.x || window.innerWidth - 400}px` : 'auto',
        top: isOpen ? `${position.y || window.innerHeight - 450}px` : 'auto',
        right: isOpen ? 'auto' : '24px',
        bottom: isOpen ? 'auto' : '24px'
      }}
    >
      <Card className={`shadow-elegant border-primary/20 ${isMinimized ? 'h-16' : 'h-96'} transition-all duration-300`}>
        <CardHeader 
          className="p-4 bg-gradient-primary text-white rounded-t-lg cursor-move"
          onMouseDown={handleMouseDown}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/lovable-uploads/cbfaa119-8493-4329-a929-a92007ced9c0.png" alt="Jessi avatar" className="w-8 h-8 rounded-full border border-white/30 shadow" />
              <div>
                <CardTitle className="text-sm font-semibold">Jessi - AI Assistant</CardTitle>
                <Badge variant="secondary" className="text-xs bg-white/20 text-white">
                  Online
                </Badge>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-white hover:bg-white/20"
                onClick={() => setIsMinimized(!isMinimized)}
              >
                {isMinimized ? <Maximize2 className="h-3 w-3" /> : <Minimize2 className="h-3 w-3" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-white hover:bg-white/20"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </CardHeader>
        
        {!isMinimized && (
          <CardContent className="p-0 flex flex-col h-80">
            {/* Messages */}
            <div ref={chatRef} className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${msg.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      {msg.type === 'user' ? <User className="h-3 w-3 text-white" /> : <Bot className="h-3 w-3 text-white" />}
                    </div>
                    <div className={`p-3 rounded-lg ${msg.type === 'user' ? 'text-right' : 'text-left'}`}>
                      <div
                        className={`text-sm ${
                          msg.type === 'user'
                            ? 'bg-primary text-primary-foreground rounded-br-none'
                            : 'bg-muted text-muted-foreground rounded-bl-none'
                        } p-2 rounded-lg`}
                      >
                        {msg.content}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{msg.timestamp}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex space-x-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask me anything about Finitix..."
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  className="bg-primary hover:bg-primary/90"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default AIBot;