
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/ui/PageTransition';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, BookOpen, Layers, History, Users
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

          <div className="mt-16 text-center">
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
      </div>
    </PageTransition>
  );
};

export default UserEducation;
