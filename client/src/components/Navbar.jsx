import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";

const BookIcon = () => (
    <svg
        className="w-4 h-4 text-gray-700"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
    >
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13M7 2a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"/>
    </svg>
);

const Navbar = () => {
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Hotels", path: "/rooms" },
        { name: "Experience", path: "/contact" },
        { name: "About", path: "/about" },
    ];

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { openSignIn } = useClerk();
    const { user } = useUser();
    const navigate = useNavigate();
    const location = useLocation();

    const isHomePage = location.pathname === "/";

    useEffect(() => {
        if (!isHomePage) {
            return;
        }

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isHomePage]);

    // Other pages should always have the "scrolled" navbar style
    const navbarScrolled = !isHomePage || isScrolled;

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 ${
                navbarScrolled
                    ? "bg-white/80 backdrop-blur-lg shadow-md py-4"
                    : "bg-indigo-500 py-5"
            }`}
        >

            {/* Logo */}
            <Link to="/">
                <img
                    src={assets.logo}
                    alt="QuickStay"
                    className="h-8 w-auto"
                />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 lg:gap-10">

                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.path}
                        className={`nav-link text-sm font-medium ${
                            navbarScrolled
                                ? "text-gray-700 nav-link-dark"
                                : "text-white nav-link-light"
                        }`}
                    >
                        {link.name}
                    </Link>
                ))}

                {/* Dashboard */}
                <button
                    onClick={() => navigate("/owner")}
                    className={`border rounded-full px-6 py-2 text-sm transition-all duration-300 ${
                        navbarScrolled
                            ? "border-black text-black hover:bg-black hover:text-white"
                            : "border-white text-white hover:bg-white hover:text-indigo-600"
                    }`}
                >
                    Dashboard
                </button>
            </div>

            {/* Right Side */}
            <div className="hidden md:flex items-center gap-5">

                {/* Search */}
                <img
                    src={assets.searchIcon}
                    alt="Search"
                    className={`${
                        navbarScrolled ? "invert" : ""
                    } h-5 cursor-pointer transition-all duration-500`}
                />

                {/* User / Login */}
                {user ? (
                    <UserButton>
                        <UserButton.MenuItems>
                            <UserButton.Action
                                label="My Bookings"
                                labelIcon={<BookIcon />}
                                onClick={() => navigate("/my-bookings")}
                            />
                        </UserButton.MenuItems>
                    </UserButton>
                ) : (
                    <button
                        onClick={openSignIn}
                        className={`rounded-full px-8 py-2 transition-all duration-300 ${
                            navbarScrolled
                                ? "bg-black text-white hover:bg-gray-800"
                                : "bg-white text-black hover:bg-gray-200"
                        }`}
                    >
                        Login
                    </button>
                )}
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden flex items-center gap-3">

                {/* User avatar */}
                {user && (
                    <UserButton>
                        <UserButton.MenuItems>
                            <UserButton.Action
                                label="My Bookings"
                                labelIcon={<BookIcon />}
                                onClick={() => navigate("/my-bookings")}
                            />
                        </UserButton.MenuItems>
                    </UserButton>
                )}

                {/* Menu icon */}
                <img
                    src={assets.menu}
                    alt="Menu"
                    className={`${
                        navbarScrolled ? "invert" : ""
                    } h-5 cursor-pointer`}
                    onClick={() => setIsMenuOpen(true)}
                />
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 left-0 h-screen w-full bg-white flex flex-col items-center justify-center gap-8 text-gray-800 transition-transform duration-500 md:hidden ${
                    isMenuOpen
                        ? "translate-x-0"
                        : "-translate-x-full"
                }`}
            >

                {/* Close button */}
                <button
                    className="absolute top-6 right-6"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <img
                        src={assets.closee}
                        alt="Close Menu"
                        className="h-6"
                    />
                </button>

                {/* Mobile links */}
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.path}
                        className="nav-link nav-link-dark text-sm font-medium text-gray-700"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {link.name}
                    </Link>
                ))}

                {/* Dashboard */}
                {user && (
                    <button
                        onClick={() => {
                            navigate("/owner");
                            setIsMenuOpen(false);
                        }}
                        className="border border-black rounded-full px-6 py-2 text-black hover:bg-black hover:text-white transition"
                    >
                        Dashboard
                    </button>
                )}

                {/* Login */}
                {!user && (
                    <button
                        onClick={openSignIn}
                        className="bg-black text-white rounded-full px-8 py-2 hover:bg-gray-800 transition"
                    >
                        Login
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
