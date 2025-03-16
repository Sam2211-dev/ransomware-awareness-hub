import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/ui/PageTransition';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, ArrowLeft, Shield, AlertTriangle,
  Puzzle, BadgeAlert, Workflow, Eye,
  Database, Globe, Building, Key
} from 'lucide-react';
import { motion } from 'framer-motion';

const RansomwareTypes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ransomwareTypes = [
    {
      id: "jigsaw",
      name: "Jigsaw",
      tagline: "Psychological Warfare in Ransomware",
      icon: <Puzzle className="h-8 w-8" />,
      color: "bg-red-500/10 text-red-500 border-red-200",
      glowColor: "shadow-red-500/20",
      description: "Uses psychological tactics to pressure victims, deleting files at regular intervals."
    },
    {
      id: "wannacry",
      name: "WannaCry",
      tagline: "A Global Wake-Up Call",
      icon: <Globe className="h-8 w-8" />,
      color: "bg-blue-500/10 text-blue-500 border-blue-200",
      glowColor: "shadow-blue-500/20",
      description: "Affected 300,000+ computers in 150+ countries, exploiting EternalBlue vulnerability."
    },
    {
      id: "badrabbit",
      name: "Bad Rabbit",
      tagline: "The Deceptive Drive-By Downloader",
      icon: <BadgeAlert className="h-8 w-8" />,
      color: "bg-orange-500/10 text-orange-500 border-orange-200",
      glowColor: "shadow-orange-500/20",
      description: "Spreads through fake Adobe Flash updates, primarily targeting Eastern Europe."
    },
    {
      id: "maze",
      name: "The Maze",
      tagline: "Pioneers of Double Extortion",
      icon: <Workflow className="h-8 w-8" />,
      color: "bg-purple-500/10 text-purple-500 border-purple-200",
      glowColor: "shadow-purple-500/20",
      description: "Not only encrypts files but also steals data and threatens to publish it if ransom isn't paid."
    },
    {
      id: "cryptolocker",
      name: "CryptoLocker",
      tagline: "Pioneer of Modern Ransomware",
      icon: <Key className="h-8 w-8" />,
      color: "bg-yellow-500/10 text-yellow-500 border-yellow-200",
      glowColor: "shadow-yellow-500/20",
      description: "One of the first widespread ransomware strains, demanding Bitcoin payment for file decryption."
    },
    {
      id: "goldeneye",
      name: "GoldenEye",
      tagline: "Sophisticated Enterprise Targeting",
      icon: <Eye className="h-8 w-8" />,
      color: "bg-amber-500/10 text-amber-500 border-amber-200",
      glowColor: "shadow-amber-500/20",
      description: "Advanced ransomware targeting organizations with critical data for financial exploitation."
    }
  ];

  return (
    <PageTransition>
      <div className="py-16 md:py-24">
        <div className="max-width-wrapper page-padding">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl -z-10" />
            
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              <Shield className="mr-1.5 h-4 w-4" />
              User Education / Types
            </span>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Notorious Types of Ransomware
            </motion.h1>
            
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Explore these dangerous ransomware variants that have significantly impacted organizations worldwide. Click on each type to learn more details.
            </motion.p>
            
            <motion.div
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.5, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
            >
              <AlertTriangle className="h-12 w-12 text-red-500/50" />
            </motion.div>
          </motion.div>

          {/* Ransomware cards grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {ransomwareTypes.map((type) => (
              <motion.div
                key={type.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`rounded-xl overflow-hidden border ${type.glowColor} transition-all hover:shadow-lg`}
              >
                <Link to={`/user-education/types/${type.id}`} className="flex flex-col h-full">
                  <div className={`${type.color.split(' ')[0]} p-6`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-background/90 ${type.color.split(' ')[1]}`}>
                        {type.icon}
                      </div>
                      <ArrowRight className="h-5 w-5 text-foreground/50" />
                    </div>
                    <h2 className="text-2xl font-bold">{type.name}</h2>
                    <p className="text-sm opacity-80 mt-1">{type.tagline}</p>
                  </div>
                  <div className="p-6 bg-card flex-grow">
                    <p className="text-muted-foreground">{type.description}</p>
                    <Button variant="outline" className="w-full mt-4">
                      Learn More
                    </Button>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Prevention tips */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-black/80 p-8 rounded-xl text-white mb-16"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Prevention is Your Best Defense</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-zinc-800/60 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Shield className="h-5 w-5 text-emerald-400 mr-2" />
                  Regular Backups
                </h3>
                <p className="text-zinc-300">
                  Maintain current backups of all critical data stored offline or in secure cloud services.
                </p>
              </div>
              
              <div className="bg-zinc-800/60 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <AlertTriangle className="h-5 w-5 text-amber-400 mr-2" />
                  Software Updates
                </h3>
                <p className="text-zinc-300">
                  Keep all software and operating systems updated with the latest security patches.
                </p>
              </div>
              
              <div className="bg-zinc-800/60 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Key className="h-5 w-5 text-red-400 mr-2" />
                  User Education
                </h3>
                <p className="text-zinc-300">
                  Train all employees to recognize phishing attempts and suspicious email attachments.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="outline">
              <Link to="/user-education">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to User Education
              </Link>
            </Button>
            <Button asChild>
              <Link to="/user-education/history">
                Ransomware History
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default RansomwareTypes;
