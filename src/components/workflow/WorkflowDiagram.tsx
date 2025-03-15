
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const WorkflowDiagram = () => {
  const location = useLocation();

  // Helper function to determine if a path is active
  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  // Node component for workflow diagram
  const WorkflowNode = ({ 
    title, 
    path, 
    isActive, 
    delay = 0 
  }: { 
    title: string; 
    path: string; 
    isActive: boolean; 
    delay?: number;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      className="flex justify-center"
    >
      <Link 
        to={path}
        className={cn(
          "px-4 py-2 border rounded-md text-center text-sm font-medium transition-colors hover:bg-zinc-700 min-w-40",
          isActive ? "bg-zinc-700 border-primary text-white" : "bg-zinc-800 border-zinc-700 text-zinc-300"
        )}
      >
        {title}
      </Link>
    </motion.div>
  );

  // Connector component
  const Connector = ({ direction = "down", delay = 0 }: { direction?: "down" | "right" | "left"; delay?: number }) => {
    if (direction === "down") {
      return (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay }}
          className="h-6 w-px bg-zinc-700 mx-auto my-1"
        />
      );
    } else if (direction === "right") {
      return (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay }}
          className="w-6 h-px bg-zinc-700 mx-1 my-auto"
        />
      );
    } else {
      return (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay }}
          className="w-6 h-px bg-zinc-700 mx-1 my-auto"
        />
      );
    }
  };

  return (
    <div className="bg-black p-6 rounded-xl text-white overflow-x-auto">
      <h2 className="text-xl font-bold mb-6 text-center border-b border-zinc-800 pb-4">Ransomware Awareness Workflow</h2>
      
      <div className="flex flex-col items-center min-w-[800px]">
        {/* Main page */}
        <WorkflowNode 
          title="Main Webpage (Ransomware Awareness)" 
          path="/" 
          isActive={isActive('/')} 
          delay={0.1}
        />
        <Connector delay={0.2} />
        
        {/* Three main branches */}
        <div className="grid grid-cols-3 gap-16 w-full max-w-4xl">
          <div className="flex flex-col items-center">
            <WorkflowNode 
              title="Introduction to Ransomware" 
              path="/introduction" 
              isActive={isActive('/introduction')} 
              delay={0.3}
            />
            <Connector delay={0.4} />
            <div className="grid grid-cols-1 gap-4">
              <div>
                <WorkflowNode 
                  title="Why Are Ransomware Attacks Emerging?" 
                  path="/introduction/why-emerging" 
                  isActive={isActive('/introduction/why-emerging')} 
                  delay={0.5}
                />
              </div>
              <div>
                <WorkflowNode 
                  title="How Ransomware Works" 
                  path="/introduction/how-works" 
                  isActive={isActive('/introduction/how-works')} 
                  delay={0.6}
                />
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <WorkflowNode 
              title="User Education" 
              path="/user-education" 
              isActive={isActive('/user-education')} 
              delay={0.3}
            />
            <Connector delay={0.4} />
            <WorkflowNode 
              title="Some Wellknown Types of Ransomware" 
              path="/user-education/types" 
              isActive={isActive('/user-education/types')} 
              delay={0.5}
            />
            <Connector delay={0.6} />
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center">
                <WorkflowNode 
                  title="Jigsaw" 
                  path="/user-education/types#jigsaw" 
                  isActive={false} 
                  delay={0.7}
                />
                <Connector delay={0.8} />
                <WorkflowNode 
                  title="CryptoLocker" 
                  path="/user-education/types#cryptolocker" 
                  isActive={false} 
                  delay={0.9}
                />
                <Connector delay={1.0} />
                <WorkflowNode 
                  title="WannaCry" 
                  path="/user-education/types#wannacry" 
                  isActive={false} 
                  delay={1.1}
                />
              </div>
              <div className="flex flex-col items-center">
                <WorkflowNode 
                  title="Bad Rabbit" 
                  path="/user-education/types#badrabbit" 
                  isActive={false} 
                  delay={0.7}
                />
                <Connector delay={0.8} />
                <WorkflowNode 
                  title="GoldenEye" 
                  path="/user-education/types#goldeneye" 
                  isActive={false} 
                  delay={0.9}
                />
                <Connector delay={1.0} />
                <WorkflowNode 
                  title="The Maze" 
                  path="/user-education/types#themaze" 
                  isActive={false} 
                  delay={1.1}
                />
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <WorkflowNode 
              title="Mitigations & Cybercrime Awareness" 
              path="/mitigation" 
              isActive={isActive('/mitigation')} 
              delay={0.3}
            />
            <Connector delay={0.4} />
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col items-center">
                <WorkflowNode 
                  title="Ransomware Mitigations & Prevention" 
                  path="/mitigation/prevention" 
                  isActive={isActive('/mitigation/prevention')} 
                  delay={0.5}
                />
                <Connector delay={0.6} />
                <WorkflowNode 
                  title="Key Integrity Checker (Application)" 
                  path="/download" 
                  isActive={isActive('/download')} 
                  delay={0.7}
                />
              </div>
              <div className="flex flex-col items-center">
                <WorkflowNode 
                  title="Cybercrime Awareness" 
                  path="/mitigation/cybercrime-awareness" 
                  isActive={isActive('/mitigation/cybercrime-awareness')} 
                  delay={0.5}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowDiagram;
