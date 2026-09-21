import { profile, skills, languages } from "../data/cv";

export default function AboutSection() {
    return (
        <section id="about" className="section section--alt noise" aria-labelledby="about-title">
            <div className="container">
                <div className="section__head">
                    <p className="eyebrow">About</p>
                    <h2 id="about-title" className="section__title">About <span className="accent">me</span></h2>
                </div>

                <div className="about">
                    <div className="about__text glass reveal">
                        <p>{profile.summary}</p>
                    </div>

                    <div className="skill-grid">
                        {skills.map((g) => (
                            <div key={g.label} className="skill glass shine reveal">
                                <h3>{g.label}</h3>
                                <div className="skill__tags">
                                    {g.items.map((i) => <span key={i} className="tag">{i}</span>)}
                                </div>
                            </div>
                        ))}
                        <div className="skill glass shine reveal">
                            <h3>Languages</h3>
                            <div className="skill__tags">
                                {languages.map((l) => <span key={l.name} className="tag">{l.name}: {l.level}</span>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
