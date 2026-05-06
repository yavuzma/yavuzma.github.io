"use client";

const TOOLS = [
    "OpenFOAM",
    "ANSYS Fluent",
    "STAR-CCM+",
    "Maxsurf",
    "Rhinoceros 3D",
    "SolidWorks",
    "AutoCAD",
    "Python",
    "MATLAB",
    "C / C++",
    "Arduino",
];

export default function ToolsMarquee() {
    const items = [...TOOLS, ...TOOLS];

    return (
        <section
            aria-label="Tools and software"
            className="relative overflow-hidden border-y"
            style={{
                background: "var(--bg)",
                borderColor: "rgba(148,163,184,0.08)",
                paddingBlock: "1.4rem",
            }}
        >
            <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-0 z-10"
                style={{
                    width: "120px",
                    background:
                        "linear-gradient(to right, var(--bg) 0%, transparent 100%)",
                }}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 right-0 z-10"
                style={{
                    width: "120px",
                    background:
                        "linear-gradient(to left, var(--bg) 0%, transparent 100%)",
                }}
            />

            <div
                className="flex whitespace-nowrap gap-12"
                style={{
                    width: "max-content",
                    animation: "toolsMarquee 38s linear infinite",
                    fontFamily: "var(--fm)",
                    fontSize: "0.78rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--t3)",
                }}
            >
                {items.map((label, i) => (
                    <div key={`${label}-${i}`} className="flex items-center gap-12 shrink-0">
                        <span style={{ color: "var(--t2)" }}>{label}</span>
                        <span aria-hidden style={{ color: "var(--cy)", opacity: 0.55 }}>◆</span>
                    </div>
                ))}
            </div>

            <style>{`
                @keyframes toolsMarquee {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                @media (prefers-reduced-motion: reduce) {
                    section [style*="toolsMarquee"] { animation: none !important; }
                }
            `}</style>
        </section>
    );
}
