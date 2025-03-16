
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/ui/PageTransition';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, BookOpen, Layers, History, Users, 
  ShieldCheck, AlertTriangle, LockKeyhole, Brain, 
  Laptop, FileWarning, Shield
} from 'lucide-react';
import { motion } from 'framer-motion';

const UserEducation = () => {
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
                <BookOpen className="mr-1.5 h-4 w-4" />
                User Education
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Ransomware Education</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Learn about different types of ransomware, their history, and understand the experience from a victim's perspective.
              </p>
            </motion.div>
          </div>

          {/* Key Topics Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-16"
          >
            <div className="bg-black/80 p-8 rounded-xl text-white">
              <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
                <ShieldCheck className="mr-2 h-6 w-6 text-primary" /> 
                Key Topics in Ransomware Education
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-zinc-800/60 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <AlertTriangle className="h-6 w-6 text-amber-500 mr-3" />
                    <h3 className="text-lg font-semibold">Understanding the Threat</h3>
                  </div>
                  <p className="text-zinc-300">
                    Learn how ransomware attacks work and why they are becoming increasingly common in today's digital landscape.
                  </p>
                </div>
                
                <div className="bg-zinc-800/60 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <LockKeyhole className="h-6 w-6 text-primary mr-3" />
                    <h3 className="text-lg font-semibold">Protection Strategies</h3>
                  </div>
                  <p className="text-zinc-300">
                    Discover best practices for securing your systems and data against ransomware attacks through preventive measures.
                  </p>
                </div>
                
                <div className="bg-zinc-800/60 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Brain className="h-6 w-6 text-purple-400 mr-3" />
                    <h3 className="text-lg font-semibold">Response Preparation</h3>
                  </div>
                  <p className="text-zinc-300">
                    Prepare effective response strategies to minimize damage and recover quickly in case of a ransomware attack.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-sm"
            >
              <div className="aspect-video bg-primary/5 flex items-center justify-center">
                <Layers className="h-16 w-16 text-primary/50" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">Types of Ransomware</h2>
                <p className="text-muted-foreground mb-4">
                  Understand the various types of ransomware and how they differ in their attack methods and encryption strategies.
                </p>
                <Button asChild>
                  <Link to="/user-education/types">
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
                <History className="h-16 w-16 text-primary/50" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">Ransomware History</h2>
                <p className="text-muted-foreground mb-4">
                  Explore the evolution of ransomware attacks from their early beginnings to sophisticated modern threats.
                </p>
                <Button asChild>
                  <Link to="/user-education/history">
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
                <Users className="h-16 w-16 text-primary/50" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">Victim's Perspective</h2>
                <p className="text-muted-foreground mb-4">
                  Gain insight into the experience of ransomware victims and the impact these attacks have on individuals and organizations.
                </p>
                <Button asChild>
                  <Link to="/user-education/victim-perspective">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Bottom section with additional resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16"
          >
            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Laptop className="mr-3 h-6 w-6 text-primary" />
                Additional Resources
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <FileWarning className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">How Ransomware Works</h3>
                    <p className="text-muted-foreground">
                      Understand the technical aspects of ransomware attacks and their infection vectors.
                    </p>
                    <Button asChild variant="link" className="px-0 mt-2">
                      <Link to="/introduction/how-works">
                        Learn About Attack Vectors
                      </Link>
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Shield className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Protection Strategies</h3>
                    <p className="text-muted-foreground">
                      Explore comprehensive approaches to protect your systems from ransomware attacks.
                    </p>
                    <Button asChild variant="link" className="px-0 mt-2">
                      <Link to="/mitigation">
                        View Protection Methods
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-6">
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                  Education is the first step in ransomware defense. Understanding how these attacks work 
                  helps you recognize and prevent them before they compromise your systems.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild variant="outline">
                    <Link to="/introduction/how-works">
                      How Ransomware Works
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link to="/mitigation">
                      Mitigation Strategies
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default UserEducation;
