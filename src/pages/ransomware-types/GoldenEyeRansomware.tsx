
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/ui/PageTransition';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Eye, Shield, Building, FileWarning, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const GoldenEyeRansomware = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "Overview and Characteristics",
      content: "Golden Eye ransomware is a notable and increasingly prevalent form of ransomware, recognized for its sophisticated encryption methods and unique delivery mechanisms. Emerging in the late stages of the ransomware progression, Golden Eye primarily targets organizations, focusing on sectors with essential data that can be exploited for financial gain.",
      icon: <Eye className="h-6 w-6 text-amber-500" />
    },
    {
      title: "Tools Used for Encryption",
      content: "Golden Eye employs advanced encryption techniques, typically utilizing AES (Advanced Encryption Standard) and RSA (Rivest-Shamir-Adleman) public-key cryptography. These encryption methods allow for strong and nearly unbreakable file protection without possession of the decryption key. As a result, victims may find themselves locked out of critical files, such as documents, spreadsheets, and databases.",
      icon: <Database className="h-6 w-6 text-amber-500" />
    },
    {
      title: "Method of Delivery",
      content: "The most common delivery method for Golden Eye ransomware involves phishing campaigns. Attackers often deploy malicious email attachments or links, masquerading as legitimate communications. Once a victim interacts with the infected attachment, the ransomware executes and begins its encryption process. Additionally, Golden Eye can spread through compromised software vulnerabilities.",
      icon: <FileWarning className="h-6 w-6 text-amber-500" />
    },
    {
      title: "Prevention and Recovery Strategies",
      content: "Organizations can mitigate Golden Eye ransomware threats through regular data backups, employee training, patch management, and endpoint protection solutions. By adopting these practices, organizations can fortify their defenses and enhance their resilience against this evolving threat.",
      icon: <Shield className="h-6 w-6 text-amber-500" />
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
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-amber-500/5 rounded-3xl -z-10" />
            
            <div className="flex items-center justify-between mb-8 pt-8 px-8">
              <Link to="/user-education/types" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Ransomware Types
              </Link>
              <span className="inline-flex items-center rounded-full bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-500">
                <Shield className="mr-1.5 h-4 w-4" />
                Ransomware Type
              </span>
            </div>
            
            <div className="px-8 pb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-200">
                  <Eye className="h-12 w-12" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold">GoldenEye Ransomware</h1>
                  <p className="text-xl text-muted-foreground mt-2">Sophisticated Enterprise Targeting</p>
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

          {/* Target sectors */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16 overflow-hidden bg-gradient-to-br from-amber-500/10 to-amber-500/5 p-8 rounded-xl border"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">Primary Target Sectors</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-sm border border-amber-200"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-amber-500/10 text-amber-500">
                    <Building className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center">Financial Institutions</h3>
                <p className="text-muted-foreground text-center">
                  Banks and financial service providers are prime targets due to their high-value data and ability to pay significant ransoms.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-sm border border-amber-200"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-amber-500/10 text-amber-500">
                    <Database className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center">Healthcare Organizations</h3>
                <p className="text-muted-foreground text-center">
                  Hospitals and healthcare providers with critical patient data that cannot afford operational downtime.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-sm border border-amber-200"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-amber-500/10 text-amber-500">
                    <Shield className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center">Government Agencies</h3>
                <p className="text-muted-foreground text-center">
                  Public sector organizations that may have sensitive information but limited cybersecurity resources.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Defense strategies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16 bg-gradient-to-br from-amber-950 to-black p-8 rounded-xl border text-white"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">Defense Against GoldenEye</h2>
            
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex items-start gap-4">
                <div className="bg-amber-500/20 p-2 rounded-lg">
                  <Database className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Regular Data Backups</h3>
                  <p className="text-amber-100/80 text-sm">Maintain offline or air-gapped backups of critical data that can't be reached by network-based ransomware.</p>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex items-start gap-4">
                <div className="bg-amber-500/20 p-2 rounded-lg">
                  <Shield className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email Security Solutions</h3>
                  <p className="text-amber-100/80 text-sm">Implement advanced email filtering to detect and quarantine phishing attempts and suspicious attachments.</p>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex items-start gap-4">
                <div className="bg-amber-500/20 p-2 rounded-lg">
                  <Building className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Security Awareness Training</h3>
                  <p className="text-amber-100/80 text-sm">Educate employees about phishing tactics and how to identify suspicious emails, links, and attachments.</p>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex items-start gap-4">
                <div className="bg-amber-500/20 p-2 rounded-lg">
                  <FileWarning className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Patch Management</h3>
                  <p className="text-amber-100/80 text-sm">Keep all systems and software up-to-date with the latest security patches to prevent exploitation of known vulnerabilities.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation buttons */}
          <div className="flex justify-center mb-8">
            <Button asChild variant="default" size="lg" className="bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900">
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

export default GoldenEyeRansomware;
