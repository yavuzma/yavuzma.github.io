"use client";

import { useEffect, useRef } from "react";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzUE2hFPs4lGdynxbYJvTSCOeG8O0ynwTLjMwf-5vxQYxp-jr4mnlaZapAOgWIxk_d52A/exec";
const SECRET_TOKEN = "mav-cv-log-2026";

function parseUA(ua: string) {
    let browser = "Bilinmiyor", os = "Bilinmiyor", device = "Masaüstü";
    if (/Mobi|Android/i.test(ua)) device = "Mobil";
    else if (/Tablet|iPad/i.test(ua)) device = "Tablet";
    if (/Edg\//i.test(ua)) browser = "Edge";
    else if (/OPR|Opera/i.test(ua)) browser = "Opera";
    else if (/Chrome/i.test(ua)) browser = "Chrome";
    else if (/Firefox/i.test(ua)) browser = "Firefox";
    else if (/Safari/i.test(ua)) browser = "Safari";
    const bv = ua.match(/(Chrome|Firefox|Safari|Edg|OPR)[\\/\s]([\d.]+)/i);
    if (bv) browser += " " + bv[2];
    if (/Windows NT 10/i.test(ua)) os = "Windows 10/11";
    else if (/Windows NT 6/i.test(ua)) os = "Windows 7/8";
    else if (/Mac OS X/i.test(ua)) os = "macOS";
    else if (/Android (\d+)/i.test(ua)) os = "Android " + RegExp.$1;
    else if (/iPhone OS ([\d_]+)/i.test(ua)) os = "iOS " + RegExp.$1.replace(/_/g, ".");
    else if (/Linux/i.test(ua)) os = "Linux";
    return { browser, os, device };
}

/** Basit headless/bot tespiti */
function detectBot(): boolean {
    if (typeof navigator === "undefined") return true;
    const ua = navigator.userAgent.toLowerCase();
    if (/bot|crawl|spider|headless|phantom|selenium|puppeteer|playwright/i.test(ua)) return true;
    if (navigator.webdriver) return true;
    if (!navigator.languages || navigator.languages.length === 0) return true;
    return false;
}

export default function VisitorTracker() {
    const tracked = useRef(false);

    useEffect(() => {
        if (["localhost", "127.0.0.1"].includes(window.location.hostname)) return;
        if (tracked.current) return;
        if (sessionStorage.getItem("visitor_tracked")) return;
        if (detectBot()) return;

        tracked.current = true;

        const ua = navigator.userAgent;
        const { browser, os, device } = parseUA(ua);

        const baseData = {
            token: SECRET_TOKEN,
            origin: window.location.origin,
            language: navigator.language || "",
            screen: `${screen.width}x${screen.height}`,
            referrer: document.referrer || "",
            pageUrl: window.location.href,
            userAgent: ua,
            browser,
            os,
            device,
            isBot: false,
        };

        fetch("https://ipapi.co/json/", { cache: "no-store" })
            .then((r) => r.json())
            .then((geo) => {
                const payload = {
                    ...baseData,
                    ip: geo.ip || "",
                    country: geo.country_name || "",
                    city: geo.city || "",
                    region: geo.region || "",
                    isp: geo.org || "",
                    org: geo.asn || "",
                    timezone: geo.timezone || "",
                };
                return fetch(SCRIPT_URL, {
                    method: "POST",
                    mode: "no-cors",
                    headers: { "Content-Type": "text/plain" },
                    body: JSON.stringify(payload),
                });
            })
            .catch(() => {
                fetch(SCRIPT_URL, {
                    method: "POST",
                    mode: "no-cors",
                    headers: { "Content-Type": "text/plain" },
                    body: JSON.stringify(baseData),
                });
            })
            .finally(() => {
                sessionStorage.setItem("visitor_tracked", "true");
            });
    }, []);

    return null;
}
