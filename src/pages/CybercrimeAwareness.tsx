
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/ui/PageTransition';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Shield, Globe, FileCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const CybercrimeAwareness = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <div className="py-20 md:py-28">
        <div className="max-width-wrapper page-padding">
          {/* Header */}
          <div className="mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                <Globe className="mr-1.5 h-4 w-4" />
                Cybercrime Awareness
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Cybercrime Awareness</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Understanding cybercrime trends and staying informed about the latest threats is crucial for effective protection.
              </p>
            </motion.div>
          </div>

          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold">Key Cybercrime Trends</h2>
              <div className="grid gap-6">
                <div className="flex gap-4 p-6 border border-border rounded-xl bg-card">
                  <AlertTriangle className="h-6 w-6 text-destructive shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Increasing Sophistication</h3>
                    <p className="text-muted-foreground">
                      Cybercriminals are constantly evolving their techniques, using advanced technologies like AI to create more convincing phishing attempts and harder-to-detect malware.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-6 border border-border rounded-xl bg-card">
                  <AlertTriangle className="h-6 w-6 text-destructive shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Supply Chain Attacks</h3>
                    <p className="text-muted-foreground">
                      Attackers target software providers and update mechanisms to distribute malware to thousands of organizations simultaneously through trusted channels.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-6 border border-border rounded-xl bg-card">
                  <AlertTriangle className="h-6 w-6 text-destructive shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Ransomware-as-a-Service (RaaS)</h3>
                    <p className="text-muted-foreground">
                      Criminal groups now offer ransomware on a subscription basis, lowering the technical barrier to entry and enabling more widespread attacks.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold">Stay Informed and Protected</h2>
              <div className="grid gap-6">
                <div className="flex gap-4 p-6 border border-border rounded-xl bg-card">
                  <Shield className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Follow Trusted Sources</h3>
                    <p className="text-muted-foreground">
                      Subscribe to cybersecurity news from reputable organizations like CISA, NIST, or your country's cybersecurity agency to stay informed about emerging threats.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-6 border border-border rounded-xl bg-card">
                  <Shield className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Security Community Engagement</h3>
                    <p className="text-muted-foreground">
                      Participate in cybersecurity forums, webinars, and online communities to learn from others' experiences and share knowledge about recent threats.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-6 border border-border rounded-xl bg-card">
                  <Shield className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Regular Security Assessments</h3>
                    <p className="text-muted-foreground">
                      Conduct periodic security audits and vulnerability scans of your systems to identify and address potential weaknesses before attackers can exploit them.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-16"
          >
            <div className="border border-border rounded-xl p-8 bg-card/50">
              <h2 className="text-2xl font-bold mb-6">Building a Cybersecurity Culture</h2>
              <p className="text-muted-foreground mb-6">
                Creating a strong cybersecurity culture in your organization or home environment is crucial for maintaining good security practices over time:
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <FileCheck className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Regular Training and Awareness</p>
                    <p className="text-muted-foreground">Keep security knowledge fresh with regular training sessions and awareness campaigns.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <FileCheck className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Lead by Example</p>
                    <p className="text-muted-foreground">Leaders should demonstrate good security practices and prioritize security in decisions.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <FileCheck className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Reward Security-Conscious Behavior</p>
                    <p className="text-muted-foreground">Recognize and reward individuals who report security issues or consistently follow best practices.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <FileCheck className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Make Security Accessible</p>
                    <p className="text-muted-foreground">Use clear, non-technical language when discussing security with non-specialists.</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          <div className="text-center">
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Staying informed about cybercrime trends and fostering a security-conscious culture are essential 
              components of a comprehensive ransomware prevention strategy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="outline">
                <Link to="/mitigation">
                  Mitigation Overview
                </Link>
              </Button>
              <Button asChild>
                <Link to="/download">
                  Download Protection Tool
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default CybercrimeAwareness;
