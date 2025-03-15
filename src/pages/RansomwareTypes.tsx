
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/ui/PageTransition';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, ArrowLeft, Shield, AlertTriangle, 
  FileText, Lock, Key, BadgeAlert
} from 'lucide-react';
import { motion } from 'framer-motion';

const RansomwareTypes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ransomwareTypes = [
    {
      name: "Jigsaw",
      description: "Named after the Saw movie character, this ransomware deletes files every hour and increases the number of deleted files after each hour until the ransom is paid.",
      icon: <Lock className="h-6 w-6" />,
      color: "bg-red-500/10 text-red-500"
    },
    {
      name: "Bad Rabbit",
      description: "Spread through drive-by downloads from compromised websites, primarily targeting corporate networks in Russia and Eastern Europe.",
      icon: <BadgeAlert className="h-6 w-6" />,
      color: "bg-orange-500/10 text-orange-500"
    },
    {
      name: "CryptoLocker",
      description: "One of the first modern ransomware strains, using strong encryption and Bitcoin for payments, targeting Windows systems through email attachments.",
      icon: <Key className="h-6 w-6" />,
      color: "bg-yellow-500/10 text-yellow-500"
    },
    {
      name: "GoldenEye",
      description: "A variant of the Petya family, targeting HR departments with fake job applications containing malicious macros.",
      icon: <FileText className="h-6 w-6" />,
      color: "bg-amber-500/10 text-amber-500"
    },
    {
      name: "WannaCry",
      description: "Global attack affecting over 200,000 computers across 150 countries, exploiting the EternalBlue vulnerability in Windows systems.",
      icon: <AlertTriangle className="h-6 w-6" />,
      color: "bg-blue-500/10 text-blue-500"
    },
    {
      name: "The Maze",
      description: "Known for double extortion tactics - encrypting files and threatening to publish stolen data if ransom isn't paid, targeting organizations worldwide.",
      icon: <Shield className="h-6 w-6" />,
      color: "bg-purple-500/10 text-purple-500"
    }
  ];

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
                User Education / Types
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Some Wellknown Types of Ransomware</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Learn about the most notorious ransomware variants and their unique characteristics.
              </p>
            </motion.div>
          </div>

          {/* Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {ransomwareTypes.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-card border border-border rounded-xl p-6 shadow-sm"
              >
                <div className={`rounded-full ${type.color} p-3 w-fit mb-4`}>
                  {type.icon}
                </div>
                <h2 className="text-2xl font-bold mb-2">{type.name}</h2>
                <p className="text-muted-foreground">{type.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Flow diagram illustration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-black/80 p-6 rounded-xl mb-16 text-center"
          >
            <h2 className="text-2xl font-bold mb-6 text-white">Ransomware Types Flow</h2>
            <div className="flex flex-col items-center justify-center">
              <div className="mb-4 bg-zinc-800 rounded-lg px-6 py-3 text-white">
                Some Wellknown Types of Ransomware
              </div>
              <div className="h-6 w-px bg-white/50"></div>
              <div className="grid grid-cols-2 gap-6 mb-4">
                <div className="flex flex-col items-center">
                  <div className="bg-zinc-800 rounded-lg px-6 py-3 text-white mb-4">
                    Jigsaw
                  </div>
                  <div className="h-6 w-px bg-white/50"></div>
                  <div className="bg-zinc-800 rounded-lg px-6 py-3 text-white mb-4">
                    CryptoLocker
                  </div>
                  <div className="h-6 w-px bg-white/50"></div>
                  <div className="bg-zinc-800 rounded-lg px-6 py-3 text-white">
                    WannaCry
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-zinc-800 rounded-lg px-6 py-3 text-white mb-4">
                    Bad Rabbit
                  </div>
                  <div className="h-6 w-px bg-white/50"></div>
                  <div className="bg-zinc-800 rounded-lg px-6 py-3 text-white mb-4">
                    GoldenEye
                  </div>
                  <div className="h-6 w-px bg-white/50"></div>
                  <div className="bg-zinc-800 rounded-lg px-6 py-3 text-white">
                    The Maze
                  </div>
                </div>
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
