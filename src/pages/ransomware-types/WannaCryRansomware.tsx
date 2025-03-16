
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Globe, Shield, FileWarning, Clock, Building } from 'lucide-react';

const WannaCryRansomware = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "Overview of the WannaCry Attack",
      content: "In May 2017, WannaCry ransomware executed one of the most significant cyber-attacks in history. Leveraging a vulnerability in the Windows operating system known as EternalBlue, WannaCry rapidly spread across networks worldwide, affecting more than 300,000 computers in over 150 countries within just a few days. This attack predominantly targeted organizations, including hospitals, telecommunications companies, and other critical infrastructure.",
      icon: <Globe className="h-6 w-6 text-blue-500" />
    },
    {
      title: "Exploitation of Vulnerabilities",
      content: "The WannaCry attack exploited a critical flaw in Microsoft Windows that allowed the malware to propagate without requiring user action. Once inside a network, it utilized a worm-like functionality to scan for and infect additional vulnerable systems. Notably, many of the affected organizations had not applied essential security updates, leaving their systems defenseless against this exploit.",
      icon: <FileWarning className="h-6 w-6 text-blue-500" />
    },
    {
      title: "Global Repercussions",
      content: "The fallout from WannaCry was substantial. Hospitals in the UK were forced to cancel surgeries and divert emergency patients, significantly impacting patient care. Moreover, businesses around the globe experienced operational disruptions, financial losses, and reputational damage. The attack illustrated the interconnectedness of modern technology and the potential for systemic failures.",
      icon: <Building className="h-6 w-6 text-blue-500" />
    },
    {
      title: "Lessons Learned",
      content: "The WannaCry incident underscored the urgency for stronger cybersecurity measures. Key lessons include the importance of regular updates, incident response preparedness, and cybersecurity awareness training. WannaCry stands as a chilling reminder of the critical need for robust cybersecurity frameworks and the collective responsibility of individuals and organizations to safeguard their digital environments.",
      icon: <Shield className="h-6 w-6 text-blue-500" />
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
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-500/5 rounded-3xl -z-10" />
            
            <div className="flex items-center justify-between mb-8 pt-8 px-8">
              <Link to="/user-education/types" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Ransomware Types
              </Link>
              <span className="inline-flex items-center rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-500">
                <Shield className="mr-1.5 h-4 w-4" />
                Ransomware Type
              </span>
            </div>
            
            <div className="px-8 pb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 rounded-xl bg-blue-500/10 text-blue-500 border border-blue-200">
                  <Globe className="h-12 w-12" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold">WannaCry Ransomware</h1>
                  <p className="text-xl text-muted-foreground mt-2">A Global Wake-Up Call</p>
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

          {/* Impact statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16 bg-gradient-to-br from-blue-950 to-black p-8 rounded-xl border text-white"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">Global Impact of WannaCry</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-blue-300 mb-2">150+</div>
                <div className="text-lg font-medium">Countries Affected</div>
                <p className="mt-2 text-blue-200/80 text-sm">WannaCry's reach was truly global, impacting organizations on every continent.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-blue-300 mb-2">300,000+</div>
                <div className="text-lg font-medium">Computers Infected</div>
                <p className="mt-2 text-blue-200/80 text-sm">Hundreds of thousands of systems were compromised within days of the initial outbreak.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-blue-300 mb-2">$4 Billion+</div>
                <div className="text-lg font-medium">Estimated Damages</div>
                <p className="mt-2 text-blue-200/80 text-sm">The total economic impact including downtime, recovery costs, and lost productivity.</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation buttons */}
          <div className="flex justify-center mb-8">
            <Button asChild variant="default" size="lg" className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900">
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

export default WannaCryRansomware;
