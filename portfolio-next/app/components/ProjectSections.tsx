import RunViewer from "./RunViewer";
import type { Project, ProjectModalSection } from "../data/projects";

// Renders a project's content sections on its case study page.
function Section({ section, project }: { section: ProjectModalSection; project: Project }) {
    switch (section.type) {
        case "text":
            return <>{section.content?.map((c) => <p key={c}>{c}</p>)}</>;

        case "list":
            return <ul className="bullets">{section.items?.map((i) => <li key={i}>{i}</li>)}</ul>;

        case "specs":
            return (
                <dl className="spec-list">
                    {section.specs?.map((s) => (
                        <div key={s.label}>
                            <dt>{s.label}</dt>
                            <dd>{s.value}</dd>
                        </div>
                    ))}
                </dl>
            );

        case "data-table": {
            const pairs = (section.dataTable?.rows ?? []).flatMap((r) => [
                { label: r.th, value: r.td },
                ...(r.th2 && r.td2 ? [{ label: r.th2, value: r.td2 }] : []),
            ]);
            return (
                <dl className="spec-list">
                    {pairs.map((p) => (
                        <div key={p.label}>
                            <dt>{p.label}</dt>
                            <dd>{p.value}</dd>
                        </div>
                    ))}
                </dl>
            );
        }

        case "table":
            return (
                <div className="table-wrap">
                    <table className="data-table">
                        <thead>
                            <tr>{section.table?.headers.map((h) => <th key={h} scope="col">{h}</th>)}</tr>
                        </thead>
                        <tbody>
                            {section.table?.rows.map((r) => (
                                <tr key={r.cells.join("|")}>
                                    {r.cells.map((c, i) => <td key={i}>{c}</td>)}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );

        case "gallery":
            return (
                <div className={`gallery${(section.gallery?.length ?? 0) > 1 ? " gallery--multi" : ""}`}>
                    {section.gallery?.map((g) => (
                        <figure key={g.src} className="figure">
                            <div className="figure__frame">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={g.src} alt={g.alt} loading="lazy" decoding="async" />
                            </div>
                            <figcaption>{g.caption}</figcaption>
                        </figure>
                    ))}
                </div>
            );

        case "runs":
            return project.runs ? <RunViewer runs={project.runs} /> : null;
    }
}

export default function ProjectSections({ project }: { project: Project }) {
    return (
        <>
            {project.modal.mainSections.map((s) => (
                <section key={s.title} aria-label={s.title}>
                    <h2>{s.title}</h2>
                    <Section section={s} project={project} />
                </section>
            ))}
        </>
    );
}
