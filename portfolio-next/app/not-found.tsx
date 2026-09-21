import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

export default function NotFound() {
    return (
        <>
            <SiteHeader />
            <main id="main" className="case">
                <div className="container">
                    <p className="eyebrow">404</p>
                    <h1 className="case__title">This page does not exist</h1>
                    <p className="case__subtitle"><Link href="/">Back to the home page</Link></p>
                </div>
            </main>
            <SiteFooter />
        </>
    );
}
