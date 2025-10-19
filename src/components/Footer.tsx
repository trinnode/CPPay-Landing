import React from "react";
import { Github, Twitter, Linkedin } from "lucide-react";
import logo from "./assets/logo.png";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Download App", href: "#installation" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Contact", href: "#contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
    ],
  };

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/cp-pay" },
    { name: "GitHub", icon: Github, href: "https://github.com/CP-Pay" },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/company/cppay",
    },
  ];

  return (
    <footer className="bg-[#0b1932] text-white relative z-20 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <img
                  src={logo}
                  alt="CPPay Logo"
                  className="w-12 h-12 object-contain"
                />
                <span className="ml-3 text-2xl font-caro-pro font-bold">
                  CPPay
                </span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md font-caro-pro">
                Revolutionizing Nigerian payments with seamless crypto and fiat
                transactions. Experience the future of financial freedom with
                CPPay.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-[#0b1932] rounded-lg flex items-center justify-center transition-colors duration-200 group"
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-lg font-caro-pro font-semibold mb-4">
                    Product
                  </h3>
                  <ul className="space-y-3">
                    {footerLinks.product.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-caro-pro font-semibold mb-4">
                    Company
                  </h3>
                  <ul className="space-y-3">
                    {footerLinks.company.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-caro-pro font-semibold mb-4">
                    Legal
                  </h3>
                  <ul className="space-y-3">
                    {footerLinks.legal.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 text-sm mb-4 md:mb-0">
              <span>© {currentYear} CPPay. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
