import { Sparkles, Image, Zap, Shield } from "lucide-react";
import SoftBackdrop from "../components/SoftBackdrop";
import { div } from "motion/react-client";

export default function About() {
    return (
        <div className="w-full px-[12%] py-10 scroll-mt-10 bg-[url('./assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none">
            <SoftBackdrop />
            {/* Hero */}
            <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-center font-medium text-indigo-600 mt-28 px-10 py-2 rounded-full bg-indigo-950/70 border border-indigo-800 w-max mx-auto">
                About ThumbBot
                </h1>

                <p className="mt-4 text-gray-400">
                ThumbBot is an AI-powered thumbnail generator built to help creators
                design eye-catching thumbnails in seconds — no design skills required.
                </p>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-4 gap-6 mt-16">

                <Feature
                icon={<Sparkles />}
                title="AI Powered"
                desc="Generate professional thumbnails instantly using smart AI prompts."
                />

                <Feature
                icon={<Image />}
                title="High Quality"
                desc="Clean, modern, high-resolution thumbnails optimized for YouTube & social."
                />

                <Feature
                icon={<Zap />}
                title="Fast Workflow"
                desc="Create thumbnails in seconds instead of hours."
                />

                <Feature
                icon={<Shield />}
                title="Secure"
                desc="Your generations are private and safely stored in your account."
                />
            </div>

            {/* Mission */}
            <div className="mt-20 max-w-3xl mx-auto text-center">
                <h2 className="text-2xl font-medium text-white">Our Mission</h2>

                <p className="mt-4 text-gray-400">
                Our goal is simple — empower creators, students, and entrepreneurs
                with easy AI tools that boost visibility and engagement. ThumbBot was
                built to remove design barriers and help your content stand out.
                </p>
            </div>

            {/* Footer Note */}
            <p className="mt-16 text-center text-sm text-gray-500">
                Built with ❤️ by Tanmoy Paul
            </p>
        </div>
    );
    }

function Feature({ icon, title, desc, }: { icon: React.ReactNode; title: string; desc: string; }) {
    return (
        <div className="bg-white/5 border  rounded-xl p-6 text-center border-indigo-500/50 transition">
            <div className="flex justify-center text-indigo-500 mb-4">{icon}</div>
            <h3 className="text-white font-medium">{title}</h3>
            <p className="text-gray-400 text-sm mt-2">{desc}</p>
        </div>
    );
}
