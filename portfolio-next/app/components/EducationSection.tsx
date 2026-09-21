import CertificateDialog from "./CertificateDialog";
import { education, certifications, memberships, activities } from "../data/cv";

export default function EducationSection() {
    return (
        <section id="education" className="section" aria-labelledby="education-title">
            <div className="container">
                <div className="section__head">
                    <p className="eyebrow">Education</p>
                    <h2 id="education-title" className="section__title">Education and certifications</h2>
                </div>

                <div className="edu">
                    {education.map((e) => (
                        <article key={e.degree} className="card">
                            <h3>{e.degree}</h3>
                            <p className="card__sub">{e.school}</p>
                            <p className="card__meta">{e.period} · {e.location}</p>
                            <ul>
                                {e.details.map((d) => <li key={d}>{d}</li>)}
                            </ul>
                            {e.verify && (
                                <p className="card__meta" style={{ marginTop: "0.8rem" }}>
                                    Verification code {e.verify.code} · <a href={e.verify.url}>verify</a>
                                </p>
                            )}
                        </article>
                    ))}
                </div>

                <h3 className="sub-head">Certifications</h3>
                <ul className="cert-list">
                    {certifications.map((c) => (
                        <li key={c.name}>
                            <span>
                                <span className="cert-list__name">{c.name}</span>
                                <span className="cert-list__issuer">{c.issuer}{c.date && `, ${c.date}`}</span>
                            </span>
                            {c.url ? <a href={c.url}>Verify</a> : c.certificate ? <CertificateDialog certificate={c.certificate} /> : null}
                        </li>
                    ))}
                </ul>

                <h3 className="sub-head">Memberships and activities</h3>
                <p className="inline-list">
                    {memberships.map((m) => (
                        <span key={m.name}><a href={m.url}>{m.name}</a> ({m.full}), {m.role}. </span>
                    ))}
                    {activities.join(". ")}.
                </p>
            </div>
        </section>
    );
}
