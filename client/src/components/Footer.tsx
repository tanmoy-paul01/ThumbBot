import { footerData } from "../data/footer";
import { FaGithub, FaLinkedin, FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { motion } from "motion/react";
import type { IFooterLink } from "../types";
import { Link } from "react-router-dom";
import logo from '../../public/logo.png'

export default function Footer() {
    return (
        <footer className="flex flex-wrap justify-center md:justify-between overflow-hidden gap-10 md:gap-20 mt-40 py-6 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-gray-500">
            <motion.div className="flex flex-wrap items-start gap-8 md:gap-35"
                initial={{ x: -150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                <Link to='#top'>
                    <img className='w-10 h-10' src={logo} alt="logo" />
                </Link>
                {footerData.map((section, index) => (
                    <div key={index}>
                        <p className="text-slate-100 font-semibold">{section.title}</p>
                        <ul className="mt-2 space-y-2">
                            {section.links.map((link: IFooterLink, index: number) => (
                                <li key={index}>
                                    <Link to={link.href} className="hover:text-indigo-600 transition">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </motion.div>
            <motion.div className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end"
                initial={{ x: 150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                <p className="max-w-60">Making every customer feel valued—no matter the size of your audience.</p>
                <div className="flex items-center gap-4 mt-3">
                    
                    <a href="https://github.com/tanmoy-paul01" target="_blank" rel="noreferrer" >
                        <FaGithub className="size-6 hover:text-indigo-500" />
                    </a>

                    <a href="https://www.linkedin.com/in/tanmoy-paul-1a3676320/" rel="noreferrer" target="_blank" >
                        <FaLinkedin className="size-6 hover:text-indigo-500" />
                    </a>

                    <a href="https://wa.me/917557882856" target="_blank" rel="noreferrer" >
                        <FaWhatsapp className="size-6 hover:text-indigo-500" />
                    </a>

                    <a href="https://www.facebook.com/tanmoy.paul.218981/" target="_blank" rel="noreferrer" >
                        <FaFacebook className="size-6 hover:text-indigo-500" />
                    </a>

                    <a href="https://www.instagram.com/tanmoy_paul18/" target="_blank" rel="noreferrer" >
                        <FaInstagram className="size-6 hover:text-indigo-500" />
                    </a>
                </div>
                <p className="mt-3 text-center">&copy; {new Date().getFullYear()} <a href="https://prebuiltui.com?utm_source=pixels">ThumbBot</a></p>
            </motion.div>
        </footer>
    );
}