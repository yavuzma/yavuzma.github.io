import { Document, Page, Text, View, Link, StyleSheet } from "@react-pdf/renderer";
import { profile, education, educationLine, experience, skills, languages, certifications, memberships, activities, interests } from "../data/cv";
import { projects } from "../data/projects";

// Rendered to a static PDF at build time by scripts/build-cv.tsx, which also registers the "Inter" font.
// Single column on purpose: it reads in order for people and for applicant-tracking parsers.

const INK = "#111827";
const BODY = "#1f2937";
const MUTED = "#4b5563";
const ACCENT = "#0e5a7a";
const RULE = "#d1d5db";

// Projects shown on the one-page CV, in this order.
const CV_PROJECTS = ["kcs", "darpa", "tcsg", "alicat"];

const s = StyleSheet.create({
    page: { fontFamily: "Inter", fontSize: 9.8, lineHeight: 1.34, color: BODY, paddingTop: 30, paddingBottom: 26, paddingHorizontal: 44 },

    name: { fontSize: 21, fontWeight: 700, color: INK, lineHeight: 1.1 },
    title: { fontSize: 11.5, color: ACCENT, marginTop: 3, fontWeight: 600 },
    contact: { fontSize: 9.2, color: MUTED, marginTop: 5 },
    link: { color: MUTED, textDecoration: "none" },

    section: { marginTop: 9 },
    sectionTitle: { fontSize: 9.6, fontWeight: 700, color: ACCENT, letterSpacing: 0.9, textTransform: "uppercase", paddingBottom: 2, borderBottomWidth: 0.7, borderBottomColor: RULE, marginBottom: 5 },

    entry: { marginBottom: 4.5 },
    row: { flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" },
    heading: { fontSize: 10.2, fontWeight: 600, color: INK, flexShrink: 1, paddingRight: 8 },
    org: { fontWeight: 400, color: BODY },
    date: { fontSize: 9.2, color: MUTED, flexShrink: 0 },
    note: { fontSize: 9.2, color: MUTED, fontStyle: "italic" },
    bullet: { flexDirection: "row", marginTop: 1 },
    bulletMark: { width: 10, color: MUTED },
    bulletText: { flex: 1 },

    line: { marginBottom: 2 },
    label: { fontWeight: 600, color: INK },
});

const Bullet = ({ children }: { children: string }) => (
    <View style={s.bullet}>
        <Text style={s.bulletMark}>-</Text>
        <Text style={s.bulletText}>{children}</Text>
    </View>
);

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <View style={s.section}>
        <Text style={s.sectionTitle}>{title}</Text>
        {children}
    </View>
);

export default function CVDocument() {
    const cvProjects = CV_PROJECTS.map((id) => projects.find((p) => p.id === id)).filter((p) => p !== undefined);

    return (
        <Document title={`${profile.name} - CV`} author={profile.name} subject={profile.title}>
            <Page size="A4" style={s.page}>
                <Text style={s.name}>{profile.name}</Text>
                <Text style={s.title}>{profile.title}</Text>
                <Text style={s.contact}>
                    <Link src={`mailto:${profile.email}`} style={s.link}>{profile.email}</Link>
                    {"  ·  "}
                    <Link src={profile.linkedin.url} style={s.link}>{profile.linkedin.label}</Link>
                    {"  ·  "}
                    <Link src={profile.github.url} style={s.link}>{profile.github.label}</Link>
                    {"  ·  "}
                    <Link src={profile.website.url} style={s.link}>{profile.website.label}</Link>
                </Text>
                <Text style={[s.contact, { marginTop: 1 }]}>{profile.location}</Text>

                <Section title="Education">
                    {education.map((e) => (
                        <View key={e.degree} style={s.entry} wrap={false}>
                            <View style={s.row}>
                                <Text style={s.heading}>{e.degree}<Text style={s.org}>, {e.school}</Text></Text>
                                <Text style={s.date}>{e.period}</Text>
                            </View>
                            <Text>{educationLine(e)}</Text>
                        </View>
                    ))}
                </Section>

                <Section title="Experience">
                    {experience.map((x) => (
                        <View key={x.role + x.org} style={s.entry} wrap={false}>
                            <View style={s.row}>
                                <Text style={s.heading}>{x.role}<Text style={s.org}>, {x.org}</Text></Text>
                                <Text style={s.date}>{x.employment ? `${x.period}  ·  ${x.employment}` : x.period}</Text>
                            </View>
                            {x.cvNote && <Text style={s.note}>{x.cvNote}</Text>}
                            {(x.cvBullets ?? x.bullets).map((b) => <Bullet key={b}>{b}</Bullet>)}
                        </View>
                    ))}
                </Section>

                <Section title="Projects">
                    {cvProjects.map((p) => (
                        <View key={p.id} style={s.entry} wrap={false}>
                            <Text style={s.heading}>{p.cv.title}</Text>
                            <Text>{p.cv.line}</Text>
                        </View>
                    ))}
                </Section>

                <Section title="Skills, certifications and interests">
                    {skills.map((g) => (
                        <Text key={g.label} style={s.line}><Text style={s.label}>{g.label}: </Text>{g.items.join(", ")}</Text>
                    ))}
                    <Text style={s.line}>
                        <Text style={s.label}>Languages: </Text>
                        {languages.map((l) => `${l.name}: ${l.level}`).join(";  ")}
                    </Text>
                    <Text style={s.line}><Text style={s.label}>Certifications: </Text>{certifications.map((c) => c.short).join(";  ")}</Text>
                    <Text style={s.line}>
                        <Text style={s.label}>Memberships and activities: </Text>
                        {[...memberships.map((m) => `${m.name} (${m.role})`), ...activities].join(";  ")}
                    </Text>
                    <Text style={s.line}><Text style={s.label}>Interests: </Text>{interests.join(", ")}</Text>
                </Section>
            </Page>
        </Document>
    );
}
