"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import type { ProjectRun } from "../data/projects";

// Tabs over precomputed runs: switching a tab swaps the result image and that run's numbers.
export default function RunViewer({ runs }: { runs: ProjectRun[] }) {
    const [active, setActive] = useState(0);
    const tabs = useRef<(HTMLButtonElement | null)[]>([]);
    const run = runs[active];

    const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
        if (!step) return;
        e.preventDefault();
        const next = (active + step + runs.length) % runs.length;
        setActive(next);
        tabs.current[next]?.focus();
    };

    return (
        <div>
            <div role="tablist" aria-label="Simulation runs" className="runs__tabs" onKeyDown={onKeyDown}>
                {runs.map((r, i) => (
                    <button
                        key={r.label}
                        ref={(el) => { tabs.current[i] = el; }}
                        type="button"
                        role="tab"
                        id={`run-tab-${i}`}
                        aria-selected={i === active}
                        aria-controls="run-panel"
                        tabIndex={i === active ? 0 : -1}
                        className="runs__tab"
                        onClick={() => setActive(i)}
                    >
                        {r.label}
                    </button>
                ))}
            </div>

            <div role="tabpanel" id="run-panel" aria-labelledby={`run-tab-${active}`} className="runs__panel">
                <dl className="runs__stats">
                    <div><dt>Turbulence model</dt><dd>{run.turbulence}</dd></div>
                    <div><dt>Mesh</dt><dd>{run.mesh}</dd></div>
                    <div><dt>Time step</dt><dd>{run.timeStep}</dd></div>
                    <div><dt>Drag</dt><dd>{run.drag}</dd></div>
                    <div><dt>C<sub>T</sub></dt><dd>{run.ct}</dd></div>
                    <div><dt>Deviation from EFD</dt><dd>{run.deviation}</dd></div>
                </dl>
                <div className="figure__frame">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={run.image} alt={`Free-surface elevation contours around the hull, ${run.label.toLowerCase()}`} loading="lazy" decoding="async" />
                </div>
                <p className="runs__note">
                    Precomputed results from the five STAR-CCM+ runs; contours show free-surface elevation in metres.
                </p>
            </div>
        </div>
    );
}
