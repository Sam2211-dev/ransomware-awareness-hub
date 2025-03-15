
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/ui/PageTransition';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, ArrowLeft, TrendingUp, Bitcoin, Globe, Users, Shield, Database
} from 'lucide-react';
import { motion } from 'framer-motion';

const WhyEmerging = () => {
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
                <TrendingUp className="mr-1.5 h-4 w-4" />
                Introduction / Why Emerging
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Why Ransomware is Emerging</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Understanding the key factors driving the global surge in ransomware attacks.
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
                <h2 className="text-3xl font-bold mb-6">Key Drivers of Ransomware Growth</h2>
                <div className="prose prose-lg max-w-none mb-12">
                  <p>
                    The dramatic rise in ransomware attacks over the past decade is not coincidental. 
                    Several key factors have converged to create a perfect environment for this type of cybercrime to flourish.
                  </p>
                  
                  <div className="mt-8 space-y-10">
                    <div className="flex gap-4">
                      <div className="rounded-lg bg-primary/10 p-3 text-primary h-fit">
                        <Bitcoin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Rise of Cryptocurrencies</h3>
                        <p>
                          The emergence of cryptocurrencies like Bitcoin has provided attackers with a way to receive payments that is 
                          difficult to trace, making it easier to monetize attacks without being identified. This anonymity has 
                          significantly reduced the risk for cybercriminals.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="rounded-lg bg-primary/10 p-3 text-primary h-fit">
                        <Globe className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Digital Transformation</h3>
                        <p>
                          As businesses and organizations increasingly digitize their operations and data, they become more 
                          dependent on their IT systems. This dependency makes them more vulnerable to attacks that can prevent 
                          access to critical systems, increasing the likelihood they'll pay a ransom to restore operations.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="rounded-lg bg-primary/10 p-3 text-primary h-fit">
                        <Users className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Ransomware-as-a-Service (RaaS)</h3>
                        <p>
                          Criminal groups now offer ransomware tools and infrastructure to less technically skilled attackers 
                          for a share of the profits. This "franchise" model has dramatically expanded the number of potential 
                          attackers and lowered the technical barrier to entry.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="rounded-lg bg-primary/10 p-3 text-primary h-fit">
                        <Shield className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Security Gaps and Vulnerabilities</h3>
                        <p>
                          Many organizations have inadequate security measures, outdated systems, or insufficient 
                          backup procedures. Remote work trends have expanded the attack surface, creating additional 
                          vulnerabilities that attackers can exploit.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="rounded-lg bg-primary/10 p-3 text-primary h-fit">
                        <Database className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Increasing Value of Data</h3>
                        <p>
                          As data becomes more valuable to organizations, the impact of losing access to it becomes greater. 
                          This increases the leverage attackers have and the likelihood that victims will pay to recover their 
                          information, especially when the cost of downtime exceeds the ransom amount.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center gap-4 mt-10">
                  <Button asChild variant="outline">
                    <Link to="/introduction">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to Introduction
                    </Link>
                  </Button>
                  <Button asChild>
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
                className="border border-border rounded-xl overflow-hidden"
              >
                <div className="bg-primary/5 p-6">
                  <h3 className="font-semibold text-lg">Ransomware Growth Statistics</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-2xl font-bold text-primary">+300%</p>
                    <p className="text-sm text-muted-foreground">Increase in ransomware attacks since 2019</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">$4.54M</p>
                    <p className="text-sm text-muted-foreground">Average cost of a ransomware attack in 2023</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">37%</p>
                    <p className="text-sm text-muted-foreground">Of global organizations affected by ransomware in 2021</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">$265B</p>
                    <p className="text-sm text-muted-foreground">Projected annual cost of ransomware by 2031</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-6 bg-card border border-border rounded-xl p-6 shadow-sm"
              >
                <h3 className="text-lg font-medium mb-4">Continue Learning</h3>
                <ul className="space-y-2">
                  <li>
                    <Link 
                      to="/introduction/how-works" 
                      className="text-primary hover:text-primary/80 transition-colors inline-flex items-center"
                    >
                      How Ransomware Works
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/user-education/types" 
                      className="text-primary hover:text-primary/80 transition-colors inline-flex items-center"
                    >
                      Types of Ransomware
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/mitigation/prevention" 
                      className="text-primary hover:text-primary/80 transition-colors inline-flex items-center"
                    >
                      Prevention Strategies
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default WhyEmerging;
