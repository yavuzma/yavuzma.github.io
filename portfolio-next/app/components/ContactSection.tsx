import Link from "next/link";
import { profile, cvHref, cvFileName } from "../data/cv";

export default function ContactSection() {
    const items = [
        { label: "Email", value: <a href={`mailto:${profile.email}`}>{profile.email}</a> },
        { label: "LinkedIn", value: <a href={profile.linkedin.url}>{profile.linkedin.label}</a> },
        { label: "GitHub", value: <a href={profile.github.url}>{profile.github.label}</a> },
        { label: "Location", value: profile.location },
        { label: "CV", value: <><a href={cvHref} download={cvFileName}>PDF</a> · <Link href="/cv/">web version</Link></> },
        { label: "References", value: "Academic and professional references are available on request." },
    ];

    return (
        <section id="contact" className="section section--alt noise" aria-labelledby="contact-title">
            <div className="container">
                <div className="section__head">
                    <h2 id="contact-title" className="section__title">Get in <span className="accent">touch</span></h2>
                </div>
                <p className="contact-lead">Open to research and engineering opportunities.</p>

                <dl className="contact-grid">
                    {items.map((i) => (
                        <div key={i.label} className="contact-card glass shine lift reveal">
                            <dt>{i.label}</dt>
                            <dd>{i.value}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}
