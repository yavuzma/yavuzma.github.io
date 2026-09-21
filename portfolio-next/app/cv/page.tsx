import type { Metadata } from "next";
import Link from "next/link";
import { profile, education, experience, skills, languages, certifications, memberships, activities, interests, cvHref, cvFileName } from "../data/cv";
import { projects } from "../data/projects";

// HTML version of the CV. It reads the same data as the PDF (app/data/cv.ts), so the two cannot drift apart.

export const metadata: Metadata = {
    title: `CV - ${profile.name}`,
    description: `CV of ${profile.name}, ${profile.title}.`,
    alternates: { canonical: "/cv/" },
};

const CV_PROJECTS = ["kcs", "darpa", "tcsg", "alicat"];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="cv-section">
            <h2>{title}</h2>
            {children}
        </section>
    );
}

export default function CVPage() {
    const cvProjects = CV_PROJECTS.map((id) => projects.find((p) => p.id === id)).filter((p) => p !== undefined);

    return (
        <main className="cv-page">
            <nav className="cv-actions" aria-label="CV actions">
                <Link href="/">← {profile.website.label}</Link>
                <a href={cvHref} download={cvFileName} className="cv-download">Download PDF</a>
            </nav>

            <article className="cv-sheet">
                <header>
                    <h1>{profile.name}</h1>
                    <p className="cv-title">{profile.title}</p>
                    <p className="cv-contact">
                        <a href={`mailto:${profile.email}`}>{profile.email}</a> · <a href={profile.linkedin.url}>{profile.linkedin.label}</a> · <a href={profile.github.url}>{profile.github.label}</a>
                    </p>
                    <p className="cv-contact">{profile.location} · {profile.availability}</p>
                </header>

                <Section title="Education">
                    {education.map((e) => (
                        <div key={e.degree} className="cv-entry">
                            <div className="cv-row">
                                <h3>{e.degree}<span>, {e.school}</span></h3>
                                <span className="cv-date">{e.period}</span>
                            </div>
                            <p>{e.details.join(" · ")}</p>
                        </div>
                    ))}
                </Section>

                <Section title="Experience">
                    {experience.map((x) => (
                        <div key={x.role + x.org} className="cv-entry">
                            <div className="cv-row">
                                <h3>{x.role}<span>, {x.org}</span></h3>
                                <span className="cv-date">{x.employment ? `${x.period} · ${x.employment}` : x.period}</span>
                            </div>
                            {x.cvNote && <p className="cv-note">{x.cvNote}</p>}
                            <ul>{(x.cvBullets ?? x.bullets).map((b) => <li key={b}>{b}</li>)}</ul>
                        </div>
                    ))}
                </Section>

                <Section title="Projects">
                    {cvProjects.map((p) => (
                        <div key={p.id} className="cv-entry">
                            <h3><Link href={`/work/${p.id}/`}>{p.cv.title}</Link></h3>
                            <p>{p.cv.line}</p>
                        </div>
                    ))}
                </Section>

                <Section title="Skills, certifications and interests">
                    {skills.map((g) => <p key={g.label}><strong>{g.label}:</strong> {g.items.join(", ")}</p>)}
                    <p><strong>Languages:</strong> {languages.map((l) => `${l.name}: ${l.level}`).join("; ")}</p>
                    <p><strong>Certifications:</strong> {certifications.map((c) => c.short).join("; ")}</p>
                    <p><strong>Memberships and activities:</strong> {[...memberships.map((m) => `${m.name} (${m.role})`), ...activities].join("; ")}</p>
                    <p><strong>Interests:</strong> {interests.join(", ")}</p>
                </Section>
            </article>
        </main>
    );
}
