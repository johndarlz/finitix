import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Server, Mail, Users, ShieldCheck, Database } from "lucide-react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/5 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 mb-4">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            At Finitix, we're committed to protecting your privacy and ensuring your personal information is handled with care.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="bg-gradient-card border border-border/50 hover:shadow-elegant transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Server className="h-5 w-5 text-primary" />
                  </div>
                  <span>Our Commitment to Your Privacy</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Finitix is built on trust and transparency. We collect only what's necessary to provide and improve our services, 
                    and we're committed to being clear about how we handle your information.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="p-4 bg-background/50 rounded-lg border border-border/30">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-1.5 rounded-md bg-green-100">
                          <ShieldCheck className="h-4 w-4 text-green-600" />
                        </div>
                        <h3 className="font-medium">Data Collection</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        We collect only essential information needed to provide our services, including contact details and usage data.
                      </p>
                    </div>
                    <div className="p-4 bg-background/50 rounded-lg border border-border/30">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-1.5 rounded-md bg-blue-100">
                          <Lock className="h-4 w-4 text-blue-600" />
                        </div>
                        <h3 className="font-medium">Data Protection</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Your data is protected with industry-standard security measures and encryption protocols.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-gradient-card border border-border/50 hover:shadow-elegant transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 rounded-lg bg-secondary/10">
                    <Users className="h-5 w-5 text-secondary" />
                  </div>
                  <span>Your Data, Your Control</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-medium text-foreground">Your Rights</h3>
                    <p className="text-muted-foreground">
                      You have the right to access, update, or delete your personal information at any time. 
                      We provide easy-to-use tools in your account settings to manage your data preferences.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-medium text-foreground">Third-Party Services</h3>
                    <p className="text-muted-foreground">
                      We work with trusted partners who help us deliver our services. These partners are carefully vetted 
                      and required to maintain the same level of data protection we do.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="bg-gradient-card border border-border/50 hover:shadow-elegant transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 rounded-lg bg-amber-500/10">
                    <Database className="h-5 w-5 text-amber-500" />
                  </div>
                  <span>Data Security & Protection</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We implement robust security measures to protect your personal information from unauthorized access, 
                    alteration, disclosure, or destruction. Our security practices include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>End-to-end encryption for all sensitive data</li>
                    <li>Regular security audits and vulnerability testing</li>
                    <li>Strict access controls and authentication requirements</li>
                    <li>Employee training on data protection best practices</li>
                    <li>Incident response procedures for potential security breaches</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-gradient-card border border-border/50 hover:shadow-elegant transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 rounded-lg bg-purple-500/10">
                    <Mail className="h-5 w-5 text-purple-500" />
                  </div>
                  <span>Contact Us</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    If you have any questions or concerns about our privacy practices or this policy, 
                    please don't hesitate to reach out to our privacy team.
                  </p>
                  <div className="bg-background/50 rounded-lg p-4 border border-border/30">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-primary" />
                        <span>Email: privacy@finitix.com</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        We typically respond to privacy-related inquiries within 2 business days.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            className="text-center pt-8 border-t border-border/30 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-muted-foreground">
              This privacy policy may be updated from time to time. We will notify you of any material changes 
              by posting the new policy on this page and updating the "Last updated" date.
            </p>
            <p className="text-xs text-muted-foreground mt-4">
              © {new Date().getFullYear()} Finitix. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
