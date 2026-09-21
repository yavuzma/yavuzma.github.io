import DownloadCVButton from "./DownloadCVButton";
import { profile } from "../data/cv";

export default function Hero() {
    return (
        <section className="hero hero--centered noise" aria-labelledby="hero-name">
            <div className="aurora" style={{ top: "-18%", left: "10%", background: "radial-gradient(circle, rgba(34,211,238,0.22) 0%, transparent 70%)" }} aria-hidden="true" />
            <div className="aurora" style={{ bottom: "-20%", right: "5%", background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)", animationDelay: "-6s" }} aria-hidden="true" />
            <div className="hero__grid-bg" aria-hidden="true" />

            <div className="container">
                <h1 id="hero-name" className="hero__name">
                    <span>Muhammet Ali</span>
                    <span className="accent">Yavuz</span>
                </h1>
                <p className="hero__title">{profile.title}</p>
                <div className="hero__actions">
                    <a className="btn btn--primary" href="#work">View Projects →</a>
                    <DownloadCVButton className="btn btn--ghost" />
                </div>
            </div>
        </section>
    );
}
