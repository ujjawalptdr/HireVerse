import React, { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import PopoverAvatar from "./PopoverAvatar";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const Navbar = () => {
    const { user } = useSelector(store => store.auth);
    const [showMenu, setShowMenu] = useState(false);
    return (
        <header className="bg-white shadow sticky top-0  z-20">
            <div className="flex justify-between items-center px-4 md:px-8 max-w-7xl mx-auto h-16">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold flex items-center">
                    Hire<span className="text-[#F83002]">Verse</span>
                </Link>

                {/* Desktop Links */}
                <nav className="hidden md:flex items-center gap-8">
                    <ul className="flex gap-6 text-gray-700 font-medium">
                        {user && user.role === "recruiter" ? (
                            <>
                                <li>
                                    <Link
                                        to="/admin/companies"
                                        className="hover:text-[#6A38C2] transition-colors"
                                    >
                                        Companies
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/admin/jobs"
                                        className="hover:text-[#6A38C2] transition-colors"
                                    >
                                        Jobs
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link
                                        to="/"
                                        className="hover:text-[#6A38C2] transition-colors"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/jobs"
                                        className="hover:text-[#6A38C2] transition-colors"
                                    >
                                        Jobs
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/browse"
                                        className="hover:text-[#6A38C2] transition-colors"
                                    >
                                        Browse
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                    {user ? (
                        <PopoverAvatar />
                    ) : (
                        <div className="flex items-center gap-2">
                            <Link to="/login">
                                <Button variant="outline">Login</Button>
                            </Link>
                            <Link to="/signup">
                                <Button className="bg-[#6A38C2] hover:bg-[#5b2ea9] text-white">
                                    Signup
                                </Button>
                            </Link>
                        </div>
                    )}
                </nav>

                {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center z-20 gap-2">
                    <button
                        onClick={() => setShowMenu(!showMenu)}
                        aria-label="Toggle menu"
                        className="transition-transform duration-300"
                    >
                        {showMenu ? (
                            <X className="h-6 w-6 text-gray-800" />
                        ) : (
                            <Menu className="h-6 w-6 text-gray-800" />
                        )}
                    </button>
                    {user && <div>
                        <PopoverAvatar />
                    </div>}
                </div>
            </div>

            {/* Mobile Menu Animation */}
            <AnimatePresence>
                {showMenu && (
                    <motion.nav
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-0 left-0 w-full bg-white shadow-lg p-6 flex flex-col gap-6 z-40"
                    >
                        {/* Close button at the top right inside the menu */}
                        <div className="flex justify-end">
                            <button
                                onClick={() => setShowMenu(false)}
                                aria-label="Close menu"
                                className="text-gray-800 hover:text-[#6A38C2] transition-colors"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        {/* Menu links */}
                        <ul className="flex flex-col gap-4 text-gray-700 font-medium text-center">
                            {user && user.role === "recruiter" ? (
                                <>
                                    <li>
                                        <Link
                                            to="/admin/companies"
                                            onClick={() => setShowMenu(false)}
                                            className="hover:text-[#6A38C2] transition-colors"
                                        >
                                            Companies
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/admin/jobs"
                                            onClick={() => setShowMenu(false)}
                                            className="hover:text-[#6A38C2] transition-colors"
                                        >
                                            Jobs
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <Link
                                            to="/"
                                            onClick={() => setShowMenu(false)}
                                            className="hover:text-[#6A38C2] transition-colors"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/jobs"
                                            onClick={() => setShowMenu(false)}
                                            className="hover:text-[#6A38C2] transition-colors"
                                        >
                                            Jobs
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/browse"
                                            onClick={() => setShowMenu(false)}
                                            className="hover:text-[#6A38C2] transition-colors"
                                        >
                                            Browse
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>

                        {/* Auth buttons */}
                        {!user && (
                            <div className="flex flex-col gap-2 mt-4 mx-auto my-4">
                                <Link to="/login" onClick={() => setShowMenu(false)}>
                                    <Button variant="outline" className="w-full px-24">
                                        Login
                                    </Button>
                                </Link>
                                <Link to="/signup" onClick={() => setShowMenu(false)}>
                                    <Button className="bg-[#6A38C2] hover:bg-[#5b2ea9] text-white w-full px-24">
                                        Signup
                                    </Button>
                                </Link>
                            </div>
                        )}
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );

};

export default Navbar;
