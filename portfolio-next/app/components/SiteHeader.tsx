import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { profile } from "../data/cv";

const links = [
    { href: "/#work", label: "Work" },
    { href: "/#experience", label: "Experience" },
    { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" },
];

export default function SiteHeader() {
    return (
        <header className="site-header">
            <a className="skip-link" href="#main">Skip to content</a>
            <div className="container site-header__inner">
                <Link href="/" className="brand">{profile.name}</Link>
                <nav className="site-nav" aria-label="Main">
                    {links.map((l) => (
                        <Link key={l.href} href={l.href}>{l.label}</Link>
                    ))}
                    <Link href="/cv/" className="site-nav__cv">CV</Link>
                    <ThemeToggle />
                </nav>
            </div>
        </header>
    );
}
