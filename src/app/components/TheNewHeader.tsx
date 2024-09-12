"use client";
import Link from "next/link";
import {useEffect} from "react";
import {useLocale} from "use-intl";


export default function TheNewHeader(){
    const locale = useLocale();
    const getLocalePath = (path) => {
        // Check if the path already includes the locale
        if (!path.startsWith(`/${locale}`)) {
            return `/${locale}${path}`;
        }
        return path;
    };
    return (
        <header className="header-area header-wide bg-gray">
            <div className="main-header d-none d-lg-block">
                <div className="header-top bdr-bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="welcome-message">
                                    <p>Welcome to Corano Jewelry online store</p>
                                </div>
                            </div>
                            <div className="col-lg-6 text-right">
                                <div className="header-top-settings">
                                    <ul className="nav align-items-center justify-content-end">
                                        {/*<li className="curreny-wrap">*/}
                                        {/*    $ Currency*/}
                                        {/*    <i className="fa fa-angle-down"></i>*/}
                                        {/*    <ul className="dropdown-list curreny-list">*/}
                                        {/*        <li><a href="#">$ USD</a></li>*/}
                                        {/*        <li><a href="#">€ EURO</a></li>*/}
                                        {/*    </ul>*/}
                                        {/*</li>*/}
                                        <li className="language" style={{zIndex: "9999!important"}}>
                                            <img src="../../../static/images/icons/en.png" alt="flag"/> English
                                                <i className="fa fa-angle-down"></i>
                                                <ul className="dropdown-list">
                                                    <li><a href="#">
                                                        <img src="a../../../static/images/icons/en.png" alt="flag"/> english</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><img src="../../../static/images/icons/fr.png" alt="flag"/> french</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><img src="../../../static/images/icons/fr.png" alt="flag"/> french</a>
                                                    </li>
                                                </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header-main-area sticky" style={{zIndex:"9998!important"}}>
                    <div className="container">
                        <div className="row align-items-center position-relative">

                            <div className="col-lg-2">
                                <div className="logo">
                                    <a href="index-2.html">
                                        <img src="../../../static/images/logo/logo.png" alt="brand logo"/>
                                    </a>
                                </div>
                            </div>



                            <div className="col-lg-6 position-static">
                                <div className="main-menu-area">
                                    <div className="main-menu">
                                        <nav className="desktop-menu">
                                            <ul>
                                                <li className="active">
                                                    <Link href="/">Home</Link>
                                                </li>
                                                <li className="position-static">
                                                    <Link href={getLocalePath(`/about`)} locale={locale}>About Us</Link>
                                                </li>
                                                <li>
                                                    <Link href={getLocalePath(`/shop`)}>Shop</Link>
                                                </li>
                                                <li>
                                                    <Link href={getLocalePath(`/blog`)}>Blog</Link>
                                                </li>
                                                <li>
                                                    <Link href={getLocalePath(`/contact-us`)}>Contact us</Link>
                                                </li>
                                            </ul>
                                        </nav>

                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div
                                    className="header-right d-flex align-items-center justify-content-xl-between justify-content-lg-end">
                                    <div className="header-search-container">
                                        <button className="search-trigger d-xl-none d-lg-block"><i
                                            className="pe-7s-search"></i></button>

                                    </div>
                                    <div className="header-configure-area">
                                        <ul className="nav justify-content-end">
                                            <li className="user-hover">
                                                <a href="#">
                                                    <i className="pe-7s-user"></i>
                                                </a>
                                                <ul className="dropdown-list">
                                                    <li><a href="login-register.html">login</a></li>
                                                    <li><a href="login-register.html">register</a></li>
                                                    <li><a href="my-account.html">my account</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="wishlist.html">
                                                    <i className="pe-7s-like"></i>
                                                    <div className="notification">0</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="minicart-btn">
                                                    <i className="pe-7s-shopbag"></i>
                                                    <div className="notification">2</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </div>

            <div className="mobile-header d-lg-none d-md-block sticky">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="mobile-main-header">
                                <div className="mobile-logo">
                                    <a href="index.html">
                                        <img src="assets/img/logo/logo.png" alt="Brand Logo"/>
                                    </a>
                                </div>
                                <div className="mobile-menu-toggler">
                                    <div className="mini-cart-wrap">
                                        <a href="cart.html">
                                            <i className="pe-7s-shopbag"></i>
                                            <div className="notification">0</div>
                                        </a>
                                    </div>
                                    <button className="mobile-menu-btn">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <aside className="off-canvas-wrapper">
                <div className="off-canvas-overlay"></div>
                <div className="off-canvas-inner-content">
                    <div className="btn-close-off-canvas">
                        <i className="pe-7s-close"></i>
                    </div>

                    <div className="off-canvas-inner">

                        {/*<div className="search-box-offcanvas">*/}
                        {/*    <form>*/}
                        {/*        <input type="text" placeholder="Search Here..."/>*/}
                        {/*            <button className="search-btn"><i className="pe-7s-search"></i></button>*/}
                        {/*    </form>*/}
                        {/*</div>*/}

                        <div className="mobile-navigation">

                            <nav>
                                <ul className="mobile-menu">
                                    <li className="menu-item-has-children">
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#">About us</a>
                                    </li>
                                    <li className="menu-item-has-children ">
                                        <a href="#">shop</a>
                                    </li>
                                    <li className="menu-item-has-children ">
                                        <a href="#">Blog</a>
                                    </li>
                                    <li>
                                        <a href="contact-us.html">Contact us</a>
                                    </li>
                                </ul>
                            </nav>

                        </div>

                        <div className="mobile-settings">
                            <ul className="nav">
                                {/*<li>*/}
                                {/*    <div className="dropdown mobile-top-dropdown">*/}
                                {/*        <a href="#" className="dropdown-toggle" id="currency" data-bs-toggle="dropdown"*/}
                                {/*           aria-haspopup="true" aria-expanded="false">*/}
                                {/*            Currency*/}
                                {/*            <i className="fa fa-angle-down"></i>*/}
                                {/*        </a>*/}
                                {/*        <div className="dropdown-menu" aria-labelledby="currency">*/}
                                {/*            <a className="dropdown-item" href="#">$ USD</a>*/}
                                {/*            <a className="dropdown-item" href="#">$ EURO</a>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</li>*/}
                                <li>
                                    <div className="dropdown mobile-top-dropdown">
                                        <a href="#" className="dropdown-toggle" id="myaccount" data-bs-toggle="dropdown"
                                           aria-haspopup="true" aria-expanded="false">
                                            My Account
                                            <i className="fa fa-angle-down"></i>
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="myaccount">
                                            <a className="dropdown-item" href="my-account.html">my account</a>
                                            <a className="dropdown-item" href="login-register.html"> login</a>
                                            <a className="dropdown-item" href="login-register.html">register</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="offcanvas-widget-area">
                            <div className="off-canvas-contact-widget">
                                <ul>
                                    <li><i className="fa fa-mobile"></i>
                                        <a href="#">0123456789</a>
                                    </li>
                                    <li><i className="fa fa-envelope-o"></i>
                                        <a href="#">info@yourdomain.com</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="off-canvas-social-widget">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-pinterest-p"></i></a>
                                <a href="#"><i className="fa fa-linkedin"></i></a>
                                <a href="#"><i className="fa fa-youtube-play"></i></a>
                            </div>
                        </div>

                    </div>
                </div>
            </aside>
        </header>
    );
}