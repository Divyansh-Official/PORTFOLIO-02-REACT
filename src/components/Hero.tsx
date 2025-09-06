import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${particle.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />
      
      {/* 3D Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 transform-gpu"
          animate={{ 
            rotateX: [0, 360],
            rotateY: [0, -360],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            filter: 'blur(1px)',
            opacity: 0.6
          }}
        />
        
        <motion.div
          className="absolute top-3/4 right-1/4 w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            borderRadius: '30%',
            filter: 'blur(1px)',
            opacity: 0.6
          }}
        />
        
        <motion.div
          className="absolute top-1/2 right-1/3 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600"
          animate={{ 
            rotateZ: [0, -360],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            filter: 'blur(1px)',
            opacity: 0.6
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* 3D Text Effect */}
          <div className="relative mb-8">
            <motion.h1 
              className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-4"
              style={{
                textShadow: `
                  0 1px 0 #1e293b,
                  0 2px 0 #334155,
                  0 3px 0 #475569,
                  0 4px 0 #64748b,
                  0 5px 0 #94a3b8,
                  0 6px 1px rgba(0,0,0,.1),
                  0 0 5px rgba(6,182,212,.5),
                  0 1px 3px rgba(0,0,0,.3),
                  0 3px 5px rgba(0,0,0,.2),
                  0 5px 10px rgba(0,0,0,.25)
                `
              }}
              animate={{ 
                rotateX: [0, 5, 0],
                rotateY: [0, -2, 0],
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              DIVYANSH
            </motion.h1>
            <motion.h1 
              className="text-6xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-cyan-400 via-violet-500 to-orange-500 bg-clip-text text-transparent"
              style={{
                textShadow: `
                  0 1px 0 rgba(6,182,212,0.3),
                  0 2px 0 rgba(139,92,246,0.3),
                  0 3px 0 rgba(249,115,22,0.3),
                  0 4px 8px rgba(0,0,0,0.3)
                `
              }}
              animate={{ 
                rotateX: [0, -3, 0],
                rotateY: [0, 3, 0],
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              TIWARI
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8"
          >
            <p className="text-xl md:text-2xl lg:text-3xl font-light text-slate-300 mb-2 tracking-wide">
              ASPIRING ANDROID DEVELOPER
            </p>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Software Engineer, Frontend & App Developer specializing in scalable mobile applications and modern web technologies
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
              whileHover={{ scale: 1.05, rotateX: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.button
              className="px-8 py-4 border-2 border-violet-500 text-violet-300 font-semibold rounded-xl hover:bg-violet-500 hover:text-white transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05, rotateX: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-gradient-to-b from-cyan-500 to-violet-500 rounded-full mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;