"use client";

import { Document, Page, Text, View, Link, StyleSheet } from "@react-pdf/renderer";

const PRIMARY = "#0f4c75";
const INK = "#1a1a2e";
const MUTED = "#5a6678";

const s = StyleSheet.create({
    page: {
        paddingTop: 22,
        paddingBottom: 30,
        paddingHorizontal: 32,
        fontFamily: "Helvetica",
        fontSize: 8,
        color: INK,
        lineHeight: 1.3,
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        borderBottomWidth: 1.2,
        borderBottomColor: PRIMARY,
        paddingBottom: 5,
        marginBottom: 7,
    },
    headerLeft: { flexDirection: "column", flexShrink: 1, paddingRight: 10 },
    name: {
        fontFamily: "Helvetica-Bold",
        fontSize: 17,
        lineHeight: 1.1,
        color: PRIMARY,
        marginBottom: 2,
    },
    subtitle: { fontSize: 9, lineHeight: 1.2, color: INK, marginBottom: 4 },
    portfolioBadge: {
        backgroundColor: PRIMARY,
        color: "#fff",
        fontFamily: "Helvetica-Bold",
        fontSize: 7.5,
        letterSpacing: 0.3,
        paddingVertical: 2,
        paddingHorizontal: 7,
        borderRadius: 2,
        textDecoration: "none",
        alignSelf: "flex-start",
    },
    contactInfo: { textAlign: "right", fontSize: 7.2, lineHeight: 1.4, flexShrink: 0 },
    contactRow: { flexDirection: "row", justifyContent: "flex-end" },
    link: { color: PRIMARY, textDecoration: "underline" },

    body: { flexDirection: "row", gap: 14 },
    main: { flex: 1, flexShrink: 1 },
    side: { width: 142, flexShrink: 0 },

    section: { marginBottom: 5 },
    sectionTitle: {
        fontFamily: "Helvetica-Bold",
        fontSize: 8.5,
        letterSpacing: 1,
        textTransform: "uppercase",
        color: PRIMARY,
        borderBottomWidth: 1,
        borderBottomColor: "#d0d7de",
        paddingBottom: 1.5,
        marginBottom: 3,
    },

    entryHeader: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: 8,
    },
    entryRole: { fontFamily: "Helvetica-Bold", fontSize: 8.5, color: INK, flexShrink: 1 },
    entrySubtitle: {
        fontFamily: "Helvetica-Bold",
        fontSize: 8,
        color: PRIMARY,
        marginBottom: 0.5,
    },
    entryDate: { fontSize: 7.2, color: MUTED, flexShrink: 0 },

    bold: { fontFamily: "Helvetica-Bold" },

    eduDetails: { fontSize: 7.5, marginTop: 0.5, color: INK, lineHeight: 1.35 },
    eduHighlight: { fontFamily: "Helvetica-Bold", color: PRIMARY },

    expItem: { marginBottom: 3 },
    expConfidential: {
        fontSize: 7,
        fontFamily: "Helvetica-Oblique",
        color: MUTED,
        marginBottom: 0.5,
    },
    expBullet: { fontSize: 7.5, marginTop: 0.5, marginLeft: 7, color: INK, lineHeight: 1.35 },

    projItem: { marginBottom: 2 },
    projName: { fontFamily: "Helvetica-Bold", fontSize: 8, color: INK },
    projDesc: { fontSize: 7.3, marginTop: 0.5, color: INK, lineHeight: 1.35 },

    skillRow: { fontSize: 7.5, color: INK, marginBottom: 1.5, lineHeight: 1.35 },
    skillLabel: { fontFamily: "Helvetica-Bold", color: INK },

    langItem: { fontSize: 7.5, marginBottom: 1, color: INK },

    certItem: { fontSize: 7.5, marginBottom: 1, color: INK },
    certVerify: { fontSize: 6, fontFamily: "Courier", color: MUTED, marginLeft: 7 },

    interestRow: { flexDirection: "row", flexWrap: "wrap", gap: 2 },
    interestTag: {
        fontSize: 6.8,
        backgroundColor: "#e8f4f8",
        color: PRIMARY,
        paddingVertical: 1,
        paddingHorizontal: 4,
        borderRadius: 2,
    },

    activitiesText: { fontSize: 7.5, color: INK, lineHeight: 1.4 },

    footer: {
        position: "absolute",
        bottom: 12,
        left: 32,
        right: 32,
        paddingTop: 4,
        borderTopWidth: 0.8,
        borderTopColor: "#d0d7de",
        flexDirection: "column",
        alignItems: "center",
    },
    footerLinks: { fontSize: 7, color: MUTED, textAlign: "center", marginBottom: 1 },
    footerNote: {
        fontSize: 6.5,
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

                {/* BODY */}
                <View style={s.body}>
                    {/* MAIN COLUMN */}
                    <View style={s.main}>
                        {/* EDUCATION */}
                        <View style={s.section}>
                            <Text style={s.sectionTitle}>Education</Text>

                            <View style={s.entryHeader}>
                                <Text style={s.entryRole}>BSc Shipbuilding &amp; Ocean Engineering</Text>
                                <Text style={s.entryDate}>Sep 2021 – Jul 2026 (exp.)</Text>
                            </View>
                            <Text style={s.entrySubtitle}>Istanbul Technical University</Text>
                            <Text style={s.eduDetails}>
                                GPA: 3.26 / 4.0   ·   <Text style={s.eduHighlight}>5-Year Program (Including 1-Year English Preparatory)</Text>
                            </Text>

                            <View style={[s.entryHeader, { marginTop: 3 }]}>
                                <Text style={s.entryRole}>ATHENS Exchange Programme</Text>
                                <Text style={s.entryDate}>14–21 Mar 2026</Text>
                            </View>
                            <Text style={s.entrySubtitle}>Delft University of Technology</Text>
                            <Text style={s.eduDetails}>
                                TUD14: Computer Aided Analysis &amp; Optimization of Sustainable Electrical Power Systems · <Text style={s.eduHighlight}>Local Mark: 9/10</Text> · ATHENS Network (
                                <Link src="https://athensnetwork.eu" style={[s.link, s.bold]}>athensnetwork.eu</Link>
                                )
                            </Text>
                        </View>

                        {/* EXPERIENCE */}
                        <View style={s.section}>
                            <Text style={s.sectionTitle}>Experience</Text>

                            <View style={s.expItem}>
                                <View style={s.entryHeader}>
                                    <Text style={s.entryRole}>CFD Engineer &amp; Software Developer</Text>
                                    <Text style={s.entryDate}>Aug 2025 – Present · Full-time</Text>
                                </View>
                                <Text style={s.entrySubtitle}>ITUKAT</Text>
                                <Text style={s.expConfidential}>
                                    Conducted under confidentiality constraints; descriptions focus on methodology.
                                </Text>
                                <Bullet>Force and moment analysis in CFD with experimental (EFD) validation.</Bullet>
                                <Bullet>Control and automation algorithms for engineering applications.</Bullet>
                            </View>

                            <View style={s.expItem}>
                                <View style={s.entryHeader}>
                                    <Text style={s.entryRole}>Curious Student</Text>
                                    <Text style={s.entryDate}>Sep 2024 – Present</Text>
                                </View>
                                <Text style={s.entrySubtitle}>ITU Ata Nutku Towing Tank</Text>
                                <Bullet>Resistance, propulsion, and seakeeping experiments; towing-tank testing procedures.</Bullet>
                            </View>

                            <View style={s.expItem}>
                                <View style={s.entryHeader}>
                                    <Text style={s.entryRole}>Production Engineer</Text>
                                    <Text style={s.entryDate}>Aug – Sep 2024 · Full-time Internship</Text>
                                </View>
                                <Text style={s.entrySubtitle}>Besiktas Shipyard</Text>
                                <Bullet>Maintenance of main engines, hydraulics, generators; air-compressor &amp; ballast pump overhaul.</Bullet>
                                <Bullet>Welding, pipe installation, and surface coating experience.</Bullet>
                            </View>

                            <View style={s.expItem}>
                                <View style={s.entryHeader}>
                                    <Text style={s.entryRole}>Mechanical Engineer</Text>
                                    <Text style={s.entryDate}>Aug – Sep 2023 · Full-time Internship</Text>
                                </View>
                                <Text style={s.entrySubtitle}>MENSA MAKINA</Text>
                                <Bullet>Designed and installed a complete ventilation system for a sheet-metal processing line.</Bullet>
                                <Bullet>Fabricated sheet-metal components: pipes, flanges, and air filters.</Bullet>
                            </View>
                        </View>

                        {/* PROJECTS */}
                        <View style={s.section}>
                            <Text style={s.sectionTitle}>Key Projects</Text>

                            <View style={s.projItem}>
                                <Text style={s.projName}>TCSG FISILTI — Hybrid Coast Guard Vessel</Text>
                                <Text style={s.projDesc}>
                                    69.5 m hybrid vessel, Counter-Rotating Azipod propulsion, 24 kn max, 63 crew capacity.
                                </Text>
                            </View>
                            <View style={s.projItem}>
                                <Text style={s.projName}>KCS Hull with Rudder — CFD Resistance</Text>
                                <Text style={s.projDesc}>
                                    Unsteady RANS + VOF in STAR-CCM+; 5 cases × 3 mesh levels; 0.22% deviation from EFD.
                                </Text>
                            </View>
                            <View style={s.projItem}>
                                <Text style={s.projName}>DARPA SUBOFF — Appendage Resistance</Text>
                                <Text style={s.projDesc}>
                                    AFF1 / AFF3 / AFF8 configurations, 0.5% deviation, ITTC uncertainty assessment.
                                </Text>
                            </View>
                            <View style={s.projItem}>
                                <Text style={s.projName}>Offshore Platform — Design &amp; Analysis</Text>
                                <Text style={s.projDesc}>
                                    70 × 40 m deck; Rhinoceros 3D + Maxsurf stability + ANSYS Fluent CFD.
                                </Text>
                            </View>
                            <View style={s.projItem}>
                                <Text style={s.projName}>Alicat Mass Flow Controller — Control Interface</Text>
                                <Text style={s.projDesc}>
                                    Python desktop app with AsyncIO serial I/O, real-time monitoring &amp; CSV logging.
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* SIDEBAR */}
                    <View style={s.side}>
                        <View style={s.section}>
                            <Text style={s.sectionTitle}>Skills</Text>
                            <Text style={s.skillRow}>
                                <Text style={s.skillLabel}>Analysis: </Text>
                                OpenFOAM, ANSYS Fluent, STAR-CCM+, Maxsurf
                            </Text>
                            <Text style={s.skillRow}>
                                <Text style={s.skillLabel}>Design: </Text>
                                SolidWorks, Rhinoceros 3D, AutoCAD
                            </Text>
                            <Text style={s.skillRow}>
                                <Text style={s.skillLabel}>Programming: </Text>
                                C / C++, Python, MATLAB, Arduino
                            </Text>
                        </View>

                        <View style={s.section}>
                            <Text style={s.sectionTitle}>Languages</Text>
                            <Text style={s.langItem}>English — Advanced</Text>
                            <Text style={s.langItem}>German — Intermediate</Text>
                            <Text style={s.langItem}>Turkish — Native</Text>
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
                                ITU Shipbuilding Engineering Club{"\n"}
                                ITU SAVTEK — Defense Technologies
                            </Text>
                        </View>
                    </View>
                </View>

                {/* FOOTER */}
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
