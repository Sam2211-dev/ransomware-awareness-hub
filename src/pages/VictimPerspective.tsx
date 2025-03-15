
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/ui/PageTransition';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, Users, Clock, Calculator, AlertTriangle, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const VictimPerspective = () => {
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
                <Users className="mr-1.5 h-4 w-4" />
                User Education / Victim's Perspective
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">The Victim's Perspective</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Understanding the experience and impact of a ransomware attack from the victim's point of view.
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
                <h2 className="text-3xl font-bold mb-8">The Ransomware Experience Timeline</h2>
                
                <div className="space-y-8">
                  {/* Initial Discovery */}
                  <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
                    <div className="bg-primary/5 p-4 flex items-center gap-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold">Initial Discovery</h3>
                    </div>
                    <div className="p-6">
                      <p className="mb-4">
                        For most victims, the attack begins with a shocking discovery: locked files, strange messages on 
                        screens, or systems that no longer function properly.
                      </p>
                      <div className="bg-muted/30 border border-border rounded-lg p-4 italic text-muted-foreground">
                        <p>"I arrived at work on Monday morning and couldn't access any of our customer files. Then I saw 
                        the message on my screen with a countdown timer. At first, I thought it was some kind of joke."</p>
                        <p className="mt-2 text-right text-sm">— Office Manager at a small accounting firm</p>
                      </div>
                      <div className="mt-4 space-y-2">
                        <p className="font-medium">Common initial reactions:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Confusion and disbelief</li>
                          <li>Attempts to restart systems</li>
                          <li>Immediate consultation with IT staff (if available)</li>
                          <li>Panic as the scope becomes clear</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Assessment & Decision-Making */}
                  <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
                    <div className="bg-primary/5 p-4 flex items-center gap-3">
                      <Calculator className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold">Assessment & Decision-Making</h3>
                    </div>
                    <div className="p-6">
                      <p className="mb-4">
                        Victims face an immediate and difficult decision-making process, often while under extreme stress 
                        and with limited information.
                      </p>
                      <div className="bg-muted/30 border border-border rounded-lg p-4 italic text-muted-foreground">
                        <p>"We had to quickly determine what data was affected, if we had viable backups, and calculate the 
                        cost of downtime versus the ransom demand. All while our hospital was effectively unable to access 
                        patient records."</p>
                        <p className="mt-2 text-right text-sm">— IT Director at a regional hospital</p>
                      </div>
                      <div className="mt-4 space-y-2">
                        <p className="font-medium">Critical questions victims face:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>What systems and data are affected?</li>
                          <li>Do we have secure, recent backups?</li>
                          <li>How much will downtime cost the organization?</li>
                          <li>Should we pay the ransom? Is payment even legal?</li>
                          <li>Do we have cyber insurance that covers this?</li>
                          <li>Who needs to be notified (law enforcement, customers, partners)?</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Business Impact */}
                  <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
                    <div className="bg-primary/5 p-4 flex items-center gap-3">
                      <AlertTriangle className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold">Business Impact</h3>
                    </div>
                    <div className="p-6">
                      <p className="mb-4">
                        Beyond the immediate technical issues, ransomware attacks have profound and wide-ranging impacts on business operations.
                      </p>
                      <div className="bg-muted/30 border border-border rounded-lg p-4 italic text-muted-foreground">
                        <p>"We were effectively out of business for nearly three weeks. Our manufacturing equipment was 
                        connected to infected systems and couldn't operate. We had to send workers home and lost over $2 million 
                        in orders we couldn't fulfill."</p>
                        <p className="mt-2 text-right text-sm">— COO of a mid-sized manufacturing company</p>
                      </div>
                      <div className="mt-4 space-y-2">
                        <p className="font-medium">Common business impacts:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li><strong>Operational downtime:</strong> Average of 21 days in 2021</li>
                          <li><strong>Financial costs:</strong> Ransom payments, recovery costs, lost business</li>
                          <li><strong>Reputational damage:</strong> Loss of customer trust and confidence</li>
                          <li><strong>Data loss:</strong> Even with decryption, data may be corrupted or incomplete</li>
                          <li><strong>Regulatory consequences:</strong> Potential fines for data breaches</li>
                          <li><strong>Legal liability:</strong> Lawsuits from affected customers or partners</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Psychological Impact */}
                  <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
                    <div className="bg-primary/5 p-4 flex items-center gap-3">
                      <Users className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold">Psychological Impact</h3>
                    </div>
                    <div className="p-6">
                      <p className="mb-4">
                        The human element of ransomware attacks is often overlooked, but the psychological impact on victims 
                        can be significant and long-lasting.
                      </p>
                      <div className="bg-muted/30 border border-border rounded-lg p-4 italic text-muted-foreground">
                        <p>"I felt personally violated. Our family photos, financial records, everything was locked. The stress 
                        was overwhelming—worrying about identity theft, financial loss, and what the attackers might do with our 
                        personal information."</p>
                        <p className="mt-2 text-right text-sm">— Individual victim of ransomware attack</p>
                      </div>
                      <div className="mt-4 space-y-2">
                        <p className="font-medium">Common psychological effects:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Stress and anxiety from the uncertainty and pressure</li>
                          <li>Decision fatigue from complex, high-stakes choices</li>
                          <li>Feelings of violation and vulnerability</li>
                          <li>Guilt and blame among staff (especially if human error was involved)</li>
                          <li>Loss of trust in technology systems</li>
                          <li>Post-incident hypervigilance and fear of repeat attacks</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Recovery & Lessons Learned */}
                  <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
                    <div className="bg-primary/5 p-4 flex items-center gap-3">
                      <Shield className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold">Recovery & Lessons Learned</h3>
                    </div>
                    <div className="p-6">
                      <p className="mb-4">
                        The aftermath of a ransomware attack often leads to significant changes in how organizations approach security.
                      </p>
                      <div className="bg-muted/30 border border-border rounded-lg p-4 italic text-muted-foreground">
                        <p>"After the attack, security became our top priority, not just an IT issue. We completely 
                        redesigned our backup systems, implemented extensive security training, and now conduct regular 
                        security drills. It was a painful lesson, but we're much stronger now."</p>
                        <p className="mt-2 text-right text-sm">— CIO of a financial services company</p>
                      </div>
                      <div className="mt-4 space-y-2">
                        <p className="font-medium">Common post-attack changes:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Implementation of more robust backup strategies</li>
                          <li>Increased investment in security technologies and personnel</li>
                          <li>Regular security awareness training for all employees</li>
                          <li>Development of formal incident response plans</li>
                          <li>Adoption of zero-trust security models</li>
                          <li>Greater emphasis on security in business decision-making</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-4 mt-10">
                  <Button asChild variant="outline">
                    <Link to="/user-education/history">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Ransomware History
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link to="/mitigation">
                      Mitigation Strategies
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
                <h3 className="text-lg font-medium mb-4">Ransomware Attack Statistics</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-2xl font-bold text-primary">21 days</p>
                    <p className="text-sm text-muted-foreground">Average downtime after a ransomware attack</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">$1.85M</p>
                    <p className="text-sm text-muted-foreground">Average recovery cost in 2021</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">46%</p>
                    <p className="text-sm text-muted-foreground">Of victims paid the ransom</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">67%</p>
                    <p className="text-sm text-muted-foreground">Report data loss even after paying</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">80%</p>
                    <p className="text-sm text-muted-foreground">Of those who paid were attacked again</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-6 bg-card border border-border rounded-xl p-6 shadow-sm"
              >
                <h3 className="text-lg font-medium mb-4">To Pay or Not to Pay?</h3>
                <p className="text-muted-foreground mb-4">
                  Organizations face a difficult ethical and practical dilemma when deciding whether to pay a ransom.
                </p>
                <div className="space-y-4">
                  <div className="bg-primary/5 rounded-lg p-4">
                    <h4 className="font-medium mb-2">Arguments Against Paying</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Encourages future attacks</li>
                      <li>No guarantee of data recovery</li>
                      <li>May fund criminal or terrorist organizations</li>
                      <li>May violate sanctions or regulations</li>
                      <li>Often leads to being targeted again</li>
                    </ul>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-4">
                    <h4 className="font-medium mb-2">When Organizations Pay</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Critical systems are affected</li>
                      <li>No viable backups exist</li>
                      <li>Cost of downtime exceeds ransom</li>
                      <li>Human safety is at risk</li>
                      <li>Insurance covers the payment</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <h3 className="text-lg font-medium mb-4">Continue Learning</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link 
                        to="/mitigation" 
                        className="text-primary hover:text-primary/80 transition-colors inline-flex items-center"
                      >
                        Mitigation Strategies
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/mitigation/prevention" 
                        className="text-primary hover:text-primary/80 transition-colors inline-flex items-center"
                      >
                        Prevention Techniques
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/download" 
                        className="text-primary hover:text-primary/80 transition-colors inline-flex items-center"
                      >
                        Download Protection Tool
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

export default VictimPerspective;
