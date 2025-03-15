
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/ui/PageTransition';
import { Button } from '@/components/ui/button';
import { ArrowRight, AlertTriangle, TrendingUp, FileQuestion } from 'lucide-react';
import { motion } from 'framer-motion';

const Introduction = () => {
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
                <AlertTriangle className="mr-1.5 h-4 w-4" />
                Introduction to Ransomware
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Understanding the Ransomware Threat</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Ransomware has emerged as one of the most significant cybersecurity threats in recent years. 
                Learn about what ransomware is and how it affects organizations and individuals.
              </p>
            </motion.div>
          </div>

          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="text-3xl font-bold mb-6">What is Ransomware?</h2>
                <div className="prose prose-lg max-w-none mb-8">
                  <p>
                    Ransomware is a type of malicious software that encrypts a victim's files or locks them out of their 
                    system. The attackers then demand a ransom from the victim to restore access to the data upon payment.
                  </p>
                  <p>
                    Users are shown instructions for how to pay a fee to get the decryption key. The costs can range from a 
                    few hundred dollars to thousands, payable to cybercriminals in cryptocurrency such as Bitcoin.
                  </p>
                  
                  <h3 className="text-2xl font-bold mt-10 mb-4">The Scale of the Threat</h3>
                  <p>
                    Ransomware attacks have increased dramatically in recent years, affecting businesses, government agencies, 
                    healthcare organizations, and individuals. The global cost of ransomware damage is projected to exceed 
                    $20 billion annually.
                  </p>
                  <p>
                    Recent high-profile attacks have targeted critical infrastructure, including utilities, hospitals, and 
                    supply chains, highlighting the evolving severity of this threat.
                  </p>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4 mt-10">
                  <Button asChild>
                    <Link to="/introduction/why-emerging">
                      Why Ransomware is Emerging
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/introduction/how-works">
                      How Ransomware Works
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card border border-border rounded-xl p-6 shadow-sm"
              >
                <h3 className="text-lg font-medium mb-4">Topics in this Module</h3>
                <ul className="space-y-3">
                  <li>
                    <Link 
                      to="/introduction/why-emerging" 
                      className="group flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span className="rounded-full bg-primary/10 p-1.5 text-primary mt-0.5">
                        <TrendingUp className="h-4 w-4" />
                      </span>
                      <div>
                        <span className="font-medium text-foreground block group-hover:text-primary transition-colors">
                          Why Ransomware is Emerging
                        </span>
                        <span className="text-sm">
                          Factors contributing to the rise of ransomware attacks.
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/introduction/how-works" 
                      className="group flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span className="rounded-full bg-primary/10 p-1.5 text-primary mt-0.5">
                        <FileQuestion className="h-4 w-4" />
                      </span>
                      <div>
                        <span className="font-medium text-foreground block group-hover:text-primary transition-colors">
                          How Ransomware Works
                        </span>
                        <span className="text-sm">
                          The technical mechanics behind ransomware attacks.
                        </span>
                      </div>
                    </Link>
                  </li>
                </ul>
                
                <div className="mt-8 pt-6 border-t border-border">
                  <h3 className="text-lg font-medium mb-4">Related Resources</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link 
                        to="/user-education" 
                        className="text-primary hover:text-primary/80 transition-colors inline-flex items-center"
                      >
                        User Education
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/mitigation" 
                        className="text-primary hover:text-primary/80 transition-colors inline-flex items-center"
                      >
                        Mitigation & Prevention
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/download" 
                        className="text-primary hover:text-primary/80 transition-colors inline-flex items-center"
                      >
                        Download Protection Tool
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Introduction;
