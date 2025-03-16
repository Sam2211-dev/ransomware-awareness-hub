import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Workflow, Shield, Database, Building, FileWarning } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '@/components/ui/PageTransition';

const MazeRansomware = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "Introduction to Maze",
      content: "Maze ransomware, first identified in late 2019, is known for its unique double extortion model. This model not only encrypts a victim's files but also threatens to publish or leak stolen data if the ransom is not paid. By targeting both data access and privacy, Maze has introduced a new level of pressure on victims, making it one of the more formidable ransomware threats in the cybersecurity landscape.",
      icon: <Workflow className="h-6 w-6 text-purple-500" />
    },
    {
      title: "Double Extortion Tactics",
      content: "Maze employs a multi-faceted approach: it encrypts files using robust encryption algorithms, extracts sensitive data before encryption to create a secondary lever for coercion, and threatens to release stolen data on the dark web if victims refuse to comply with ransom demands. This comprehensive strategy ensures that even if victims restore from backups, the threat of data exposure remains.",
      icon: <Database className="h-6 w-6 text-purple-500" />
    },
    {
      title: "Targeted Industries",
      content: "Maze has strategically focused on healthcare, finance, and education sectors. Healthcare organizations are prime targets due to the sensitive nature of patient data. Financial institutions are targeted for the higher likelihood of ransom payment, while schools and universities are often targeted when they're less equipped for cybersecurity challenges.",
      icon: <Building className="h-6 w-6 text-purple-500" />
    },
    {
      title: "Notable Incidents",
      content: "Several high-profile incidents showcase Maze's impact. A major dental health provider fell victim, leading to patient record theft and negotiated ransom payment. Maze has also notably targeted managed service providers (MSPs), which, once compromised, can lead to extensive downstream effects on numerous client organizations.",
      icon: <FileWarning className="h-6 w-6 text-purple-500" />
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
            className="mb-16 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-purple-500/5 rounded-3xl -z-10" />
            
            <div className="flex items-center justify-between mb-8 pt-8 px-8">
              <Link to="/user-education/types" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Ransomware Types
              </Link>
              <span className="inline-flex items-center rounded-full bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-500">
                <Shield className="mr-1.5 h-4 w-4" />
                Ransomware Type
              </span>
            </div>
            
            <div className="px-8 pb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 rounded-xl bg-purple-500/10 text-purple-500 border border-purple-200">
                  <Workflow className="h-12 w-12" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold">The Maze Ransomware</h1>
                  <p className="text-xl text-muted-foreground mt-2">Pioneers of Double Extortion</p>
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

          {/* Double extortion visualization */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16 bg-gradient-to-br from-purple-800 to-purple-950 p-8 rounded-xl border text-white"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">Double Extortion Model</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-purple-300/20">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Database className="h-5 w-5 text-purple-300 mr-2" />
                  Traditional Ransomware
                </h3>
                <ul className="space-y-3 text-purple-100">
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 rounded-full bg-purple-400/20 text-purple-300 text-xs flex items-center justify-center mr-2 mt-0.5">1</span>
                    <span>Infect system and encrypt files</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 rounded-full bg-purple-400/20 text-purple-300 text-xs flex items-center justify-center mr-2 mt-0.5">2</span>
                    <span>Demand ransom for decryption key</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 rounded-full bg-purple-400/20 text-purple-300 text-xs flex items-center justify-center mr-2 mt-0.5">3</span>
                    <span>If victim has backups, they can recover without paying</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-purple-600/20 backdrop-blur-sm p-6 rounded-xl border border-purple-300/30">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Workflow className="h-5 w-5 text-purple-300 mr-2" />
                  Maze Double Extortion
                </h3>
                <ul className="space-y-3 text-purple-100">
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 rounded-full bg-purple-400/30 text-purple-200 text-xs flex items-center justify-center mr-2 mt-0.5">1</span>
                    <span>Exfiltrate sensitive data before encryption</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 rounded-full bg-purple-400/30 text-purple-200 text-xs flex items-center justify-center mr-2 mt-0.5">2</span>
                    <span>Encrypt files, rendering systems unusable</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 rounded-full bg-purple-400/30 text-purple-200 text-xs flex items-center justify-center mr-2 mt-0.5">3</span>
                    <span>Demand ransom with additional threat to publish stolen data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-5 w-5 rounded-full bg-purple-400/30 text-purple-200 text-xs flex items-center justify-center mr-2 mt-0.5">4</span>
                    <span>Even with backups, victim must pay to prevent data leakage</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center text-purple-200 font-medium">
              Maze's double extortion model creates a more complex threat that renders traditional backup strategies insufficient as a complete defense.
            </div>
          </motion.div>

          {/* Navigation buttons */}
          <div className="flex justify-center mb-8">
            <Button asChild variant="default" size="lg" className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900">
              <Link to="/user-education/types">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Ransomware Types
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default MazeRansomware;
