import Link from "next/link";
import { projects, type Project } from "../data/projects";

const FEATURED = ["darpa", "kcs", "tcsg"];
const MORE = ["alicat", "offshore"];

const pick = (ids: string[]) => ids.map((id) => projects.find((p) => p.id === id)).filter((p): p is Project => p !== undefined);

export default function SelectedWork() {
    return (
        <section id="work" className="section section--alt noise" aria-labelledby="work-title">
            <div className="container">
                <div className="section__head">
                    <p className="eyebrow">Projects</p>
                    <h2 id="work-title" className="section__title">CFD, ship design and <span className="accent">engineering software</span></h2>
                </div>

                <div className="work-list">
                    {pick(FEATURED).map((p) => (
                        <article key={p.id} className="work-item glass shine lift reveal">
                            <Link href={`/work/${p.id}/`} className={`work-item__media${p.imageStyle?.includes("contain") ? " work-item__media--contain" : ""}`} tabIndex={-1} aria-hidden="true">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={p.image} alt="" loading="lazy" decoding="async" />
                            </Link>
                            <div className="work-item__body">
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                                    {p.badge.split("·").map((t) => <span key={t} className="tag">{t.trim()}</span>)}
                                </div>
                                <h3 className="work-item__title"><Link href={`/work/${p.id}/`}>{p.title}</Link></h3>
                                <p className="work-item__desc">{p.shortDesc}</p>
                                <dl className="facts">
                                    {p.metrics.map((m) => (
                                        <div key={m.label}>
                                            <dt>{m.label}</dt>
                                            <dd>{m.value}</dd>
                                        </div>
                                    ))}
                                </dl>
                                <Link href={`/work/${p.id}/`} className="read-more">Read case study →</Link>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="work-more">
                    {pick(MORE).map((p) => (
                        <Link key={p.id} href={`/work/${p.id}/`} className="work-more__item glass shine lift reveal">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={p.image} alt="" loading="lazy" decoding="async" />
                            <div>
                                <h3>{p.title}</h3>
                                <p>{p.shortDesc}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
