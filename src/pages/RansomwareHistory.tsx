
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/ui/PageTransition';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, History } from 'lucide-react';
import { motion } from 'framer-motion';

const RansomwareHistory = () => {
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
                <History className="mr-1.5 h-4 w-4" />
                User Education / Ransomware History
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">The Evolution of Ransomware</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Tracing the development of ransomware from its earliest forms to modern sophisticated threats.
              </p>
            </motion.div>
          </div>

          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="relative border-l-2 border-primary/20 ml-4 space-y-12 pl-8 pb-8">
                  {/* 1989: The AIDS Trojan */}
                  <div>
                    <div className="absolute -left-4 rounded-full w-8 h-8 bg-primary/10 text-primary flex items-center justify-center">
                      <span className="text-sm font-medium">1</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">1989: The AIDS Trojan</h2>
                    <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                      <p className="mb-4">
                        The first known ransomware, also known as the "PC Cyborg," was distributed via floppy disks 
                        to attendees of the World Health Organization's AIDS conference.
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Created by biologist Joseph Popp</li>
                        <li>After 90 reboots, it encrypted file names, not the actual data</li>
                        <li>Demanded $189 payment to "PC Cyborg Corporation"</li>
                        <li>Used symmetric cryptography with relatively simple encryption</li>
                      </ul>
                    </div>
                  </div>

                  {/* 2006-2011: Early Modern Ransomware */}
                  <div>
                    <div className="absolute -left-4 rounded-full w-8 h-8 bg-primary/10 text-primary flex items-center justify-center">
                      <span className="text-sm font-medium">2</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">2006-2011: Early Modern Ransomware</h2>
                    <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                      <p className="mb-4">
                        After a long period of dormancy, ransomware re-emerged with more sophisticated techniques.
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Archiveus (2006):</strong> First to use asymmetric RSA encryption</li>
                        <li><strong>GPCode (2008):</strong> Used increasingly stronger encryption in each version</li>
                        <li><strong>Winlock (2008-2011):</strong> First prominent locker ransomware that displayed fake law enforcement notices</li>
                        <li>These early variants typically demanded payment via SMS or prepaid payment vouchers</li>
                      </ul>
                    </div>
                  </div>

                  {/* 2013: CryptoLocker & Bitcoin */}
                  <div>
                    <div className="absolute -left-4 rounded-full w-8 h-8 bg-primary/10 text-primary flex items-center justify-center">
                      <span className="text-sm font-medium">3</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">2013: CryptoLocker & Bitcoin</h2>
                    <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                      <p className="mb-4">
                        CryptoLocker marked a significant evolution in ransomware, introducing Bitcoin as a payment method.
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>First major ransomware to use Bitcoin for anonymous payments</li>
                        <li>Used sophisticated RSA-2048 encryption</li>
                        <li>Spread primarily through email attachments</li>
                        <li>Set the template for modern crypto-ransomware</li>
                        <li>Generated an estimated $3 million before being taken down</li>
                      </ul>
                    </div>
                  </div>

                  {/* 2015-2016: Ransomware-as-a-Service */}
                  <div>
                    <div className="absolute -left-4 rounded-full w-8 h-8 bg-primary/10 text-primary flex items-center justify-center">
                      <span className="text-sm font-medium">4</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">2015-2016: Ransomware-as-a-Service</h2>
                    <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                      <p className="mb-4">
                        The rise of the RaaS business model democratized ransomware attacks.
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Tox (2015):</strong> One of the first RaaS platforms</li>
                        <li><strong>CTB-Locker:</strong> Pioneered affiliate programs for ransomware distribution</li>
                        <li><strong>Locky (2016):</strong> Advanced distribution through malicious macros in Word documents</li>
                        <li>RaaS lowered the technical barrier to entry for cybercriminals</li>
                      </ul>
                    </div>
                  </div>

                  {/* 2017: WannaCry & Global Attacks */}
                  <div>
                    <div className="absolute -left-4 rounded-full w-8 h-8 bg-primary/10 text-primary flex items-center justify-center">
                      <span className="text-sm font-medium">5</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">2017: WannaCry & Global Attacks</h2>
                    <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                      <p className="mb-4">
                        WannaCry marked the first globally disruptive ransomware attack.
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Infected over 230,000 computers across 150 countries in a single day</li>
                        <li>Exploited EternalBlue vulnerability in Windows SMB protocol</li>
                        <li>Caused an estimated $4 billion in damages globally</li>
                        <li>Affected critical infrastructure including hospitals, manufacturing, and government facilities</li>
                        <li>Attributed to North Korean-backed hackers</li>
                      </ul>
                    </div>
                  </div>

                  {/* 2019-Present: Double Extortion & Big Game Hunting */}
                  <div>
                    <div className="absolute -left-4 rounded-full w-8 h-8 bg-primary/10 text-primary flex items-center justify-center">
                      <span className="text-sm font-medium">6</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">2019-Present: Double Extortion & Big Game Hunting</h2>
                    <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                      <p className="mb-4">
                        Modern ransomware attacks have evolved to target high-value organizations and employ multiple extortion techniques.
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Maze (2019):</strong> Pioneered data theft and double extortion</li>
                        <li><strong>REvil/Sodinokibi:</strong> Sophisticated RaaS with some of the highest ransom demands</li>
                        <li><strong>Colonial Pipeline attack (2021):</strong> DarkSide ransomware shut down a major U.S. fuel pipeline</li>
                        <li><strong>Conti:</strong> Generated over $180 million from victims</li>
                        <li>Triple extortion tactics now include DDoS attacks and contacting victims' customers</li>
                        <li>Average ransom payment exceeding $200,000 in 2021</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-4 mt-10">
                  <Button asChild variant="outline">
                    <Link to="/user-education/types">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Types of Ransomware
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link to="/user-education/victim-perspective">
                      Victim's Perspective
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card border border-border rounded-xl p-6 shadow-sm sticky top-24"
              >
                <h3 className="text-lg font-medium mb-4">Key Ransomware Milestones</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5 text-primary h-fit mt-0.5 flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">1989</p>
                      <p className="text-sm text-muted-foreground">First documented ransomware attack</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5 text-primary h-fit mt-0.5 flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">2006</p>
                      <p className="text-sm text-muted-foreground">First use of asymmetric encryption</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5 text-primary h-fit mt-0.5 flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">2013</p>
                      <p className="text-sm text-muted-foreground">CryptoLocker introduces Bitcoin payments</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5 text-primary h-fit mt-0.5 flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">2015</p>
                      <p className="text-sm text-muted-foreground">Rise of Ransomware-as-a-Service</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5 text-primary h-fit mt-0.5 flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">2017</p>
                      <p className="text-sm text-muted-foreground">WannaCry causes global disruption</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5 text-primary h-fit mt-0.5 flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">2019</p>
                      <p className="text-sm text-muted-foreground">Maze introduces double-extortion tactics</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5 text-primary h-fit mt-0.5 flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">2021</p>
                      <p className="text-sm text-muted-foreground">Colonial Pipeline attack highlights critical infrastructure risks</p>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <h3 className="text-lg font-medium mb-4">Continue Learning</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link 
                        to="/user-education/victim-perspective" 
                        className="text-primary hover:text-primary/80 transition-colors inline-flex items-center"
                      >
                        Victim's Perspective
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/mitigation/prevention" 
                        className="text-primary hover:text-primary/80 transition-colors inline-flex items-center"
                      >
                        Prevention Strategies
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default RansomwareHistory;
