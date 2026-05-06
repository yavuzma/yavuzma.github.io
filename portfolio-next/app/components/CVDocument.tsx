"use client";

import { Document, Page, Text, View, Link, StyleSheet } from "@react-pdf/renderer";

const BLACK = "#000";
const RULE = "#000";
const MUTED = "#000";

const s = StyleSheet.create({
    page: {
        paddingTop: 36,
        paddingBottom: 28,
        paddingHorizontal: 44,
        fontFamily: "Helvetica",
        fontSize: 9,
        color: BLACK,
        lineHeight: 1.45,
    },

    // Header
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        borderBottomWidth: 1.5,
        borderBottomColor: RULE,
        paddingBottom: 8,
        marginBottom: 12,
    },
    headerLeft: { flexDirection: "column" },
    name: {
        fontFamily: "Helvetica-Bold",
        fontSize: 22,
        letterSpacing: -0.5,
        marginBottom: 2,
    },
    subtitle: {
        fontSize: 10.5,
        marginBottom: 6,
    },
    portfolioBadge: {
        backgroundColor: BLACK,
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
    contactInfo: {
        textAlign: "right",
        fontSize: 8,
        lineHeight: 1.7,
    },
    contactRow: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginBottom: 1,
    },
    contactLabel: { width: 12, textAlign: "center", marginRight: 4 },
    link: {
        color: BLACK,
        textDecoration: "underline",
    },

    // Two-column body
    body: { flexDirection: "row", gap: 18, flex: 1 },
    main: { flex: 1 },
    side: { width: 165 },

    // Sections
    section: { marginBottom: 10 },
    sectionTitle: {
        fontFamily: "Helvetica-Bold",
        fontSize: 10,
        letterSpacing: 1.2,
        textTransform: "uppercase",
        borderBottomWidth: 1.2,
        borderBottomColor: RULE,
        paddingBottom: 2,
        marginBottom: 6,
    },

    // Education / Experience header rows
    rowBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline",
    },
    expDate: {
        fontSize: 7.5,
    },
    bold: { fontFamily: "Helvetica-Bold" },
    eduDegree: { fontFamily: "Helvetica-Bold", fontSize: 9 },
    eduUni: { fontFamily: "Helvetica-Bold", fontSize: 9 },
    eduDetails: { fontSize: 8, marginTop: 2 },

    // Experience
    expItem: { marginBottom: 7 },
    expTitle: { fontFamily: "Helvetica-Bold", fontSize: 9 },
    expCompany: { fontFamily: "Helvetica-Bold", fontSize: 9 },
    expDescItem: {
        fontSize: 8,
        marginTop: 1,
        marginLeft: 10,
    },
    expDescItalic: {
        fontSize: 8,
        marginTop: 1,
        fontFamily: "Helvetica-Oblique",
    },

    // Projects
    projItem: { marginBottom: 4 },
    projName: { fontFamily: "Helvetica-Bold", fontSize: 8.5 },
    projDesc: { fontSize: 7.5, marginTop: 0.5 },

    // Skills
    skillGroup: { marginBottom: 5 },
    skillLabel: { fontFamily: "Helvetica-Bold", fontSize: 8.5, marginBottom: 1 },
    skillItems: { fontSize: 8 },

    // Languages
    langItem: { fontSize: 8, marginBottom: 1 },

    // Certifications
    certList: { fontSize: 8 },
    certItem: { marginBottom: 2.5 },
    certVerify: { fontSize: 7, fontFamily: "Courier" },

    // Interests
    interestRow: { flexDirection: "row", flexWrap: "wrap", gap: 3 },
    interestTag: {
        fontSize: 7,
        backgroundColor: "#eee",
        paddingVertical: 1.5,
        paddingHorizontal: 5,
        borderRadius: 2,
    },

    // Footer
    footer: {
        marginTop: "auto",
        paddingTop: 6,
        borderTopWidth: 1,
        borderTopColor: RULE,
        fontSize: 7.5,
        textAlign: "center",
        lineHeight: 1.5,
    },
});

