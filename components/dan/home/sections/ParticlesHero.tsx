"use client";

import React, {useEffect, useRef, useState} from "react";
import {cn} from "@/lib/cn";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  return reduced;
}

export default function ParticlesHero({className}: {className?: string}) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;
    const canvas = ref.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const DPR = Math.min(2, window.devicePixelRatio || 1);

    const rand = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      w = parent.clientWidth;
      h = parent.clientHeight;
      canvas.width = Math.floor(w * DPR);
      canvas.height = Math.floor(h * DPR);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const count = Math.floor(Math.max(70, (w * h) / 22000));
    const particles = new Array(count).fill(0).map(() => ({
      x: rand(0, 1),
      y: rand(0, 1),
      r: rand(0.6, 2.2),
      vx: rand(-0.08, 0.08),
      vy: rand(-0.05, 0.05),
      a: rand(0.18, 0.55),
    }));

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      const g = ctx.createRadialGradient(
        w * 0.5,
        h * 0.35,
        0,
        w * 0.5,
        h * 0.5,
        Math.max(w, h)
      );
      g.addColorStop(0, "rgba(0,0,0,0.0)");
      g.addColorStop(1, "rgba(0,0,0,0.85)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx / 60;
        p.y += p.vy / 60;
        if (p.x < -0.1) p.x = 1.1;
        if (p.x > 1.1) p.x = -0.1;
        if (p.y < -0.1) p.y = 1.1;
        if (p.y > 1.1) p.y = -0.1;

        const x = p.x * w;
        const y = p.y * h;

        const glow = ctx.createRadialGradient(x, y, 0, x, y, 18);
        glow.addColorStop(0, `rgba(255,255,255,${p.a})`);
        glow.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      const lg = ctx.createLinearGradient(0, h * 0.85, w, h * 0.2);
      lg.addColorStop(0, "rgba(255,20,20,0.00)");
      lg.addColorStop(0.35, "rgba(255,20,20,0.12)");
      lg.addColorStop(0.65, "rgba(255,215,90,0.10)");
      lg.addColorStop(1, "rgba(255,215,90,0.00)");
      ctx.fillStyle = lg;
      ctx.fillRect(0, 0, w, h);

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, [prefersReduced]);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className={cn("absolute inset-0 h-full w-full", className)}
    />
  );
}
