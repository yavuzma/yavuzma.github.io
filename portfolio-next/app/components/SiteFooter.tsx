import { profile } from "../data/cv";

export default function SiteFooter() {
    return (
        <footer className="site-footer">
            <div className="container">
                <p>© {new Date().getFullYear()} {profile.name} · {profile.title}</p>
                <p>
                    <a href={profile.linkedin.url}>LinkedIn</a> · <a href={profile.github.url}>GitHub</a> ·{" "}
                    <a href="https://github.com/yavuzma/yavuzma.github.io">Site source</a>
                </p>
            </div>
        </footer>
    );
}
