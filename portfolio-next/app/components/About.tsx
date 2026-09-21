"use client";

import { motion } from "framer-motion";
import { useRef, useCallback } from "react";

function TiltCard({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const handleMouse = useCallback((e: React.MouseEvent) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(600px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale(1.02)`;
    }, []);
    const reset = useCallback(() => {
        if (ref.current) ref.current.style.transform = "perspective(600px) rotateY(0) rotateX(0) scale(1)";
    }, []);
    return (
        <div ref={ref} onMouseMove={handleMouse} onMouseLeave={reset} style={{ transition: "transform 0.4s cubic-bezier(0.23,1,0.32,1)" }}>
            {children}
        </div>
    );
}

const skills = [
    {
        title: "Analysis",
        tags: ["OpenFOAM", "ANSYS Fluent", "STAR-CCM+", "Maxsurf"],
        color: "var(--cy)",
    },
    {
        title: "Programming",
        tags: ["C / C++", "Python", "MATLAB", "Arduino"],
        color: "var(--or)",
    },
    {
        title: "Design & Modeling",
        tags: ["SolidWorks", "Rhinoceros 3D", "AutoCAD"],
        color: "var(--bl)",
    },
    {
        title: "Languages",
        tags: ["Turkish - Native", "English - Professional working proficiency", "German - B1 (telc)"],
        color: "var(--cy)",
    },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function About() {
    return (
        <section className="py-24 noise-overlay flex flex-col items-center w-full" id="about" style={{ background: "var(--bg2)", position: "relative", overflow: "hidden" }}>
            <div className="aurora-glow" style={{ top: "-10%", right: "10%", background: "radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 70%)" }} />
            <div className="aurora-glow" style={{ bottom: "-5%", left: "20%", background: "radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)", animationDelay: "6s" }} />

            <div className="max-w-[1160px] mx-auto px-8 relative z-10 flex flex-col items-center w-full">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="section-line mb-16 text-center w-full">
                    <h2 className="section-title">
                        About <span className="accent">Me</span>
                    </h2>
                </motion.div>

                {/* Bio */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } } }} className="mb-16 max-w-3xl w-full text-center">
                    <div>
                        <p style={{ fontFamily: "var(--fb)", fontSize: "0.95rem", color: "var(--t2)", lineHeight: 1.8 }}>
                            An innovation-driven young engineer who blends hands-on field experience with <span className="accent-cy">Computational Fluid Dynamics (CFD)</span>, <span className="accent-bl">Experimental Fluid Dynamics (EFD)</span>, and <span className="accent-or">software development</span>. I don't just analyze hydrodynamics and fluid mechanics problems on a screen; I validate them through active field tests and offer creative solutions by automating processes with my coding skills. Based on analytical thinking and rational data, I am an energetic team player who thinks outside the box and is eager to continuously learn. My goal is to create globally valuable engineering projects guided by science and data.
                        </p>
                    </div>
                </motion.div>

                {/* Skills grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl w-full">
                    {skills.map((group, gi) => (
                        <motion.div key={group.title} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
                            variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: gi * 0.1 } } }}>
                            <TiltCard>
                                <div className="glass-card" style={{ padding: "1.5rem", borderRadius: "var(--r)", height: "100%" }}>
                                    <div className="flex items-center justify-center gap-2 mb-3">
                                        <div style={{ width: "16px", height: "1px", background: group.color, opacity: 0.5 }} />
                                        <h3 style={{ fontFamily: "var(--fh)", fontSize: "0.85rem", fontWeight: 700, color: group.color, textTransform: "uppercase", letterSpacing: "1.5px" }}>{group.title}</h3>
                                        <div style={{ width: "16px", height: "1px", background: group.color, opacity: 0.5 }} />
                                    </div>
                                    <div className="flex flex-wrap justify-center gap-2" style={{ marginTop: "0.5rem" }}>
                                        {group.tags.map((tag) => (
                                            <span key={tag} style={{
                                                fontFamily: "var(--fb)", fontSize: "0.78rem", color: "var(--t2)", fontWeight: 500,
                                                padding: "0.3rem 0.75rem", border: "1px solid var(--bdr)", borderRadius: "6px",
                                                background: "rgba(255,255,255,0.03)", transition: "all 0.2s ease",
                                            }}
                                                onMouseEnter={(e) => { e.currentTarget.style.borderColor = group.color; e.currentTarget.style.color = group.color; }}
                                                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--bdr)"; e.currentTarget.style.color = "var(--t2)"; }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
