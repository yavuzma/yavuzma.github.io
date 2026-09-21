export interface ProjectGalleryImage {
    src: string;
    alt: string;
    caption: string;
}

export interface ProjectSpec {
    label: string;
    value: string;
}

export interface ProjectTableRow {
    cells: string[];
    highlight?: boolean;
    diffColor?: string;
}

export interface ProjectTable {
    headers: string[];
    rows: ProjectTableRow[];
}

export interface ProjectSidebarSection {
    title: string;
    items: string[];
}

export interface ProjectModalSection {
    title: string;
    type: "text" | "specs" | "table" | "gallery" | "list" | "data-table" | "runs";
    content?: string[];
    specs?: ProjectSpec[];
    table?: ProjectTable;
    gallery?: ProjectGalleryImage[];
    items?: string[];
    dataTable?: { rows: { th: string; td: string; th2?: string; td2?: string }[] };
}

// One simulation run of a parameter study, shown in the run viewer on the case study page.
export interface ProjectRun {
    label: string;
    turbulence: string;
    mesh: string;
    timeStep: string;
    drag: string;
    ct: string;
    deviation: string;
    image: string;
}

export interface Project {
    id: string;
    // One-line summary used by the CV (PDF and /cv page).
    cv: { title: string; line: string };
    title: string;
    shortDesc: string;
    badge: string;
    image: string;
    imageAlt: string;
    imageCaption?: string;
    // What kind of work this was (course, graduation project, research...), when known.
    context?: string;
    // What the work does not show; stated so results are read at the right strength.
    limitations?: string[];
    runs?: ProjectRun[];
    imageStyle?: string;
    gradient: string;
    metrics: { value: string; label: string }[];
    modal: {
        badge: string;
        subtitle: string;
        meta?: { icon: string; text: string }[];
        mainSections: ProjectModalSection[];
        sidebarSections: ProjectSidebarSection[];
        fullWidthImage?: { src: string; alt: string };
    };
}

