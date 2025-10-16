import React, { useMemo } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const BlockchainBackground: React.FC = React.memo(() => {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 30 + 20,
      delay: Math.random() * 10,
    }));
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-white via-purple-50 to-white overflow-hidden z-0 will-change-transform pointer-events-none">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4D1B64]/5 via-transparent to-[#4D1B64]/5"></div>

      {/* Large subtle blur orbs - visible but subtle */}
      <motion.div
        animate={{
          opacity: [0.08, 0.15, 0.08],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4D1B64] rounded-full blur-3xl opacity-[0.08]"
      />

      <motion.div
        animate={{
          opacity: [0.08, 0.15, 0.08],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#4D1B64] rounded-full blur-3xl opacity-[0.08]"
      />

      {/* Animated particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-[#4D1B64]"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [-80, -300, -80],
            opacity: [0.08, 0.25, 0.08],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Subtle connecting lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ mixBlendMode: "multiply", opacity: 0.08 }}
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4D1B64" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#4D1B64" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <line x1="10%" y1="20%" x2="90%" y2="80%" stroke="url(#lineGradient)" strokeWidth="1" />
        <line x1="90%" y1="20%" x2="10%" y2="80%" stroke="url(#lineGradient)" strokeWidth="1" />
        <line x1="50%" y1="10%" x2="50%" y2="90%" stroke="url(#lineGradient)" strokeWidth="1" />
        <circle cx="30%" cy="40%" r="120" fill="none" stroke="#4D1B64" strokeWidth="0.8" opacity="0.1" />
        <circle cx="70%" cy="60%" r="100" fill="none" stroke="#4D1B64" strokeWidth="0.8" opacity="0.1" />
      </svg>
    </div>
  );
});

BlockchainBackground.displayName = "BlockchainBackground";

export default BlockchainBackground;
