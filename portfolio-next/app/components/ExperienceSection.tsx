import { experience } from "../data/cv";

export default function ExperienceSection() {
    return (
        <section id="experience" className="section" aria-labelledby="experience-title">
            <div className="container">
                <div className="section__head">
                    <p className="eyebrow">Experience</p>
                    <h2 id="experience-title" className="section__title">Research, laboratory and shipyard work</h2>
                </div>

                <ol className="roles">
                    {experience.map((x) => (
                        <li key={x.role + x.org} className="role">
                            <p className="role__when">
                                {x.period}
                                {x.employment && <><br />{x.employment}</>}
                            </p>
                            <div>
                                <h3 className="role__title">{x.role}</h3>
                                <p className="role__org">{x.orgUrl ? <a href={x.orgUrl}>{x.org}</a> : x.org}</p>
                                {x.context && <p className="role__context">{x.context}</p>}
                                <ul>
                                    {x.bullets.map((b) => <li key={b}>{b}</li>)}
                                </ul>
                                {x.vessels && (
                                    <p className="role__vessels">
                                        Vessels:{" "}
                                        {x.vessels.map((v, i) => (
                                            <span key={v.name}>
                                                {i > 0 && " · "}
                                                {v.url ? <a href={v.url}>{v.name}</a> : v.name}
                                                {v.type && ` (${v.type})`}
                                                {v.imo && ` IMO ${v.imo}`}
                                            </span>
                                        ))}
                                    </p>
                                )}
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