export const projects: Project[] = [
    {
        id: "tcsg",
        cv: { title: "TCSG FISILTI - Hybrid Coast Guard Vessel (undergraduation project)", line: "69.5 m hybrid vessel with counter-rotating Azipod propulsion; 24 kn maximum speed, 63 crew." },
        title: "Undergraduation Project - TCSG FISILTI (WHISPER)",
        shortDesc:
            "Designed for surveillance, environmental response, and special ops, this 69.5m hybrid vessel features Azipod propulsion and extensive mission equipment.",
        badge: "Ship Design · Preliminary",
        image: "/images/projects/undergraduation/side_view.png",
        imageAlt: "Side profile of the TCSG FISILTI hull form",
        imageCaption: "Hull form, side profile.",
        context: "Undergraduation project, Istanbul Technical University, Dec 2025.",
        imageStyle: "object-contain p-2",
        gradient: "from-slate-800 to-slate-950",
        metrics: [
            { value: "69.5 m", label: "LOA" },
            { value: "24 kn", label: "Speed" },
            { value: "Hybrid", label: "Propulsion" },
        ],
        modal: {
            badge: "Ship Design · Preliminary",
            subtitle: "Preliminary design of a 69.5 m hybrid coast guard vessel with counter-rotating Azipod propulsion",
            meta: [
                { icon: "calendar", text: "Dec 2025" },
                { icon: "activity", text: "Preliminary Design" },
            ],
            mainSections: [
                {
                    title: "Main Particulars",
                    type: "data-table",
                    dataTable: {
                        rows: [
                            { th: "LOA", td: "69.50 m", th2: "Beam", td2: "12.50 m" },
                            { th: "LWL", td: "67.50 m", th2: "Draft", td2: "3.50 m" },
                            { th: "Depth", td: "7.00 m", th2: "Displacement", td2: "1306 t" },
                            { th: "Max Speed", td: "24 kn", th2: "Service Speed", td2: "17 kn" },
                            { th: "Range", td: "3000 nm @ 17 kn", th2: "Endurance", td2: "20 days" },
                            { th: "Crew", td: "63 (7 Officers, 26 Petty Officers, 30 Ratings)" },
                        ],
                    },
                },
                {
                    title: "Power & Propulsion",
                    type: "data-table",
                    dataTable: {
                        rows: [
                            { th: "Propulsion", td: "2 × Counter Rotating AZIPOD" },
                            { th: "Total Brake Power", td: "8,562 kW" },
                            { th: "Bow Thruster", td: "250 kW (40 kN thrust)" },
                            { th: "Gensets", td: "4 × MAN 20V175D-MEM (3072 kWe each)" },
                        ],
                    },
                },
                {
                    title: "Equipment & Payload",
                    type: "data-table",
                    dataTable: {
                        rows: [
                            { th: "Main Gun", td: "1 × RAFAEL Typhoon Mk 30-c (30/40mm)" },
                            { th: "RCWS", td: "2 × ASELSAN STAMP (12.7mm)" },
                            { th: "Rescue Boats", td: "2 × Merlin-615 R MKI" },
                            { th: "RHIB", td: "1 × ASIS Aluminium 11.5m (>50 kn)" },
                            { th: "UAV", td: "2 × Insitu Integrator (VTOL)" },
                            { th: "Oil Recovery", td: "DESMI RO-BOOM 1000 (600m boom)" },
                            { th: "Sonar", td: "ASELSAN FERSAH (Hull) + ARIS Explorer 3000 (DDS)" },
                        ],
                    },
                },
                {
                    title: "Tank Capacities",
                    type: "data-table",
                    dataTable: {
                        rows: [
                            { th: "Fuel Oil", td: "355 t", th2: "Fresh Water", td2: "64 t" },
                            { th: "Recovered Oil", td: "20 t", th2: "Waste", td2: "14 t" },
                        ],
                    },
                },
            ],
            sidebarSections: [
                {
                    title: "Primary Missions",
                    items: [
                        "Search and Rescue (SAR)",
                        "Law Enforcement & Maritime Interdiction",
                        "Environmental Protection (Oil Spill)",
                        "Ports, Waterways & Coastal Security",
                    ],
                },
                {
                    title: "Secondary Missions",
                    items: [
                        "Counterterrorism & Special Ops",
                        "Anti-Piracy Operations",
                        "UAV Surveillance (VTOL)",
                        "Intelligence Gathering",
                    ],
                },
            ],
            fullWidthImage: {
                src: "/images/projects/undergraduation/side_view.png",
                alt: "TCSG FISILTI Side View",
            },
        },
    },
    {
        id: "alicat",
        cv: { title: "Alicat Mass Flow Controller - Control Interface", line: "Python desktop app: AsyncIO serial I/O, real-time monitoring, automated test sequences, data logging." },
        title: "Alicat Mass Flow Controller - Control Interface",
        shortDesc:
            "Desktop app for real-time control, monitoring, and automated data logging.",
        badge: "Python · GUI · Automation",
        image: "/images/projects/alicat_flowmeter/gui.png",
        imageAlt: "Screenshot of the Alicat mass flow controller control interface",
        imageCaption: "Control interface: live readings, setpoint control and test sequences.",
        gradient: "from-slate-950 to-slate-700",
        metrics: [
            { value: "Python", label: "Language" },
            { value: "AsyncIO", label: "Async" },
            { value: "Serial", label: "Comm" },
        ],
        modal: {
            badge: "Python Desktop App · Control Systems",
            subtitle:
                "Windows desktop application for real-time monitoring and automation",
            mainSections: [
                {
                    title: "Project Overview",
                    type: "text",
                    content: [
                        "I built a Windows desktop application to control an Alicat Mass Flow Controller via serial communication. The tool provides real-time monitoring, manual setpoint control, automated test sequences from Excel matrices, and clean Excel export for experiments and reporting.",
                        "This application bridges the gap between hardware control and data analysis, providing a robust interface for experimental setups.",
                    ],
                },
                {
                    title: "Technical Stack",
                    type: "specs",
                    specs: [
                        { label: "Language", value: "Python 3.10+" },
                        { label: "Interface", value: "Tkinter (CustomTkinter)" },
                        { label: "Backend", value: "AsyncIO (Event Loop)" },
                        { label: "Protocol", value: "RS-232 / PySerial" },
                        { label: "Data Handling", value: "Pandas & OpenPyXL" },
                        { label: "Platform", value: "Windows" },
                    ],
                },
            ],
            sidebarSections: [
                {
                    title: "Key Features",
                    items: [
                        "Real-time Telemetry: Parsing of pressure, temperature, mass/volumetric flow, setpoint readback, and valve position.",
                        "Non-blocking Architecture: Tkinter UI + asyncio worker loop in a dedicated thread for smooth performance.",
                        "Safe Serial I/O: Implementation of asyncio.Lock to avoid command/poll collisions.",
                        "Automated Sequences: Runner with Run / Reverse / Pause / Continue capabilities, including progress tracking and timers.",
                        "Excel Export Pipeline: Generates Matrix + Log + Setpoint Events sheets with professional formatting via openpyxl.",
                        "Matrix Editor: Built-in editor supporting paste from Excel, keyboard navigation, and bulk operations.",
                        "Voice Notifications: Optional Windows SAPI text-to-speech for state changes and setpoint alerts.",
                    ],
                },
            ],
        },
    },
    {
        id: "kcs",
        cv: { title: "KCS Hull with Rudder - CFD Resistance", line: "Unsteady RANS + VOF in STAR-CCM+; five-run sensitivity study; -2.7% to +0.8% deviation from EFD." },
        title: "KCS Hull with Rudder - Resistance Prediction",
        shortDesc:
            "Free-surface CFD of the KCS container ship with rudder: unsteady RANS with VOF in a five-run sensitivity study, compared with experimental (EFD) resistance.",
        badge: "CFD · STAR-CCM+",
        image: "/images/projects/kcs_hull_with_rudder/1.png",
        imageAlt: "Contour plot of free-surface elevation around the KCS hull",
        imageCaption: "Free-surface elevation around the hull, run 1 (k-ε, 1.05 M cells, Δt = 0.04 s).",
        limitations: [
            "Mesh density, time step and turbulence model change together between runs, so the study cannot attribute a change in resistance to any single parameter. It is a sensitivity study, not a formal grid-convergence (verification) study.",
            "Run 3, with the finest mesh and time step, resolves the Kelvin wake most sharply yet deviates most from EFD (-2.7%). The closest agreement (run 1, -0.2%) should not be read as the most accurate setup without a controlled refinement study.",
        ],
        runs: [
            { label: "Run 1", turbulence: "k-ε", mesh: "1.05 M", timeStep: "0.04 s", drag: "83.668 N", ct: "0.00364", deviation: "-0.22%", image: "/images/projects/kcs_hull_with_rudder/1.png" },
            { label: "Run 2", turbulence: "k-ε", mesh: "1.99 M", timeStep: "0.04 s", drag: "84.483 N", ct: "0.00368", deviation: "+0.75%", image: "/images/projects/kcs_hull_with_rudder/2.png" },
            { label: "Run 3", turbulence: "k-ε", mesh: "2.03 M", timeStep: "0.016 s", drag: "81.625 N", ct: "0.00355", deviation: "-2.66%", image: "/images/projects/kcs_hull_with_rudder/3.png" },
            { label: "Run 4", turbulence: "k-ε", mesh: "1.05 M", timeStep: "0.016 s", drag: "83.094 N", ct: "0.00362", deviation: "-0.90%", image: "/images/projects/kcs_hull_with_rudder/4.png" },
            { label: "Run 5", turbulence: "k-ω SST", mesh: "1.05 M", timeStep: "0.04 s", drag: "83.046 N", ct: "0.00361", deviation: "-0.96%", image: "/images/projects/kcs_hull_with_rudder/5.png" },
        ],
        gradient: "from-sky-950 to-sky-600",
        metrics: [
            { value: "-2.7 / +0.8%", label: "range vs EFD" },
            { value: "5", label: "runs" },
            { value: "Unsteady RANS", label: "Method" },
        ],
        modal: {
            badge: "CFD Analysis · STAR-CCM+",
            subtitle:
                "CFD simulation of the KRISO Container Ship with rudder and free surface modeling",
            mainSections: [
                {
                    title: "Project Overview",
                    type: "text",
                    content: [
                        "This project involves comprehensive computational fluid dynamics (CFD) analysis of the KRISO Container Ship (KCS) hull form with rudder. The study focuses on resistance prediction using unsteady Reynolds-Averaged Navier-Stokes (RANS) equations with Volume of Fluid (VOF) method.",
                        "The simulation was run in STAR-CCM+ as a five-run sensitivity study, varying mesh density, time step and turbulence model, and compared with experimental resistance data.",
                    ],
                },
                {
                    title: "Technical Specifications",
                    type: "specs",
                    specs: [
                        { label: "Experimental Drag", value: "83.852 N" },
                        { label: "Drag Coeff (Ct)", value: "0.00365" },
                        { label: "Ship Velocity", value: "2.196 m/s" },
                        { label: "Froude Number", value: "0.26" },
                        { label: "Wetted Area", value: "9.55 m²" },
                        { label: "Density (ρ)", value: "997.56 kg/m³" },
                    ],
                },
                {
                    title: "Simulation Results",
                    type: "table",
                    table: {
                        headers: ["#", "Turbulence", "Mesh Count", "Time Step", "Drag [N]", "Ct", "Diff [%]"],
                        rows: [
                            { cells: ["1", "k-ε", "1.05 M", "0.04s", "83.668", "0.00364", "-0.219%"], diffColor: "green" },
                            { cells: ["2", "k-ε", "1.99 M", "0.04s", "84.483", "0.00368", "+0.752%"], diffColor: "red" },
                            { cells: ["3", "k-ε", "2.03 M", "0.016s", "81.625", "0.00355", "-2.656%"], diffColor: "red" },
                            { cells: ["4", "k-ε", "1.05 M", "0.016s", "83.094", "0.00362", "-0.904%"], diffColor: "green" },
                            { cells: ["5", "k-ω SST", "1.05 M", "0.04s", "83.046", "0.00361", "-0.961%"], diffColor: "green" },
                        ],
                    },
                },
                {
                    title: "Compare the runs",
                    type: "runs",
                },
                {
                    title: "Free surface",
                    type: "gallery",
                    gallery: [
                        { src: "/images/projects/kcs_hull_with_rudder/3_free_surface.png", alt: "Side view of the air volume fraction field around the KCS hull", caption: "Volume fraction of air (VOF), side view." },
                    ],
                },
            ],
            sidebarSections: [
                {
                    title: "Study Highlights",
                    items: [
                        "Method: Unsteady RANS with Volume of Fluid (VOF)",
                        "Software: STAR-CCM+",
                        "Mesh: 1.05M - 2.03M cells across runs",
                        "Time Steps: Sensitivity analysis (0.016s vs 0.04s)",
                        "Goal: Comparison with experimental data",
                        "Outcome: -2.7% to +0.8% deviation from EFD across five runs",
                    ],
                },
            ],
        },
    },
    {
        id: "darpa",
        cv: { title: "DARPA SUBOFF - Appendage Resistance", line: "STAR-CCM+ resistance of AFF1, AFF3 and AFF8; 0.5% deviation from EFD; ITTC uncertainty assessment." },
        title: "DARPA SUBOFF - Appendage Resistance",
        shortDesc:
            "Submarine appendage resistance: AFF1, AFF3, AFF8 configurations per ITTC guidelines.",
        badge: "CFD · STAR-CCM+",
        image: "/images/projects/darpa/mesh.png",
        imageAlt: "Trimmed hexahedral volume mesh around the DARPA SUBOFF hull and appendages",
        imageCaption: "Volume mesh refinement around the hull and appendages.",
        gradient: "from-slate-900 to-green-900",
        metrics: [
            { value: "0.5%", label: "deviation" },
            { value: "3", label: "configs" },
            { value: "ITTC", label: "Guidelines" },
        ],
        modal: {
            badge: "CFD Analysis · STAR-CCM+",
            subtitle: "Submarine appendage resistance analysis following ITTC guidelines",
            mainSections: [
                {
                    title: "Project Overview",
                    type: "text",
                    content: [
                        "This project focuses on the hydrodynamic resistance analysis of the DARPA SUBOFF submarine model with various appendage configurations. The study investigates the resistance characteristics of three different configurations: AFF1 (bare hull), AFF3 (hull + rudder), and AFF8 (hull + sail + rudder).",
                        "Mesh refinement and uncertainty assessment were performed following ITTC guidelines. Velocity fields, static/total pressure contours, streamlines, and y⁺ distributions were evaluated for hydrodynamic performance insights.",
                    ],
                },
                {
                    title: "Key Results",
                    type: "list",
                    items: [
                        "Achieved deviations as low as 0.5% from experimental data in optimal configurations",
                        "Analysed resistance components (pressure and viscous) and part-by-part contributions (hull, sail, rudder) across multiple speeds",
                        "Performed mesh refinement and uncertainty assessment following ITTC guidelines",
                        "Evaluated velocity fields, static/total pressure contours, streamlines, and y⁺ distributions",
                    ],
                },
                {
                    title: "Visual Results",
                    type: "gallery",
                    gallery: [
                        { src: "/images/projects/darpa/parts_darpa.png", alt: "SUBOFF Geometry Parts", caption: "DARPA SUBOFF geometry - Bare hull, fairwater, and ring wings" },
                        { src: "/images/projects/darpa/domain_dimensions.png", alt: "Computational Domain", caption: "Computational domain dimensions (LBP-based sizing)" },
                        { src: "/images/projects/darpa/boundary_types.png", alt: "Boundary Conditions", caption: "Boundary condition setup - Velocity inlet, pressure outlet, symmetry planes" },
                        { src: "/images/projects/darpa/darpa_graph.png", alt: "Resistance Comparison", caption: "Resistance vs. speed - CFD vs. EFD comparison for AFF1, AFF3, AFF8" },
                    ],
                },
            ],
            sidebarSections: [
                {
                    title: "Technical Specifications",
                    items: [
                        "Software: STAR-CCM+ 2024.1",
                        "Turbulence Model: k-ε",
                        "Configurations: AFF1, AFF3, AFF8",
                        "Reynolds Number: 1.2 × 10⁷",
                        "Deviation: 0.5% from EFD",
                    ],
                },
                {
                    title: "Configurations Analyzed",
                    items: [
                        "AFF1 (Bare Hull): Baseline configuration without appendages for reference resistance",
                        "AFF3 (Hull + Rudder): Hull with rudder to assess rudder resistance contribution",
                        "AFF8 (Hull + Sail + Rudder): Complete configuration with sail and rudder",
                    ],
                },
            ],
        },
    },
    {
        id: "offshore",
        cv: { title: "Offshore Platform - Concept Design", line: "Semi-submersible concept with a 70 × 40 m deck; Rhinoceros 3D modelling, Maxsurf stability and ANSYS Fluent CFD." },
        title: "Offshore Platform - Design & Analysis",
        shortDesc:
            "Semi-submersible platform concept: Rhinoceros 3D modelling, Maxsurf stability and ANSYS Fluent CFD.",
        badge: "Design · CFD · Maxsurf",
        image: "/images/projects/offshore_platform/1.png",
        imageAlt: "Rhinoceros 3D model of the semi-submersible drilling platform",
        imageCaption: "Rhinoceros 3D model of the platform concept.",
        limitations: ["Conceptual design: no structural analysis was performed."],
        gradient: "from-purple-950 to-purple-700",
        metrics: [
            { value: "70×40m", label: "deck" },
            { value: "25m", label: "derrick" },
            { value: "Multi-tool", label: "Approach" },
        ],
        modal: {
            badge: "Design · CFD · Stability Analysis",
            subtitle: "Offshore platform concept design: 3D modeling, stability and CFD",
            mainSections: [
                {
                    title: "Project Overview",
                    type: "text",
                    content: [
                        "This multidisciplinary project encompasses the complete design cycle of a semi-submersible offshore drilling platform. The work integrates 3D modeling, hydrostatic stability analysis, and computational fluid dynamics in a conceptual platform design.",
                        "The platform features a 70×40m deck area with a 25m derrick tower, with hydrostatic stability assessed in Maxsurf Stability.",
                    ],
                },
                {
                    title: "Technical Specifications",
                    type: "specs",
                    specs: [
                        { label: "Deck Dimensions", value: "70m × 40m" },
                        { label: "Derrick Height", value: "25 meters" },
                        { label: "Platform Type", value: "Semi-submersible" },
                        { label: "Design Software", value: "Rhino 3D, Maxsurf" },
                        { label: "CFD Software", value: "ANSYS Fluent" },
                        { label: "Operating Depth", value: "500-1500m" },
                    ],
                },
                {
                    title: "Visual Results",
                    type: "gallery",
                    gallery: [
                        { src: "/images/projects/offshore_platform/2.png", alt: "Platform 3D Model - Rear", caption: "Platform 3D model - Rear perspective with helipad visible" },
                        { src: "/images/projects/offshore_platform/pressure_distribution.png", alt: "Pressure Distribution", caption: "CFD pressure distribution on pontoon hulls (ANSYS Fluent)" },
                        { src: "/images/projects/offshore_platform/resistance_graph.png", alt: "Resistance Graph", caption: "Resistance vs. speed curve - Maxsurf analysis" },
                    ],
                },
            ],
            sidebarSections: [
                {
                    title: "Design Phases",
                    items: [
                        "Conceptual Design: Initial sizing and layout based on operational requirements",
                        "3D Modeling: Detailed geometry creation in Rhinoceros 3D including hull, pontoons, and deck structures",
                        "Stability Analysis: Hydrostatic calculations and stability assessment using Maxsurf Stability",
                        "CFD Analysis: Wave interaction and hydrodynamic loading simulation in ANSYS Fluent",
                    ],
                },
                {
                    title: "Key Features",
                    items: [
                        "Four-column semi-submersible configuration for enhanced stability",
                        "Optimized pontoon design for reduced wave-induced motions",
                        "Integrated ballast system for draft control and stability management",
                        "Modular deck design accommodating drilling equipment and crew quarters",
                    ],
                },
            ],
        },
    },
];
