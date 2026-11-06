import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

const ParticleNetwork = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = 0;
    let height = 0;
    let animationId;
    let particles = [];

    const mouse = {
      x: -1000,
      y: -1000,
      active: false,
    };

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const createParticles = () => {
      const count = Math.min(150, Math.floor((width * height) / 10000));

      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      }));
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      createParticles();
      draw();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const connectionDistance = 135;
      const mouseRadius = 190;

      particles.forEach((particle) => {
        if (!reducedMotion) {
          particle.x += particle.vx;
          particle.y += particle.vy;

          if (particle.x < 0) particle.x = width;
          if (particle.x > width) particle.x = 0;
          if (particle.y < 0) particle.y = height;
          if (particle.y > height) particle.y = 0;
        }

        let mouseDistance = Infinity;

        if (mouse.active) {
          const dx = particle.x - mouse.x;
          const dy = particle.y - mouse.y;
          mouseDistance = Math.sqrt(dx * dx + dy * dy);

          if (mouseDistance < mouseRadius && mouseDistance > 0) {
            const force = (1 - mouseDistance / mouseRadius) * 0.055;

            particle.vx += (dx / mouseDistance) * force;
            particle.vy += (dy / mouseDistance) * force;
          }
        }

        const speed = Math.sqrt(particle.vx ** 2 + particle.vy ** 2);

        if (speed > 0.85) {
          particle.vx *= 0.85 / speed;
          particle.vy *= 0.85 / speed;
        }

        particle.vx *= 0.999;
        particle.vy *= 0.999;

        const glow =
          mouseDistance < mouseRadius ? 1 - mouseDistance / mouseRadius : 0;

        ctx.beginPath();
        ctx.arc(
          particle.x,
          particle.y,
          particle.radius + glow * 1.5,
          0,
          Math.PI * 2,
        );

        ctx.fillStyle =
          glow > 0
            ? `rgba(56, 189, 248, ${particle.opacity + glow * 0.5})`
            : `rgba(120, 180, 230, ${particle.opacity})`;

        ctx.shadowBlur = glow * 15;
        ctx.shadowColor = "#38bdf8";
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];

          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.16;

            const midpointX = (a.x + b.x) / 2;
            const midpointY = (a.y + b.y) / 2;

            let mouseGlow = 0;

            if (mouse.active) {
              const mx = midpointX - mouse.x;
              const my = midpointY - mouse.y;
              const md = Math.sqrt(mx * mx + my * my);

              mouseGlow = Math.max(0, 1 - md / mouseRadius);
            }

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);

            ctx.strokeStyle =
              mouseGlow > 0
                ? `rgba(56, 189, 248, ${opacity + mouseGlow * 0.55})`
                : `rgba(56, 189, 248, ${opacity})`;

            ctx.lineWidth = 0.6 + mouseGlow * 0.8;
            ctx.stroke();
          }
        }
      }

      if (mouse.active) {
        const gradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouseRadius,
        );

        gradient.addColorStop(0, "rgba(56, 189, 248, 0.09)");
        gradient.addColorStop(0.5, "rgba(56, 189, 248, 0.025)");
        gradient.addColorStop(1, "rgba(56, 189, 248, 0)");

        ctx.fillStyle = gradient;
        ctx.fillRect(
          mouse.x - mouseRadius,
          mouse.y - mouseRadius,
          mouseRadius * 2,
          mouseRadius * 2,
        );
      }
    };

    const animate = () => {
      draw();
      animationId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    resize();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handleMouseMove);
    document.addEventListener("pointerleave", handleMouseLeave);

    if (!reducedMotion) {
      animate();
    }

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handleMouseMove);
      document.removeEventListener("pointerleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="particle-network" aria-hidden="true" />
  );
};

const App = () => {
  return (
    <div
      id="home"
      className="relative min-h-screen bg-[#070a12] font-sans text-[#edf0f8] selection:bg-blue-500/30"
    >
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="aurora aurora-one" />

        <div className="aurora aurora-two" />

        <div className="aurora aurora-three" />

        <div className="tech-grid" />

        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="orbit orbit-three" />

        <ParticleNetwork />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,#070a12_100%)] opacity-70" />
      </div>

      <div className="relative z-20 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
