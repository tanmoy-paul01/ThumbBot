import { MenuIcon, XIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Logo from "./Logo";


export default function Navbar() {
    const {isLoggedIn, user, logout} = useAuth()
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);



    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
            ) {
            setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <>
            <motion.nav className="fixed top-0 z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >
                <Link to='/'>
                    <Logo/>
                </Link>

                <div className="hidden md:flex items-center gap-8 transition duration-500">
                    <Link to='/' className="hover:text-indigo-500 transition">Home</Link>
                    <Link to='/generate' className="hover:text-indigo-500 transition">Generate</Link>

                    {isLoggedIn && (
                        <Link to='/my-generations' className="hover:text-indigo-500 transition">
                            My Generations
                        </Link>
                    )}

                    <Link to='/about' className="hover:text-indigo-500 transition">About Us</Link>
                    <Link to='/contact' className="hover:text-indigo-500 transition">Contact Us</Link>
                </div>

                <div className="flex items-center gap-2">
                    {isLoggedIn ? (
                        <div ref={dropdownRef} className="relative">
                            <button
                                onClick={() => setOpen(prev => !prev)}
                                className="rounded-full size-8 font-bold text-indigo-600 bg-indigo-950/70 border border-indigo-800"
                            >
                                {user?.name.charAt(0).toUpperCase()}
                            </button>

                            {open && (
                                <div className="absolute top-8 right-0 pt-2">
                                <button
                                    onClick={() => {
                                    logout();
                                    setOpen(false);
                                    }}
                                    className="bg-white/20 border-2 border-white/10 px-5 py-1.5 rounded hover:bg-white/30 transition"
                                >
                                    Logout
                                </button>
                                </div>
                            )}
                        </div>

                    ): (
                        <button onClick={()=> navigate('/login')} className="hidden md:block px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all rounded-full">
                            Get Started
                        </button>
                    )}
                    <button onClick={() => setIsOpen(true)} className="md:hidden">
                    <MenuIcon size={26} className="active:scale-90 transition" />
                    </button>
                </div>

            </motion.nav>

            <div className={`fixed inset-0 z-100 bg-black/40 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-400 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <Link onClick={() => setIsOpen(false)} to='/'>Home</Link>
                <Link onClick={() => setIsOpen(false)} to='/generate'>Generate</Link>
                
                {isLoggedIn && (
                        <Link to='/my-generations' className="hover:text-indigo-500 transition">
                            My Generations
                        </Link>
                )}
                
                <Link onClick={() => setIsOpen(false)} to='/about' className="hover:text-indigo-500 transition">About Us</Link>
                <Link onClick={() => setIsOpen(false)} to='/contact'>Contact Us</Link>
                
                {
                    isLoggedIn ? <button onClick={() => { setIsOpen(false);  logout()}}>Logout</button>
                        : <Link onClick={() => setIsOpen(false)} to='/login'>Login</Link>
                }
                
                <button onClick={() => setIsOpen(false)} className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-pink-600 hover:bg-pink-700 transition text-white rounded-md flex">
                    <XIcon />
                </button>
            </div>
        </>
    );
}