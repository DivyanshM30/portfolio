'use client';

import { useRef, useEffect, useCallback } from 'react';
import { useTheme } from './ThemeProvider';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    baseRadius: number;
}

export default function ParticleCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const animationIdRef = useRef<number | null>(null);
    const { theme } = useTheme();

    const setupCanvas = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return { width: 0, height: 0 };

        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
        return { width: canvas.width, height: canvas.height };
    }, []);

    const createParticles = useCallback((width: number, height: number) => {
        const particles: Particle[] = [];
        const particleCount = Math.floor((width * height) / 15000);

        for (let i = 0; i < particleCount; i++) {
            const baseRadius = 1 + Math.random() * 1.5;
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                radius: baseRadius,
                baseRadius: baseRadius,
            });
        }

        particlesRef.current = particles;
    }, []);

    const update = useCallback((width: number, height: number) => {
        const particles = particlesRef.current;
        const mouse = mouseRef.current;

        particles.forEach((particle) => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Bounce off edges
            if (particle.x < 0 || particle.x > width) {
                particle.vx *= -1;
                particle.x = Math.max(0, Math.min(width, particle.x));
            }
            if (particle.y < 0 || particle.y > height) {
                particle.vy *= -1;
                particle.y = Math.max(0, Math.min(height, particle.y));
            }

            // Mouse interaction - particles react to mouse
            const dx = mouse.x - particle.x;
            const dy = mouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                const force = (100 - distance) / 100;
                particle.vx -= (dx / distance) * force * 0.05;
                particle.vy -= (dy / distance) * force * 0.05;
                particle.radius = particle.baseRadius * (1 + force * 0.5);
            } else {
                particle.radius = particle.baseRadius;
            }

            // Reduced damping for faster, more continuous movement
            particle.vx *= 0.998;
            particle.vy *= 0.998;
        });
    }, []);

    const draw = useCallback(
        (ctx: CanvasRenderingContext2D, width: number, height: number) => {
            const particles = particlesRef.current;
            const mouse = mouseRef.current;
            const isDark = theme === 'dark';

            // Clear canvas completely each frame
            ctx.fillStyle = isDark ? '#0a0a0a' : '#ffffff';
            ctx.fillRect(0, 0, width, height);

            // Get colors based on theme - increased opacity for light mode visibility
            const lineColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.15)';
            const particleColor = isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.25)';
            const mouseLineColor = isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.2)';

            // Draw connections between particles
            ctx.strokeStyle = lineColor;
            const maxDistance = 120;

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        const baseOpacity = isDark ? 0.3 : 0.4;
                        const opacity = (1 - distance / maxDistance) * baseOpacity;
                        ctx.globalAlpha = opacity;
                        ctx.lineWidth = isDark ? 0.5 : 0.7;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }

                // Draw connections to mouse
                if (mouse.x > 0 && mouse.y > 0) {
                    const dx = mouse.x - particles[i].x;
                    const dy = mouse.y - particles[i].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        const baseOpacity = isDark ? 0.2 : 0.3;
                        const opacity = (1 - distance / 150) * baseOpacity;
                        ctx.strokeStyle = mouseLineColor;
                        ctx.globalAlpha = opacity;
                        ctx.lineWidth = isDark ? 0.5 : 0.7;
                        ctx.beginPath();
                        ctx.moveTo(mouse.x, mouse.y);
                        ctx.lineTo(particles[i].x, particles[i].y);
                        ctx.stroke();
                    }
                }
            }

            // Draw particles
            ctx.fillStyle = particleColor;
            ctx.globalAlpha = 1;
            particles.forEach((particle) => {
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            // Draw mouse particle
            if (mouse.x > 0 && mouse.y > 0) {
                ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.15)';
                ctx.beginPath();
                ctx.arc(mouse.x, mouse.y, isDark ? 3 : 4, 0, Math.PI * 2);
                ctx.fill();
            }
        },
        [theme]
    );

    const animate = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        update(canvas.width, canvas.height);
        draw(ctx, canvas.width, canvas.height);
        animationIdRef.current = requestAnimationFrame(animate);
    }, [update, draw]);

    // Initialize and start animation
    useEffect(() => {
        const { width, height } = setupCanvas();
        if (width > 0 && height > 0) {
            createParticles(width, height);
            animate();
        }

        return () => {
            if (animationIdRef.current) {
                cancelAnimationFrame(animationIdRef.current);
            }
        };
    }, [setupCanvas, createParticles, animate]);

    // Handle resize
    useEffect(() => {
        const handleResize = () => {
            const { width, height } = setupCanvas();
            if (width > 0 && height > 0) {
                createParticles(width, height);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [setupCanvas, createParticles]);

    // Mouse event handlers
    const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const rect = canvas.getBoundingClientRect();
        mouseRef.current.x = e.clientX - rect.left;
        mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
        mouseRef.current.x = -1000;
        mouseRef.current.y = -1000;
    };

    return (
        <canvas
            ref={canvasRef}
            id="networkCanvas"
            className="network-canvas"
            style={{ pointerEvents: 'auto' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        />
    );
}
