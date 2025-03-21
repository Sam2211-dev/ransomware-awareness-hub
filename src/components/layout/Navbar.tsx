
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Shield, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', path: '/' },
  { 
    name: 'Introduction', 
    path: '/introduction',
    subItems: [
      { name: 'Why Emerging', path: '/introduction/why-emerging' },
      { name: 'How It Works', path: '/introduction/how-works' },
    ] 
  },
  { 
    name: 'User Education', 
    path: '/user-education',
    subItems: [
      { name: 'Types of Ransomware', path: '/user-education/types' },
      { name: 'Ransomware History', path: '/user-education/history' },
      { name: 'Victim Perspective', path: '/user-education/victim-perspective' },
    ]
  },
  { 
    name: 'Mitigation', 
    path: '/mitigation',
    subItems: [
      { name: 'Prevention', path: '/mitigation/prevention' },
      { name: 'Cybercrime Awareness', path: '/mitigation/cybercrime-awareness' },
    ]
  },
  { name: 'Download', path: '/download' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenSubmenu(null);
  }, [location]);

  const toggleSubmenu = (name: string) => {
    if (openSubmenu === name) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(name);
    }
  };

  const isActivePath = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled ? 'glassmorphism py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="max-width-wrapper page-padding">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-semibold">RSV Integrity check</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors relative",
                    isActivePath(item.path)
                      ? "text-primary"
                      : "text-foreground/80 hover:text-foreground"
                  )}
                  onMouseEnter={() => item.subItems && setOpenSubmenu(item.name)}
                  onMouseLeave={() => item.subItems && setOpenSubmenu(null)}
                >
                  {item.name}
                  {isActivePath(item.path) && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </Link>

                {/* Dropdown for submenu items */}
                {item.subItems && (
                  <AnimatePresence>
                    {openSubmenu === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-1 w-56 rounded-md shadow-lg glassmorphism py-1 z-20"
                        onMouseEnter={() => setOpenSubmenu(item.name)}
                        onMouseLeave={() => setOpenSubmenu(null)}
                      >
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className={cn(
                              "block px-4 py-2 text-sm hover:bg-black/5 transition-colors",
                              location.pathname === subItem.path
                                ? "text-primary font-medium"
                                : "text-foreground/80"
                            )}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            <Button asChild variant="default" size="sm" className="ml-4">
              <Link to="/download">Get the App</Link>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
          >
            <div className="glassmorphism mt-2 mx-4 rounded-lg">
              <nav className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <div className="flex items-center justify-between">
                      <Link
                        to={item.path}
                        className={cn(
                          "block px-3 py-2 rounded-md text-base font-medium w-full text-left",
                          isActivePath(item.path)
                            ? "text-primary bg-primary/5"
                            : "text-foreground/80 hover:bg-black/5"
                        )}
                        onClick={() => !item.subItems && setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.subItems && (
                        <button
                          onClick={() => toggleSubmenu(item.name)}
                          className="px-3 py-2"
                        >
                          <span
                            className={cn(
                              "block h-0.5 w-3 bg-foreground/60 transition-transform",
                              openSubmenu === item.name ? "rotate-0" : "rotate-90"
                            )}
                          />
                          <span className="block h-0.5 w-3 bg-foreground/60" />
                        </button>
                      )}
                    </div>

                    {/* Mobile submenu */}
                    {item.subItems && openSubmenu === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 overflow-hidden"
                      >
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className={cn(
                              "block px-3 py-2 rounded-md text-sm font-medium",
                              location.pathname === subItem.path
                                ? "text-primary"
                                : "text-foreground/70 hover:text-foreground"
                            )}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
                <div className="pt-2">
                  <Button asChild variant="default" size="sm" className="w-full">
                    <Link to="/download">Get the App</Link>
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
