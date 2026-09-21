"use client";

import { useEffect, useState } from "react";

// Dark ocean theme by default; the light choice is stored and applied before paint by the script in layout.tsx.
export default function ThemeToggle() {
    const [light, setLight] = useState<boolean | null>(null);

    useEffect(() => {
        setLight(document.documentElement.getAttribute("data-theme") === "light");
    }, []);

    const toggle = () => {
        const next = !light;
        const root = document.documentElement;
        if (next) root.setAttribute("data-theme", "light");
        else root.removeAttribute("data-theme");
        try {
            localStorage.setItem("theme", next ? "light" : "dark");
        } catch {
            // Storage can be unavailable (private mode); the theme still applies for this page view.
        }
        setLight(next);
    };

    const label = light === null ? "Toggle colour theme" : light ? "Switch to dark theme" : "Switch to light theme";

    return (
        <button type="button" className="theme-toggle" onClick={toggle} aria-label={label} title={label}>
            {light ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7Z" />
                </svg>
            ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="4.2" />
                    <path d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" />
                </svg>
            )}
        </button>
    );
}
