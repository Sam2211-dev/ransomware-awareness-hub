import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, Shield, FileText } from "lucide-react";
import { toast } from "sonner";

type DownloadSectionProps = {
  className?: string;
};

const DownloadSection = ({ className }: DownloadSectionProps) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  // Handles file selection (for a future upload feature)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      toast.success("Application uploaded successfully");
    }
  };

  // ✅ Handles .exe file download
  const handleDownload = () => {
    const fileUrl = "/rsv-intigrity-checker.exe"; // File inside /public folder
    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.download = "rsv-intigrity-checker.exe"; // Ensures correct filename on download
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    toast.success("Download started for RSV.exe");
  };

  return (
    <div className={className}>
      <div className="glassmorphism rounded-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 h-40 w-40 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 h-40 w-40 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="md:flex-1">
              <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 text-primary mb-6">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Integrity Checker Application
              </h3>
              <p className="text-muted-foreground mb-6">
                Our integrity checker application helps detect and prevent ransomware attacks by monitoring file system changes and alerting you to suspicious activities.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-primary/10 text-primary mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M4 7L6 9L10 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-sm">Real-time monitoring of file system changes</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-primary/10 text-primary mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M4 7L6 9L10 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-sm">Detection of suspicious encryption activities</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-primary/10 text-primary mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M4 7L6 9L10 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-sm">Alerts for potential ransomware threats</p>
                </div>
              </div>

              <div className="mt-8">
                {/* ✅ Download Button */}
                <Button onClick={handleDownload} className="w-full md:w-auto">
                  <Download className="mr-2 h-4 w-4" />
                  Download Application
                </Button>

                {uploadedFile && (
                  <div className="mt-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 text-primary mb-2">
                      <FileText className="h-4 w-4" />
                      <span className="text-sm font-medium">{uploadedFile.name}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="md:flex-1 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100
                }}
                className="relative w-full max-w-[300px] aspect-square"
              >
                <div className="absolute inset-10 bg-primary/10 rounded-full blur-2xl animate-pulse" />
                <div className="relative border-8 border-white shadow-xl rounded-full aspect-square overflow-hidden flex items-center justify-center bg-white">
                  <Shield className="h-24 w-24 text-primary" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-primary/20 rounded-full animate-ping opacity-20" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;