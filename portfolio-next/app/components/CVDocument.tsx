"use client";

import { Document, Page, Text, View, Link, StyleSheet } from "@react-pdf/renderer";

const PRIMARY = "#0f4c75";
const INK = "#1a1a2e";
const MUTED = "#5a6678";

const s = StyleSheet.create({
    page: {
        paddingTop: 32,
        paddingBottom: 50,
        paddingHorizontal: 40,
        fontFamily: "Helvetica",
        fontSize: 9.5,
        color: INK,
        lineHeight: 1.45,
    },

    // Header
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        borderBottomWidth: 1.5,
        borderBottomColor: PRIMARY,
        paddingBottom: 7,
        marginBottom: 12,
    },
    headerLeft: { flexDirection: "column", flexShrink: 1, paddingRight: 10 },
    name: {
        fontFamily: "Helvetica-Bold",
        fontSize: 22,
        lineHeight: 1.15,
        color: PRIMARY,
        marginBottom: 4,
    },
    subtitle: { fontSize: 10.5, lineHeight: 1.3, color: INK, marginBottom: 6 },
    portfolioBadge: {
        backgroundColor: PRIMARY,
        color: "#fff",
        fontFamily: "Helvetica-Bold",
        fontSize: 8.5,
        letterSpacing: 0.3,
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderRadius: 3,
        textDecoration: "none",
        alignSelf: "flex-start",
    },
    contactInfo: { textAlign: "right", fontSize: 8, lineHeight: 1.6, flexShrink: 0 },
    contactRow: { flexDirection: "row", justifyContent: "flex-end", marginBottom: 1 },
    link: { color: PRIMARY, textDecoration: "underline" },

    // Page-2 mini header
    miniHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        borderBottomWidth: 1,
        borderBottomColor: PRIMARY,
        paddingBottom: 4,
        marginBottom: 10,
    },
    miniName: { fontFamily: "Helvetica-Bold", fontSize: 11, color: PRIMARY },
    miniNote: { fontSize: 8, color: MUTED, fontFamily: "Helvetica-Oblique" },

    // Sections
    section: { marginBottom: 9 },
    sectionTitle: {
        fontFamily: "Helvetica-Bold",
        fontSize: 10,
        letterSpacing: 1.2,
        textTransform: "uppercase",
        color: PRIMARY,
        borderBottomWidth: 1.2,
        borderBottomColor: "#d0d7de",
        paddingBottom: 2,
        marginBottom: 5,
    },

    // Two-line entry headers
    entryHeader: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: 10,
        marginBottom: 1,
    },
    entryRole: {
        fontFamily: "Helvetica-Bold",
        fontSize: 9.5,
        color: INK,
        flexShrink: 1,
    },
    entrySubtitle: {
        fontFamily: "Helvetica-Bold",
        fontSize: 9,
        color: PRIMARY,
        marginBottom: 1,
    },
    entryDate: { fontSize: 8, color: MUTED, flexShrink: 0 },

    bold: { fontFamily: "Helvetica-Bold" },

    eduDetails: { fontSize: 8.5, marginTop: 1, color: INK, lineHeight: 1.5 },
    eduHighlight: { fontFamily: "Helvetica-Bold", color: PRIMARY },

    expItem: { marginBottom: 6 },
    expConfidential: {
        fontSize: 8,
        fontFamily: "Helvetica-Oblique",
        color: MUTED,
        marginTop: 1,
        marginBottom: 1,
    },
    expBullet: { fontSize: 8.5, marginTop: 1, marginLeft: 8, color: INK, lineHeight: 1.5 },

    projItem: { marginBottom: 5 },
    projName: { fontFamily: "Helvetica-Bold", fontSize: 9, color: INK },
    projDesc: { fontSize: 8.5, marginTop: 1, color: INK, lineHeight: 1.5 },

    // Two columns on page 2
    twoCol: { flexDirection: "row", gap: 18 },
    colMain: { flex: 1 },
    colSide: { width: 160, flexShrink: 0 },

    skillRow: { fontSize: 8.5, color: INK, marginBottom: 2, lineHeight: 1.45 },
    skillLabel: { fontFamily: "Helvetica-Bold", color: INK },

    langItem: { fontSize: 8.5, marginBottom: 2, color: INK },

    certItem: { fontSize: 8.5, marginBottom: 2, color: INK },
    certVerify: { fontSize: 6.5, fontFamily: "Courier", color: MUTED, marginTop: 0.5, marginLeft: 8 },

    interestRow: { flexDirection: "row", flexWrap: "wrap", gap: 3 },
    interestTag: {
        fontSize: 7.5,
        backgroundColor: "#e8f4f8",
        color: PRIMARY,
        paddingVertical: 2,
        paddingHorizontal: 5,
        borderRadius: 2,
    },

    activitiesText: { fontSize: 8.5, color: INK, lineHeight: 1.55 },

    footer: {
        position: "absolute",
        bottom: 14,
        left: 40,
        right: 40,
        paddingTop: 6,
        borderTopWidth: 1,
        borderTopColor: "#d0d7de",
        flexDirection: "column",
        alignItems: "center",
    },
    footerLinks: { fontSize: 8, color: MUTED, textAlign: "center", marginBottom: 2 },
    footerNote: {
        fontSize: 7.5,
        color: MUTED,
        fontFamily: "Helvetica-Oblique",
        textAlign: "center",
    },
});

