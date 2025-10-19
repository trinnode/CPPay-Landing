import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Shield,
  Users,
  Clock,
  Wallet,
  Zap,
  Globe,
  CheckCircle,
} from "lucide-react";

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Buy Airtime",
      description:
        "Recharge your phone instantly with crypto or fiat, hassle-free.",
      color: "text-[#4D1B64]",
      bgColor: "bg-purple-100",
    },
    {
      icon: Shield,
      title: "Pay Bills",
      description:
        "Settle your utility bills, subscriptions, and more with ease.",
      color: "text-green-500",
      bgColor: "bg-green-100",
    },
    {
      icon: Users,
      title: "Secure with Guardians",
      description:
        "Protect your assets with social recovery, ensuring peace of mind.",
      color: "text-[#4D1B64]",
      bgColor: "bg-purple-100",
    },
  ];

  const mainFeatures = [
    {
      icon: Wallet,
      title: "Smart Wallets",
      description:
        "Experience gasless transactions and enhanced security with our innovative Smart Wallets. Say goodbye to network fees.",
      color: "text-[#4D1B64]",
    },
    {
      icon: Users,
      title: "Multi-Wallet Management",
      description:
        "Seamlessly manage all your crypto and fiat wallets in one place. Stay organized with our single, intuitive dashboard.",
      color: "text-green-500",
    },
    {
      icon: Shield,
      title: "Social Recovery",
      description:
        "Secure your assets with trusted guardians. Recover your wallet with ease, even if you lose your seed phrase.",
      color: "text-[#4D1B64]",
    },
    {
      icon: Clock,
      title: "Batch Payments",
      description:
        "Streamline your payments. Pay multiple bills, subscriptions, or salaries in just one signature. Save time.",
      color: "text-orange-500",
    },
    {
      icon: Zap,
      title: "USSD Fallback",
      description:
        "Access CPPay services on any phone via USSD. Even without internet, you're always connected.",
      color: "text-yellow-500",
    },
    {
      icon: Globe,
      title: "Multi-Chain Support",
      description:
        "Access CPPay services on any phone via USSD. Even without internet, you're always connected.",
      color: "text-[#4D1B64]",
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
            Why <span className="text-[#4D1B64]">CPPay</span>?
          </h2>
          <p className="text-lg font-caro-pro text-gray-600 max-w-3xl mx-auto">
            Experience the next generation of financial freedom with features
            designed for simplicity, security, and efficiency.
          </p>
        </motion.div>

        {/* Core Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card p-8 text-center group hover:scale-105 transition-all duration-300"
            >
              <div
                className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-caro-pro font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 font-caro-pro">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-caro-pro font-bold text-center text-gray-900 mb-12">
            Unleash the Power of CPPay
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <div>
                  <h4 className="text-lg font-caro-pro font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed font-caro-pro">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Your Journey Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-caro-pro font-bold text-gray-900 mb-4">
              Your Journey to Gasless Payments
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto font-caro-pro">
              Getting started with CPPay is simple. Follow these easy steps to
              unlock instant financial freedom.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Download",
                description:
                  "Get CPPay on your Android device. Quick, easy, and hassle-free.",
              },
              {
                step: "2",
                title: "Create Wallet",
                description:
                  "Set up your secure Smart Wallet without complex seed phrases.",
              },
              {
                step: "3",
                title: "Start Transacting",
                description:
                  "Buy airtime, pay bills, and swap crypto to fiat instantly.",
              },
              {
                step: "4",
                title: "Seamless Experience",
                description:
                  "Enjoy real-time transactions and gasless crypto payments.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#4D1B64] rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {item.step}
                  </div>
                  <h4 className="text-lg font-caro-pro font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed font-caro-pro">
                    {item.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-cppay-blue to-cppay-purple transform -translate-x-8"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2 mb-6">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-green-700 font-medium">
              Ready to revolutionize your payments?
            </span>
          </div>

          <button className="btn-primary text-lg px-8 py-4 font-caro-pro">
            Get Started for Free
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
