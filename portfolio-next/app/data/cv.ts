// Single source of truth for everything that appears on the CV.
// The home page, the /cv page and the generated PDF (scripts/build-cv.tsx) all read from here,
// so a fact changes in one place only. Project write-ups live in ./projects.ts.

export const cvFileName = "Muhammet-Ali-Yavuz-CV.pdf";
export const cvHref = `/${cvFileName}`;

export const profile = {
    name: "Muhammet Ali Yavuz",
    title: "Naval Architect and Ocean Engineer",
    born: "August 2003",
    location: "Lisbon, Portugal",
    email: "yavuzmu21@itu.edu.tr",
    website: { label: "yavuzma.github.io", url: "https://yavuzma.github.io" },
    linkedin: { label: "linkedin.com/in/yavuzitu", url: "https://www.linkedin.com/in/yavuzitu" },
    github: { label: "github.com/yavuzma", url: "https://github.com/yavuzma" },
    // One factual paragraph: what I do, with what, and where. No adjectives about myself.
    summary:
        "Naval architect and ocean engineer (B.Sc. Shipbuilding and Ocean Engineering, Istanbul Technical University, 2026), currently a research trainee at CENTEC, Instituto Superior Técnico, in Lisbon. My work combines CFD in STAR-CCM+, ANSYS Fluent and OpenFOAM with comparison against experimental data, and Python-based automation of laboratory equipment. At CENTEC I work on CFD modelling of turbulent propeller-wake interaction and the hydroacoustic characterization of a propeller operating in the wake of a submerged body.",
};

export type EducationEntry = {
    degree: string;
    school: string;
    location: string;
    period: string;
    grade?: { label: string; value: string; scale: string };
    details: string[];
    verify?: { url: string; code: string };
};

// One line for the CV: grade first, then the details.
export const educationLine = (e: EducationEntry) =>
    [...(e.grade ? [`${e.grade.label} ${e.grade.value} / ${e.grade.scale}`] : []), ...e.details].join("  ·  ");

export const education: EducationEntry[] = [
    {
        degree: "B.Sc. Shipbuilding and Ocean Engineering",
        school: "Istanbul Technical University",
        location: "Istanbul, Türkiye",
        period: "Sep 2021 - Aug 2026",
        grade: { label: "GPA", value: "3.25", scale: "4.00" },
        details: ["5-year programme including a 1-year English preparatory year"],
    },
    {
        degree: "ATHENS Exchange Programme (TUD14)",
        school: "Delft University of Technology",
        location: "Delft, Netherlands",
        period: "14-21 Mar 2026",
        grade: { label: "Local mark", value: "9", scale: "10" },
        details: ["Computer Aided Analysis & Optimization of Sustainable Electrical Power Systems"],
        verify: { url: "https://register.athensnetwork.eu/verify", code: "BN22-JYBT-79WV-HDCV" },
    },
];

export type Vessel = { name: string; type?: string; imo?: string; url?: string };

export type ExperienceEntry = {
    role: string;
    org: string;
    orgUrl?: string;
    period: string;
    current: boolean;
    employment?: "Full-time";
    context?: string;
    // Short note shown on the PDF only.
    cvNote?: string;
    bullets: string[];
    // Shorter wording for the one-page PDF; falls back to `bullets`.
    cvBullets?: string[];
    vessels?: Vessel[];
};

export const experience: ExperienceEntry[] = [
    {
        role: "Research Trainee (Erasmus+)",
        org: "CENTEC, Instituto Superior Técnico",
        orgUrl: "http://www.centec.tecnico.ulisboa.pt/centec/index.aspx",
        period: "Sep 2026 - Present",
        current: true,
        employment: "Full-time",
        context: "Centre for Marine Technology and Ocean Engineering, University of Lisbon.",
        bullets: [
            "CFD modelling of turbulent propeller-wake interaction.",
            "Hydroacoustic characterization of a propeller operating in the wake of a submerged body.",
        ],
    },
    {
        role: "Junior Researcher",
        org: "ITUKAT",
        orgUrl: "https://itukat.itu.edu.tr/en/home/",
        period: "Aug 2025 - Present",
        current: true,
        context: "Work is under confidentiality; descriptions focus on methods.",
        cvNote: "Confidential projects; described by method.",
        bullets: [
            "Force and moment analysis in CFD simulations, validated against experimental (EFD) data.",
            "Development of control and automation algorithms for engineering applications.",
        ],
    },
    {
        role: "Student Observer",
        org: "ITU Ata Nutku Towing Tank",
        period: "Sep 2024 - Jul 2026",
        current: false,
        bullets: [
            "Observed resistance, propulsion and seakeeping experiments and towing-tank test procedures.",
        ],
    },
    {
        role: "Production Engineering Intern",
        org: "Anadolu Shipyard",
        orgUrl: "https://www.anadolushipyard.com/",
        period: "Jun 2026",
        current: false,
        employment: "Full-time",
        context: "Naval shipyard; combat and navigation systems are confidential, so this covers propulsion, assembly and quality work.",
        bullets: [
            "Gas turbine (GE LM2500) foundation mounting and precision coupling alignment with micrometer and dial comparator.",
            "Propeller shaft line alignment using optical levelling and a wall-mounted reflector reference network.",
            "Controllable-pitch propeller blade-bolt assembly with elongation-controlled tightening and crack inspection (NDT).",
            "CODAG propulsion plant (twin diesel + GE LM2500, MRG/CCG transmission); hull surface preparation and coating.",
        ],
        cvBullets: [
            "Gas turbine (GE LM2500) foundation mounting and precision coupling alignment.",
            "Propeller shaft line alignment; CPP blade-bolt assembly with elongation-controlled tightening and NDT.",
        ],
        vessels: [
            { name: "T.C.G. 161-166", type: "New-type landing craft" },
            { name: "T.C.G. 516 · 519 · 522", type: "I-class frigate (MİLGEM)" },
        ],
    },
    {
        role: "Production Engineering Intern",
        org: "Beşiktaş Shipyard",
        orgUrl: "https://www.besiktasshipyard.com/",
        period: "Aug - Sep 2024",
        current: false,
        employment: "Full-time",
        bullets: [
            "Inspection and maintenance of main engines, hydraulic systems and generators.",
            "Air compressor overhaul including cooling system repair.",
            "Marine pump maintenance including ballast water treatment systems.",
            "Welding, pipe installation and surface coating.",
        ],
        cvBullets: [
            "Main engine, hydraulic and generator maintenance; compressor and ballast pump overhaul.",
        ],
        vessels: [
            { name: "TENDUA", imo: "9299862", url: "https://www.marinetraffic.com/en/ais/details/ships/imo:9299862" },
            { name: "MARAN POSEIDON", imo: "9402926", url: "https://www.marinetraffic.com/en/ais/details/ships/imo:9402926" },
            { name: "ALRAR", imo: "9284013", url: "https://www.marinetraffic.com/en/ais/details/ships/imo:9284013" },
        ],
    },
    {
        role: "Mechanical Engineering Intern",
        org: "Mensa Makina",
        period: "Aug - Sep 2023",
        current: false,
        employment: "Full-time",
        bullets: [
            "Designed and installed a ventilation system for a sheet-metal processing line, including duct layout and airflow planning.",
            "Fabricated sheet-metal components (pipes, flanges, air filters) for the ventilation unit.",
        ],
        cvBullets: [
            "Designed, fabricated and installed a ventilation system for a sheet-metal processing line.",
        ],
    },
];

