
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BadgeAlert, Shield, FileWarning, Clock, Building } from 'lucide-react';

const BadRabbitRansomware = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "Overview and Characteristics",
      content: "Bad Rabbit is a ransomware strain that first made headlines in October 2017. It primarily targets enterprises in Russia and Eastern Europe, deploying tactics reminiscent of other notable ransomware threats, yet distinguishing itself through unique propagation methods.",
      icon: <BadgeAlert className="h-6 w-6 text-orange-500" />
    },
    {
      title: "Spread and Propagation Techniques",
      content: "Bad Rabbit's distribution method capitalizes on social engineering, specifically utilizing fake Adobe Flash Player updates. When users attempt to install this fraudulent update, they inadvertently execute the ransomware, which then begins to encrypt files on the infected system. This method echoes the strategies used by WannaCry, although Bad Rabbit does not exploit system vulnerabilities in the same way; rather, it relies on user actions to propagate.",
      icon: <FileWarning className="h-6 w-6 text-orange-500" />
    },
    {
      title: "Encryption Methods",
      content: "Once activated, Bad Rabbit employs strong encryption algorithms to lock files, making them inaccessible without the decryption key. Its encryption process is fast, which can lead to rapid data loss for victims, as the attack can compromise critical files within minutes of infection.",
      icon: <Clock className="h-6 w-6 text-orange-500" />
    },
    {
      title: "Targeted Victims and Notable Attacks",
      content: "Bad Rabbit has mainly targeted organizations in sectors such as media and transportation, focusing on large corporations that potentially possess sufficient resources to consider ransom payments. Among the most significant incidents attributed to Bad Rabbit was a series of attacks on Russian news agencies and transportation firms. This highlighted how ransomware can disrupt services and create chaos within critical infrastructures.",
      icon: <Building className="h-6 w-6 text-orange-500" />
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
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-16 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-500/5 rounded-3xl -z-10" />
            
            <div className="flex items-center justify-between mb-8 pt-8 px-8">
              <Link to="/user-education/types" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Ransomware Types
              </Link>
              <span className="inline-flex items-center rounded-full bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-500">
                <Shield className="mr-1.5 h-4 w-4" />
                Ransomware Type
              </span>
            </div>
            
            <div className="px-8 pb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 rounded-xl bg-orange-500/10 text-orange-500 border border-orange-200">
                  <BadgeAlert className="h-12 w-12" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold">Bad Rabbit Ransomware</h1>
                  <p className="text-xl text-muted-foreground mt-2">The Deceptive Drive-By Downloader</p>
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

          {/* Attack flow diagram */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16 bg-gradient-to-br from-orange-50 to-white p-8 rounded-xl border"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">Bad Rabbit Attack Flow</h2>
            
            <div className="relative py-8">
              <div className="absolute left-0 right-0 top-1/2 h-1 bg-orange-200 -z-10"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-orange-200 relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <h3 className="text-lg font-semibold mb-2 mt-2 text-center">User Visits Compromised Website</h3>
                  <p className="text-muted-foreground text-sm text-center">User navigates to a legitimate but compromised website in their browser.</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-orange-200 relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <h3 className="text-lg font-semibold mb-2 mt-2 text-center">Fake Flash Update Prompt</h3>
                  <p className="text-muted-foreground text-sm text-center">A popup appears requesting the user to update their Adobe Flash Player.</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-orange-200 relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <h3 className="text-lg font-semibold mb-2 mt-2 text-center">Malware Execution</h3>
                  <p className="text-muted-foreground text-sm text-center">Upon clicking "install," the ransomware is downloaded and begins execution on the system.</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-orange-200 relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <h3 className="text-lg font-semibold mb-2 mt-2 text-center">File Encryption & Ransom Note</h3>
                  <p className="text-muted-foreground text-sm text-center">Files are encrypted and a ransom note demands payment in Bitcoin for the decryption key.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation buttons */}
          <div className="flex justify-center mb-8">
            <Button asChild variant="default" size="lg" className="bg-gradient-to-r from-orange-600 to-orange-800 hover:from-orange-700 hover:to-orange-900">
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

export default BadRabbitRansomware;
