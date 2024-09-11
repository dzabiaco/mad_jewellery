import Link from "next/link";


export default function TheNewHeader(){
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
                                        <li className="language">
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

                <div className="header-main-area sticky">
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
                                                    <a href="/about">About Us</a>
                                                </li>
                                                <li>
                                                    <a href="/shop">Shop
                                                    </a>
                                                </li>
                                                <li><a href="/blog">Blog</a>
                                                </li>
                                                <li><a href="/contact">Contact us</a></li>
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

                        <div className="search-box-offcanvas">
                            <form>
                                <input type="text" placeholder="Search Here..."/>
                                    <button className="search-btn"><i className="pe-7s-search"></i></button>
                            </form>
                        </div>

                        <div className="mobile-navigation">

                            <nav>
                                <ul className="mobile-menu">
                                    <li className="menu-item-has-children"><a href="index.html">Home</a>
                                        <ul className="dropdown">
                                            <li><a href="index.html">Home version 01</a></li>
                                            <li><a href="index-2.html">Home version 02</a></li>
                                            <li><a href="index-3.html">Home version 03</a></li>
                                            <li><a href="index-4.html">Home version 04</a></li>
                                            <li><a href="index-5.html">Home version 05</a></li>
                                            <li><a href="index-6.html">Home version 06</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children"><a href="#">pages</a>
                                        <ul className="megamenu dropdown">
                                            <li className="mega-title menu-item-has-children"><a href="#">column 01</a>
                                                <ul className="dropdown">
                                                    <li><a href="shop.html">shop grid left sidebar</a></li>
                                                    <li><a href="shop-grid-right-sidebar.html">shop grid right
                                                        sidebar</a></li>
                                                    <li><a href="shop-list-left-sidebar.html">shop list left sidebar</a>
                                                    </li>
                                                    <li><a href="shop-list-right-sidebar.html">shop list right
                                                        sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li className="mega-title menu-item-has-children"><a href="#">column 02</a>
                                                <ul className="dropdown">
                                                    <li><a href="product-details.html">product details</a></li>
                                                    <li><a href="product-details-affiliate.html">product details
                                                        affiliate</a></li>
                                                    <li><a href="product-details-variable.html">product details
                                                        variable</a></li>
                                                    <li><a href="privacy-policy.html">privacy policy</a></li>
                                                </ul>
                                            </li>
                                            <li className="mega-title menu-item-has-children"><a href="#">column 03</a>
                                                <ul className="dropdown">
                                                    <li><a href="cart.html">cart</a></li>
                                                    <li><a href="checkout.html">checkout</a></li>
                                                    <li><a href="compare.html">compare</a></li>
                                                    <li><a href="wishlist.html">wishlist</a></li>
                                                </ul>
                                            </li>
                                            <li className="mega-title menu-item-has-children"><a href="#">column 04</a>
                                                <ul className="dropdown">
                                                    <li><a href="my-account.html">my-account</a></li>
                                                    <li><a href="login-register.html">login-register</a></li>
                                                    <li><a href="about-us.html">about us</a></li>
                                                    <li><a href="contact-us.html">contact us</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children "><a href="#">shop</a>
                                        <ul className="dropdown">
                                            <li className="menu-item-has-children"><a href="#">shop grid layout</a>
                                                <ul className="dropdown">
                                                    <li><a href="shop.html">shop grid left sidebar</a></li>
                                                    <li><a href="shop-grid-right-sidebar.html">shop grid right
                                                        sidebar</a></li>
                                                    <li><a href="shop-grid-full-3-col.html">shop grid full 3 col</a>
                                                    </li>
                                                    <li><a href="shop-grid-full-4-col.html">shop grid full 4 col</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children"><a href="#">shop list layout</a>
                                                <ul className="dropdown">
                                                    <li><a href="shop-list-left-sidebar.html">shop list left sidebar</a>
                                                    </li>
                                                    <li><a href="shop-list-right-sidebar.html">shop list right
                                                        sidebar</a></li>
                                                    <li><a href="shop-list-full-width.html">shop list full width</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children"><a href="#">products details</a>
                                                <ul className="dropdown">
                                                    <li><a href="product-details.html">product details</a></li>
                                                    <li><a href="product-details-affiliate.html">product details
                                                        affiliate</a></li>
                                                    <li><a href="product-details-variable.html">product details
                                                        variable</a></li>
                                                    <li><a href="product-details-group.html">product details group</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children "><a href="#">Blog</a>
                                        <ul className="dropdown">
                                            <li><a href="blog-left-sidebar.html">blog left sidebar</a></li>
                                            <li><a href="blog-list-left-sidebar.html">blog list left sidebar</a></li>
                                            <li><a href="blog-right-sidebar.html">blog right sidebar</a></li>
                                            <li><a href="blog-list-right-sidebar.html">blog list right sidebar</a></li>
                                            <li><a href="blog-grid-full-width.html">blog grid full width</a></li>
                                            <li><a href="blog-details.html">blog details</a></li>
                                            <li><a href="blog-details-left-sidebar.html">blog details left sidebar</a>
                                            </li>
                                            <li><a href="blog-details-audio.html">blog details audio</a></li>
                                            <li><a href="blog-details-video.html">blog details video</a></li>
                                            <li><a href="blog-details-image.html">blog details image</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact-us.html">Contact us</a></li>
                                </ul>
                            </nav>

                        </div>

                        <div className="mobile-settings">
                            <ul className="nav">
                                <li>
                                    <div className="dropdown mobile-top-dropdown">
                                        <a href="#" className="dropdown-toggle" id="currency" data-bs-toggle="dropdown"
                                           aria-haspopup="true" aria-expanded="false">
                                            Currency
                                            <i className="fa fa-angle-down"></i>
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="currency">
                                            <a className="dropdown-item" href="#">$ USD</a>
                                            <a className="dropdown-item" href="#">$ EURO</a>
                                        </div>
                                    </div>
                                </li>
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