export const skills: { label: string; items: string[] }[] = [
    { label: "CFD & analysis", items: ["STAR-CCM+", "ANSYS Fluent", "OpenFOAM", "Maxsurf"] },
    { label: "Design", items: ["SolidWorks", "Rhinoceros 3D", "AutoCAD"] },
    { label: "Programming", items: ["Python", "C / C++", "MATLAB", "Arduino"] },
];

export const languages: { name: string; level: string }[] = [
    { name: "Turkish", level: "Native" },
    { name: "English", level: "Professional working proficiency" },
    { name: "German", level: "B1 (telc)" },
];

export type CertificateDetail = {
    image: string;
    alt: string;
    title: string;
    subtitle: string;
    recipient: string;
    body: string;
    signatories: { name: string; role: string }[];
    note?: string;
};

export type Certification = {
    name: string;
    issuer: string;
    // Compact label for the one-page PDF.
    short: string;
    date?: string;
    url?: string;
    certificate?: CertificateDetail;
};

export const certifications: Certification[] = [
    {
        name: "Submarine Technology and Design Training (26 h)",
        issuer: "GMO Student Commission",
        short: "Submarine Technology and Design (GMO, 26 h)",
        date: "Oct - Nov 2024",
        certificate: {
            image: "/images/certificates/submarine-technology-design-gmo.png",
            alt: "Certificate of attendance for the GMO Submarine Technology and Design Training",
            title: "Certificate of Attendance",
            subtitle: "Submarine Technology and Design Training",
            recipient: "Mr. Muhammet Ali Yavuz",
            body: "Has earned this certificate by attending the 26-hour Submarine Technology and Design Training, organized by the GMO Student Commission on 26-27 October and 23-24 November 2024, and delivered by Asst. Prof. Dr. Munir Cansın Özden.",
            signatories: [
                { name: "Asst. Prof. Dr. Munir Cansın Özden", role: "Instructor" },
                { name: "Bülent Hüseyinoğlu", role: "Chairman of the Board, GMO" },
            ],
            note: "GMO: Chamber of Naval Architects and Marine Engineers of Türkiye (Gemi Mühendisleri Odası). Translated from the Turkish original shown above.",
        },
    },
    { name: "Certified SolidWorks Associate (CSWA)", issuer: "Dassault Systèmes", short: "SolidWorks CSWA", url: "https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-9JG2FEML5U" },
    { name: "telc Deutsch B1", issuer: "telc", short: "telc Deutsch B1", url: "https://results.telc.net/qr/JfgH5TJpT96WF1qbG0pVcwnzx5BYe0eNiHHrqN_Mq3Lnsl3NNCVKvam7jM_xm5zr" },
    { name: "Scientific Computing with Python", issuer: "freeCodeCamp", short: "Python (freeCodeCamp)", url: "https://www.freecodecamp.org/certification/muhali-itu/scientific-computing-with-python-v7" },
    { name: "AutoCAD", issuer: "Coursera", short: "AutoCAD (Coursera)", url: "https://coursera.org/verify/LXRP49PG83TZ" },
    { name: "Arduino", issuer: "Udemy", short: "Arduino (Udemy)", url: "https://www.udemy.com/certificate/UC-74396a11-d4a8-4924-947b-f6af469f287e/" },
];

export const memberships = [{ name: "SNAME", role: "Student Member", full: "Society of Naval Architects & Marine Engineers", url: "https://www.sname.org" }];

export const activities = ["ITU Shipbuilding Engineering Club"];

export const interests = ["Hydrodynamics", "Hydroacoustics", "Propeller and ship design", "Marine and autonomous systems", "Defense technology", "AI"];
