// src/components/effects/AuroraBackground.jsx
import { useRef, useEffect, useCallback } from "react";
import { useTheme } from "../../context/ThemeContext";

/**
 * Interactive mesh-gradient aurora background.
 * Uses the theme's gradient colors and responds to mouse movement.
 *
 * SOLID: Single Responsibility — only renders the background effect.
 *        Open/Closed — accepts intensity, speed, blobCount props.
 */
export default function AuroraBackground({
  intensity = 0.6, // opacity of the effect
  speed = 0.0003, // drift speed
  blobCount = 4, // number of color blobs
  className = "",
  children,
}) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const blobsRef = useRef([]);
  const rafRef = useRef(null);
  const { theme } = useTheme();

  // Parse hex colors from theme
  const getColors = useCallback(() => {
    const colors = theme.gradients.colors || [];
    // Fallback if colors array is missing
    if (colors.length === 0) {
      return theme.isDark
        ? ["#111827", "#072c73", "#3d33bf", "#9400ff"]
        : ["#d1d5db", "#a9b7f1", "#9f8efd", "#a855f7"];
    }
    return colors;
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width, height;

    // Initialize blobs
    const initBlobs = () => {
      const colors = getColors();
      blobsRef.current = Array.from({ length: blobCount }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.min(width, height) * (0.3 + Math.random() * 0.3),
        color: colors[i % colors.length],
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      initBlobs();
    };

    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: e.clientX / width,
        y: e.clientY / height,
      };
    };

    const animate = (time) => {
      ctx.clearRect(0, 0, width, height);

      // Fill base background
      ctx.fillStyle = theme.isDark ? "#111827" : "#f9fafb";
      ctx.fillRect(0, 0, width, height);

      const mouse = mouseRef.current;
      const colors = getColors();

      blobsRef.current.forEach((blob, i) => {
        // Mouse influence: blobs are gently pulled toward cursor
        const targetX =
          width * mouse.x + Math.sin(time * speed + blob.phase) * width * 0.15;
        const targetY =
          height * mouse.y +
          Math.cos(time * speed + blob.phase) * height * 0.15;

        blob.x += (targetX - blob.x) * 0.008 + blob.vx;
        blob.y += (targetY - blob.y) * 0.008 + blob.vy;

        // Gentle drift
        blob.x += Math.sin(time * speed + blob.phase) * 0.2;
        blob.y += Math.cos(time * speed + blob.phase * 1.3) * 0.2;

        // Wrap around edges
        if (blob.x < -blob.radius) blob.x = width + blob.radius;
        if (blob.x > width + blob.radius) blob.x = -blob.radius;
        if (blob.y < -blob.radius) blob.y = height + blob.radius;
        if (blob.y > height + blob.radius) blob.y = -blob.radius;

        // Draw blob
        const gradient = ctx.createRadialGradient(
          blob.x,
          blob.y,
          0,
          blob.x,
          blob.y,
          blob.radius,
        );
        gradient.addColorStop(
          0,
          blob.color +
            Math.round(intensity * 255)
              .toString(16)
              .padStart(2, "0"),
        );
        gradient.addColorStop(
          0.5,
          blob.color +
            Math.round(intensity * 0.5 * 255)
              .toString(16)
              .padStart(2, "0"),
        );
        gradient.addColorStop(1, blob.color + "00");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      });

      // Add noise texture overlay for that grainy look
      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const noise = (Math.random() - 0.5) * 8;
        data[i] += noise;
        data[i + 1] += noise;
        data[i + 2] += noise;
      }
      ctx.putImageData(imageData, 0, 0);

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
  }, [theme, getColors, intensity, speed, blobCount]);

  return (
    <div className={["relative overflow-hidden", className].join(" ")}>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
