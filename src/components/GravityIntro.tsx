import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const GravityIntro: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const navigate = useNavigate();
  
  const [showShinyText, setShowShinyText] = useState(false);
  const [dynamicFontSize, setDynamicFontSize] = useState(110);

  useEffect(() => {
    // إظهار النص اللامع بعد 4.8 ثواني (وقت تجمع الجزيئات)
    const shineTimer = setTimeout(() => {
      setShowShinyText(true);
    }, 4800);

    // الانتقال التلقائي لصفحة /home بعد 7.5 ثواني
    const navigateTimer = setTimeout(() => {
      navigate('/home');
    }, 7500);

    return () => {
      clearTimeout(shineTimer);
      clearTimeout(navigateTimer);
    };
  }, [navigate]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    let animationFrameId: number;
    let startTime = Date.now();

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      vy: number;

      constructor(x: number, y: number) {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * -canvas!.height - 100;
        this.baseX = x;
        this.baseY = y;
        this.size = 2.5;
        this.vy = Math.random() * 2 + 1.5;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = '#00ffcc';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update(phase: 'gravity' | 'formText') {
        if (phase === 'gravity') {
          this.vy += 0.2;
          this.y += this.vy;
          if (this.y >= canvas!.height - this.size) {
            this.y = canvas!.height - this.size;
            this.vy *= -0.6;
          }
        } else {
          const dx = this.baseX - this.x;
          const dy = this.baseY - this.y;
          this.x += dx * 0.05;
          this.y += dy * 0.05;
        }
      }
    }

    const initTextParticles = () => {
      particlesArray = [];
      ctx.fillStyle = 'white';
      
      const fontSize = Math.min(canvas.width / 10, 110);
      setDynamicFontSize(fontSize);
      
      ctx.font = `bold ${fontSize}px Verdana`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('Demiania Mina', canvas.width / 2, canvas.height / 2);

      const textCoordinates = ctx.getImageData(0, 0, canvas.width, canvas.height);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let y = 0; y < textCoordinates.height; y += 4) {
        for (let x = 0; x < textCoordinates.width; x += 4) {
          const index = (y * textCoordinates.width + x) * 4;
          if (textCoordinates.data[index + 3] > 128) {
            particlesArray.push(new Particle(x, y));
          }
        }
      }
    };

    initTextParticles();

    const animate = () => {
      ctx.fillStyle = 'rgba(11, 15, 25, 0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const phase = elapsed < 3200 ? 'gravity' : 'formText';

      // إخفاء الكانفاس بنعومة لما النص اللامع يظهر
      if (elapsed > 4800 && canvas) {
        canvas.style.opacity = Math.max(0, 1 - (elapsed - 4800) / 1000).toString();
      } else if (canvas) {
        canvas.style.opacity = '1';
      }

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].draw();
        particlesArray[i].update(phase);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initTextParticles();
      startTime = Date.now();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={styles.introContainer}>
      <style>
        {`
          @keyframes shine {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
          @keyframes fadeInGlow {
            from { opacity: 0; transform: translate(-50%, -50%) scale(0.95); }
            to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          }
          .shiny-text-effect {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-family: Verdana, sans-serif;
            font-weight: bold;
            white-space: nowrap;
            color: transparent;
            background: linear-gradient(120deg, #00ffcc 20%, #ffffff 50%, #00ffcc 80%);
            background-size: 200% auto;
            -webkit-background-clip: text;
            background-clip: text;
            animation: fadeInGlow 0.8s ease-out forwards, shine 2.5s linear infinite;
            text-shadow: 0 0 35px rgba(0, 255, 204, 0.6);
            z-index: 10;
            line-height: 1; /* منع أي مسافات رأسية إضافية تسبب نزول النص */
          }
        `}
      </style>

      {/* لوحة الرسم للجزيئات */}
      <canvas ref={canvasRef} style={{ display: 'block', transition: 'opacity 0.1s' }} />

      {/* النص اللامع مطابق تماماً لمركز الجزيئات بدون أي إزاحة */}
      {showShinyText && (
        <div 
          className="shiny-text-effect" 
          style={{ fontSize: `${dynamicFontSize}px` }}
        >
          Demiania Mina
        </div>
      )}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  introContainer: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    backgroundColor: '#0b0f19',
    overflow: 'hidden',
  },
};
