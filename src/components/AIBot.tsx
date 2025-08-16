import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, X, Minimize2, Maximize2, Send, Bot } from 'lucide-react';

const AIBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Hi! I'm Jessi, your Finitix assistant. I can help you learn about our products, services, and answer any questions about the website. How can I help you today?"
    }
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: message
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(message);
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        type: 'bot',
        content: botResponse
      }]);
    }, 1000);

    setMessage('');
  };

  const getBotResponse = (userMessage: string) => {
    const msg = userMessage.toLowerCase();
    
    if (msg.includes('product') || msg.includes('app')) {
      return "Great! Finitix has 5 amazing products: FINITIXHUB (learning & earning platform), LifeosFinitiix (AI life manager), SAFE-X (emergency safety app), SyncBeats (music sync app), and MediSnap+ (pill identifier). Which one interests you most?";
    }
    
    if (msg.includes('contact') || msg.includes('reach')) {
      return "You can contact us at finitix.official@gmail.com or call +91 78158 79588 / +91 95152 71439. We respond within 24 hours! You can also use our contact form on the Contact page.";
    }
    
    if (msg.includes('price') || msg.includes('cost') || msg.includes('affordable')) {
      return "Finitix believes in affordable innovation! We provide premium solutions at accessible prices. Contact us for specific pricing based on your needs. We also offer flexible payment plans.";
    }
    
    if (msg.includes('work') || msg.includes('job') || msg.includes('career')) {
      return "Exciting! Visit our 'Work With Us' page to submit your ideas or apply to join our team. We're always looking for innovators, developers, designers, and dreamers!";
    }
    
    if (msg.includes('about') || msg.includes('company')) {
      return "Finitix is a product-first software company that turns possibilities into realities. We create innovative digital solutions for real-world problems - making life simpler, safer, and smarter. Our mission: Affordable. Innovative. Limitless.";
    }
    
    return "I'd be happy to help! You can ask me about our products, pricing, how to contact us, career opportunities, or anything else about Finitix. What would you like to know?";
  };

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
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isMinimized ? 'w-80' : 'w-96'}`}>
      <Card className={`shadow-elegant border-primary/20 ${isMinimized ? 'h-16' : 'h-96'} transition-all duration-300`}>
        <CardHeader className="p-4 bg-gradient-primary text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="h-5 w-5" />
              <CardTitle className="text-sm font-semibold">Jessi - AI Assistant</CardTitle>
              <Badge variant="secondary" className="text-xs bg-white/20 text-white">
                Online
              </Badge>
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
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      msg.type === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {msg.content}
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