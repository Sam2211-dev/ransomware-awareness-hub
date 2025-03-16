
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/ui/PageTransition';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Key, Shield, FileWarning, Clock, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const CryptoLockerRansomware = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "Overview and Background",
      content: "CryptoLocker emerged as one of the first ransomware strains to gain widespread notoriety in late 2013. Renowned for its sophisticated encryption methods, this malware marked a pivotal moment in the evolution of cyber extortion. By utilizing strong encryption algorithms, it rendered victims' files inaccessible, demanding a ransom payment in Bitcoin for decryption keys.",
      icon: <Database className="h-6 w-6 text-yellow-500" />
    },
    {
      title: "Method of Operation",
      content: "CryptoLocker primarily infiltrated systems through email attachments, masquerading as legitimate files. Victims would often receive phishing emails prompting them to download what appeared to be an important document or invoice. Upon opening the attachment, the ransomware would execute, initiating its encryption process on the victim's files.",
      icon: <FileWarning className="h-6 w-6 text-yellow-500" />
    },
    {
      title: "Key Characteristics",
      content: "CryptoLocker employed RSA public-key cryptography to encrypt files, making recovery without the decryption key nearly impossible. Upon encryption, victims would receive a ransom note instructing them to pay between $300 to $2000 for the decryption key, with threats of file deletion if the deadline was not met.",
      icon: <Key className="h-6 w-6 text-yellow-500" />
    },
    {
      title: "Impact on Ransomware Evolution",
      content: "The significance of CryptoLocker extends beyond its immediate damage. Its successful methodology influenced a wave of copycat ransomware, as cybercriminals recognized the profitability of this model. CryptoLocker also led to various defensive measures by security experts and organizations, including enhanced email filtering and user education regarding phishing threats.",
      icon: <Shield className="h-6 w-6 text-yellow-500" />
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
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 rounded-3xl -z-10" />
            
            <div className="flex items-center justify-between mb-8 pt-8 px-8">
              <Link to="/user-education/types" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Ransomware Types
              </Link>
              <span className="inline-flex items-center rounded-full bg-yellow-500/10 px-4 py-1.5 text-sm font-medium text-yellow-500">
                <Shield className="mr-1.5 h-4 w-4" />
                Ransomware Type
              </span>
            </div>
            
            <div className="px-8 pb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 rounded-xl bg-yellow-500/10 text-yellow-500 border border-yellow-200">
                  <Key className="h-12 w-12" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold">CryptoLocker Ransomware</h1>
                  <p className="text-xl text-muted-foreground mt-2">Pioneer of Modern Ransomware</p>
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
          </motion.div>

          {/* Evolution timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16 bg-gradient-to-r from-yellow-50 to-amber-50 p-8 rounded-xl border"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">CryptoLocker Timeline & Evolution</h2>
            
            <div className="relative py-4">
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-yellow-200 transform -translate-x-1/2"></div>
              
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="md:w-1/2 md:text-right pr-10 relative">
                    <div className="absolute right-0 top-3 w-5 h-5 rounded-full bg-yellow-500 border-4 border-white transform translate-x-10 md:translate-x-1/2 z-10"></div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-yellow-200 md:ml-auto">
                      <h3 className="text-lg font-semibold mb-2">September 2013</h3>
                      <p className="text-muted-foreground">First appearance of CryptoLocker, spreading primarily via email attachments and infected websites.</p>
                    </div>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="md:w-1/2"></div>
                  <div className="md:w-1/2 pl-10 relative">
                    <div className="absolute left-0 top-3 w-5 h-5 rounded-full bg-yellow-500 border-4 border-white transform -translate-x-10 md:-translate-x-1/2 z-10"></div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-yellow-200">
                      <h3 className="text-lg font-semibold mb-2">December 2013</h3>
                      <p className="text-muted-foreground">Estimated 250,000 infections worldwide. CryptoLocker begins accepting alternative payment methods beyond Bitcoin.</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="md:w-1/2 md:text-right pr-10 relative">
                    <div className="absolute right-0 top-3 w-5 h-5 rounded-full bg-yellow-500 border-4 border-white transform translate-x-10 md:translate-x-1/2 z-10"></div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-yellow-200 md:ml-auto">
                      <h3 className="text-lg font-semibold mb-2">June 2014</h3>
                      <p className="text-muted-foreground">Operation Tovar by international law enforcement successfully takes down the CryptoLocker botnet infrastructure.</p>
                    </div>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="md:w-1/2"></div>
                  <div className="md:w-1/2 pl-10 relative">
                    <div className="absolute left-0 top-3 w-5 h-5 rounded-full bg-yellow-500 border-4 border-white transform -translate-x-10 md:-translate-x-1/2 z-10"></div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-yellow-200">
                      <h3 className="text-lg font-semibold mb-2">August 2014</h3>
                      <p className="text-muted-foreground">Security researchers release a tool that helps victims recover files encrypted by CryptoLocker without paying the ransom.</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="md:w-1/2 md:text-right pr-10 relative">
                    <div className="absolute right-0 top-3 w-5 h-5 rounded-full bg-yellow-500 border-4 border-white transform translate-x-10 md:translate-x-1/2 z-10"></div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-yellow-200 md:ml-auto">
                      <h3 className="text-lg font-semibold mb-2">2015 - Present</h3>
                      <p className="text-muted-foreground">CryptoLocker's legacy lives on as its techniques inspire numerous other ransomware families, transforming the cybersecurity landscape forever.</p>
                    </div>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation buttons */}
          <div className="flex justify-center mb-8">
            <Button asChild variant="default" size="lg" className="bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700">
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

export default CryptoLockerRansomware;
