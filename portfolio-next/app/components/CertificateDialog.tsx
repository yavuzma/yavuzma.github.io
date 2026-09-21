"use client";

import { useRef } from "react";
import type { CertificateDetail } from "../data/cv";

// Native <dialog>: showModal() traps focus, Escape closes it and focus returns to the button.
export default function CertificateDialog({ certificate, label = "View certificate" }: { certificate: CertificateDetail; label?: string }) {
    const ref = useRef<HTMLDialogElement>(null);
    const titleId = "certificate-title";

    return (
        <>
            <button type="button" className="link-button" onClick={() => ref.current?.showModal()}>
                {label}
            </button>
            <dialog
                ref={ref}
                className="dialog"
                aria-labelledby={titleId}
                onClick={(e) => {
                    // A click on the backdrop lands on the dialog element itself.
                    if (e.target === ref.current) ref.current?.close();
                }}
            >
                <div className="dialog__inner">
                    <div className="dialog__bar">
                        <h2 id={titleId}>{certificate.subtitle}</h2>
                        <button type="button" className="dialog__close" onClick={() => ref.current?.close()} aria-label="Close">×</button>
                    </div>

                    <a href={certificate.image} target="_blank" rel="noopener noreferrer" className="dialog__image" style={{ display: "block" }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={certificate.image} alt={certificate.alt} loading="lazy" />
                    </a>

                    <div className="translation">
                        <p className="translation__label">English translation of the Turkish original</p>
                        <h3>{certificate.title}</h3>
                        <p><strong>{certificate.subtitle}</strong></p>
                        <p>{certificate.recipient}</p>
                        <p>{certificate.body}</p>
                        <div className="signatories">
                            {certificate.signatories.map((s) => (
                                <div key={s.name}>
                                    <strong>{s.name}</strong>
                                    <span>{s.role}</span>
                                </div>
                            ))}
                        </div>
                        {certificate.note && <p className="translation__note">{certificate.note}</p>}
                    </div>
                </div>
            </dialog>
        </>
    );
}
