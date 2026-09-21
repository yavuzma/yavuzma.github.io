import Link from "next/link";
import { profile, cvHref, cvFileName } from "../data/cv";

export default function ContactSection() {
    return (
        <section id="contact" className="section" aria-labelledby="contact-title">
            <div className="container contact">
                <div>
                    <div className="section__head">
                        <p className="eyebrow">Contact</p>
                        <h2 id="contact-title" className="section__title">Get in touch</h2>
                    </div>
                    <p className="contact__lead">
                        Open to research and engineering opportunities.
                    </p>
                </div>

                <dl className="kv">
                    <div>
                        <dt>Email</dt>
                        <dd><a href={`mailto:${profile.email}`}>{profile.email}</a></dd>
                    </div>
                    <div>
                        <dt>LinkedIn</dt>
                        <dd><a href={profile.linkedin.url}>{profile.linkedin.label}</a></dd>
                    </div>
                    <div>
                        <dt>GitHub</dt>
                        <dd><a href={profile.github.url}>{profile.github.label}</a></dd>
                    </div>
                    <div>
                        <dt>Location</dt>
                        <dd>{profile.location}</dd>
                    </div>
                    <div>
                        <dt>CV</dt>
                        <dd><a href={cvHref} download={cvFileName}>PDF</a> · <Link href="/cv/">web version</Link></dd>
                    </div>
                    <div>
                        <dt>References</dt>
                        <dd>Academic and professional references are available on request.</dd>
                    </div>
                </dl>
            </div>
        </section>
    );
}
