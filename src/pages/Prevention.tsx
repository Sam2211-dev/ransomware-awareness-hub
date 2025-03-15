
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/ui/PageTransition';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, ArrowLeft, Lock, ShieldCheck
} from 'lucide-react';
import { motion } from 'framer-motion';

const Prevention = () => {
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
                <Lock className="mr-1.5 h-4 w-4" />
                Mitigation / Prevention Strategies
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Ransomware Prevention</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Comprehensive strategies and best practices to protect your systems from ransomware attacks.
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
                <h2 className="text-3xl font-bold mb-8">Key Prevention Strategies</h2>
                
                <div className="space-y-8">
                  {/* Technical Controls */}
                  <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
                    <div className="bg-primary/5 p-4">
                      <h3 className="text-xl font-semibold">Technical Controls</h3>
                    </div>
                    <div className="p-6 space-y-6">
                      <div>
                        <h4 className="font-medium text-lg mb-2">Backup and Recovery</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Implement automatic, regular backups following the 3-2-1 rule (3 copies, 2 different media types, 1 offline)</li>
                          <li>Regularly test backup restoration procedures to ensure they work</li>
                          <li>Keep at least one backup air-gapped (physically disconnected from networks)</li>
                          <li>Encrypt backup data to prevent attackers from compromising backups</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-lg mb-2">Network Security</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Implement network segmentation to limit lateral movement</li>
                          <li>Use firewalls and properly configured access control lists</li>
                          <li>Deploy intrusion detection and prevention systems</li>
                          <li>Disable macros or implement application whitelisting</li>
                          <li>Use web filtering to block access to malicious websites</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-lg mb-2">Email Security</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Deploy email filtering solutions to detect phishing attempts and block malicious attachments</li>
                          <li>Implement DMARC, SPF, and DKIM to prevent email spoofing</li>
                          <li>Scan all email attachments for malware</li>
                          <li>Consider sandboxing technology for suspicious attachments</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-lg mb-2">Endpoint Protection</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Install and maintain reputable anti-malware solutions</li>
                          <li>Implement application control/whitelisting</li>
                          <li>Use endpoint detection and response (EDR) solutions</li>
                          <li>Enable host-based firewalls</li>
                          <li>Disable unnecessary services and ports</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-lg mb-2">Access Management</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Implement the principle of least privilege</li>
                          <li>Use multi-factor authentication (MFA) whenever possible</li>
                          <li>Regularly audit user accounts and remove unnecessary access</li>
                          <li>Implement strong password policies</li>
                          <li>Consider privileged access management (PAM) solutions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Administrative Controls */}
                  <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
                    <div className="bg-primary/5 p-4">
                      <h3 className="text-xl font-semibold">Administrative Controls</h3>
                    </div>
                    <div className="p-6 space-y-6">
                      <div>
                        <h4 className="font-medium text-lg mb-2">Security Awareness Training</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Conduct regular security awareness training for all employees</li>
                          <li>Include specific training on recognizing phishing attempts</li>
                          <li>Perform simulated phishing exercises to test effectiveness</li>
                          <li>Provide clear reporting procedures for suspicious activities</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-lg mb-2">Patch Management</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Develop and implement a formal patch management program</li>
                          <li>Prioritize patching based on vulnerability risk</li>
                          <li>Test patches before deploying to production environments</li>
                          <li>Consider automated patch management solutions</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-lg mb-2">Incident Response Planning</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Develop a comprehensive incident response plan specifically for ransomware</li>
                          <li>Clearly define roles and responsibilities</li>
                          <li>Regularly test the plan through tabletop exercises</li>
                          <li>Establish relationships with law enforcement and security vendors</li>
                          <li>Create communication templates for various scenarios</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-lg mb-2">Risk Assessment</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Conduct regular security risk assessments</li>
                          <li>Identify and prioritize critical assets and data</li>
                          <li>Implement controls based on identified risks</li>
                          <li>Consider third-party penetration testing</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Recovery Planning */}
                  <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
                    <div className="bg-primary/5 p-4">
                      <h3 className="text-xl font-semibold">Recovery Planning</h3>
                    </div>
                    <div className="p-6 space-y-6">
                      <div>
                        <h4 className="font-medium text-lg mb-2">Preparing for the Worst</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Develop detailed recovery procedures for critical systems</li>
                          <li>Create and maintain system rebuild documentation</li>
                          <li>Document configuration settings for key systems</li>
                          <li>Establish criteria for determining when to restore from backups vs. rebuild</li>
                          <li>Consider cyber insurance that specifically covers ransomware</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-lg mb-2">Decision Framework for Ransom Situations</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Develop a framework for decision-making if faced with a ransom demand</li>
                          <li>Consult with legal counsel about payment legality considerations</li>
                          <li>Understand regulatory reporting requirements</li>
                          <li>Establish relationships with digital forensics experts</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-lg mb-2">Post-Incident Activities</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Conduct thorough post-incident analysis</li>
                          <li>Document lessons learned and update procedures</li>
                          <li>Implement additional controls based on attack vectors identified</li>
                          <li>Evaluate effectiveness of incident response procedures</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-4 mt-10">
                  <Button asChild variant="outline">
                    <Link to="/mitigation">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to Mitigation
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link to="/mitigation/cybercrime-awareness">
                      Cybercrime Awareness
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
                <h3 className="text-lg font-medium mb-4">Protection Checklist</h3>
                <p className="text-muted-foreground mb-4">Essential steps to protect your systems from ransomware:</p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5 text-primary h-fit mt-0.5">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <span>Implement regular, tested backups</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5 text-primary h-fit mt-0.5">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <span>Keep all software and systems patched</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5 text-primary h-fit mt-0.5">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <span>Use multi-factor authentication</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5 text-primary h-fit mt-0.5">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <span>Implement network segmentation</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5 text-primary h-fit mt-0.5">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <span>Deploy email filtering and security</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5 text-primary h-fit mt-0.5">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <span>Provide security awareness training</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5 text-primary h-fit mt-0.5">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <span>Use endpoint protection solutions</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5 text-primary h-fit mt-0.5">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <span>Create an incident response plan</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5 text-primary h-fit mt-0.5">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <span>Implement application whitelisting</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5 text-primary h-fit mt-0.5">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <span>Perform regular vulnerability scans</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-6 bg-card border border-border rounded-xl p-6 shadow-sm"
              >
                <h3 className="text-lg font-medium mb-4">Tools and Resources</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Integrity Checker</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Our custom tool helps detect unauthorized file modifications - a common sign of ransomware activity.
                    </p>
                    <Button asChild size="sm" className="w-full">
                      <Link to="/download">Download Tool</Link>
                    </Button>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <h4 className="font-medium mb-2">External Resources</h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a 
                          href="https://www.cisa.gov/ransomware" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-primary hover:text-primary/80 transition-colors inline-flex items-center"
                        >
                          CISA Ransomware Guidance
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://www.nomoreransom.org" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors inline-flex items-center"
                        >
                          No More Ransom Project
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://www.ic3.gov" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors inline-flex items-center"
                        >
                          FBI Internet Crime Complaint Center
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <h3 className="text-lg font-medium mb-4">Continue Learning</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link 
                        to="/mitigation/cybercrime-awareness" 
                        className="text-primary hover:text-primary/80 transition-colors inline-flex items-center"
                      >
                        Cybercrime Awareness
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

export default Prevention;
