
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/ui/PageTransition';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const RansomwareTypes = () => {
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
                <Layers className="mr-1.5 h-4 w-4" />
                User Education / Types of Ransomware
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Types of Ransomware</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Understanding the different varieties of ransomware and their unique characteristics.
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
                <div className="space-y-12">
                  {/* Crypto Ransomware */}
                  <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                    <h2 className="text-2xl font-bold mb-4">1. Crypto Ransomware</h2>
                    <p className="mb-4">
                      The most common type of ransomware that encrypts valuable files on a victim's device, 
                      making them inaccessible until a ransom is paid.
                    </p>
                    <div className="bg-primary/5 rounded-lg p-4 mt-4">
                      <h3 className="font-medium mb-2">Notable examples:</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>WannaCry</li>
                        <li>CryptoLocker</li>
                        <li>Ryuk</li>
                        <li>Sodinokibi/REvil</li>
                      </ul>
                    </div>
                  </div>

                  {/* Locker Ransomware */}
                  <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                    <h2 className="text-2xl font-bold mb-4">2. Locker Ransomware</h2>
                    <p className="mb-4">
                      Unlike crypto ransomware, locker ransomware doesn't encrypt files but instead locks victims out of their 
                      devices entirely, preventing access to the system until payment is made.
                    </p>
                    <div className="bg-primary/5 rounded-lg p-4 mt-4">
                      <h3 className="font-medium mb-2">Notable examples:</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Reveton</li>
                        <li>Winlocker</li>
                        <li>Police Locker</li>
                      </ul>
                    </div>
                  </div>

                  {/* Scareware */}
                  <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                    <h2 className="text-2xl font-bold mb-4">3. Scareware</h2>
                    <p className="mb-4">
                      Scareware uses fear tactics by displaying alarming alerts claiming to have detected issues on your 
                      device. It tricks users into paying for fake security software to "fix" non-existent problems.
                    </p>
                    <div className="bg-primary/5 rounded-lg p-4 mt-4">
                      <h3 className="font-medium mb-2">Notable examples:</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Fake antivirus programs</li>
                        <li>Fake system optimizers</li>
                        <li>FakeApp</li>
                      </ul>
                    </div>
                  </div>

                  {/* Doxware/Leakware */}
                  <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                    <h2 className="text-2xl font-bold mb-4">4. Doxware/Leakware</h2>
                    <p className="mb-4">
                      This ransomware threatens to publish stolen sensitive data online if the ransom isn't paid, 
                      adding an extra layer of extortion beyond just encrypting files.
                    </p>
                    <div className="bg-primary/5 rounded-lg p-4 mt-4">
                      <h3 className="font-medium mb-2">Notable examples:</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>DoppelPaymer</li>
                        <li>Maze</li>
                        <li>Conti</li>
                      </ul>
                    </div>
                  </div>

                  {/* Mobile Ransomware */}
                  <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                    <h2 className="text-2xl font-bold mb-4">5. Mobile Ransomware</h2>
                    <p className="mb-4">
                      Specifically targeting mobile devices, this ransomware often locks the screen or encrypts data on 
                      smartphones and tablets, demanding payment to restore access.
                    </p>
                    <div className="bg-primary/5 rounded-lg p-4 mt-4">
                      <h3 className="font-medium mb-2">Notable examples:</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Koler</li>
                        <li>LockerPin</li>
                        <li>Filecoder</li>
                      </ul>
                    </div>
                  </div>

                  {/* Ransomware-as-a-Service (RaaS) */}
                  <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                    <h2 className="text-2xl font-bold mb-4">6. Ransomware-as-a-Service (RaaS)</h2>
                    <p className="mb-4">
                      Not a technical type, but a business model where ransomware developers rent out their malware to other 
                      criminals, enabling even those with limited technical skills to conduct ransomware attacks.
                    </p>
                    <div className="bg-primary/5 rounded-lg p-4 mt-4">
                      <h3 className="font-medium mb-2">Notable examples:</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>DarkSide</li>
                        <li>REvil</li>
                        <li>Cerber</li>
                        <li>BlackCat/ALPHV</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-4 mt-10">
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
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card border border-border rounded-xl p-6 shadow-sm"
              >
                <h3 className="text-lg font-medium mb-4">Identifying Ransomware</h3>
                <p className="text-muted-foreground mb-4">Common indicators of a ransomware attack:</p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <div className="rounded-full bg-primary/10 p-1 text-primary h-fit mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div>
                    <span>Inability to open files</span>
                  </li>
                  <li className="flex gap-2">
                    <div className="rounded-full bg-primary/10 p-1 text-primary h-fit mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div>
                    <span>Unusual file extensions (.encrypted, .locked, etc.)</span>
                  </li>
                  <li className="flex gap-2">
                    <div className="rounded-full bg-primary/10 p-1 text-primary h-fit mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div>
                    <span>Ransom demand messages</span>
                  </li>
                  <li className="flex gap-2">
                    <div className="rounded-full bg-primary/10 p-1 text-primary h-fit mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div>
                    <span>System lockout</span>
                  </li>
                  <li className="flex gap-2">
                    <div className="rounded-full bg-primary/10 p-1 text-primary h-fit mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div>
                    <span>Countdown timers</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-6 bg-card border border-border rounded-xl p-6 shadow-sm"
              >
                <h3 className="text-lg font-medium mb-4">Continue Learning</h3>
                <ul className="space-y-2">
                  <li>
                    <Link 
                      to="/user-education/history" 
                      className="text-primary hover:text-primary/80 transition-colors inline-flex items-center"
                    >
                      Ransomware History
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </li>
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
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default RansomwareTypes;
