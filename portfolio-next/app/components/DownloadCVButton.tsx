import type { CSSProperties, ReactNode } from "react";
import { cvHref, cvFileName } from "../data/cv";

// Plain link to the PDF generated at build time (scripts/build-cv.tsx); no client-side rendering.
export default function DownloadCVButton({ className, style, children = "Download CV (PDF)" }: { className?: string; style?: CSSProperties; children?: ReactNode }) {
    return (
        <a href={cvHref} download={cvFileName} className={className} style={style}>
            {children}
        </a>
    );
}
