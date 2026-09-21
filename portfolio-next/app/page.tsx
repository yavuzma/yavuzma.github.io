import SiteHeader from "./components/SiteHeader";
import Hero from "./components/Hero";
import SelectedWork from "./components/SelectedWork";
import ExperienceSection from "./components/ExperienceSection";
import AboutSection from "./components/AboutSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import SiteFooter from "./components/SiteFooter";

export default function Home() {
    return (
        <>
            <SiteHeader />
            <main id="main">
                <Hero />
                <SelectedWork />
                <ExperienceSection />
                <AboutSection />
                <EducationSection />
                <ContactSection />
            </main>
            <SiteFooter />
        </>
    );
}
