import DownloadCVButton from "./DownloadCVButton";

export default function Hero() {
    return (
        <section id="home" className="flex items-center justify-center" style={{ minHeight: "80vh", padding: "8rem 2rem 5rem", background: "var(--bg)" }}>
            <div className="text-center max-w-3xl mx-auto">
                <p style={{ fontFamily: "var(--fm)", fontSize: "0.78rem", color: "var(--t2)", marginBottom: "1.5rem" }}>
                    B.Sc. Shipbuilding and Ocean Engineering, ITU · b. August 2003
                </p>

                <h1 style={{ fontFamily: "var(--fh)", fontSize: "clamp(2.8rem, 8vw, 5.5rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-1.5px", color: "var(--t1)", marginBottom: "1.25rem" }}>
                    Muhammet Ali Yavuz
                </h1>

                <p style={{ fontFamily: "var(--fb)", fontSize: "1.15rem", fontWeight: 500, color: "var(--cy)", marginBottom: "1rem" }}>
                    Naval Architect and Ocean Engineer
                </p>

                <p style={{ fontFamily: "var(--fb)", fontSize: "0.95rem", color: "var(--t2)", marginBottom: "2.5rem" }}>
                    Based in Lisbon, Portugal · Available from August 2027
                </p>

                <div className="flex justify-center gap-4 flex-wrap">
                    <a href="#projects"
                        className="inline-flex items-center gap-2 rounded-full"
                        style={{ padding: "0.9rem 2rem", background: "var(--cy)", color: "var(--bg)", fontFamily: "var(--fb)", fontSize: "0.95rem", fontWeight: 600, textDecoration: "none" }}>
                        Selected work
                    </a>
                    <DownloadCVButton
                        className="inline-flex items-center gap-2 rounded-full border cursor-pointer"
                        style={{ padding: "0.9rem 2rem", borderColor: "var(--bdr)", color: "var(--t1)", fontFamily: "var(--fb)", fontSize: "0.95rem", fontWeight: 600, background: "transparent" }}
                    />
                </div>
            </div>
        </section>
    );
}
