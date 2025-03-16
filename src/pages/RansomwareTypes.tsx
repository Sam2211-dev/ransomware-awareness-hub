
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/ui/PageTransition';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, ArrowLeft, Shield, AlertTriangle, 
  FileText, Lock, Key, BadgeAlert, Skull, Clock,
  Database, Globe, Building, FileWarning, Virus
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const RansomwareTypes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // References for parallax sections
  const containerRef = useRef(null);

  const ransomwareTypes = [
    {
      id: "jigsaw",
      name: "Jigsaw",
      tagline: "Psychological Warfare in Ransomware",
      icon: <Skull className="h-8 w-8" />,
      color: "bg-red-500/10 text-red-500 border-red-200",
      glowColor: "shadow-red-500/20",
      sections: [
        {
          title: "History and Background",
          content: "Jigsaw ransomware, named after the infamous character from the \"Saw\" movie franchise, first emerged in early 2016. Its creator utilized a distinct and menacing approach to threats, markedly different from typical ransomware. Jigsaw gained notoriety for its particularly aggressive tactics, including the promise to delete files at regular intervals if the ransom was not paid, demonstrating a psychological manipulation tactic designed to pressure victims."
        },
        {
          title: "Characteristics and Methods of Operation",
          content: "Jigsaw uniquely identifies itself through its deletion of files every hour, with the number of deleted files increasing after each hour until the ransom is paid. This creates an urgent pressure for victims to comply. Once infection occurs, a drawn-out ransom note appears on the user's screen, designed to alarm and coerce victims into following payment instructions."
        },
        {
          title: "Real-World Examples and Impact",
          content: "Jigsaw has targeted various sectors, causing significant disruptions. One notable incident involved attacks on hospitals and educational institutions, where the sensitive nature of data spurred swift compliance with ransom demands. Statistically, Jigsaw has been responsible for thousands of infections globally, exacerbating concerns regarding cybersecurity defenses. The ransom demands typically range from a few hundred to several thousand dollars, with varying success rates for attackers."
        }
      ]
    },
    {
      id: "wannacry",
      name: "WannaCry",
      tagline: "A Global Wake-Up Call",
      icon: <Globe className="h-8 w-8" />,
      color: "bg-blue-500/10 text-blue-500 border-blue-200",
      glowColor: "shadow-blue-500/20",
      sections: [
        {
          title: "Overview of the WannaCry Attack",
          content: "In May 2017, WannaCry ransomware executed one of the most significant cyber-attacks in history. Leveraging a vulnerability in the Windows operating system known as EternalBlue, WannaCry rapidly spread across networks worldwide, affecting more than 300,000 computers in over 150 countries within just a few days. This attack predominantly targeted organizations, including hospitals, telecommunications companies, and other critical infrastructure."
        },
        {
          title: "Exploitation of Vulnerabilities",
          content: "The WannaCry attack exploited a critical flaw in Microsoft Windows that allowed the malware to propagate without requiring user action. Once inside a network, it utilized a worm-like functionality to scan for and infect additional vulnerable systems. Notably, many of the affected organizations had not applied essential security updates, leaving their systems defenseless against this exploit."
        },
        {
          title: "Global Repercussions",
          content: "The fallout from WannaCry was substantial. Hospitals in the UK were forced to cancel surgeries and divert emergency patients, significantly impacting patient care. Moreover, businesses around the globe experienced operational disruptions, financial losses, and reputational damage. The attack illustrated the interconnectedness of modern technology and the potential for systemic failures."
        },
        {
          title: "Lessons Learned",
          content: "The WannaCry incident underscored the urgency for stronger cybersecurity measures. Key lessons include the importance of regular updates, incident response preparedness, and cybersecurity awareness training. WannaCry stands as a chilling reminder of the critical need for robust cybersecurity frameworks and the collective responsibility of individuals and organizations to safeguard their digital environments."
        }
      ]
    },
    {
      id: "badrabbit",
      name: "Bad Rabbit",
      tagline: "The Deceptive Drive-By Downloader",
      icon: <BadgeAlert className="h-8 w-8" />,
      color: "bg-orange-500/10 text-orange-500 border-orange-200",
      glowColor: "shadow-orange-500/20",
      sections: [
        {
          title: "Overview and Characteristics",
          content: "Bad Rabbit is a ransomware strain that first made headlines in October 2017. It primarily targets enterprises in Russia and Eastern Europe, deploying tactics reminiscent of other notable ransomware threats, yet distinguishing itself through unique propagation methods."
        },
        {
          title: "Spread and Propagation Techniques",
          content: "Bad Rabbit's distribution method capitalizes on social engineering, specifically utilizing fake Adobe Flash Player updates. When users attempt to install this fraudulent update, they inadvertently execute the ransomware, which then begins to encrypt files on the infected system. This method echoes the strategies used by WannaCry, although Bad Rabbit does not exploit system vulnerabilities in the same way; rather, it relies on user actions to propagate."
        },
        {
          title: "Encryption Methods",
          content: "Once activated, Bad Rabbit employs strong encryption algorithms to lock files, making them inaccessible without the decryption key. Its encryption process is fast, which can lead to rapid data loss for victims, as the attack can compromise critical files within minutes of infection."
        },
        {
          title: "Targeted Victims and Notable Attacks",
          content: "Bad Rabbit has mainly targeted organizations in sectors such as media and transportation, focusing on large corporations that potentially possess sufficient resources to consider ransom payments. Among the most significant incidents attributed to Bad Rabbit was a series of attacks on Russian news agencies and transportation firms. This highlighted how ransomware can disrupt services and create chaos within critical infrastructures."
        }
      ]
    },
    {
      id: "maze",
      name: "The Maze",
      tagline: "Pioneers of Double Extortion",
      icon: <Database className="h-8 w-8" />,
      color: "bg-purple-500/10 text-purple-500 border-purple-200",
      glowColor: "shadow-purple-500/20",
      sections: [
        {
          title: "Introduction to Maze",
          content: "Maze ransomware, first identified in late 2019, is known for its unique double extortion model. This model not only encrypts a victim's files but also threatens to publish or leak stolen data if the ransom is not paid. By targeting both data access and privacy, Maze has introduced a new level of pressure on victims, making it one of the more formidable ransomware threats in the cybersecurity landscape."
        },
        {
          title: "Double Extortion Tactics",
          content: "Maze employs a multi-faceted approach: it encrypts files using robust encryption algorithms, extracts sensitive data before encryption to create a secondary lever for coercion, and threatens to release stolen data on the dark web if victims refuse to comply with ransom demands. This comprehensive strategy ensures that even if victims restore from backups, the threat of data exposure remains."
        },
        {
          title: "Targeted Industries",
          content: "Maze has strategically focused on healthcare, finance, and education sectors. Healthcare organizations are prime targets due to the sensitive nature of patient data. Financial institutions are targeted for the higher likelihood of ransom payment, while schools and universities are often targeted when they're less equipped for cybersecurity challenges."
        },
        {
          title: "Notable Incidents",
          content: "Several high-profile incidents showcase Maze's impact. A major dental health provider fell victim, leading to patient record theft and negotiated ransom payment. Maze has also notably targeted managed service providers (MSPs), which, once compromised, can lead to extensive downstream effects on numerous client organizations."
        }
      ]
    },
    {
      id: "cryptolocker",
      name: "CryptoLocker",
      tagline: "Pioneer of Modern Ransomware",
      icon: <Key className="h-8 w-8" />,
      color: "bg-yellow-500/10 text-yellow-500 border-yellow-200",
      glowColor: "shadow-yellow-500/20",
      sections: [
        {
          title: "Overview and Background",
          content: "CryptoLocker emerged as one of the first ransomware strains to gain widespread notoriety in late 2013. Renowned for its sophisticated encryption methods, this malware marked a pivotal moment in the evolution of cyber extortion. By utilizing strong encryption algorithms, it rendered victims' files inaccessible, demanding a ransom payment in Bitcoin for decryption keys."
        },
        {
          title: "Method of Operation",
          content: "CryptoLocker primarily infiltrated systems through email attachments, masquerading as legitimate files. Victims would often receive phishing emails prompting them to download what appeared to be an important document or invoice. Upon opening the attachment, the ransomware would execute, initiating its encryption process on the victim's files."
        },
        {
          title: "Key Characteristics",
          content: "CryptoLocker employed RSA public-key cryptography to encrypt files, making recovery without the decryption key nearly impossible. Upon encryption, victims would receive a ransom note instructing them to pay between $300 to $2000 for the decryption key, with threats of file deletion if the deadline was not met."
        },
        {
          title: "Impact on Ransomware Evolution",
          content: "The significance of CryptoLocker extends beyond its immediate damage. Its successful methodology influenced a wave of copycat ransomware, as cybercriminals recognized the profitability of this model. CryptoLocker also led to various defensive measures by security experts and organizations, including enhanced email filtering and user education regarding phishing threats."
        }
      ]
    },
    {
      id: "goldeneye",
      name: "GoldenEye",
      tagline: "Sophisticated Enterprise Targeting",
      icon: <Building className="h-8 w-8" />,
      color: "bg-amber-500/10 text-amber-500 border-amber-200",
      glowColor: "shadow-amber-500/20",
      sections: [
        {
          title: "Overview and Characteristics",
          content: "Golden Eye ransomware is a notable and increasingly prevalent form of ransomware, recognized for its sophisticated encryption methods and unique delivery mechanisms. Emerging in the late stages of the ransomware progression, Golden Eye primarily targets organizations, focusing on sectors with essential data that can be exploited for financial gain."
        },
        {
          title: "Tools Used for Encryption",
          content: "Golden Eye employs advanced encryption techniques, typically utilizing AES (Advanced Encryption Standard) and RSA (Rivest-Shamir-Adleman) public-key cryptography. These encryption methods allow for strong and nearly unbreakable file protection without possession of the decryption key. As a result, victims may find themselves locked out of critical files, such as documents, spreadsheets, and databases."
        },
        {
          title: "Method of Delivery",
          content: "The most common delivery method for Golden Eye ransomware involves phishing campaigns. Attackers often deploy malicious email attachments or links, masquerading as legitimate communications. Once a victim interacts with the infected attachment, the ransomware executes and begins its encryption process. Additionally, Golden Eye can spread through compromised software vulnerabilities."
        },
        {
          title: "Prevention and Recovery Strategies",
          content: "Organizations can mitigate Golden Eye ransomware threats through regular data backups, employee training, patch management, and endpoint protection solutions. By adopting these practices, organizations can fortify their defenses and enhance their resilience against this evolving threat."
        }
      ]
    }
  ];

  return (
    <PageTransition>
      <div className="py-16 md:py-24" ref={containerRef}>
        <div className="max-width-wrapper page-padding">
          {/* Header with parallax effect */}
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
              Learn about the most dangerous ransomware variants and their unique characteristics that have impacted organizations worldwide.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {ransomwareTypes.map((type, index) => (
                <a 
                  key={type.id} 
                  href={`#${type.id}`}
                  className={`px-4 py-2 rounded-full ${type.color} border transition-all hover:shadow-lg hover:scale-105 flex items-center`}
                >
                  <span className="mr-2">{type.icon}</span>
                  {type.name}
                </a>
              ))}
            </motion.div>
            
            <motion.div
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.5, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
            >
              <AlertTriangle className="h-12 w-12 text-red-500/50" />
            </motion.div>
          </motion.div>

          {/* Ransomware detailed sections with scroll animations */}
          <div className="space-y-32 mb-16">
            {ransomwareTypes.map((type, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.section
                  id={type.id}
                  key={type.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`grid grid-cols-1 md:grid-cols-12 gap-8 relative`}
                >
                  {/* Background glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${type.color.replace('text-', 'from-').replace('/10', '/5')} to-transparent rounded-3xl opacity-30 -z-10 ${type.glowColor}`} />
                  
                  {/* Icon with animation */}
                  <motion.div 
                    className={`md:col-span-3 flex ${isEven ? 'md:justify-end' : 'md:justify-start'} items-start pt-8`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className={`${type.color} p-6 rounded-2xl border ${type.glowColor} shadow-lg`}>
                      {type.icon}
                      <h2 className="text-2xl font-bold mt-3">{type.name}</h2>
                      <p className="text-sm opacity-80 mt-1">{type.tagline}</p>
                    </div>
                  </motion.div>
                  
                  {/* Content sections */}
                  <div className={`md:col-span-9 space-y-6 p-6 rounded-2xl bg-card/80 backdrop-blur-sm border`}>
                    {type.sections.map((section, sectionIndex) => (
                      <motion.div 
                        key={section.title}
                        initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * sectionIndex }}
                        viewport={{ once: true }}
                        className="relative"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          {sectionIndex === 0 && <Lock className={`h-5 w-5 ${type.color.split(' ')[1]}`} />}
                          {sectionIndex === 1 && <Virus className={`h-5 w-5 ${type.color.split(' ')[1]}`} />}
                          {sectionIndex === 2 && <FileWarning className={`h-5 w-5 ${type.color.split(' ')[1]}`} />}
                          {sectionIndex === 3 && <Clock className={`h-5 w-5 ${type.color.split(' ')[1]}`} />}
                          <h3 className="text-xl font-semibold">{section.title}</h3>
                        </div>
                        <p className="text-muted-foreground ml-8">{section.content}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              );
            })}
          </div>

          {/* Call to action and prevention tips */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-black/80 p-8 rounded-xl text-white mb-16"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Prevention is Your Best Defense</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-zinc-800/60 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <FileText className="h-5 w-5 text-amber-400 mr-2" />
                  Regular Backups
                </h3>
                <p className="text-zinc-300">
                  Maintain current backups of all critical data stored offline or in secure cloud services.
                </p>
              </div>
              
              <div className="bg-zinc-800/60 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Shield className="h-5 w-5 text-emerald-400 mr-2" />
                  Software Updates
                </h3>
                <p className="text-zinc-300">
                  Keep all software and operating systems updated with the latest security patches.
                </p>
              </div>
              
              <div className="bg-zinc-800/60 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <AlertTriangle className="h-5 w-5 text-red-400 mr-2" />
                  User Education
                </h3>
                <p className="text-zinc-300">
                  Train all employees to recognize phishing attempts and suspicious email attachments.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <Button asChild variant="default" size="lg" className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700">
                <Link to="/mitigation">
                  Learn More About Protection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
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
