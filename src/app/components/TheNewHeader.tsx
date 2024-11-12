"use client";
import classes from  './TheNewHeader.module.css';
import Link from "next/link";
import {useEffect, useState} from "react";
import {useLocale} from "use-intl";
import LocaleSwitcher from "@/app/components/LocaleSwitcher";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faChevronDown, faEnvelope, faGlobe, faMoon, faPhone} from "@fortawesome/free-solid-svg-icons";
import {usePathname, useRouter} from "next/navigation";



export default function TheNewHeader() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const getLocalePath = (path: string) => {
        // Check if the path already includes the locale
        if (!path.startsWith(`/${locale}`)) {
            return `/${locale}${path}`;
        }
        return path;
    };

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    // Function to check if the link is active
    const isActive = (path: string) => {
        const fullPath = getLocalePath(path);
        const normalizedPathname = pathname.endsWith('/') ? pathname : `${pathname}/`;
        const normalizedFullPath = fullPath.endsWith('/') ? fullPath : `${fullPath}/`;
        return normalizedPathname === normalizedFullPath;
    };

    return (
        <header className="mb-[75px]">
            <div className="bg-white fixed top-0 left-0 right-0 shadow-md z-50">
                <div className="container-fluid mx-auto flex justify-between items-center py-2">
                    {/* Left Column - Logo */}
                    <div className="hidden lg:flex">
                        <Link href="/" legacyBehavior>
                            <div className="flex align-items-center">
                                <img src="../../../static/images/main-logo.png" className="w-[90px] h-[70px]" alt=""/>
                                <h1 className="ml-2 mt-2">Lux in Möbel</h1>
                            </div>
                        </Link>
                    </div>

                    {/* Center Column - Main Navigation */}
                    <nav className="hidden lg:flex justify-center items-center h-full" aria-label="Основная навигация">
                        <ul className="flex justify-center items-center space-x-4 mb-0">
                            <li>
                                <Link href={getLocalePath("/")} className={`text-gray-500 hover:text-yellow-400 hover:no-underline active:text-yellow-400 no-underline ${isActive("/") ? "text-yellow-500" : ""}`}>
                                    Home Furniture
                                </Link>
                            </li>
                            <li>
                                <Link href={getLocalePath('/business')} className={`text-gray-500 hover:text-yellow-400 hover:no-underline active:text-yellow-400 no-underline ${isActive("/business") ? "text-yellow-500" : ""}`}>
                                    Business Furniture
                                </Link>
                            </li>
                            <li>
                                <Link href={getLocalePath('/interior')} className={`text-gray-500 hover:text-yellow-400 hover:no-underline active:text-yellow-400 no-underline ${isActive("/interior") ? "text-yellow-500" : ""}`}>
                                    Interior Design
                                </Link>
                            </li>
                            <li>
                                <Link href={getLocalePath('/contacts')} className={`text-gray-500 hover:text-yellow-400 hover:no-underline active:text-yellow-400 no-underline ${isActive("/contacts") ? "text-yellow-500" : ""}`}>
                                    Contacts
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Right Column - Contact and Language Switcher */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <div className="flex space-x-4">
                            <Link href="tel:37368159759" legacyBehavior>
                                <div className="flex items-center space-x-2">
                                    <FontAwesomeIcon icon={faPhone} className="w-5 h-5 text-gray-500 hover:text-gray-700" />
                                    <Link href="tel:+37368287981" className="text-black hover:text-gray-700 hover:no-underline">+373 68 287 981</Link>
                                </div>
                            </Link>
                            <Link href="mailto:hello@amatto.md" legacyBehavior>
                                <div className="flex items-center space-x-2">
                                    <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-gray-500 hover:text-gray-700" />
                                    <Link href="mailto:luxinmobel@gmail.com" className="text-black hover:text-gray-700 hover:no-underline">luxinmobel@gmail.com</Link>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Logo and Menu Button */}
                    <div className="lg:hidden flex items-center justify-between w-full px-4">
                        <Link href="/" legacyBehavior>
                            <div className="block w-[138px]">
                                <div className="flex align-items-center">
                                    <img src="../../../static/images/main-logo.png" className="w-[90px] h-[70px]" alt=""/>
                                </div>
                            </div>
                        </Link>
                        <button onClick={toggleMobileMenu} className="text-gray-700 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <nav className="lg:hidden bg-white shadow-md">
                        <ul className="flex flex-col items-center space-y-4 py-4 text-dark">
                            <li>
                                <Link href={getLocalePath(`/`)} legacyBehavior>
                                    <span onClick={() => setMobileMenuOpen(false)} className={`hover:text-gray-700 ${isActive("/") ? "bg-yellow-500" : ""}`}>
                                        Home Furniture
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href={getLocalePath(`/business`)} legacyBehavior>
                                    <span onClick={() => setMobileMenuOpen(false)} className={`hover:text-gray-700 ${isActive("/business") ? "bg-yellow-500" : ""}`}>
                                        Business Furniture
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href={getLocalePath(`/interior`)} legacyBehavior>
                                    <span onClick={() => setMobileMenuOpen(false)} className={`hover:text-gray-700 ${isActive("/interior") ? "bg-yellow-500" : ""}`}>
                                        Interior Design
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href={getLocalePath(`/contacts`)} legacyBehavior>
                                    <span onClick={() => setMobileMenuOpen(false)} className={`hover:text-gray-700 ${isActive("/contacts") ? "bg-yellow-500" : ""}`}>
                                        Contacts
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <div className="flex flex-col items-center space-y-2">
                                    <Link href="tel:37368159759" legacyBehavior>
                                        <span className="hover:text-gray-700">+373 68 159 759</span>
                                    </Link>
                                    <Link href="mailto:hello@amatto.md" legacyBehavior>
                                        <span className="hover:text-gray-700">hello@amatto.md</span>
                                    </Link>
                                    <LocaleSwitcher />
                                </div>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    );
}