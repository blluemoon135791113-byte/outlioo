"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

export const BackgroundBeams = ({ className }: { className?: string }) => {
    const beamsRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = beamsRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        const paths: {
            coordinate: number;
            y: number;
            length: number;
            speed: number;
            opacity: number;
        }[] = [];

        const init = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;

            // Initialize paths
            const totalPaths = 20;
            for (let i = 0; i < totalPaths; i++) {
                paths.push({
                    coordinate: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    length: Math.random() * 200 + 100,
                    speed: Math.random() * 1 + 0.5,
                    opacity: Math.random() * 0.5 + 0.1,
                });
            }
        };

        const draw = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            paths.forEach((path) => {
                // Update position
                path.y += path.speed;
                if (path.y > canvas.height) {
                    path.y = -path.length;
                    path.coordinate = Math.random() * canvas.width;
                }

                // Draw beam
                const gradient = ctx.createLinearGradient(
                    path.coordinate,
                    path.y,
                    path.coordinate,
                    path.y + path.length
                );
                gradient.addColorStop(0, "rgba(255, 107, 157, 0)"); // Vibrant coral-pink fade
                gradient.addColorStop(0.5, `rgba(255, 107, 157, ${path.opacity})`); // Premium pink
                gradient.addColorStop(1, "rgba(255, 107, 157, 0)");

                ctx.strokeStyle = gradient;
                ctx.lineWidth = 2; // Thicker beams
                ctx.beginPath();
                ctx.moveTo(path.coordinate, path.y);
                ctx.lineTo(path.coordinate, path.y + path.length);
                ctx.stroke();
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        init();
        draw();

        const handleResize = () => {
            init();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div
            className={cn(
                "absolute inset-0 h-full w-full bg-transparent pointer-events-none opacity-40",
                className
            )}
        >
            <canvas ref={beamsRef} className="h-full w-full" />
        </div>
    );
};
