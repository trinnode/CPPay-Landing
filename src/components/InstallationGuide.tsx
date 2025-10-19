import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, Smartphone, CheckCircle } from "lucide-react";
import QRCodeModal from "./QRCodeModal";

const InstallationGuide: React.FC = () => {
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);

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
    <section className="py-12 sm:py-16 lg:py-20 bg-transparent relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white/90 rounded-3xl py-8 md:py-12">
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
            <span className="text-[#0973b4]">4 Simple Steps</span>
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
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {[
            {
              step: "1",
              icon: Download,
              title: "Download",
              description:
                "Get CPPay on your Android device. Quick, easy, and hassle-free.",
            },
            {
              step: "2",
              icon: Smartphone,
              title: "Create Wallet",
              description:
                "Set up your secure Smart Wallet without complex seed phrases.",
            },
            {
              step: "3",
              icon: CheckCircle,
              title: "Start Transacting",
              description:
                "Buy airtime, pay bills, and swap crypto to fiat instantly.",
            },
            {
              step: "4",
              icon: CheckCircle,
              title: "Seamless Experience",
              description:
                "Enjoy real-time transactions and gasless crypto payments.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-[#0973b4] rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {item.step}
                </div>
                <div className="mb-4">
                  <item.icon className="w-10 h-10 text-[#0973b4] mx-auto" />
                </div>
                <h4 className="text-lg font-caro-pro font-semibold text-gray-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed font-caro-pro">
                  {item.description}
                </p>
              </div>
              {index < 3 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-gray-800 to-gray-700 transform -translate-x-8"></div>
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
            Click the button below to download
          </h3>
          <p className="text-gray-600 font-caro-pro mb-8 max-w-2xl mx-auto">
            Get CPPay on your Android device today and start your journey
            towards seamless, gasless payments.
          </p>
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsQRModalOpen(true)}
              className="inline-flex items-center justify-center gap-3 bg-[#0973b4] hover:bg-[#0f172a] text-white font-caro-pro font-semibold py-4 px-8 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0973b4] focus:ring-opacity-50"
            >
              <Download className="w-5 h-5" />
              Download App
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
      </div>

      <QRCodeModal
        isOpen={isQRModalOpen}
        onClose={() => setIsQRModalOpen(false)}
      />
    </section>
  );
};

export default InstallationGuide;