const Bullet = ({ children }: { children: React.ReactNode }) => (
    <Text style={s.expBullet}>– {children}</Text>
);

export default function CVDocument() {
    return (
        <Document
            title="CV — Muhammet Ali Yavuz"
            author="Muhammet Ali Yavuz"
            subject="Curriculum Vitae"
            keywords="Naval Architecture, CFD, Ocean Engineering, OpenFOAM, STAR-CCM+, ANSYS Fluent"
        >
            <Page size="A4" style={s.page}>
                {/* HEADER */}
                <View style={s.header}>
                    <View style={s.headerLeft}>
                        <Text style={s.name}>Muhammet Ali Yavuz</Text>
                        <Text style={s.subtitle}>
                            Naval Architect · CFD Engineer · Software Developer
                        </Text>
                        <Link src="https://yavuzma.github.io" style={s.portfolioBadge}>
                            Portfolio: yavuzma.github.io
                        </Link>
                    </View>
                    <View style={s.contactInfo}>
                        <View style={s.contactRow}>
                            <Text>Email: </Text>
                            <Link src="mailto:yavuzmu21@itu.edu.tr" style={s.link}>
                                yavuzmu21@itu.edu.tr
                            </Link>
                        </View>
                        <View style={s.contactRow}>
                            <Text>Phone: </Text>
                            <Link src="tel:+905510929667" style={s.link}>
                                +90 551 092 9667
                            </Link>
                        </View>
                        <View style={s.contactRow}>
                            <Text>LinkedIn: </Text>
                            <Link src="https://linkedin.com/in/yavuzitu" style={s.link}>
                                linkedin.com/in/yavuzitu
                            </Link>
                        </View>
                        <View style={s.contactRow}>
                            <Text>GitHub: </Text>
                            <Link src="https://github.com/yavuzma" style={s.link}>
                                github.com/yavuzma
                            </Link>
                        </View>
                        <View style={s.contactRow}>
                            <Text>Istanbul, Turkey</Text>
                        </View>
                    </View>
                </View>

                {/* EDUCATION */}
                <View style={s.section}>
                    <Text style={s.sectionTitle}>Education</Text>

                    <View style={s.entryHeader}>
                        <Text style={s.entryRole}>BSc Shipbuilding &amp; Ocean Engineering</Text>
                        <Text style={s.entryDate}>Sep 2021 – Jul 2026 (exp.)</Text>
                    </View>
                    <Text style={s.entrySubtitle}>Istanbul Technical University</Text>
                    <Text style={s.eduDetails}>
                        GPA: 3.26 / 4.0   ·   <Text style={s.eduHighlight}>5-Year Program (Including 1-Year English Preparatory)</Text>{"\n"}
                        ITU Shipbuilding Engineering Club · ITU SAVTEK — Defense Technologies
                    </Text>

                    <View style={[s.entryHeader, { marginTop: 6 }]}>
                        <Text style={s.entryRole}>ATHENS Exchange Programme</Text>
                        <Text style={s.entryDate}>14–21 Mar 2026</Text>
                    </View>
                    <Text style={s.entrySubtitle}>Delft University of Technology</Text>
                    <Text style={s.eduDetails}>
                        TUD14: Computer Aided Analysis &amp; Optimization of Sustainable Electrical Power Systems{"\n"}
                        <Text style={s.eduHighlight}>Local Mark: 9/10 · ATHENS Network (</Text>
                        <Link src="https://athensnetwork.eu" style={[s.link, s.bold]}>athensnetwork.eu</Link>
                        <Text style={s.eduHighlight}>)</Text>
                    </Text>
                </View>

                {/* EXPERIENCE */}
                <View style={s.section}>
                    <Text style={s.sectionTitle}>Experience</Text>

                    <View style={s.expItem} wrap={false}>
                        <View style={s.entryHeader}>
                            <Text style={s.entryRole}>CFD Engineer &amp; Software Developer</Text>
                            <Text style={s.entryDate}>Aug 2025 – Present · Full-time</Text>
                        </View>
                        <Text style={s.entrySubtitle}>ITUKAT</Text>
                        <Text style={s.expConfidential}>
                            Projects undertaken were conducted under confidentiality constraints. Public descriptions focus on methodologies and technical contributions.
                        </Text>
                        <Bullet>Force and moment analysis in CFD simulations, including validation through experimental (EFD) data.</Bullet>
                        <Bullet>Development of control and automation algorithms for engineering applications.</Bullet>
                    </View>

                    <View style={s.expItem} wrap={false}>
                        <View style={s.entryHeader}>
                            <Text style={s.entryRole}>Curious Student</Text>
                            <Text style={s.entryDate}>Sep 2024 – Present</Text>
                        </View>
                        <Text style={s.entrySubtitle}>ITU Ata Nutku Towing Tank</Text>
                        <Bullet>Participated in resistance, propulsion, and seakeeping experiments.</Bullet>
                        <Bullet>Hands-on experience in towing tank testing procedures and maritime experimental methods.</Bullet>
                    </View>

                    <View style={s.expItem} wrap={false}>
                        <View style={s.entryHeader}>
                            <Text style={s.entryRole}>Production Engineer</Text>
                            <Text style={s.entryDate}>Aug – Sep 2024 · Full-time Internship</Text>
                        </View>
                        <Text style={s.entrySubtitle}>Besiktas Shipyard</Text>
                        <Bullet>Inspection and maintenance of main engines, hydraulic systems, and generators.</Bullet>
                        <Bullet>Air compressor overhaul, marine pump maintenance including ballast water treatment.</Bullet>
                        <Bullet>Welding, pipe installation, and surface coating experience.</Bullet>
                    </View>

                    <View style={s.expItem} wrap={false}>
                        <View style={s.entryHeader}>
                            <Text style={s.entryRole}>Mechanical Engineer</Text>
                            <Text style={s.entryDate}>Aug – Sep 2023 · Full-time Internship</Text>
                        </View>
                        <Text style={s.entrySubtitle}>MENSA MAKINA</Text>
                        <Bullet>Designed and installed a complete ventilation system for a sheet metal processing line.</Bullet>
                        <Bullet>Fabricated sheet metal components: pipes, flanges, and air filters.</Bullet>
                    </View>
                </View>

                {/* PAGE 2 */}
                <View break>
                    <View style={s.miniHeader}>
                        <Text style={s.miniName}>Muhammet Ali Yavuz</Text>
                        <Text style={s.miniNote}>Curriculum Vitae · Page 2</Text>
                    </View>

                    {/* KEY PROJECTS */}
                    <View style={s.section}>
                        <Text style={s.sectionTitle}>Key Projects</Text>

                        <View style={s.projItem} wrap={false}>
                            <Text style={s.projName}>TCSG FISILTI — Hybrid Coast Guard Vessel</Text>
                            <Text style={s.projDesc}>
                                Preliminary design of a 69.5 m hybrid vessel with Counter-Rotating Azipod propulsion, 24 kn maximum speed and 63-person crew capacity. Hull form generation, weight estimation and powering prediction.
                            </Text>
                        </View>

                        <View style={s.projItem} wrap={false}>
                            <Text style={s.projName}>KCS Hull with Rudder — CFD Resistance Prediction</Text>
                            <Text style={s.projDesc}>
                                Unsteady RANS with VOF free-surface modelling in STAR-CCM+. Five operating cases on three mesh levels for verification &amp; validation; best result deviated 0.22% from the experimental reference.
                            </Text>
                        </View>

                        <View style={s.projItem} wrap={false}>
                            <Text style={s.projName}>DARPA SUBOFF — Appendage Resistance Analysis</Text>
                            <Text style={s.projDesc}>
                                Submarine hydrodynamics for AFF1 / AFF3 / AFF8 configurations with 0.5% deviation from reference data, including a full ITTC uncertainty assessment.
                            </Text>
                        </View>

                        <View style={s.projItem} wrap={false}>
                            <Text style={s.projName}>Offshore Platform — Design &amp; Analysis</Text>
                            <Text style={s.projDesc}>
                                Full concept design with a 70 × 40 m operational deck. Hull modeled in Rhinoceros 3D, intact &amp; damaged stability assessed in Maxsurf, environmental loads evaluated with ANSYS Fluent CFD.
                            </Text>
                        </View>

                        <View style={s.projItem} wrap={false}>
                            <Text style={s.projName}>Alicat Mass Flow Controller — Control Interface</Text>
                            <Text style={s.projDesc}>
                                Production-grade Python desktop application using AsyncIO for non-blocking serial I/O, real-time monitoring with live plotting and automated CSV data logging for long-duration laboratory experiments.
                            </Text>
                        </View>
                    </View>

                    {/* TWO-COLUMN: Skills + sidebar */}
                    <View style={s.twoCol}>
                        <View style={s.colMain}>
                            <View style={s.section}>
                                <Text style={s.sectionTitle}>Skills</Text>
                                <Text style={s.skillRow}>
                                    <Text style={s.skillLabel}>Analysis: </Text>
                                    OpenFOAM, ANSYS Fluent, STAR-CCM+, Maxsurf
                                </Text>
                                <Text style={s.skillRow}>
                                    <Text style={s.skillLabel}>Design &amp; Modeling: </Text>
                                    SolidWorks, Rhinoceros 3D, AutoCAD
                                </Text>
                                <Text style={s.skillRow}>
                                    <Text style={s.skillLabel}>Programming: </Text>
                                    C / C++, Python, MATLAB, Arduino
                                </Text>
                            </View>

                            <View style={s.section}>
                                <Text style={s.sectionTitle}>Certifications</Text>
                                <Text style={s.certItem}>· ATHENS Network — TU Delft (Mar 2026)</Text>
                                <Text style={s.certVerify}>BN22-JYBT-79WV-HDCV</Text>
                                <Text style={s.certItem}>· SolidWorks CSWA</Text>
                                <Text style={s.certItem}>· AutoCAD Certificate</Text>
                                <Text style={s.certItem}>· Python — freeCodeCamp</Text>
                                <Text style={s.certItem}>· Arduino — Udemy</Text>
                                <Text style={s.certItem}>· TELC Deutsch B1</Text>
                            </View>
                        </View>

                        <View style={s.colSide}>
                            <View style={s.section}>
                                <Text style={s.sectionTitle}>Languages</Text>
                                <Text style={s.langItem}>English — Advanced</Text>
                                <Text style={s.langItem}>German — Intermediate</Text>
                                <Text style={s.langItem}>Turkish — Native</Text>
                            </View>

                            <View style={s.section}>
                                <Text style={s.sectionTitle}>Interests</Text>
                                <View style={s.interestRow}>
                                    {["Hydrodynamics", "Ship Design", "CFD", "Marine Systems", "Defense Tech", "Autonomous Systems", "Propeller Design"].map((tag) => (
                                        <Text key={tag} style={s.interestTag}>{tag}</Text>
                                    ))}
                                </View>
                            </View>

                            <View style={s.section}>
                                <Text style={s.sectionTitle}>Activities</Text>
                                <Text style={s.activitiesText}>
                                    ITU Shipbuilding Engineering Club — Active Member{"\n"}
                                    ITU SAVTEK — Defense Technologies Club
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* FOOTER (every page) */}
                <View style={s.footer} fixed>
                    <Text style={s.footerLinks}>
                        <Link src="https://yavuzma.github.io" style={s.link}>yavuzma.github.io</Link>
                        <Text>   ·   </Text>
                        <Link src="https://github.com/yavuzma" style={s.link}>github.com/yavuzma</Link>
                        <Text>   ·   </Text>
                        <Link src="https://linkedin.com/in/yavuzitu" style={s.link}>linkedin.com/in/yavuzitu</Link>
                    </Text>
                    <Text style={s.footerNote}>References available upon request</Text>
                </View>
            </Page>
        </Document>
    );
}
