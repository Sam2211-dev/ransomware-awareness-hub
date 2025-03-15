
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/ui/PageTransition';
import Hero from '@/components/home/Hero';
import ModuleCard from '@/components/home/ModuleCard';
import DownloadSection from '@/components/download/DownloadSection';
import { Shield, BookOpen, BarChart3, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  // Ensure proper scroll position on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      {/* Hero section */}
      <Hero />

      {/* Main content */}
      <main>
        {/* Modules section */}
        <section className="section-spacing">
          <div className="max-width-wrapper page-padding">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Educational Modules</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our comprehensive educational content to understand, identify, and protect against ransomware threats.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ModuleCard
                title="Introduction to Ransomware"
                description="Learn about ransomware, why it's emerging as a major threat, and how these attacks typically work."
                icon={<Shield className="h-6 w-6" />}
                to="/introduction"
                delay={0}
              />
              <ModuleCard
                title="User Education"
                description="Understand the different types of ransomware, their history, and the experience from a victim's perspective."
                icon={<BookOpen className="h-6 w-6" />}
                to="/user-education"
                delay={1}
              />
              <ModuleCard
                title="Mitigation & Awareness"
                description="Discover practical prevention strategies and increase your cybercrime awareness to stay protected."
                icon={<BarChart3 className="h-6 w-6" />}
                to="/mitigation"
                delay={2}
              />
            </div>
          </div>
        </section>

        {/* Stats section */}
        <section className="bg-secondary/50 py-16 md:py-24">
          <div className="max-width-wrapper page-padding">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Ransomware Impact</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Understanding the scale and impact of ransomware attacks globally.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-card rounded-lg p-6 text-center shadow-sm">
                <p className="text-4xl font-bold text-primary mb-2">$20B+</p>
                <p className="text-muted-foreground">Estimated global damages in 2021</p>
              </div>
              <div className="bg-card rounded-lg p-6 text-center shadow-sm">
                <p className="text-4xl font-bold text-primary mb-2">300%</p>
                <p className="text-muted-foreground">Increase in attacks since 2019</p>
              </div>
              <div className="bg-card rounded-lg p-6 text-center shadow-sm">
                <p className="text-4xl font-bold text-primary mb-2">11s</p>
                <p className="text-muted-foreground">A business is attacked every 11 seconds</p>
              </div>
              <div className="bg-card rounded-lg p-6 text-center shadow-sm">
                <p className="text-4xl font-bold text-primary mb-2">21d</p>
                <p className="text-muted-foreground">Average downtime after an attack</p>
              </div>
            </div>
          </div>
        </section>

        {/* Download section */}
        <section className="section-spacing">
          <div className="max-width-wrapper page-padding">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Protection Tools</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Download our integrity checker application to help protect your systems from ransomware attacks.
              </p>
            </div>

            <DownloadSection />
          </div>
        </section>

        {/* CTA section */}
        <section className="bg-primary/5 py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
          <div className="max-width-wrapper page-padding relative">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Protected</h2>
              <p className="text-muted-foreground mb-8">
                Ransomware attacks are evolving constantly. Stay informed and protected by exploring our educational resources and using our integrity checker application.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link to="/download">
                    <Download className="mr-2 h-4 w-4" />
                    Download App
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/introduction">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default Index;
