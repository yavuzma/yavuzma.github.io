"use client";

import { useState, useCallback, type CSSProperties, type MouseEvent } from "react";

type Props = {
    className?: string;
    style?: CSSProperties;
    onMouseMove?: (e: MouseEvent<HTMLButtonElement>) => void;
    onMouseEnter?: (e: MouseEvent<HTMLButtonElement>) => void;
    onMouseLeave?: (e: MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode;
};

export default function DownloadCVButton({
    className,
    style,
    onMouseMove,
    onMouseEnter,
    onMouseLeave,
    children = "Download CV ↓",
}: Props) {
    const [busy, setBusy] = useState(false);

    const handleClick = useCallback(async () => {
        if (busy) return;
        setBusy(true);
        try {
            // Lazy-load to keep main bundle small
            const [{ pdf }, { default: CVDocument }] = await Promise.all([
                import("@react-pdf/renderer"),
                import("./CVDocument"),
            ]);
            const blob = await pdf(<CVDocument />).toBlob();
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "CV_Muhammet_Ali_Yavuz.pdf";
            document.body.appendChild(a);
            a.click();
            a.remove();
            URL.revokeObjectURL(url);
        } catch (err) {
            console.error("PDF generation failed:", err);
            const msg = err instanceof Error ? err.message : String(err);
            alert("PDF oluşturulamadı.\n\nHata: " + msg + "\n\nKonsol (F12) içinde detayları görebilirsiniz.");
        } finally {
            setBusy(false);
        }
    }, [busy]);

    return (
        <button
            type="button"
            onClick={handleClick}
            onMouseMove={onMouseMove}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            disabled={busy}
            className={className}
            style={style}
            aria-busy={busy}
        >
            {busy ? "Generating PDF..." : children}
        </button>
    );
}
