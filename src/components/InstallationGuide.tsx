import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, Smartphone, QrCode, CheckCircle } from "lucide-react";
import QRCodeModal from "./QRCodeModal";

const InstallationGuide: React.FC = () => {
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);

  const steps = [
    {
      icon: Download,
      title: "Download the App",
      description:
        "Visit Google Play Store or scan the QR code below to download CPPay on your Android device.",
    },
    {
      icon: Smartphone,
      title: "Create Your Wallet",
      description:
        "Set up your secure Smart Wallet in minutes without complex seed phrases.",
    },
    {
      icon: CheckCircle,
      title: "Verify Identity",
      description:
        "Complete a quick KYC process to unlock full transaction capabilities.",
    },
    {
      icon: CheckCircle,
      title: "Start Transacting",
      description:
        "Buy airtime, pay bills, and make crypto payments instantly.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-caro-pro font-bold text-gray-900 mb-6">
            Get Started in{" "}
            <span className="text-[#4D1B64]">4 Simple Steps</span>
          </h2>
          <p className="text-lg font-caro-pro text-gray-600 max-w-3xl mx-auto">
            Download the CPPay app and start your journey towards seamless,
            gasless crypto payments today.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              <div className="card p-8 text-center h-full">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#4D1B64] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {index + 1}
                </div>
                <div className="mt-6 mb-4">
                  <step.icon className="w-10 h-10 text-[#4D1B64] mx-auto" />
                </div>
                <h3 className="text-lg font-caro-pro font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 font-caro-pro text-sm">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-3 w-6 h-0.5 bg-gray-300"></div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* QR Code Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-50 rounded-3xl p-8 md:p-12 text-center mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-caro-pro font-bold text-gray-900 mb-4">
            Scan to Download
          </h3>
          <p className="text-gray-600 font-caro-pro mb-8 max-w-2xl mx-auto">
            Use your phone camera to scan the QR code below and download CPPay
            directly from the Google Play Store.
          </p>
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsQRModalOpen(true)}
              className="inline-flex items-center justify-center gap-3 bg-[#4D1B64] hover:bg-[#3D1452] text-white font-caro-pro font-semibold py-4 px-8 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#4D1B64] focus:ring-opacity-50"
            >
              <QrCode className="w-5 h-5" />
              Show QR Code
            </motion.button>
          </div>
        </motion.div>

        {/* System Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <h3 className="text-2xl md:text-3xl font-caro-pro font-bold text-gray-900 mb-8 text-center">
            System Requirements
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-caro-pro font-semibold text-gray-900 mb-4">
                Minimum Requirements
              </h4>
              <ul className="space-y-3">
                {[
                  "Android 8.0 or higher",
                  "Minimum 100MB free storage",
                  "Stable internet connection",
                  "Valid phone number",
                ].map((req, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-600 font-caro-pro"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-caro-pro font-semibold text-gray-900 mb-4">
                Recommended Specs
              </h4>
              <ul className="space-y-3">
                {[
                  "Android 11 or higher",
                  "500MB+ available storage",
                  "4G/LTE connection",
                  "Recent smartphone model",
                ].map((spec, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-600 font-caro-pro"
                  >
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 bg-[#4D1B64] hover:bg-[#3D1452] text-white font-caro-pro font-semibold py-4 px-8 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#4D1B64] focus:ring-opacity-50 text-lg"
          >
            <Download className="w-5 h-5" />
            Download from Google Play
          </motion.button>
        </motion.div>
      </div>

      <QRCodeModal
        isOpen={isQRModalOpen}
        onClose={() => setIsQRModalOpen(false)}
      />
    </section>
  );
};

export default InstallationGuide;
