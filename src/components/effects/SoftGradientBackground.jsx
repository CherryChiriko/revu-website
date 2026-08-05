// src/components/effects/SoftGradientBackground.jsx
import { useRef, useEffect, useCallback } from "react";
import { useTheme } from "../../context/ThemeContext";

export default function SoftGradientBackground({ children, className = "" }) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({
    x: -1000,
    y: -1000,
    targetX: -1000,
    targetY: -1000,
  });
  const blobsRef = useRef([]);
  const rafRef = useRef(null);
  const startTimeRef = useRef(null);
  const { theme } = useTheme();

  const getColors = useCallback(() => {
    const themeColors = theme.gradients?.colors || [];
    if (themeColors.length === 0) {
      return theme.isDark
        ? ["#312e81", "#4338ca", "#6366f1", "#818cf8", "#c084fc", "#d8b4fe"]
        : ["#a5b4fc", "#c084fc", "#f0abfc", "#38bdf8", "#818cf8", "#f472b6"];
    }
    return Array.from(
      { length: 10 },
      (_, i) => themeColors[i % themeColors.length],
    );
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    startTimeRef.current = performance.now();

    const initBlobs = () => {
      const colors = getColors();

      // Dynamic ambient drift setup with soft cursor interaction
      const behaviors = [
        { radius: 0.42, driftSpeed: 0.0008, followWeight: 0.08, delay: 0 },
        { radius: 0.36, driftSpeed: 0.0006, followWeight: 0.05, delay: 100 },
        { radius: 0.45, driftSpeed: 0.0009, followWeight: 0.1, delay: 200 },
        { radius: 0.32, driftSpeed: 0.0007, followWeight: 0.06, delay: 300 },
        { radius: 0.38, driftSpeed: 0.0005, followWeight: 0.07, delay: 400 },
        { radius: 0.28, driftSpeed: 0.001, followWeight: 0.12, delay: 500 },
        { radius: 0.4, driftSpeed: 0.0004, followWeight: 0.04, delay: 600 },
        { radius: 0.34, driftSpeed: 0.0008, followWeight: 0.09, delay: 700 },
      ];

      blobsRef.current = behaviors.map((b, i) => ({
        x: width * 0.5 + (Math.random() - 0.5) * (width * 0.6),
        y: height * 0.5 + (Math.random() - 0.5) * (height * 0.6),
        vx: 0,
        vy: 0,
        color: colors[i] || "#6366f1",
        ...b,
        baseRadius: Math.min(width, height) * b.radius,
        phaseX: Math.random() * Math.PI * 2,
        phaseY: Math.random() * Math.PI * 2,
        breathePhase: Math.random() * Math.PI * 2,
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initBlobs();
    };

    const handleMouseMove = (e) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };

    const hexToRgb = (hex) => {
      if (!hex || typeof hex !== "string" || !hex.startsWith("#"))
        return { r: 99, g: 102, b: 241 };
      const cleaned = hex.replace("#", "");
      const num = parseInt(
        cleaned.length === 3
          ? cleaned
              .split("")
              .map((c) => c + c)
              .join("")
          : cleaned,
        16,
      );
      return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
    };

    const animate = (time) => {
      const mouse = mouseRef.current;

      // Smooth interpolation for mouse positions
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      const elapsedTime = time - startTimeRef.current;

      // Base Canvas Fill
      const baseBg = theme.isDark ? "#0b0f19" : "#f8fafc";
      ctx.fillStyle = baseBg;
      ctx.fillRect(0, 0, width, height);

      // Adaptive blend mode for light/dark theme contrast
      ctx.globalCompositeOperation = theme.isDark ? "screen" : "multiply";

      // Render Floating Blobs
      blobsRef.current.forEach((blob) => {
        const blobAge = Math.max(0, elapsedTime - blob.delay);
        const entranceProgress = Math.min(1, blobAge / 1200);
        const easeEntrance = Math.pow(entranceProgress, 2);

        if (easeEntrance <= 0) return;

        // Ambient fluid drift calculation
        const ambientX =
          Math.sin(time * blob.driftSpeed + blob.phaseX) * (width * 0.2);
        const ambientY =
          Math.cos(time * (blob.driftSpeed * 0.8) + blob.phaseY) *
          (height * 0.2);

        // Gentle magnetic displacement toward mouse
        const dx = mouse.x - blob.x;
        const dy = mouse.y - blob.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const pushForce = Math.max(
          0,
          1 - dist / (Math.min(width, height) * 0.5),
        );

        const targetX =
          width * 0.5 +
          ambientX +
          (dx / dist) * pushForce * (width * blob.followWeight);
        const targetY =
          height * 0.5 +
          ambientY +
          (dy / dist) * pushForce * (height * blob.followWeight);

        blob.vx += (targetX - blob.x) * 0.003;
        blob.vy += (targetY - blob.y) * 0.003;
        blob.vx *= 0.97;
        blob.vy *= 0.97;
        blob.x += blob.vx;
        blob.y += blob.vy;

        // Breathing effect
        const breathe = 1 + Math.sin(time * 0.0008 + blob.breathePhase) * 0.12;
        const radius = blob.baseRadius * breathe * easeEntrance;
        const { r, g, b } = hexToRgb(blob.color);

        for (let layer = 0; layer < 3; layer++) {
          const layerRadius = radius * (1 - layer * 0.22);
          const alphaMultiplier = theme.isDark ? 0.8 : 1.4;
          const alpha =
            [0.4, 0.22, 0.09][layer] * easeEntrance * alphaMultiplier;

          const gradient = ctx.createRadialGradient(
            blob.x,
            blob.y,
            0,
            blob.x,
            blob.y,
            Math.max(1, layerRadius),
          );

          gradient.addColorStop(
            0,
            `rgba(${r}, ${g}, ${b}, ${Math.min(1, alpha)})`,
          );
          gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${alpha * 0.35})`);
          gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(blob.x, blob.y, Math.max(1, layerRadius), 0, Math.PI * 2);
          ctx.fill();
        }
      });

      ctx.globalCompositeOperation = "source-over";
      rafRef.current = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [theme, getColors]);

  return (
    <div
      className={["relative min-h-screen overflow-hidden", className].join(" ")}
    >
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* Clean Dual-Element Magnetic Cursor */}
      <InteractiveCursor />

      <div className="relative z-10">{children}</div>
    </div>
  );
}

// Modern Magnetic Dual-Element Cursor
function InteractiveCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100,
      mouseY = -100;
    let dotX = -100,
      dotY = -100;
    let ringX = -100,
      ringY = -100;
    let isHovering = false;
    let isClicking = false;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const target = e.target;
      const isInteractive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.tagName === "INPUT" ||
        target.closest("button") ||
        target.closest("a") ||
        target.getAttribute("role") === "button";

      isHovering = Boolean(isInteractive);
    };

    const handleMouseDown = () => {
      isClicking = true;
    };
    const handleMouseUp = () => {
      isClicking = false;
    };

    const animate = () => {
      // Snappy center dot
      dotX += (mouseX - dotX) * 0.4;
      dotY += (mouseY - dotY) * 0.4;
      dot.style.transform = `translate3d(${dotX - 3}px, ${dotY - 3}px, 0)`;

      // Fluid trailing ring with spring physics
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      const scale = isClicking ? 0.7 : isHovering ? 1.8 : 1.0;
      const ringSize = 36;
      ring.style.transform = `translate3d(${ringX - ringSize / 2}px, ${ringY - ringSize / 2}px, 0) scale(${scale})`;
      ring.style.borderColor = isHovering
        ? "rgba(255, 255, 255, 0.9)"
        : "rgba(255, 255, 255, 0.4)";

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    const raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-white mix-blend-difference pointer-events-none z-50 transition-opacity duration-300"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-white/40 mix-blend-difference pointer-events-none z-50 transition-transform duration-200 ease-out"
      />
    </>
  );
}
