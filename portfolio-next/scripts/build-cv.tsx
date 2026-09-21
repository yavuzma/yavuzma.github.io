// Renders the CV to public/<cvFileName> before `next build`, so the site links to a real PDF
// instead of generating one in the visitor's browser. Run with: npm run cv
import path from "node:path";
import { Font, renderToFile } from "@react-pdf/renderer";
import CVDocument from "../app/components/CVDocument";
import { cvFileName } from "../app/data/cv";

const fontDir = path.join(process.cwd(), "node_modules/@expo-google-fonts/inter");
const font = (weight: string) => path.join(fontDir, weight, `Inter_${weight}.ttf`);

// Inter covers Turkish and Portuguese characters (ş, ğ, İ, é) that the built-in Helvetica cannot draw.
Font.register({
    family: "Inter",
    fonts: [
        { src: font("400Regular"), fontWeight: 400 },
        { src: font("400Regular_Italic"), fontWeight: 400, fontStyle: "italic" },
        { src: font("600SemiBold"), fontWeight: 600 },
        { src: font("700Bold"), fontWeight: 700 },
    ],
});
// Never split words across lines ("Au-toCAD").
Font.registerHyphenationCallback((word) => [word]);

const out = path.join(process.cwd(), "public", cvFileName);
renderToFile(<CVDocument />, out)
    .then(() => console.log(`CV written to ${path.relative(process.cwd(), out)}`))
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
