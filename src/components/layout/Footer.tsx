
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="max-width-wrapper page-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold">RansomwareAware</span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Educating and protecting users from the threats of ransomware through awareness,
              education, and preventive tools.
            </p>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Learn</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/introduction" className="text-muted-foreground hover:text-foreground transition-colors">
                  Introduction
                </Link>
              </li>
              <li>
                <Link to="/user-education" className="text-muted-foreground hover:text-foreground transition-colors">
                  User Education
                </Link>
              </li>
              <li>
                <Link to="/mitigation" className="text-muted-foreground hover:text-foreground transition-colors">
                  Mitigation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Resources</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/download" className="text-muted-foreground hover:text-foreground transition-colors">
                  Download App
                </Link>
              </li>
              <li>
                <Link to="/mitigation/prevention" className="text-muted-foreground hover:text-foreground transition-colors">
                  Prevention Tips
                </Link>
              </li>
              <li>
                <Link to="/mitigation/cybercrime-awareness" className="text-muted-foreground hover:text-foreground transition-colors">
                  Cybercrime Awareness
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} RansomwareAware. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy-policy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
