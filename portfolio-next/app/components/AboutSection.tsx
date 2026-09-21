import { profile, skills, languages } from "../data/cv";

export default function AboutSection() {
    const groups = [
        ...skills,
        { label: "Languages", items: languages.map((l) => `${l.name} - ${l.level}`) },
    ];

    return (
        <section id="about" className="section section--alt noise" aria-labelledby="about-title">
            <div className="container">
                <div className="section__head">
                    <h2 id="about-title" className="section__title">About <span className="accent">me</span></h2>
                </div>

                <div className="about">
                    <div className="about__text glass reveal">
                        <p>{profile.summary}</p>
                    </div>

                    <div className="skill-grid">
                        {groups.map((g) => (
                            <div key={g.label} className="skill glass shine lift reveal">
                                <h3>{g.label}</h3>
                                <div className="skill__tags">
                                    {g.items.map((i) => <span key={i} className="tag">{i}</span>)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
