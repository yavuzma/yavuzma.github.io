import Link from "next/link";
import DownloadCVButton from "./DownloadCVButton";
import { profile } from "../data/cv";

export default function Hero() {
    return (
        <section className="hero" aria-labelledby="hero-name">
            <div className="container hero__grid">
                <div>
                    <p className="hero__meta">B.Sc. Shipbuilding and Ocean Engineering, ITU · b. {profile.born}</p>
                    <h1 id="hero-name" className="hero__name">{profile.name}</h1>
                    <p className="hero__title">{profile.title}</p>
                    <p className="hero__lede">
                        I study marine hydrodynamics through CFD, compare the results with experiments, and build Python tools that automate laboratory tests.
                    </p>
                    <ul className="hero__status">
                        <li>Research trainee at CENTEC, Instituto Superior Técnico</li>
                        <li>{profile.location}</li>
                        <li>{profile.availability}</li>
                    </ul>
                    <div className="hero__actions">
                        <a className="btn btn--primary" href="#work">Projects</a>
                        <DownloadCVButton className="btn btn--ghost" />
                    </div>
                </div>

                <figure className="figure">
                    <div className="figure__frame">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/images/projects/kcs_hull_with_rudder/3.png"
                            alt="Contour plot of free-surface elevation around the KCS hull"
                            width={891}
                            height={638}
                            fetchPriority="high"
                        />
                    </div>
                    <figcaption>
                        KCS container ship with rudder: Kelvin wake resolved as free-surface elevation in an unsteady RANS + VOF simulation (STAR-CCM+, run 3).{" "}
                        <Link href="/work/kcs/">Read the case study</Link>
                    </figcaption>
                </figure>
            </div>
        </section>
    );
}
