import { experience } from "../data/cv";

export default function ExperienceSection() {
    return (
        <section id="experience" className="section" aria-labelledby="experience-title">
            <div className="container">
                <div className="section__head">
                    <p className="eyebrow">Experience</p>
                    <h2 id="experience-title" className="section__title">Research, laboratory and <span className="accent">shipyard work</span></h2>
                </div>

                <ol className="roles">
                    {experience.map((x) => (
                        <li key={x.role + x.org} className={`role glass reveal${x.current ? " role--current" : ""}`}>
                            <p className="role__when">
                                {x.period}
                                {x.employment && <span>{x.employment}</span>}
                            </p>
                            <div>
                                <h3 className="role__title">{x.role}</h3>
                                <p className="role__org">{x.orgUrl ? <a href={x.orgUrl}>{x.org} {"↗︎"}</a> : x.org}</p>
                                {x.context && <p className="role__context">{x.context}</p>}
                                <ul>
                                    {x.bullets.map((b) => <li key={b}>{b}</li>)}
                                </ul>
                                {x.vessels && (
                                    <div className="role__vessels" aria-label="Vessels">
                                        {x.vessels.map((v) => {
                                            const text = `${v.name}${v.type ? ` · ${v.type}` : ""}${v.imo ? ` · IMO ${v.imo}` : ""}`;
                                            return v.url
                                                ? <a key={v.name} href={v.url} className="tag">{text}</a>
                                                : <span key={v.name} className="tag">{text}</span>;
                                        })}
                                    </div>
                                )}
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
