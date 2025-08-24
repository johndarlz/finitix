import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, FileText, AlertTriangle, Shield, Users, Gavel, ScaleIcon } from "lucide-react";
import { motion } from "framer-motion";

const TermsOfService = () => {
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
            <Scale className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Please read these terms carefully before using our services.
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
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <span>Agreement to Terms</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    By accessing and using Finitix services, you accept and agree to be bound by these Terms of Service. 
                    If you do not agree to these terms, please do not use our services.
                  </p>
                  <div className="p-4 bg-background/50 rounded-lg border border-border/30 mt-4">
                    <p className="text-sm">
                      <span className="font-medium text-foreground">Note:</span> These Terms of Service ("Terms") govern your use of our website, 
                      products, and services (collectively, the "Service") operated by Finitix.
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
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-gradient-card border border-border/50 hover:shadow-elegant transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <Users className="h-5 w-5 text-blue-500" />
                  </div>
                  <span>User Responsibilities</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-medium text-foreground">Account Security</h3>
                    <p className="text-muted-foreground">
                      You are responsible for maintaining the confidentiality of your account credentials and for all 
                      activities that occur under your account.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-medium text-foreground">Prohibited Activities</h3>
                    <p className="text-muted-foreground">
                      When using our Service, you agree not to:
                    </p>
                    <ul className="list-disc list-inside space-y-1 mt-2 pl-4 text-muted-foreground">
                      <li>Violate any applicable laws or regulations</li>
                      <li>Infringe on intellectual property rights</li>
                      <li>Upload malicious content or software</li>
                      <li>Attempt unauthorized access to our systems</li>
                    </ul>
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
                  <div className="p-2 rounded-lg bg-purple-500/10">
                    <Shield className="h-5 w-5 text-purple-500" />
                  </div>
                  <span>Intellectual Property</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    All content, features, and functionality of the Service are owned by Finitix and are protected by 
                    international copyright, trademark, and other intellectual property laws.
                  </p>
                  <div className="p-4 bg-background/50 rounded-lg border border-border/30">
                    <p className="text-sm">
                      <span className="font-medium text-foreground">License:</span> We grant you a limited, 
                      non-exclusive, non-transferable license to access and use our Service for personal, 
                      non-commercial purposes.
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
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-gradient-card border border-border/50 hover:shadow-elegant transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 rounded-lg bg-amber-500/10">
                    <AlertTriangle className="h-5 w-5 text-amber-500" />
                  </div>
                  <span>Limitations & Disclaimers</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-medium text-foreground">Service Availability</h3>
                    <p className="text-muted-foreground">
                      We strive to maintain service availability but do not guarantee uninterrupted access. 
                      We may perform maintenance or updates that temporarily affect service availability.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-medium text-foreground">Limitation of Liability</h3>
                    <p className="text-muted-foreground">
                      To the maximum extent permitted by law, Finitix shall not be liable for any indirect, 
                      incidental, or consequential damages arising from your use of the Service.
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
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="bg-gradient-card border border-border/50 hover:shadow-elegant transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 rounded-lg bg-green-500/10">
                    <ScaleIcon className="h-5 w-5 text-green-500" />
                  </div>
                  <span>Governing Law</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    These Terms shall be governed by the laws of the jurisdiction in which Finitix is established, 
                    without regard to its conflict of law provisions.
                  </p>
                  <p>
                    Any disputes shall be resolved through binding arbitration, except as otherwise required by law.
                  </p>
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
              If you have any questions about these Terms of Service, please contact us at{' '}
              <a href="mailto:legal@finitix.com" className="text-primary hover:underline">legal@finitix.com</a>
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

export default TermsOfService;
