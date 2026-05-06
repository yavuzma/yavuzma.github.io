"use client";

import { useEffect, useRef } from "react";

type Props = {
    color?: string;
    size?: number;
    opacity?: number;
};

export default function Spotlight({ color = "rgba(34, 211, 238, 0.18)", size = 600, opacity = 1 }: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const targetRef = useRef({ x: 0, y: 0 });
    const currentRef = useRef({ x: 0, y: 0 });
    const rafRef = useRef<number | undefined>(undefined);
    const visibleRef = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const parent = el.parentElement;
        if (!parent) return;

        const onMove = (e: MouseEvent) => {
            const rect = parent.getBoundingClientRect();
            targetRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            };
            if (!visibleRef.current) {
                currentRef.current = { ...targetRef.current };
                visibleRef.current = true;
                el.style.opacity = String(opacity);
            }
        };

        const onLeave = () => {
            visibleRef.current = false;
            el.style.opacity = "0";
        };

        const tick = () => {
            const lerp = 0.18;
            currentRef.current.x += (targetRef.current.x - currentRef.current.x) * lerp;
            currentRef.current.y += (targetRef.current.y - currentRef.current.y) * lerp;
            el.style.transform = `translate3d(${currentRef.current.x - size / 2}px, ${currentRef.current.y - size / 2}px, 0)`;
            rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);

        parent.addEventListener("mousemove", onMove);
        parent.addEventListener("mouseleave", onLeave);

        return () => {
            parent.removeEventListener("mousemove", onMove);
            parent.removeEventListener("mouseleave", onLeave);
            if (rafRef.current !== undefined) cancelAnimationFrame(rafRef.current);
        };
    }, [size, opacity]);

    return (
        <div
            ref={ref}
            aria-hidden
            className="absolute pointer-events-none"
            style={{
                width: size,
                height: size,
                left: 0,
                top: 0,
                opacity: 0,
                transition: "opacity 0.4s ease",
                background: `radial-gradient(circle at center, ${color} 0%, transparent 60%)`,
                mixBlendMode: "screen",
                zIndex: 1,
                willChange: "transform, opacity",
            }}
        />
    );
}
