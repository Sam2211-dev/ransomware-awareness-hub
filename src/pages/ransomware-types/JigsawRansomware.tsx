
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Puzzle, Shield, Clock, FileWarning } from 'lucide-react';

const JigsawRansomware = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "History and Background",
      content: "Jigsaw ransomware, named after the infamous character from the \"Saw\" movie franchise, first emerged in early 2016. Its creator utilized a distinct and menacing approach to threats, markedly different from typical ransomware. Jigsaw gained notoriety for its particularly aggressive tactics, including the promise to delete files at regular intervals if the ransom was not paid, demonstrating a psychological manipulation tactic designed to pressure victims.",
      icon: <Clock className="h-6 w-6 text-red-500" />
    },
    {
      title: "Characteristics and Methods of Operation",
      content: "Jigsaw uniquely identifies itself through its deletion of files every hour, with the number of deleted files increasing after each hour until the ransom is paid. This creates an urgent pressure for victims to comply. Once infection occurs, a drawn-out ransom note appears on the user's screen, designed to alarm and coerce victims into following payment instructions.",
      icon: <FileWarning className="h-6 w-6 text-red-500" />
    },
    {
      title: "Real-World Examples and Impact",
      content: "Jigsaw has targeted various sectors, causing significant disruptions. One notable incident involved attacks on hospitals and educational institutions, where the sensitive nature of data spurred swift compliance with ransom demands. Statistically, Jigsaw has been responsible for thousands of infections globally, exacerbating concerns regarding cybersecurity defenses. The ransom demands typically range from a few hundred to several thousand dollars, with varying success rates for attackers.",
      icon: <Shield className="h-6 w-6 text-red-500" />
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ type: 'tween', ease: 'anticipate', duration: 0.4 }}
      className="min-h-[calc(100vh-64px)]"
    >
      <div className="py-16 md:py-24">
        <div className="max-width-wrapper page-padding">
          {/* Header with parallax effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-16 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-500/5 rounded-3xl -z-10" />
            
            <div className="flex items-center justify-between mb-8 pt-8 px-8">
              <Link to="/user-education/types" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Ransomware Types
              </Link>
              <span className="inline-flex items-center rounded-full bg-red-500/10 px-4 py-1.5 text-sm font-medium text-red-500">
                <Shield className="mr-1.5 h-4 w-4" />
                Ransomware Type
              </span>
            </div>
            
            <div className="px-8 pb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 rounded-xl bg-red-500/10 text-red-500 border border-red-200">
                  <Puzzle className="h-12 w-12" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold">Jigsaw Ransomware</h1>
                  <p className="text-xl text-muted-foreground mt-2">Psychological Warfare in Ransomware</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content sections */}
          <div className="space-y-12 mb-16">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-card border rounded-xl p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  {section.icon}
                  <h2 className="text-2xl font-semibold">{section.title}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </div>

          {/* Timeline visualization */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16 bg-black/5 p-8 rounded-xl border"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">Jigsaw Attack Timeline</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-300/50 rounded-full"></div>
              
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="md:text-right md:w-1/2 relative">
                    <div className="bg-white p-6 rounded-xl shadow-sm border">
                      <h3 className="text-lg font-semibold mb-2">Initial Infection</h3>
                      <p className="text-muted-foreground">User downloads malicious attachment or clicks on a compromised link, installing Jigsaw ransomware on the system.</p>
                    </div>
                    <div className="hidden md:block absolute top-6 -right-12 w-5 h-5 bg-red-500 rounded-full border-4 border-white z-10"></div>
                  </div>
                  <div className="md:hidden w-5 h-5 bg-red-500 rounded-full border-4 border-white z-10"></div>
                  <div className="md:w-1/2"></div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="md:w-1/2"></div>
                  <div className="md:hidden w-5 h-5 bg-red-500 rounded-full border-4 border-white z-10"></div>
                  <div className="md:w-1/2 relative">
                    <div className="bg-white p-6 rounded-xl shadow-sm border">
                      <h3 className="text-lg font-semibold mb-2">Encryption Phase</h3>
                      <p className="text-muted-foreground">Jigsaw begins encrypting user files and displays the iconic "game over" screen with countdown timer.</p>
                    </div>
                    <div className="hidden md:block absolute top-6 -left-12 w-5 h-5 bg-red-500 rounded-full border-4 border-white z-10"></div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="md:text-right md:w-1/2 relative">
                    <div className="bg-white p-6 rounded-xl shadow-sm border">
                      <h3 className="text-lg font-semibold mb-2">Deletion Begins</h3>
                      <p className="text-muted-foreground">After one hour, Jigsaw begins deleting files. With each passing hour, the number of deleted files increases exponentially.</p>
                    </div>
                    <div className="hidden md:block absolute top-6 -right-12 w-5 h-5 bg-red-500 rounded-full border-4 border-white z-10"></div>
                  </div>
                  <div className="md:hidden w-5 h-5 bg-red-500 rounded-full border-4 border-white z-10"></div>
                  <div className="md:w-1/2"></div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="md:w-1/2"></div>
                  <div className="md:hidden w-5 h-5 bg-red-500 rounded-full border-4 border-white z-10"></div>
                  <div className="md:w-1/2 relative">
                    <div className="bg-white p-6 rounded-xl shadow-sm border">
                      <h3 className="text-lg font-semibold mb-2">Resolution Options</h3>
                      <p className="text-muted-foreground">Victim must either pay the ransom, restore from backups, or lose all their files permanently after the deadline.</p>
                    </div>
                    <div className="hidden md:block absolute top-6 -left-12 w-5 h-5 bg-red-500 rounded-full border-4 border-white z-10"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation buttons */}
          <div className="flex justify-center mb-8">
            <Button asChild variant="default" size="lg" className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900">
              <Link to="/user-education/types">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Ransomware Types
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default JigsawRansomware;
