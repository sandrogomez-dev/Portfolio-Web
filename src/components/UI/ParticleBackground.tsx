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
          ? 'radial-gradient(circle at 25% 25%, rgba(166, 138, 100, 0.06) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(139, 115, 85, 0.06) 0%, transparent 50%)'
          : 'radial-gradient(circle at 25% 25%, rgba(139, 115, 85, 0.04) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(166, 138, 100, 0.04) 0%, transparent 50%)',
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
              backgroundColor: isDark ? '#A68A64' : '#8B7355',
              borderRadius: '50%',
              opacity: 0.2,
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