import "./globals.css";
import { Lexend } from "next/font/google";

const inter = Lexend({ subsets: ["latin"] });

export const metadata = {
    title: "Prashant Pathak | Portfolio",
    description:
        "Welcome to my portfolio website! Explore my curated collection of projects, showcasing my skills and creative endeavors. Connect with me for collaborations and opportunities. Let's bring ideas to life!",
    keywords: [
        "Prashant",
        "Pathak",
        "Portfolio",
        "Prompt Engineering",
        "ChatGPT",
        "Conversational AI",
        "Chatbot",
        "Chatbot Developer",
        "NLP",
        "Natural Language Processing",
        "AI",
        "Full Stack",
        "Web Developer",
        "Developer",
        "Artificial Intelligence",
        "Software Developer",
        "Software Engineer",
        "Next.js",
        "React",
        "JavaScript",
        "Resume",
        "Analytics",
        "Reporting"
    ],
    authors: [{ name: "Prashant Pathak", url: "https://prashantpathak.dev/" }],
    creator: "Prashant Pathak",
    openGraph: {
        title: "Prashant Pathak | Portfolio",
        description:
            "Welcome to my portfolio website! Explore my curated collection of projects, showcasing my skills and creative endeavors. Connect with me for collaborations and opportunities. Let's bring ideas to life!",
        url: "https://prashantpathak.dev/",
        siteName: "Prashant Pathak | Portfolio",
        images: [],
        locale: "en_US",
        type: "website"
    }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
