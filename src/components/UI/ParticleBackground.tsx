import React from 'react';
import { useTheme } from '@/context/ThemeContext';

const ParticleBackground: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
        background: isDark 
          ? 'radial-gradient(circle at 25% 25%, rgba(0, 243, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)'
          : 'radial-gradient(circle at 25% 25%, rgba(168, 85, 247, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(0, 243, 255, 0.1) 0%, transparent 50%)',
      }}
    >
      {/* Simple animated dots as fallback */}
      <div className="particles-fallback">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              position: 'absolute',
              width: '2px',
              height: '2px',
              backgroundColor: isDark ? '#00f3ff' : '#a855f7',
              borderRadius: '50%',
              opacity: 0.3,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) scale(1.1);
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
};

export default ParticleBackground; 