
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/ui/PageTransition';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, ArrowLeft, FileQuestion, Mail, Clipboard, Lock, AlertTriangle, CreditCard
} from 'lucide-react';
import { motion } from 'framer-motion';

const HowWorks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation variants for timeline
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

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
                <FileQuestion className="mr-1.5 h-4 w-4" />
                Introduction / How Ransomware Works
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">How Ransomware Works</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Understanding the anatomy of a ransomware attack from infection to ransom demand.
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
                <h2 className="text-3xl font-bold mb-10">The Ransomware Attack Lifecycle</h2>
                
                <motion.ol 
                  className="relative border-l border-primary/20 ml-3 space-y-12"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.li className="ml-6" variants={itemVariants}>
                    <span className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-5 bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </span>
                    <h3 className="flex items-center text-xl font-semibold mb-2">Initial Infection</h3>
                    <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                      <p className="mb-4">
                        Ransomware typically enters a system through one of several vectors:
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Phishing emails</strong> with malicious attachments or links</li>
                        <li><strong>Exploit kits</strong> targeting vulnerabilities in software or systems</li>
                        <li><strong>Remote Desktop Protocol (RDP)</strong> attacks exploiting weak credentials</li>
                        <li><strong>Drive-by downloads</strong> from compromised websites</li>
                        <li><strong>Supply chain attacks</strong> targeting trusted software providers</li>
                      </ul>
                    </div>
                  </motion.li>
                  
                  <motion.li className="ml-6" variants={itemVariants}>
                    <span className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-5 bg-primary/10 text-primary">
                      <Clipboard className="h-5 w-5" />
                    </span>
                    <h3 className="flex items-center text-xl font-semibold mb-2">Execution and Privilege Escalation</h3>
                    <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                      <p className="mb-4">
                        Once the malicious code executes on the victim's system:
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>The ransomware establishes <strong>persistence</strong> to survive reboots</li>
                        <li>It attempts to <strong>escalate privileges</strong> to gain administrative access</li>
                        <li>It <strong>disables or evades security tools</strong> that might detect it</li>
                        <li>Modern ransomware conducts <strong>reconnaissance</strong> to identify valuable data and connected systems</li>
                      </ul>
                    </div>
                  </motion.li>
                  
                  <motion.li className="ml-6" variants={itemVariants}>
                    <span className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-5 bg-primary/10 text-primary">
                      <Lock className="h-5 w-5" />
                    </span>
                    <h3 className="flex items-center text-xl font-semibold mb-2">Encryption and Data Theft</h3>
                    <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                      <p className="mb-4">
                        The core actions of modern ransomware attacks include:
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Scanning for <strong>valuable files</strong> (documents, databases, images, etc.)</li>
                        <li>In many cases, <strong>exfiltrating sensitive data</strong> before encryption (double extortion)</li>
                        <li>Using strong <strong>encryption algorithms</strong> (like RSA-2048 or AES-256) to lock files</li>
                        <li>Targeting <strong>backups</strong> and <strong>shadow copies</strong> to prevent easy recovery</li>
                        <li>Spreading laterally across <strong>network-connected systems</strong> to maximize impact</li>
                      </ul>
                    </div>
                  </motion.li>
                  
                  <motion.li className="ml-6" variants={itemVariants}>
                    <span className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-5 bg-primary/10 text-primary">
                      <AlertTriangle className="h-5 w-5" />
                    </span>
                    <h3 className="flex items-center text-xl font-semibold mb-2">Ransom Demand</h3>
                    <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                      <p className="mb-4">
                        After the attack is complete:
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>A <strong>ransom note</strong> is displayed on affected systems explaining what happened</li>
                        <li>Instructions for <strong>payment</strong>, typically in cryptocurrency, are provided</li>
                        <li>A <strong>deadline</strong> is often set, after which the price may increase or the decryption key may be deleted</li>
                        <li>In double extortion scenarios, attackers threaten to <strong>publish stolen data</strong> if payment is not made</li>
                        <li>The attacker may offer to <strong>decrypt a sample file</strong> to prove they can restore the data</li>
                      </ul>
                    </div>
                  </motion.li>
                  
                  <motion.li className="ml-6" variants={itemVariants}>
                    <span className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-5 bg-primary/10 text-primary">
                      <CreditCard className="h-5 w-5" />
                    </span>
                    <h3 className="flex items-center text-xl font-semibold mb-2">Payment and Aftermath</h3>
                    <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                      <p className="mb-4">
                        Once a ransom demand is made, victims face difficult choices:
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>If payment is made, the attacker may provide a <strong>decryption tool</strong>, though this is not guaranteed</li>
                        <li>Even with the decryption tool, <strong>data recovery</strong> may be partial or unsuccessful</li>
                        <li>Organizations that pay may be <strong>targeted again</strong> in the future, seen as willing to pay</li>
                        <li>Victims must address the initial <strong>security weaknesses</strong> that allowed the attack</li>
                        <li>There are often long-term <strong>financial, reputational, and operational impacts</strong></li>
                      </ul>
                    </div>
                  </motion.li>
                </motion.ol>
                
                <div className="flex flex-col md:flex-row items-center gap-4 mt-16">
                  <Button asChild variant="outline">
                    <Link to="/introduction/why-emerging">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Why Ransomware is Emerging
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link to="/user-education">
                      User Education
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
                <h3 className="text-lg font-medium mb-4">Key Ransomware Components</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5 text-primary h-fit">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Encryption Engine</h4>
                      <p className="text-sm text-muted-foreground">
                        Uses strong cryptographic algorithms to lock files and make them inaccessible.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5 text-primary h-fit">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" y1="3" x2="12" y2="15" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Data Exfiltration Tools</h4>
                      <p className="text-sm text-muted-foreground">
                        Steals sensitive data before encryption for double extortion attacks.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5 text-primary h-fit">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Ransom Communicator</h4>
                      <p className="text-sm text-muted-foreground">
                        Displays ransom notes and provides instructions for payment.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5 text-primary h-fit">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Command & Control</h4>
                      <p className="text-sm text-muted-foreground">
                        Communicates with attacker servers to receive encryption keys and commands.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5 text-primary h-fit">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Anti-Analysis Features</h4>
                      <p className="text-sm text-muted-foreground">
                        Techniques to avoid detection by security tools and researchers.
                      </p>
                    </div>
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
                      to="/user-education/types" 
                      className="text-primary hover:text-primary/80 transition-colors inline-flex items-center"
                    >
                      Types of Ransomware
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/user-education/victim-perspective" 
                      className="text-primary hover:text-primary/80 transition-colors inline-flex items-center"
                    >
                      Victim's Perspective
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

export default HowWorks;
