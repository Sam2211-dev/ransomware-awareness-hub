
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Key, Shield, FileWarning, Clock, Database, Lock, DollarSign, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '@/components/ui/PageTransition';

const CryptoLockerRansomware = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "Overview and Background",
      content: "CryptoLocker emerged as one of the first ransomware strains to gain widespread notoriety in late 2013. Renowned for its sophisticated encryption methods, this malware marked a pivotal moment in the evolution of cyber extortion. By utilizing strong encryption algorithms, it rendered victims' files inaccessible, demanding a ransom payment in Bitcoin for decryption keys. The ransomware was primarily distributed through the Gameover ZeuS botnet, which itself was a sophisticated banking trojan that had infected millions of computers worldwide.",
      icon: <Database className="h-6 w-6 text-yellow-500" />
    },
    {
      title: "Method of Operation",
      content: "CryptoLocker primarily infiltrated systems through email attachments, masquerading as legitimate files. Victims would often receive phishing emails prompting them to download what appeared to be an important document or invoice. Upon opening the attachment, the ransomware would execute, initiating its encryption process on the victim's files. Once activated, CryptoLocker would connect to its command and control servers to generate a unique public-private key pair. The malware would then begin systematically encrypting files with specific extensions, including documents, spreadsheets, and images, making them completely inaccessible without the corresponding private key that only the attackers possessed.",
      icon: <FileWarning className="h-6 w-6 text-yellow-500" />
    },
    {
      title: "Key Characteristics",
      content: "CryptoLocker employed RSA public-key cryptography to encrypt files, making recovery without the decryption key nearly impossible. Upon encryption, victims would receive a ransom note instructing them to pay between $300 to $2000 for the decryption key, with threats of file deletion if the deadline was not met. The ransomware featured a countdown timer that added psychological pressure on victims, displaying the remaining time before the private key would allegedly be destroyed. CryptoLocker specifically targeted over 70 file types, including Microsoft Office documents, PDFs, and image files. What made it particularly effective was its ability to encrypt files not only on the local hard drive but also on mapped network drives, causing widespread damage in organizational settings.",
      icon: <Key className="h-6 w-6 text-yellow-500" />
    },
    {
      title: "Impact on Ransomware Evolution",
      content: "The significance of CryptoLocker extends beyond its immediate damage. Its successful methodology influenced a wave of copycat ransomware, as cybercriminals recognized the profitability of this model. CryptoLocker also led to various defensive measures by security experts and organizations, including enhanced email filtering and user education regarding phishing threats. It was estimated that CryptoLocker infected approximately 500,000 computers worldwide and extorted millions of dollars in ransom payments. This financial success prompted a significant shift in cybercriminal tactics, leading to the ransomware epidemic we face today. By demonstrating that ransomware could be both technically effective and financially lucrative, CryptoLocker essentially established the template for modern ransomware operations.",
      icon: <Shield className="h-6 w-6 text-yellow-500" />
    },
    {
      title: "Financial Devastation",
      content: "The financial impact of CryptoLocker was unprecedented at the time. Conservative estimates suggest that the operators collected at least $3 million in ransom payments before the operation was disrupted. Unlike previous malware that focused on stealing information or using computing resources, CryptoLocker's direct monetization strategy proved remarkably effective. The ransom demands were strategically set at a price point that many victims found more economical to pay than to lose their data, especially businesses that faced potential operational shutdowns. This economic calculation became a central component of future ransomware campaigns, with attackers carefully calibrating ransom amounts based on the perceived value of encrypted data.",
      icon: <DollarSign className="h-6 w-6 text-yellow-500" />
    },
    {
      title: "Law Enforcement Response",
      content: "In June 2014, a coordinated international law enforcement operation called \"Operation Tovar\" successfully disrupted the Gameover ZeuS botnet that distributed CryptoLocker, effectively neutralizing the primary distribution channel for the ransomware. Following this operation, security researchers created decryption tools that helped many victims recover their files without paying the ransom. The takedown operation involved the FBI, Europol, and numerous security companies, demonstrating the scale of response needed to combat sophisticated ransomware operations. Despite this success, the techniques pioneered by CryptoLocker quickly reemerged in other ransomware families, showing how difficult it is to permanently eliminate such threats.",
      icon: <Users className="h-6 w-6 text-yellow-500" />
    }
  ];

  return (
    <PageTransition>
      <div className="py-16 md:py-24">
        <div className="max-width-wrapper page-padding">
          {/* Header with parallax effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-16 relative overflow-hidden rounded-3xl"
            style={{ minHeight: "280px" }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-amber-500/10 -z-10"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
            />
            
            <motion.div 
              className="absolute inset-0 opacity-10 -z-5"
              style={{
                backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.828 0h2.83zM22.344 0L13.03 9.314l1.414 1.414L25.172 0h-2.83zM32 0l12.142 12.142-1.414 1.414L30 .828 17.272 13.556l-1.414-1.414L28 0h4zM.284 0l28 28-1.414 1.414L0 2.544v2.83L25.456 30l-1.414 1.414L0 7.97v2.828L22.627 30l-1.414 1.414L0 13.4v2.83L19.8 30l-1.414 1.414L0 18.8v2.83L16.97 30l-1.414 1.414L0 24.23v2.828L14.142 30l-1.414 1.414L0 29.6v3.2l8.485 8.485-1.414 1.414L0 34.857v2.83l4.97 4.97-1.414 1.414L0 40.23v2.83L2.142 45.2.728 46.314 0 45.857v2.83l.143.142-.142.142v3.827l.142-.142.142.142h3.827l-.142-.142.142-.142h2.83l-.485-.485 1.414-1.414 2.83 2.83h2.828l-4.243-4.243 1.414-1.414 5.657 5.657h2.83L8.97 42.97l1.414-1.414L17.9 48.97h2.83l-7.94-7.94 1.415-1.413 9.9 9.897h2.828l-11.3-11.3 1.414-1.414L25.2 45.858h2.83l-13.73-13.73 1.414-1.414L30 45v-2.83L14.142 26.313l1.414-1.414L30 39.43v-2.83L17.272 20.142l1.414-1.414L30 33.857v-2.83L20.142 13.97l1.414-1.414L30 28.284v-2.83L22.97 8.97l1.414-1.415 5.657 5.657 5.657-5.657 1.414 1.415L30 16.97v2.83l8.485-8.486 1.415 1.414L31.515 20.14l1.414 1.414L45 13.43v2.83L34.142 26.313l1.414 1.414L45 19.57v2.83L36.244 31.516l1.414 1.414L45 25.44v2.83l-6.128 6.13 1.413 1.413L45 31.34v2.83l-3.303 3.303 1.415 1.413L45 37.254v2.83l-.485.485 1.414 1.414.657-.657v2.83l-2.83 2.827h2.83l.142-.142.142.142h3.827l-.142-.142.142-.142v-3.827l-.142.142-.142-.142h-2.83l.485-.485-1.414-1.414-2.83 2.83h-2.83L51.53 38.97l-1.414 1.414-7.516-7.516h-2.83l9.9 9.897-1.414 1.414-11.313-11.313h-2.83L45 42.84h-2.83L28.284 27.97l-1.414 1.415L42.142 45H39.31L26.7 32.385l-1.413 1.414L37.857 45h-2.83L22.97 32.97l-1.414 1.414L32.857 45H30.03L22.142 37.113l-1.414 1.414L28.284 45h-2.83L19.8 39.456l-1.415 1.414 3.116 3.116h-2.83l-.6-.6-1.414 1.414.97.97h-2.83l-3.728-3.726 1.414-1.414 1.728 1.728h2.83l-2.544-2.546 1.414-1.414 3.3 3.3h2.83L13.6 34.57l1.414-1.414 11.314 11.314h2.83L13.6 28.97l1.414-1.414 15.557 15.556h2.83L16.97 26.67l1.413-1.414 17.9 17.9h2.83l-19.8-19.8 1.415-1.413 21.728 21.728h2.83L22.97 20.97l1.414-1.414 23.657 23.657h2.83L28.284 20.626l1.414-1.414 25.486 25.486h2.83L32.97 20.656l1.414-1.414L60 45h-4L43.314 32.313l-1.414 1.414L55.172 45h-2.83l-9.9-9.9-1.413 1.415L51.37 45h-2.83l-5.656-5.657-1.414 1.414L45.8 45h-2.83l-1.97-1.97-1.414 1.414L41.2 45h-2.83l.6-.6-1.414-1.414-1.414 1.414L34.57 45h-2.83l3.73-3.728-1.416-1.414-5.657 5.657-5.657-5.657-1.414 1.414L25.2 45h-2.83l-3.728-3.726-1.414 1.414 3.957 3.956h-2.83l-5.656-5.656-1.415 1.414L15.84 45h-2.83L8.97 40.97l-1.414 1.414L12.67 45H9.84l-3.483-3.485-1.414 1.414L7.37 45H4.54L1.342 41.8l-1.414 1.413L2.67 45H0v-4l6.485-6.485-1.414-1.414L0 38.556v-2.83l4.97-4.97L3.557 29.34 0 32.9v-2.83l7.8-7.8-1.414-1.413L0 27.313v-2.83l11.313-11.313L9.9 11.757 0 21.657v-2.83L14.142 7.57 12.728 6.157 0 18.885V16.06L16.97 0h2.83L0 19.8v-2.83L19.8 0h2.83L0 22.626v-2.83L22.626 0h2.83L0 25.456v-2.83L25.456 0h2.83L0 28.284v-2.83L28.284 0h2.83L0 31.113v-2.83L31.113 0h2.83L0 33.94v-2.83L33.94 0h2.83L0 36.77v-2.83L36.77 0h2.83L0 39.6v-2.83L39.6 0h2.83L0 42.424v-2.83L42.424 0h2.83L0 45.254v-2.83L45.254 0h2.83L0 48.084v-2.83L48.084 0h2.83L0 50.912v-2.83L50.913 0h2.83L0 53.74v-2.82L53.744 0h2.83L0 56.568v-2.83L56.568 0h2.83L0 59.397v-2.83L59.398 0h2.83L30 32.23v-2.827L62.227 0h2.83L30 35.057v-2.83L65.057 0h2.83L30 37.884v-2.83L67.884 0h2.83L30 40.71v-2.83L70.714 0h2.827L30 43.54v-2.83L73.54 0h2.83L30 46.368v-2.83L76.368 0h2.83L30 49.195v-2.83L79.196 0h3.827L30 52.723v-2.83L82.553 0h2.83L30 55.55v-2.83L85.38 0h2.83L30 58.377v-2.83L88.207 0h2.83L60 30.627V27.8L91.037 0h2.83L60 33.454v-2.83L93.864 0h2.83L60 36.28v-2.827L96.69 0h2.828L60 39.11v-2.83l41.937-41.937h2.83L60 41.936v-2.83L104.78 0h2.83L60 47.576v-2.83L107.607 0h2.83L60 50.403v-2.83L110.434 0h2.83L60 53.23v-2.83L113.26 0h2.83L60 56.057v-2.83L116.087 0h2.83L60 58.883v-2.83L118.914 0h2.827L90 31.74v-2.828L121.742 0h2.83L90 34.568v-2.83L124.568 0h2.83L90 37.395v-2.83L127.395 0h2.83L90 40.223v-2.83L130.223 0h2.83L90 43.05v-2.83L133.05 0h2.83L90 45.876v-2.83L135.876 0h2.83L90 48.704v-2.83L138.703 0h2.83L90 51.53v-2.83L141.53 0h2.83L90 54.36v-2.83L144.36 0h2.83L90 57.185v-2.83L147.186 0h2.83L120 30.025v-2.83L149.814 0h2.83L120 32.852v-2.83L152.64 0h2.83L120 35.68v-2.83L155.47 0h2.83L120 38.505v-2.83L158.296 0h2.83L120 41.334v-2.83L161.124 0h2.83L120 44.16v-2.83L163.95 0h2.83L120 46.986v-2.83L166.778 0h2.83L120 49.814v-2.83L169.606 0h2.83L120 52.64v-2.83L172.435 0h2.83L120 55.47v-2.83L175.26 0h2.83L120 58.295v-2.83L178.09 0h2.83L150 30.913v-2.83L180.92 0h2.83L150 33.742v-2.83L183.748 0h2.83L150 36.57v-2.83L186.577 0h2.83L150 39.397v-2.83L189.402 0h2.828L150 42.224v-2.83L192.23 0h2.83L150 45.05v-2.83L195.058 0h2.83L150 47.88v-2.83L197.886 0h2.83L150 50.706v-2.83L200.714 0h2.83L150 53.535v-2.83L203.544 0h2.83L150 56.36v-2.83L206.372 0h2.83L150 59.19v-2.83L209.2 0h2.827L180 31.8v-2.83L212.026 0h2.83L180 34.63v-2.83L214.854 0h2.83L180 37.458v-2.83L217.682 0h2.83L180 40.285v-2.83L220.51 0h2.83L180 43.112v-2.83L223.338 0h2.83L180 45.94v-2.83L226.164 0h2.83L180 48.767v-2.83L228.992 0h2.83L180 51.594v-2.83L231.82 0h2.83L180 54.42v-2.83L234.647 0h2.83L180 57.247v-2.83L237.474 0h2.83L210 30.3v-2.83L240.302 0h2.83L210 33.127v-2.83L243.13 0h2.83L210 35.954v-2.83L245.956 0h2.83L210 38.78v-2.83L248.784 0h2.83L210 41.608v-2.83L251.612 0h2.83L210 44.435v-2.83L254.44 0h2.83L210 47.262v-2.83L257.268 0h2.83L210 50.09v-2.83L260.096 0h2.83L210 52.918v-2.83L262.924 0h2.83L210 55.745v-2.83L265.752 0h2.83L210 58.573v-2.83L268.58 0h2.83L240 31.02v-2.83L271.407 0h2.83L240 33.847v-2.83L274.234 0h2.83L240 36.673v-2.83L277.062 0h2.83L240 39.502v-2.83L279.89 0h2.83L240 42.33v-2.83L282.717 0h2.83L240 45.156v-2.83L285.545 0h2.83L240 47.982v-2.83L288.372 0h2.83L240 50.81v-2.83L291.2 0h2.827L240 53.637v-2.83L294.036 0h2.83L240 56.464v-2.83L296.854 0h2.83L240 59.292v-2.83L299.682 0h2.83L270 31.74v-2.83L302.51 0h2.828L270 34.568v-2.83L305.337 0h2.83L270 37.396v-2.83L308.164 0h2.83L270 40.223v-2.83L310.992 0h2.83L270 43.05v-2.83L313.82 0h2.83L270 45.877v-2.83L316.646 0h2.83L270 48.704v-2.83L319.475 0h2.83L270 51.532v-2.83L322.303 0h2.83L270 54.36v-2.83L325.13 0h2.83L270 57.186v-2.83L327.957 0h2.83L300 30.626v-2.83L330.785 0h2.83L300 33.454v-2.83L333.612 0h2.83L300 36.28v-2.83L336.44 0h2.83L300 39.107v-2.83L339.266 0h2.83L300 41.935v-2.83L342.095 0h2.83L300 44.76v-2.827L344.923 0h2.83L300 47.59v-2.83L347.75 0h2.83L300 50.417v-2.83L350.58 0h2.83L300 53.245v-2.83L353.407 0h2.83L300 56.07v-2.83L356.235 0h2.83L300 58.9v-2.83L359.063 0h2.83L330 31.113v-2.83L361.89 0h2.83L330 33.94v-2.83L364.72 0h2.83L330 36.77v-2.83L367.545 0h2.83L330 39.596v-2.83L370.373 0h2.83L330 42.424v-2.83L373.2 0h3.827L330 45.752v-2.83L376.93 0h2.83L330 48.58v-2.83L379.757 0h2.83L330 51.407v-2.83L382.585 0h2.83L330 54.233v-2.83L385.413 0h2.83L330 57.06v-2.83L388.24 0h2.83L330 59.89v-2.83L391.068 0h2.83L360 31.8v-2.83L393.896 0h2.83L360 34.626v-2.83L396.724 0h2.83L360 37.454v-2.83L399.56 0h2.83L360 40.28v-2.83L402.38 0h2.828L360 43.11v-2.83L405.207 0h2.83L360 45.935v-2.83L408.033 0h2.83L360 48.763v-2.83L410.862 0h2.83L360 51.59v-2.83L413.7 0h2.818L360 54.417v-2.83L416.517 0h2.83L360 57.244v-2.83L419.344 0h2.83L390 31.8v-2.83L422.172 0h2.83L390 34.628v-2.83L425 0h2.83L390 37.454v-2.83L427.826 0h2.83L390 40.282v-2.83L430.654 0h2.83L390 43.1v-2.83L433.482 0h2.83L390 45.936v-2.83L436.31 0h2.83L390 48.765v-2.83L439.137 0h2.83L390 51.5v-2.83L441.965 0h2.83L390 54.42v-2.83L444.792 0h2.83L390 57.25v-2.83L447.62 0h2.83L420 30.735v-2.83L450.447 0h2.83L420 33.563v-2.83L453.275 0h2.83L420 36.39v-2.83L456.103 0h2.83L420 39.22v-2.83L458.93 0h2.83L420 42.046v-2.83L461.76 0h2.83L420 44.873v-2.83L464.586 0h2.83L420 47.7v-2.83L467.414 0h2.83L420 50.528v-2.83L470.242 0h2.83L420 53.355v-2.83L473.07 0h2.83L420 56.183v-2.83L475.897 0h2.83L420 59.01v-2.83L478.725 0h2.83L450 30.83v-2.83L481.552 0h2.83L450 33.657V30.83L484.38 0h2.83L450 36.485v-2.83L487.208 0h2.83L450 39.314v-2.83L490.035 0h2.83L450 42.14v-2.83L492.863 0h2.83L450 44.97v-2.83L495.7 0h2.817L450 47.795v-2.83L498.518 0h2.83L450 50.622v-2.83L501.346 0h2.83L450 53.45v-2.83L504.173 0h2.83L450 56.276v-2.83L507 0h3.828L480 30.47V27.64L510.385 0h2.83L480 33.296v-2.83L513.213 0h2.83L480 36.124v-2.83L516.04 0h2.83L480 38.95v-2.827L518.87 0h2.83L480 41.78v-2.83L521.697 0h2.83L480 44.606v-2.83L524.524 0h2.83L480 47.434v-2.83L527.352 0h2.83L480 50.262v-2.83L530.18 0h2.83L480 53.09v-2.83L533.006 0h2.83L480 55.917v-2.83L535.834 0h2.83L480 58.745v-2.83L538.662 0h2.83L510 30.56v-2.83L541.5 0h2.82L510 33.385v-2.83L544.318 0h2.83L510 36.21v-2.83L547.146 0h2.83L510 39.04v-2.83L549.974 0h2.83L510 41.867v-2.83L552.802 0h2.83L510 44.694v-2.83L555.63 0h2.83L510 47.522v-2.83L558.458 0h2.83L510 50.35v-2.83L561.285 0h2.83L510 53.177v-2.83L564.112 0h2.83L510 56.004v-2.83L566.94 0h2.83L510 58.832v-2.83L569.767 0h2.83L540 31.113v-2.83L572.596 0h2.828L540 33.94v-2.83L575.424 0h2.83L540 36.77v-2.83L578.252 0h2.83L540 39.598v-2.83L581.082 0h2.83L540 42.425v-2.83L583.91 0h2.828L540 45.252v-2.83L586.738 0h2.83L540 48.08v-2.83L589.565 0h2.83L540 50.907v-2.83L592.393 0h2.83L540 53.734v-2.83L595.22 0h2.83L540 56.562v-2.83L598.05 0h2.83L540 59.39v-2.83L600.877 0h2.83L570 31.85v-2.83L603.705 0h2.83L570 34.676v-2.83L606.533 0h2.83L570 37.503v-2.83L609.36 0h2.83L570 40.33v-2.83L612.188 0h2.83L570 43.158v-2.83L615.016 0h2.83L570 45.986v-2.83L617.844 0h2.83L570 48.813v-2.83L620.67 0h2.83L570 51.64v-2.83L623.5 0h2.83L570 54.46v-2.83L626.327 0h2.83L570 57.3v-2.83L629.155 0h2.83L600 31.67v-2.83L631.982 0h2.83L600 34.497v-2.83L634.81 0h2.83L600 37.324v-2.83L637.637 0h2.83L600 40.152v-2.83L640.465 0h2.83L600 42.98v-2.83L643.293 0h2.83L600 45.807v-2.83L646.12 0h2.83L600 48.635v-2.83L648.948 0h2.83L600 51.462v-2.83L651.776 0h2.83L600 54.3v-2.83L654.603 0h2.83L600 57.117v-2.83L657.432 0h2.83L630 30.626v-2.83L660.258 0h2.83L630 33.454v-2.83L663.087 0h2.83L630 36.282v-2.83L665.914 0h2.83L630 39.11v-2.83L668.742 0h2.83L630 41.936v-2.83L671.57 0h2.83L630 44.764v-2.83L674.397 0h2.83L630 47.592v-2.83L677.225 0h2.83L630 50.42v-2.83L680.053 0h2.83L630 53.246v-2.83L682.88 0h2.83L630 56.073v-2.83L685.708 0h2.83L630 58.9v-2.83L688.536 0h2.83L660 31.734v-2.83L691.364 0h2.83L660 34.56v-2.83L694.19 0h2.83L660 37.39v-2.83L697.02 0h2.83L660 40.217v-2.83L699.847 0h2.83L660 43.045v-2.83L702.675 0h2.83L660 45.872v-2.83L705.503 0h2.83L660 48.7v-2.83L708.33 0h2.83L660 51.527v-2.83L711.158 0h2.83L660 54.355v-2.83L713.985 0h2.83L660 57.182v-2.83L716.813 0h2.83L690 31.734v-2.83L719.64 0h2.83L690 34.562v-2.83L722.47 0h2.83L690 37.39v-2.83L725.296 0h2.83L690 40.217v-2.83L728.124 0h2.83L690 43.045v-2.83L730.952 0h2.83L690 45.872v-2.83L733.78 0h2.83L690 48.7v-2.83L736.607 0h2.83L690 51.527v-2.83L739.434 0h2.83L690 54.355v-2.83L742.262 0h2.83L690 57.182v-2.83L745.09 0h2.83L720 31.734v-2.83L747.92 0h2.83L720 34.562v-2.83L750.747 0h2.83L720 37.39v-2.83L753.574 0h2.83L720 40.217v-2.83L756.402 0h2.83L720 43.045v-2.83L759.23 0h2.83L720 45.872v-2.83L762.057 0h2.83L720 48.7v-2.83L764.885 0h2.83L720 51.527v-2.83L767.712 0h2.83L720 54.355v-2.83L770.54 0h2.83L720 57.182v-2.83L773.368 0h2.83L750 31.734v-2.83L776.197 0h2.83L750 34.562v-2.83L779.024 0h2.83L750 37.39v-2.83L781.852 0h2.83L750 40.217v-2.83L784.68 0h2.83L750 43.045v-2.83L787.507 0h2.83L750 45.872v-2.83L790.335 0h2.83L750 48.7v-2.83L793.163 0h2.83L750 51.527v-2.83L795.99 0h2.83L750 54.355v-2.83L798.82 0h2.83L750 57.182v-2.83L801.645 0h2.83L780 31.734v-2.83L804.473 0h2.83L780 34.562v-2.83L807.302 0h2.83L780 37.39v-2.83L810.13 0h2.83L780 40.217v-2.83L812.956 0h2.83L780 43.045v-2.83L815.784 0h2.83L780 45.872v-2.83L818.612 0h2.83L780 48.7v-2.83L821.44 0h2.83L780 51.527v-2.83L824.267 0h2.83L780 54.355v-2.83L827.095 0h2.83L780 57.182v-2.83L829.923 0h2.83L810 31.734v-2.83L832.75 0h2.83L810 34.562v-2.83L835.578 0h2.83L810 37.39v-2.83L838.406 0h2.83L810 40.217v-2.83L841.233 0h2.83L810 43.045v-2.83L844.06 0h2.83L810 45.872v-2.83L846.89 0h2.83L810 48.7v-2.83L849.716 0h2.83L810 51.527v-2.83L852.544 0h2.83L810 54.355v-2.83L855.37 0h2.83L810 57.182v-2.83L858.2 0h2.827L840 31.734v-2.83L861.026 0h2.83L840 34.562v-2.83L863.854 0h2.83L840 37.39v-2.83L866.682 0h2.83L840 40.217v-2.83L869.51 0h2.83L840 43.045v-2.83L872.337 0h2.83L840 45.872v-2.83L875.165 0h2.83L840 48.7v-2.83L877.992 0h2.83L840 51.527v-2.83L880.82 0h2.83L840 54.355v-2.83L883.648 0h2.83L840 57.182v-2.83L886.476 0h2.83L870 31.734v-2.83L889.303 0h2.83L870 34.562v-2.83L892.13 0h2.83L870 37.39v-2.83L894.96 0h2.83L870 40.217v-2.83L897.787 0h2.83L870 43.045v-2.83L900.615 0h2.83L870 45.872v-2.83L903.443 0h2.83L870 48.7v-2.83L906.27 0h2.83L870 51.527v-2.83L909.098 0h2.83L870 54.355v-2.83L911.926 0h2.83L870 57.182v-2.83L914.754 0h2.83L900 31.734v-2.83L917.58 0h2.83L900 34.562v-2.83L920.41 0h2.83L900 37.39v-2.83L923.235 0h2.83L900 40.217v-2.83L926.063 0h2.83L900 43.045v-2.83L928.9 0h2.83L900 45.872v-2.83L931.72 0h2.83L900 48.7v-2.83L934.547 0h2.83L900 51.527v-2.83L937.375 0h2.83L900 54.355v-2.83L940.202 0h2.83L900 57.182v-2.83L943.03 0h2.83L930 31.734v-2.83L945.858 0h2.83L930 34.562v-2.83L948.685 0h2.83L930 37.39v-2.83L951.513 0h2.83L930 40.217v-2.83L954.34 0h2.83L930 43.045v-2.83L957.168 0h2.83L930 45.872v-2.83L959.996 0h2.83L930 48.7v-2.83L962.824 0h2.83L930 51.527v-2.83L965.65 0h2.83L930 54.355v-2.83L968.48 0h2.83L930 57.182v-2.83L971.307 0h2.83L960 31.734v-2.83L974.135 0h2.83L960 34.562v-2.83L976.963 0h2.83L960 37.39v-2.83L979.79 0h2.83L960 40.217v-2.83L982.618 0h2.83L960 43.045v-2.83L985.446 0h2.83L960 45.872v-2.83L988.273 0h2.83L960 48.7v-2.83L991.1 0h2.83L960 51.527v-2.83L993.928 0h2.83L960 54.355v-2.83L996.756 0h2.83L960 57.182v-2.83L999.584 0h3.826L990 31.734v-2.83L1003.21 0h2.83L990 34.562v-2.83L1006.04 0h2.83L990 37.39v-2.83L1008.87 0h2.83L990 40.217v-2.83L1011.7 0h2.83L990 43.045v-2.83L1014.52 0h2.83L990 45.872v-2.83L1017.35 0h2.83L990 48.7v-2.83L1020.18 0h2.83L990 51.527v-2.83L1023.01 0h2.83L990 54.355v-2.83L1025.83 0h2.83L990 57.182v-2.83L1028.66 0h2.83L1020 31.734v-2.83L1031.5 0h2.83L1020 34.562v-2.83L1034.32 0h2.83L1020 37.39v-2.83L1037.14 0h2.83L1020 40.217v-2.83L1039.97 0h2.83L1020 43.045v-2.83L1042.8 0h2.83L1020 45.872v-2.83L1045.63 0h2.83L1020 48.7v-2.83L1048.45 0h2.83L1020 51.527v-2.83L1051.28 0h2.83L1020 54.355v-2.83L1054.11 0h2.83L1020 57.182v-2.83L1056.94 0h2.83L1050 31.733v-2.83L1059.76 0h2.83L1050 34.56v-2.83L1062.6 0h2.83L1050 37.39v-2.83L1065.42 0h2.83L1050 40.217v-2.83L1068.25 0h2.83L1050 43.045v-2.83L1071.08 0h2.83L1050 45.87v-2.83L1073.9 0h2.83L1050 48.7v-2.83L1076.73 0h2.83L1050 51.527v-2.83L1079.56 0h2.83L1050 54.355v-2.83L1082.38 0h2.83L1050 57.182v-2.83L1085.21 0h2.83L1080 31.733v-2.83L1088.04 0h2.82L1080 34.56v-2.83L1090.87 0h2.83L1080 37.39v-2.83L1093.7 0h2.83L1080 40.217v-2.83L1096.52 0h2.83L1080 43.045v-2.83L1099.35 0h2.83L1080 45.87v-2.83L1102.18 0h2.83L1080 48.7v-2.83L1105 0h2.83L1080 51.527v-2.83L1107.83 0h2.83L1080 54.355v-2.83L1110.66 0h2.83L1080 57.182v-2.83L1113.5 0h2.83L1110 31.733v-2.83L1116.33 0h2.83L1110 34.56v-2.83L1119.15 0h2.83L1110 37.39v-2.83L1121.98 0h2.83L1110 40.217v-2.83L1124.8 0h2.83L1110 43.045v-2.83L1127.63 0h2.83L1110 45.87v-2.83L1130.46 0h2.83L1110 48.7v-2.83L1133.28 0h2.83L1110 51.527v-2.83L1136.1 0h2.83L1110 54.355v-2.83L1138.93 0h2.83L1110 57.182v-2.83L1141.76 0h2.83L1140 31.733v-2.83L1144.6 0h2.83L1140 34.56v-2.83L1147.42 0h2.83L1140 37.39v-2.83L1150.25 0h2.83L1140 40.217v-2.83L1153.07 0h2.83L1140 43.045v-2.83L1155.9 0h2.83L1140 45.87v-2.83L1158.73 0h2.83L1140 48.7v-2.83L1161.55 0h2.83L1140 51.527v-2.83L1164.38 0h2.83L1140 54.355v-2.83L1167.2 0h2.83L1140 57.182v-2.83L1170.03 0h2.83L1170 31.733v-2.83L1172.86 0h2.83L1170 34.56v-2.83L1175.7 0h2.83L1170 37.39v-2.83L1178.52 0h2.83L1170 40.217v-2.83L1181.35 0h2.83L1170 43.045v-2.83L1184.18 0h2.83L1170 45.87v-2.83L1187 0h2.83L1170 48.7v-2.83L1189.83 0h2.83L1170 51.527v-2.83L1192.66 0h2.83L1170 54.355v-2.83L1195.48 0h2.83L1170 57.182v-2.83L1198.32 0h2.83L1198.32 2.82z' fill='%23cd9a28' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E')"
              }}
            />
            
            <div className="flex items-center justify-between mb-8 pt-8 px-8">
              <Link to="/user-education/types" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Ransomware Types
              </Link>
              <span className="inline-flex items-center rounded-full bg-yellow-500/10 px-4 py-1.5 text-sm font-medium text-yellow-500">
                <Shield className="mr-1.5 h-4 w-4" />
                Ransomware Type
              </span>
            </div>
            
            <div className="px-8 pb-8">
              <div className="flex items-center gap-4 mb-4">
                <motion.div 
                  className="p-4 rounded-xl bg-yellow-500/10 text-yellow-500 border border-yellow-200"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(234, 179, 8, 0.3)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Key className="h-12 w-12" />
                </motion.div>
                <div>
                  <motion.h1 
                    className="text-4xl md:text-5xl font-bold"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                  >
                    CryptoLocker Ransomware
                  </motion.h1>
                  <motion.p 
                    className="text-xl text-muted-foreground mt-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                  >
                    Pioneer of Modern Ransomware
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Article intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
            className="mb-12 max-w-3xl mx-auto"
          >
            <p className="text-lg text-center italic text-muted-foreground">
              "CryptoLocker wasn't just another malware; it was the blueprint that defined modern ransomware attacks. Its introduction of asymmetric encryption and timed ransom demands created the template that cybercriminals have followed ever since."
            </p>
            <div className="flex justify-center mt-4">
              <div className="h-1 w-24 bg-yellow-500/50 rounded-full"></div>
            </div>
          </motion.div>

          {/* Content sections */}
          <div className="space-y-16 mb-16">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-card border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className="p-3 rounded-lg bg-yellow-500/10 text-yellow-500 mt-1">
                    {section.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">{section.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Evolution timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16 bg-gradient-to-r from-yellow-50 to-amber-50 p-8 rounded-xl border"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">CryptoLocker Timeline & Evolution</h2>
            
            <div className="relative py-4">
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-yellow-200 transform -translate-x-1/2"></div>
              
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="md:w-1/2 md:text-right pr-10 relative">
                    <motion.div 
                      className="absolute right-0 top-3 w-5 h-5 rounded-full bg-yellow-500 border-4 border-white transform translate-x-10 md:translate-x-1/2 z-10"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                      viewport={{ once: true }}
                    ></motion.div>
                    <motion.div 
                      className="bg-white p-6 rounded-xl shadow-sm border border-yellow-200 md:ml-auto"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-lg font-semibold mb-2 flex items-center">
                        <Clock className="mr-2 h-4 w-4 text-yellow-600" />
                        September 2013
                      </h3>
                      <p className="text-muted-foreground">First appearance of CryptoLocker, spreading primarily via email attachments and infected websites. Initially distributed through the Gameover ZeuS botnet, it quickly gained notoriety for its robust encryption and ruthless monetization strategy.</p>
                    </motion.div>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="md:w-1/2"></div>
                  <div className="md:w-1/2 pl-10 relative">
                    <motion.div 
                      className="absolute left-0 top-3 w-5 h-5 rounded-full bg-yellow-500 border-4 border-white transform -translate-x-10 md:-translate-x-1/2 z-10"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
                      viewport={{ once: true }}
                    ></motion.div>
                    <motion.div 
                      className="bg-white p-6 rounded-xl shadow-sm border border-yellow-200"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-lg font-semibold mb-2 flex items-center">
                        <Users className="mr-2 h-4 w-4 text-yellow-600" />
                        December 2013
                      </h3>
                      <p className="text-muted-foreground">Estimated 250,000 infections worldwide. CryptoLocker begins accepting alternative payment methods beyond Bitcoin. The ransom demand increased to $2,000 for delayed payments, adding pressure on victims. Security researchers documented CryptoLocker's sophisticated command and control infrastructure that generated unique encryption keys for each victim.</p>
                    </motion.div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="md:w-1/2 md:text-right pr-10 relative">
                    <motion.div 
                      className="absolute right-0 top-3 w-5 h-5 rounded-full bg-yellow-500 border-4 border-white transform translate-x-10 md:translate-x-1/2 z-10"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, delay: 0.5 }}
                      viewport={{ once: true }}
                    ></motion.div>
                    <motion.div 
                      className="bg-white p-6 rounded-xl shadow-sm border border-yellow-200 md:ml-auto"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-lg font-semibold mb-2 flex items-center">
                        <Shield className="mr-2 h-4 w-4 text-yellow-600" />
                        June 2014
                      </h3>
                      <p className="text-muted-foreground">Operation Tovar by international law enforcement successfully takes down the CryptoLocker botnet infrastructure. The FBI, in collaboration with international partners and private security companies, disrupted the Gameover ZeuS botnet that was the primary distribution channel for CryptoLocker, effectively neutralizing the original strain of the ransomware.</p>
                    </motion.div>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="md:w-1/2"></div>
                  <div className="md:w-1/2 pl-10 relative">
                    <motion.div 
                      className="absolute left-0 top-3 w-5 h-5 rounded-full bg-yellow-500 border-4 border-white transform -translate-x-10 md:-translate-x-1/2 z-10"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, delay: 0.7 }}
                      viewport={{ once: true }}
                    ></motion.div>
                    <motion.div 
                      className="bg-white p-6 rounded-xl shadow-sm border border-yellow-200"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-lg font-semibold mb-2 flex items-center">
                        <Key className="mr-2 h-4 w-4 text-yellow-600" />
                        August 2014
                      </h3>
                      <p className="text-muted-foreground">Security researchers release a tool that helps victims recover files encrypted by CryptoLocker without paying the ransom. Following Operation Tovar, security firms FireEye and Fox-IT created the DecryptoLocker portal, which allowed victims to upload encrypted files and obtain the corresponding decryption keys that had been seized during the takedown operation.</p>
                    </motion.div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="md:w-1/2 md:text-right pr-10 relative">
                    <motion.div 
                      className="absolute right-0 top-3 w-5 h-5 rounded-full bg-yellow-500 border-4 border-white transform translate-x-10 md:translate-x-1/2 z-10"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, delay: 0.9 }}
                      viewport={{ once: true }}
                    ></motion.div>
                    <motion.div 
                      className="bg-white p-6 rounded-xl shadow-sm border border-yellow-200 md:ml-auto"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.0 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-lg font-semibold mb-2 flex items-center">
                        <Lock className="mr-2 h-4 w-4 text-yellow-600" />
                        2015 - Present
                      </h3>
                      <p className="text-muted-foreground">CryptoLocker's legacy lives on as its techniques inspire numerous other ransomware families, transforming the cybersecurity landscape forever. Ransomware variants like CryptoWall, TeslaCrypt, and later Locky, Cerber, and more sophisticated strains like Ryuk and REvil, all built upon the fundamental approach established by CryptoLocker. The ransomware-as-a-service model emerged, professionalizing this form of cybercrime.</p>
                    </motion.div>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Impact statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16 bg-gradient-to-br from-yellow-900 to-black p-8 rounded-xl border text-white"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">The Devastating Impact</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center border border-yellow-500/20"
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(234, 179, 8, 0.2)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="text-4xl font-bold text-yellow-300 mb-2">500,000+</div>
                <div className="text-lg font-medium">Infections</div>
                <p className="mt-2 text-yellow-200/80 text-sm">Computers infected globally during the height of the CryptoLocker campaign, spanning both individual users and organizations.</p>
              </motion.div>
              
              <motion.div 
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center border border-yellow-500/20"
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(234, 179, 8, 0.2)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="text-4xl font-bold text-yellow-300 mb-2">$3+ Million</div>
                <div className="text-lg font-medium">Estimated Ransom Payments</div>
                <p className="mt-2 text-yellow-200/80 text-sm">Conservative estimates of the total ransom payments collected by the operators before the takedown operation.</p>
              </motion.div>
              
              <motion.div 
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center border border-yellow-500/20"
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(234, 179, 8, 0.2)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="text-4xl font-bold text-yellow-300 mb-2">41%</div>
                <div className="text-lg font-medium">Payment Rate</div>
                <p className="mt-2 text-yellow-200/80 text-sm">An unusually high percentage of victims paid the ransom, establishing ransomware as a profitable criminal enterprise.</p>
              </motion.div>
            </div>
            
            <div className="mt-8 p-6 bg-white/5 rounded-xl border border-yellow-500/10">
              <h3 className="text-xl font-semibold mb-3 text-yellow-200">Historical Significance</h3>
              <p className="text-yellow-100/90">
                CryptoLocker's introduction of asymmetric encryption (using public-key cryptography) was revolutionary in the malware world. Unlike previous ransomware that used symmetric encryption (which could often be broken), CryptoLocker's approach made recovery without the private key mathematically impossible. This technical innovation, combined with its business model of demanding relatively modest ransoms payable in cryptocurrency, established the template for modern ransomware that persists today.
              </p>
            </div>
          </motion.div>

          {/* Defensive measures */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16 bg-gradient-to-r from-yellow-50 to-amber-50 p-8 rounded-xl border"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">Lessons & Defensive Measures</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-sm border border-yellow-200"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center text-yellow-700">
                  <Database className="mr-3 h-5 w-5" />
                  Regular Data Backups
                </h3>
                <p className="text-muted-foreground">
                  CryptoLocker emphasized the critical importance of maintaining regular, offline backups of important data. Organizations that had robust backup strategies were able to restore their systems without paying the ransom, though even this approach wouldn't protect against the data leak threats that later ransomware would introduce.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-sm border border-yellow-200"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center text-yellow-700">
                  <FileWarning className="mr-3 h-5 w-5" />
                  Email Security & User Education
                </h3>
                <p className="text-muted-foreground">
                  Since CryptoLocker primarily spread through email attachments, improving email filtering and training users to recognize suspicious attachments became essential defensive measures. Many organizations implemented more aggressive email security policies and invested in user awareness training after witnessing CryptoLocker's impact.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-sm border border-yellow-200"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center text-yellow-700">
                  <Shield className="mr-3 h-5 w-5" />
                  Network Segmentation
                </h3>
                <p className="text-muted-foreground">
                  CryptoLocker's ability to encrypt files on mapped network drives highlighted the importance of network segmentation. Organizations learned to limit access rights and implement principle of least privilege across their networks to contain potential ransomware infections.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-sm border border-yellow-200"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center text-yellow-700">
                  <Lock className="mr-3 h-5 w-5" />
                  Ransomware Response Planning
                </h3>
                <p className="text-muted-foreground">
                  Perhaps most significantly, CryptoLocker prompted organizations to develop specific ransomware response plans. This included establishing policies on whether to pay ransoms, how to engage with law enforcement, and developing procedures for rapid recovery from ransomware incidents.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Media quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative overflow-hidden mb-16 bg-yellow-900/5 rounded-xl border border-yellow-200/50 p-12"
          >
            <div className="absolute top-0 right-0 opacity-20 text-yellow-500">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.82843 4L14.1421 8.31371V16H18V20H6V8.31371H9.82843V4ZM8 18H16V10H12V6H8V18Z" fill="currentColor" />
              </svg>
            </div>
            
            <blockquote className="text-xl md:text-2xl italic text-yellow-900 dark:text-yellow-200 max-w-3xl">
              "CryptoLocker was a watershed moment in cybersecurity history. It demonstrated how effective ransomware could be as a business model and set the template for an entire criminal industry that continues to evolve today."
            </blockquote>
            <div className="mt-6 text-right text-yellow-700 dark:text-yellow-400">
              <p className="font-medium">— Cybersecurity Analysis Report, 2018</p>
            </div>
          </motion.div>

          {/* Navigation buttons */}
          <div className="flex justify-center mb-8">
            <Button asChild variant="default" size="lg" className="bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 shadow-md hover:shadow-lg transition-all">
              <Link to="/user-education/types">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Ransomware Types
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default CryptoLockerRansomware;
