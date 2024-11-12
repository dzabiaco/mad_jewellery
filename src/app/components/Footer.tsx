import {faEnvelope, faHeart, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faInstagram, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer(){
    return (
        <>
            <div className="container mx-auto">
                <footer className="footer-widget-area">
                    <div className="footer-top py-10">
                        <div className="container mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="flex flex-col items-center lg:items-start">
                                    <div className="mb-4">
                                        <Link href="/">
                                            <img src="../../../static/images/main-logo.png" alt="Lux in Mobil Logo" className="w-24 h-20" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="text-center lg:text-left">
                                    <h6 className="text-lg font-semibold mb-3">Contact Us</h6>
                                    <address className="space-y-2">
                                        <div className="flex items-center justify-center lg:justify-start">
                                            <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-gray-500 hover:text-gray-700" />
                                            <Link href="mailto:luxinmobel@gmail.com" className="ml-2 text-black hover:text-gray-700">luxinmobel@gmail.com</Link>
                                        </div>
                                        <div className="flex items-center justify-center lg:justify-start">
                                            <FontAwesomeIcon icon={faPhone} className="w-5 h-5 text-gray-500 hover:text-gray-700" />
                                            <Link href="tel:+37368287981" className="ml-2 text-black hover:text-gray-700">+373 68 287 981</Link>
                                        </div>
                                    </address>
                                </div>
                                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                                    <h6 className="text-lg font-semibold mb-3">Information</h6>
                                    <ul className="space-y-2">
                                        <li>
                                            <Link href="#" className="text-gray-500 hover:text-gray-700">Privacy Policy</Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="text-gray-500 hover:text-gray-700">Terms & Conditions</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="text-center lg:text-left">
                                    <h6 className="text-lg font-semibold mb-3">Follow Us</h6>
                                    <div className="flex justify-center items-center space-x-4">
                                        <Link href="#">
                                            <FontAwesomeIcon icon={faFacebook} className="w-6 h-6 text-gray-500 hover:text-gray-700 hover:scale-110 transition-transform duration-200" />
                                        </Link>
                                        <Link href="#">
                                            <FontAwesomeIcon icon={faTwitter} className="w-6 h-6 text-gray-500 hover:text-gray-700 hover:scale-110 transition-transform duration-200" />
                                        </Link>
                                        <Link href="#">
                                            <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 text-gray-500 hover:text-gray-700 hover:scale-110 transition-transform duration-200" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

            <div className="footer-bottom bg-yellow-400 flex items-center justify-center h-16">
                <div className="container mx-auto flex items-center justify-center">
                    <p className="text-center mb-0">
                        &copy; {new Date().getFullYear()} <b className="ml-1 mr-1">Lux in Mobil</b> Made with
                        <FontAwesomeIcon
                            icon={faHeart}
                            className="w-5 h-5 text-red-500 mx-2 hover:scale-110 transition-transform duration-200"
                        />
                        by <a href="/" className="ml-1"><b>MoonLeaf</b></a>
                    </p>
                </div>
            </div>
        </>
    );
}