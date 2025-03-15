
import { useEffect } from 'react';
import PageTransition from '@/components/ui/PageTransition';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Download as DownloadIcon, Shield, CheckCircle, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import DownloadSection from '@/components/download/DownloadSection';

const Download = () => {
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
                <Shield className="mr-1.5 h-4 w-4" />
                Protection Tool
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Integrity Checker Application</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Download our integrity checker application to protect your system by detecting unauthorized file modifications.
              </p>
            </motion.div>
          </div>

          {/* Download section */}
          <DownloadSection />

          {/* Features section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-20 mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card border border-border rounded-xl p-6">
                <CheckCircle className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">File Integrity Monitoring</h3>
                <p className="text-muted-foreground">
                  Continuously monitors important system files and alerts you when unauthorized changes are detected.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-6">
                <CheckCircle className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Early Detection</h3>
                <p className="text-muted-foreground">
                  Identifies suspicious file modifications before ransomware can fully encrypt your system.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-6">
                <CheckCircle className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Lightweight & Efficient</h3>
                <p className="text-muted-foreground">
                  Runs with minimal system resources while providing robust protection against file-modifying malware.
                </p>
              </div>
            </div>
          </motion.div>

          {/* How it works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary/10 text-primary font-bold rounded-full h-8 w-8 flex items-center justify-center shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Initial Scan</h3>
                    <p className="text-muted-foreground">
                      The application creates cryptographic hashes of your important files to establish a trusted baseline.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-primary/10 text-primary font-bold rounded-full h-8 w-8 flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Continuous Monitoring</h3>
                    <p className="text-muted-foreground">
                      The tool regularly checks file hashes against the baseline to detect any unauthorized changes.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-primary/10 text-primary font-bold rounded-full h-8 w-8 flex items-center justify-center shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Alert System</h3>
                    <p className="text-muted-foreground">
                      Receive immediate notifications when suspicious file changes are detected so you can take action.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card/50 border border-border rounded-xl p-8">
                <AlertTriangle className="h-8 w-8 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold mb-4">Important Usage Notes</h3>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p>Run the initial baseline scan when your system is known to be clean and secure.</p>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p>Configure the tool to monitor your most important directories and files.</p>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p>Update the baseline after legitimate system updates or software installations.</p>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p>Regularly back up your baseline database to prevent loss of your trusted file configurations.</p>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <div className="text-center">
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Remember that file integrity monitoring is just one part of a comprehensive security strategy. 
              For best results, combine it with other security measures like regular backups, 
              anti-malware software, and good security practices.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="outline">
                <Link to="/mitigation/prevention">
                  Prevention Strategies
                </Link>
              </Button>
              <Button asChild>
                <Link to="/">
                  Return to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Download;