const Bullet = ({ children }: { children: React.ReactNode }) => (
    <Text style={s.expDescItem}>– {children}</Text>
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
                            <Text>Location: Istanbul, Turkey</Text>
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

                            <View style={s.rowBetween}>
                                <Text>
                                    <Text style={s.eduDegree}>BSc Shipbuilding & Ocean Engineering</Text>
                                    <Text> — </Text>
                                    <Text style={s.eduUni}>Istanbul Technical University</Text>
                                </Text>
                                <Text style={s.expDate}>Sep 2021 – Jul 2026 (exp.)</Text>
                            </View>
                            <Text style={s.eduDetails}>
                                GPA: 3.26 / 4.0{"\n"}
                                <Text style={s.bold}>5-Year Program (Including 1-Year English Preparatory){"\n"}</Text>
                                ITU Shipbuilding Engineering Club · ITU SAVTEK — Defense Technologies
                            </Text>

                            <View style={[s.rowBetween, { marginTop: 6 }]}>
                                <Text>
                                    <Text style={s.eduDegree}>ATHENS Exchange Programme</Text>
                                    <Text> — </Text>
                                    <Text style={s.eduUni}>Delft University of Technology</Text>
                                </Text>
                                <Text style={s.expDate}>14–21 Mar 2026</Text>
                            </View>
                            <Text style={s.eduDetails}>
                                TUD14: Computer Aided Analysis & Optimization of Sustainable Electrical Power Systems{"\n"}
                                <Text style={s.bold}>Local Mark: 9/10 · ATHENS Network (</Text>
                                <Link src="https://athensnetwork.eu" style={[s.link, s.bold]}>athensnetwork.eu</Link>
                                <Text style={s.bold}>)</Text>
                            </Text>
                        </View>

                        {/* EXPERIENCE */}
                        <View style={s.section}>
                            <Text style={s.sectionTitle}>Experience</Text>

                            <View style={s.expItem}>
                                <View style={s.rowBetween}>
                                    <Text>
                                        <Text style={s.expTitle}>CFD Engineer & Software Developer</Text>
                                        <Text> — </Text>
                                        <Text style={s.expCompany}>ITUKAT</Text>
                                    </Text>
                                    <Text style={s.expDate}>Aug 2025 – Present · Full-time</Text>
                                </View>
                                <Text style={s.expDescItalic}>
                                    Projects undertaken were conducted under confidentiality constraints. Public descriptions focus on methodologies and technical contributions.
                                </Text>
                                <Bullet>Force and moment analysis in CFD simulations, including validation through experimental (EFD) data.</Bullet>
                                <Bullet>Development of control and automation algorithms for engineering applications.</Bullet>
                            </View>

                            <View style={s.expItem}>
                                <View style={s.rowBetween}>
                                    <Text>
                                        <Text style={s.expTitle}>Curious Student</Text>
                                        <Text> — </Text>
                                        <Text style={s.expCompany}>ITU Ata Nutku Towing Tank</Text>
                                    </Text>
                                    <Text style={s.expDate}>Sep 2024 – Present</Text>
                                </View>
                                <Bullet>Participated in resistance, propulsion, and seakeeping experiments</Bullet>
                                <Bullet>Hands-on experience in towing tank testing procedures and maritime experimental methods</Bullet>
                            </View>

                            <View style={s.expItem}>
                                <View style={s.rowBetween}>
                                    <Text>
                                        <Text style={s.expTitle}>Production Engineer</Text>
                                        <Text> — </Text>
                                        <Text style={s.expCompany}>Besiktas Shipyard</Text>
                                    </Text>
                                    <Text style={s.expDate}>Aug – Sep 2024 · Full-time Internship</Text>
                                </View>
                                <Bullet>Inspection and maintenance of main engines, hydraulic systems, and generators</Bullet>
                                <Bullet>Air compressor overhaul, marine pump maintenance including ballast water treatment</Bullet>
                                <Bullet>Welding, pipe installation, and surface coating experience</Bullet>
                            </View>

                            <View style={s.expItem}>
                                <View style={s.rowBetween}>
                                    <Text>
                                        <Text style={s.expTitle}>Mechanical Engineer</Text>
                                        <Text> — </Text>
                                        <Text style={s.expCompany}>MENSA MAKINA</Text>
                                    </Text>
                                    <Text style={s.expDate}>Aug – Sep 2023 · Full-time Internship</Text>
                                </View>
                                <Bullet>Designed and installed a complete ventilation system for a sheet metal processing line</Bullet>
                                <Bullet>Fabricated sheet metal components: pipes, flanges, and air filters</Bullet>
                            </View>
                        </View>

                        {/* PROJECTS */}
                        <View style={s.section}>
                            <Text style={s.sectionTitle}>Key Projects</Text>

                            <View style={s.projItem}>
                                <Text style={s.projName}>TCSG FISILTI — Hybrid Coast Guard Vessel</Text>
                                <Text style={s.projDesc}>
                                    Preliminary design of a 69.5m hybrid vessel with Counter Rotating Azipod propulsion, 24 kn max speed, 63 crew capacity
                                </Text>
                            </View>
                            <View style={s.projItem}>
                                <Text style={s.projName}>KCS Hull with Rudder — CFD Resistance Prediction</Text>
                                <Text style={s.projDesc}>
                                    Unsteady RANS + VOF free surface in STAR-CCM+, 5 cases across 3 mesh levels, 0.22% best deviation from experimental data
                                </Text>
                            </View>
                            <View style={s.projItem}>
                                <Text style={s.projName}>DARPA SUBOFF — Appendage Resistance Analysis</Text>
                                <Text style={s.projDesc}>
                                    Submarine hydrodynamics: AFF1/AFF3/AFF8 configurations, 0.5% deviation, ITTC uncertainty assessment
                                </Text>
                            </View>
                            <View style={s.projItem}>
                                <Text style={s.projName}>Offshore Platform — Design & Analysis</Text>
                                <Text style={s.projDesc}>
                                    Full concept: Rhinoceros 3D modeling + Maxsurf stability analysis + ANSYS Fluent CFD, 70x40m deck
                                </Text>
                            </View>
                            <View style={s.projItem}>
                                <Text style={s.projName}>Alicat Mass Flow Controller — Control Interface</Text>
                                <Text style={s.projDesc}>
                                    Production-grade Python desktop app with AsyncIO, real-time serial monitoring & automated data logging
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* SIDEBAR */}
                    <View style={s.side}>
                        {/* SKILLS */}
                        <View style={s.section}>
                            <Text style={s.sectionTitle}>Skills</Text>

                            <View style={s.skillGroup}>
                                <Text style={s.skillLabel}>Analysis</Text>
                                <Text style={s.skillItems}>OpenFOAM, ANSYS Fluent, STAR-CCM+, Maxsurf</Text>
                            </View>
                            <View style={s.skillGroup}>
                                <Text style={s.skillLabel}>Design & Modeling</Text>
                                <Text style={s.skillItems}>SolidWorks, Rhinoceros 3D, AutoCAD</Text>
                            </View>
                            <View style={s.skillGroup}>
                                <Text style={s.skillLabel}>Programming</Text>
                                <Text style={s.skillItems}>C / C++, Python, MATLAB, Arduino</Text>
                            </View>
                        </View>

                        {/* LANGUAGES */}
                        <View style={s.section}>
                            <Text style={s.sectionTitle}>Languages</Text>
                            <Text style={s.langItem}>English — Advanced</Text>
                            <Text style={s.langItem}>German — Intermediate</Text>
                            <Text style={s.langItem}>Turkish — Native</Text>
                        </View>

                        {/* CERTIFICATIONS */}
                        <View style={s.section}>
                            <Text style={s.sectionTitle}>Certifications</Text>
                            <View style={s.certList}>
                                <View style={s.certItem}>
                                    <Text style={s.bold}>ATHENS Network — TU Delft (Mar 2026)</Text>
                                    <Text style={s.certVerify}>Verification: BN22-JYBT-79WV-HDCV</Text>
                                </View>
                                <Text style={s.certItem}>· SolidWorks CSWA</Text>
                                <Text style={s.certItem}>· AutoCAD Certificate</Text>
                                <Text style={s.certItem}>· Python — freeCodeCamp</Text>
                                <Text style={s.certItem}>· Arduino — Udemy</Text>
                                <Text style={s.certItem}>· TELC Deutsch B1</Text>
                            </View>
                        </View>

                        {/* INTERESTS */}
                        <View style={s.section}>
                            <Text style={s.sectionTitle}>Interests</Text>
                            <View style={s.interestRow}>
                                {["Hydrodynamics", "Ship Design", "CFD", "Marine Systems", "Defense Tech", "Autonomous Systems", "Propeller Design"].map((tag) => (
                                    <Text key={tag} style={s.interestTag}>{tag}</Text>
                                ))}
                            </View>
                        </View>

                        {/* ACTIVITIES */}
                        <View style={s.section}>
                            <Text style={s.sectionTitle}>Activities</Text>
                            <Text style={s.skillItems}>
                                ITU Shipbuilding Engineering Club — Active Member{"\n"}{"\n"}
                                ITU SAVTEK — Defense Technologies Club
                            </Text>
                        </View>
                    </View>
                </View>

                {/* FOOTER */}
                <View style={s.footer}>
                    <Text>
                        <Link src="https://yavuzma.github.io" style={s.link}>yavuzma.github.io</Link>
                        <Text>  ·  </Text>
                        <Link src="https://github.com/yavuzma" style={s.link}>github.com/yavuzma</Link>
                        <Text>  ·  </Text>
                        <Link src="https://linkedin.com/in/yavuzitu" style={s.link}>linkedin.com/in/yavuzitu</Link>
                    </Text>
                    <Text>References available upon request</Text>
                </View>
            </Page>
        </Document>
    );
}
