import type Lenis from "lenis";

let instance: Lenis | null = null;

export function setLenisInstance(l: Lenis | null) {
    instance = l;
}

export function getLenis() {
    return instance;
}

export function smoothScrollTo(target: string | HTMLElement | number, offset = -75) {
    const lenis = getLenis();
    if (lenis) {
        lenis.scrollTo(target, { offset });
        return;
    }
    if (typeof target === "string") {
        const el = document.querySelector(target);
        if (el) window.scrollTo({ top: (el as HTMLElement).offsetTop + offset, behavior: "smooth" });
    } else if (target instanceof HTMLElement) {
        window.scrollTo({ top: target.offsetTop + offset, behavior: "smooth" });
    } else if (typeof target === "number") {
        window.scrollTo({ top: target + offset, behavior: "smooth" });
    }
}
