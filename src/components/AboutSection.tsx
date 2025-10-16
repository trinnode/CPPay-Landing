import React from "react";
import { motion } from "framer-motion";
import { Zap, Shield, Users, TrendingUp } from "lucide-react";

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Execute crypto and fiat transactions in seconds, not hours.",
    },
    {
      icon: Shield,
      title: "Secure & Safe",
      description:
        "Military-grade encryption and smart contract audited for your peace of mind.",
    },
    {
      icon: Users,
      title: "User Friendly",
      description:
        "Intuitive interface designed for everyone, no crypto expertise needed.",
    },
    {
      icon: TrendingUp,
      title: "Growing Fast",
      description:
        "Join thousands of Nigerians revolutionizing their payment experience.",
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
            About CPPay
          </h2>
          <p className="text-lg font-caro-pro text-gray-600 max-w-3xl mx-auto">
            CPPay is revolutionizing payments in Nigeria by combining the
            security of blockchain technology with the simplicity of everyday
            banking. We're making crypto and fiat transactions accessible to
            everyone.
          </p>
        </motion.div>

        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-caro-pro font-bold text-gray-900 mb-4">
                Why CPPay?
              </h3>
              <p className="text-gray-600 font-caro-pro leading-relaxed">
                In Nigeria, traditional payment systems are slow, expensive, and
                often unreliable. Crypto offers solutions but has a steep
                learning curve. CPPay bridges this gap by providing a seamless,
                secure platform where Nigerians can transact freely using both
                crypto and fiat currencies.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-caro-pro font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 font-caro-pro leading-relaxed">
                To empower Nigerians with fast, secure, and affordable payment
                solutions that transcend traditional banking limitations and
                unlock financial opportunities through blockchain technology.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-[#4D1B64]/5 rounded-xl p-6 text-center">
              <div className="text-4xl font-caro-pro font-bold text-[#4D1B64] mb-2">
                10K+
              </div>
              <p className="text-gray-600 font-caro-pro">Active Users</p>
            </div>
            <div className="bg-[#4D1B64]/5 rounded-xl p-6 text-center">
              <div className="text-4xl font-caro-pro font-bold text-[#4D1B64] mb-2">
                ₦2.5B+
              </div>
              <p className="text-gray-600 font-caro-pro">Transactions</p>
            </div>
            <div className="bg-[#4D1B64]/5 rounded-xl p-6 text-center">
              <div className="text-4xl font-caro-pro font-bold text-[#4D1B64] mb-2">
                50+
              </div>
              <p className="text-gray-600 font-caro-pro">Countries</p>
            </div>
            <div className="bg-[#4D1B64]/5 rounded-xl p-6 text-center">
              <div className="text-4xl font-caro-pro font-bold text-[#4D1B64] mb-2">
                24/7
              </div>
              <p className="text-gray-600 font-caro-pro">Support</p>
            </div>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-caro-pro font-bold text-center text-gray-900 mb-12">
            Why Choose CPPay?
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#4D1B64] hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4">
                  <feature.icon className="w-12 h-12 text-[#4D1B64]" />
                </div>
                <h4 className="text-lg font-caro-pro font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm font-caro-pro leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#4D1B64]/5 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-caro-pro font-bold text-gray-900 mb-4">
            Join the Revolution
          </h3>
          <p className="text-gray-600 font-caro-pro mb-6 max-w-2xl mx-auto">
            Be part of the future of Nigerian payments. Download CPPay today and
            start experiencing seamless, secure transactions.
          </p>
          <motion.a
            href="#installation"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-[#4D1B64] hover:bg-[#3D1452] text-white font-caro-pro font-semibold py-3 px-8 rounded-lg transition-all duration-200"
          >
            Get Started Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
