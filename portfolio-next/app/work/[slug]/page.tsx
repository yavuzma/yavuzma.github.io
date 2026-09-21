import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import ProjectSections from "../../components/ProjectSections";
import { projects } from "../../data/projects";

export const dynamicParams = false;

export function generateStaticParams() {
    return projects.map((p) => ({ slug: p.id }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.id === slug);
    if (!project) return {};
    return {
        title: project.title,
        description: project.shortDesc,
        alternates: { canonical: `/work/${project.id}/` },
        openGraph: {
            type: "article",
            url: `/work/${project.id}/`,
            title: project.title,
            description: project.shortDesc,
            images: [{ url: project.image, alt: project.imageAlt }],
        },
    };
}

export default async function WorkPage({ params }: Params) {
    const { slug } = await params;
    const index = projects.findIndex((p) => p.id === slug);
    if (index < 0) notFound();
    const project = projects[index];
    const prev = projects[(index - 1 + projects.length) % projects.length];
    const next = projects[(index + 1) % projects.length];
    const meta = project.modal.meta?.map((m) => m.text).join(" · ");

    return (
        <>
            <SiteHeader />
            <main id="main" className="case">
                <article className="container">
                    <p className="breadcrumb"><Link href="/#work">← All projects</Link></p>

                    <header className="case__header">
                        <p className="case__tag">{project.modal.badge}{meta && ` · ${meta}`}</p>
                        <h1 className="case__title">{project.title}</h1>
                        {project.modal.subtitle && <p className="case__subtitle">{project.modal.subtitle}</p>}
                        {project.context && <p className="case__context">{project.context}</p>}
                        <dl className="facts">
                            {project.metrics.map((m) => (
                                <div key={m.label}>
                                    <dt>{m.label}</dt>
                                    <dd>{m.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </header>

                    <figure className="figure case__figure">
                        <div className="figure__frame">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={project.image} alt={project.imageAlt} fetchPriority="high" />
                        </div>
                        {project.imageCaption && <figcaption>{project.imageCaption}</figcaption>}
                    </figure>

                    <div className="case__body">
                        <div className="case__main">
                            <ProjectSections project={project} />
                            {project.limitations && (
                                <section aria-label="Limitations" className="case__limits">
                                    <h2>Limitations</h2>
                                    <ul>{project.limitations.map((l) => <li key={l}>{l}</li>)}</ul>
                                </section>
                            )}
                        </div>

                        <aside className="case__aside" aria-label="Summary">
                            {project.modal.sidebarSections.map((s) => (
                                <section key={s.title} aria-label={s.title}>
                                    <h2>{s.title}</h2>
                                    <ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
                                </section>
                            ))}
                        </aside>
                    </div>

                    <nav className="case__nav" aria-label="More projects">
                        <Link href={`/work/${prev.id}/`}>← {prev.title}</Link>
                        <Link href={`/work/${next.id}/`}>{next.title} →</Link>
                    </nav>
                </article>
            </main>
            <SiteFooter />
        </>
    );
}
