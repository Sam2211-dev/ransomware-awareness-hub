
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/ui/PageTransition';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, Shield, Lock, Server, FileCheck, Database, Users
} from 'lucide-react';
import { motion } from 'framer-motion';

const Mitigation = () => {
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
                <Shield className="mr-1.5 h-4 w-4" />
                Mitigation & Awareness
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Ransomware Mitigation</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Strategies and best practices for preventing and responding to ransomware attacks.
              </p>
            </motion.div>
          </div>

          {/* Main content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-sm"
            >
              <div className="aspect-video bg-primary/5 flex items-center justify-center">
                <Lock className="h-16 w-16 text-primary/50" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">Prevention Strategies</h2>
                <p className="text-muted-foreground mb-4">
                  Comprehensive preventive measures to protect your systems and data from ransomware attacks.
                </p>
                <Button asChild>
                  <Link to="/mitigation/prevention">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-sm"
            >
              <div className="aspect-video bg-primary/5 flex items-center justify-center">
                <Users className="h-16 w-16 text-primary/50" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">Cybercrime Awareness</h2>
                <p className="text-muted-foreground mb-4">
                  Understanding the cybercriminal landscape and developing a security-focused mindset.
                </p>
                <Button asChild>
                  <Link to="/mitigation/cybercrime-awareness">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-sm"
            >
              <div className="aspect-video bg-primary/5 flex items-center justify-center">
                <FileCheck className="h-16 w-16 text-primary/50" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">Integrity Checker</h2>
                <p className="text-muted-foreground mb-4">
                  Download our integrity checker tool to help detect unauthorized file modifications.
                </p>
                <Button asChild>
                  <Link to="/download">
                    Download Tool
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Additional security tips */}
          <div className="mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-8 text-center">Essential Mitigation Principles</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Server className="mr-2 h-5 w-5 text-primary" />
                    Regular Backups
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Maintain regular, tested backups of your critical data using the 3-2-1 rule:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Keep at least 3 copies of your data</li>
                    <li>Store backups on 2 different types of media</li>
                    <li>Keep 1 backup copy offsite</li>
                    <li>Ensure at least one backup is air-gapped (disconnected from the network)</li>
                  </ul>
                </div>
                
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Database className="mr-2 h-5 w-5 text-primary" />
                    Patch Management
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Keep all systems and software up to date with the latest security patches:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Implement automated patch management tools</li>
                    <li>Prioritize patching for known vulnerabilities</li>
                    <li>Test patches before deploying to production</li>
                    <li>Create and maintain an inventory of all software and systems</li>
                  </ul>
                </div>
                
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Users className="mr-2 h-5 w-5 text-primary" />
                    Security Training
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Educate your team to recognize and avoid security threats:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Conduct regular security awareness training</li>
                    <li>Perform simulated phishing exercises</li>
                    <li>Establish clear security policies and procedures</li>
                    <li>Encourage reporting of suspicious activities</li>
                  </ul>
                </div>
                
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-primary" />
                    Incident Response
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Prepare for attacks before they happen:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Develop and regularly test an incident response plan</li>
                    <li>Establish roles and responsibilities for response team members</li>
                    <li>Create communication templates for different scenarios</li>
                    <li>Maintain relationships with law enforcement and security firms</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                  The best defense against ransomware is a comprehensive security strategy that includes 
                  both technical controls and human elements.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild variant="outline">
                    <Link to="/user-education/victim-perspective">
                      Victim's Perspective
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link to="/download">
                      Download Protection Tool
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Mitigation;
