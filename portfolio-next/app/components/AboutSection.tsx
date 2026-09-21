import { profile, skills, languages } from "../data/cv";

export default function AboutSection() {
    return (
        <section id="about" className="section" aria-labelledby="about-title">
            <div className="container">
                <div className="section__head">
                    <p className="eyebrow">About</p>
                    <h2 id="about-title" className="section__title">What I work on</h2>
                </div>

                <div className="about">
                    <div className="about__text">
                        <p>{profile.summary}</p>
                    </div>

                    <dl className="kv">
                        {skills.map((g) => (
                            <div key={g.label}>
                                <dt>{g.label}</dt>
                                <dd>{g.items.join(", ")}</dd>
                            </div>
                        ))}
                        <div>
                            <dt>Languages</dt>
                            <dd>{languages.map((l) => `${l.name}: ${l.level}`).join("; ")}</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </section>
    );
}
