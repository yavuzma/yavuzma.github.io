"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { setLenisInstance } from "../lib/lenis";

export default function SmoothScroll() {
    const rafRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        // Skip on devices that prefer reduced motion or coarse pointers (touch)
        const prefersReduced =
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const isTouch =
            typeof window !== "undefined" &&
            window.matchMedia("(hover: none) and (pointer: coarse)").matches;
        if (prefersReduced || isTouch) return;

        const lenis = new Lenis({
            duration: 1.15,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            wheelMultiplier: 1,
            touchMultiplier: 1.5,
            orientation: "vertical",
            gestureOrientation: "vertical",
        });

        setLenisInstance(lenis);

        const raf = (time: number) => {
            lenis.raf(time);
            rafRef.current = requestAnimationFrame(raf);
        };
        rafRef.current = requestAnimationFrame(raf);

        return () => {
            if (rafRef.current !== undefined) cancelAnimationFrame(rafRef.current);
            setLenisInstance(null);
            lenis.destroy();
        };
    }, []);

    return null;
}
