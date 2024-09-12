import TheNewHeader from "@/app/components/TheNewHeader";
import Footer from "@/app/components/Footer";


export default function ShopPage(){
    return (
        <>
            <TheNewHeader/>
            <main>
                <div className="breadcrumb-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcrumb-wrap">
                                    <nav aria-label="breadcrumb">
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="index.html"><i
                                                className="fa fa-home"></i></a></li>
                                            <li className="breadcrumb-item active" aria-current="page">shop</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shop-main-wrapper section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 order-2 order-lg-1">
                                <aside className="sidebar-wrapper">
                                    <div className="sidebar-single">
                                        <h5 className="sidebar-title">categories</h5>
                                        <div className="sidebar-body">
                                            <ul className="shop-categories">
                                                <li><a href="#">fashionware <span>(10)</span></a></li>
                                                <li><a href="#">kitchenware <span>(5)</span></a></li>
                                                <li><a href="#">electronics <span>(8)</span></a></li>
                                                <li><a href="#">accessories <span>(4)</span></a></li>
                                                <li><a href="#">shoe <span>(5)</span></a></li>
                                                <li><a href="#">toys <span>(2)</span></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="sidebar-single">
                                        <h5 className="sidebar-title">price</h5>
                                        <div className="sidebar-body">
                                            <div className="price-range-wrap">
                                                <div className="price-range" data-min="1" data-max="1000"></div>
                                                <div className="range-slider">
                                                    <form action="#"
                                                          className="d-flex align-items-center justify-content-between">
                                                        <div className="price-input">
                                                            <label htmlFor="amount">Price: </label>
                                                            <input type="text" id="amount"/>
                                                        </div>
                                                        <button className="filter-btn">filter</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sidebar-single">
                                        <h5 className="sidebar-title">Brand</h5>
                                        <div className="sidebar-body">
                                            <ul className="checkbox-container categories-list">
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input"
                                                               id="customCheck2"/>
                                                            <label className="custom-control-label"
                                                                   htmlFor="customCheck2">Studio (3)</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input"
                                                               id="customCheck3"/>
                                                            <label className="custom-control-label"
                                                                   htmlFor="customCheck3">Hastech (4)</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input"
                                                               id="customCheck4"/>
                                                            <label className="custom-control-label"
                                                                   htmlFor="customCheck4">Quickiin (15)</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input"
                                                               id="customCheck1"/>
                                                            <label className="custom-control-label"
                                                                   htmlFor="customCheck1">Graphic corner (10)</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input"
                                                               id="customCheck5"/>
                                                            <label className="custom-control-label"
                                                                   htmlFor="customCheck5">devItems (12)</label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="sidebar-single">
                                        <h5 className="sidebar-title">color</h5>
                                        <div className="sidebar-body">
                                            <ul className="checkbox-container categories-list">
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input"
                                                               id="customCheck12"/>
                                                            <label className="custom-control-label"
                                                                   htmlFor="customCheck12">black (20)</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input"
                                                               id="customCheck13"/>
                                                            <label className="custom-control-label"
                                                                   htmlFor="customCheck13">red (6)</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input"
                                                               id="customCheck14"/>
                                                            <label className="custom-control-label"
                                                                   htmlFor="customCheck14">blue (8)</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input"
                                                               id="customCheck11"/>
                                                            <label className="custom-control-label"
                                                                   htmlFor="customCheck11">green (5)</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input"
                                                               id="customCheck15"/>
                                                            <label className="custom-control-label"
                                                                   htmlFor="customCheck15">pink (4)</label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="sidebar-single">
                                        <h5 className="sidebar-title">size</h5>
                                        <div className="sidebar-body">
                                            <ul className="checkbox-container categories-list">
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input"
                                                               id="customCheck111"/>
                                                            <label className="custom-control-label"
                                                                   htmlFor="customCheck111">S (4)</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input"
                                                               id="customCheck222"/>
                                                            <label className="custom-control-label"
                                                                   htmlFor="customCheck222">M (5)</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input"
                                                               id="customCheck333"/>
                                                            <label className="custom-control-label"
                                                                   htmlFor="customCheck333">L (7)</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input"
                                                               id="customCheck444"/>
                                                            <label className="custom-control-label"
                                                                   htmlFor="customCheck444">XL (3)</label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="sidebar-banner">
                                        <div className="img-container">
                                            <a href="#">
                                                <img src="assets/img/banner/sidebar-banner.jpg" alt=""/>
                                            </a>
                                        </div>
                                    </div>

                                </aside>
                            </div>

                            <div className="col-lg-9 order-1 order-lg-2">
                                <div className="shop-product-wrapper">
                                    <div className="shop-top-bar">
                                        <div className="row align-items-center">
                                            <div className="col-lg-7 col-md-6 order-2 order-md-1">
                                                <div className="top-bar-left">
                                                    <div className="product-view-mode">
                                                        <a className="active" href="#" data-target="grid-view"
                                                           data-bs-toggle="tooltip" title="Grid View"><i
                                                            className="fa fa-th"></i></a>
                                                        <a href="#" data-target="list-view" data-bs-toggle="tooltip"
                                                           title="List View"><i className="fa fa-list"></i></a>
                                                    </div>
                                                    <div className="product-amount">
                                                        <p>Showing 1–16 of 21 results</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-6 order-1 order-md-2">
                                                <div className="top-bar-right">
                                                    <div className="product-short">
                                                        <p>Sort By : </p>
                                                        <select className="nice-select" name="sortby">
                                                            <option value="trending">Relevance</option>
                                                            <option value="sales">Name (A - Z)</option>
                                                            <option value="sales">Name (Z - A)</option>
                                                            <option value="rating">Price (Low &gt; High)</option>
                                                            <option value="date">Rating (Lowest)</option>
                                                            <option value="price-asc">Model (A - Z)</option>
                                                            <option value="price-asc">Model (Z - A)</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="shop-product-wrap grid-view row mbn-30">

                                        <div className="col-md-4 col-sm-6">

                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-1.jpg"
                                                             alt="product"/>
                                                            <img className="sec-img"
                                                                 src="assets/img/product/product-18.jpg" alt="product"/>
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>10%</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to Compare"><i
                                                            className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                            data-bs-toggle="tooltip" data-bs-placement="left"
                                                            title="Quick View"><i
                                                            className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <div className="product-identity">
                                                        <p className="manufacturer-name"><a
                                                            href="product-details.html">Platinum</a></p>
                                                    </div>
                                                    <ul className="color-categories">
                                                        <li>
                                                            <a className="c-lightblue" href="#"
                                                               title="LightSteelblue"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-darktan" href="#" title="Darktan"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-grey" href="#" title="Grey"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-brown" href="#" title="Brown"></a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Perfect Diamond Jewelry</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">$60.00</span>
                                                        <span className="price-old"><del>$70.00</del></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="product-list-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-1.jpg"
                                                             alt="product"/>
                                                            <img className="sec-img"
                                                                 src="assets/img/product/product-18.jpg" alt="product"/>
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>10%</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to Compare"><i
                                                            className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                            data-bs-toggle="tooltip" data-bs-placement="left"
                                                            title="Quick View"><i
                                                            className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-content-list">
                                                    <div className="manufacturer-name">
                                                        <a href="product-details.html">Platinum</a>
                                                    </div>
                                                    <ul className="color-categories">
                                                        <li>
                                                            <a className="c-lightblue" href="#"
                                                               title="LightSteelblue"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-darktan" href="#" title="Darktan"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-grey" href="#" title="Grey"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-brown" href="#" title="Brown"></a>
                                                        </li>
                                                    </ul>

                                                    <h5 className="product-name"><a href="product-details.html">Perfect
                                                        Diamond Jewelry</a></h5>
                                                    <div className="price-box">
                                                        <span className="price-regular">$50.00</span>
                                                        <span className="price-old"><del>$29.99</del></span>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                                                        perspiciatis
                                                        quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam
                                                        corporis ullam
                                                        rem, accusantium adipisci officia eaque.</p>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="col-md-4 col-sm-6">
                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-2.jpg"
                                                             alt="product"/>
                                                            <img className="sec-img"
                                                                 src="assets/img/product/product-17.jpg" alt="product"/>
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>10%</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to Compare"><i
                                                            className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                            data-bs-toggle="tooltip" data-bs-placement="left"
                                                            title="Quick View"><i
                                                            className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <div className="product-identity">
                                                        <p className="manufacturer-name"><a
                                                            href="product-details.html">Quickiin</a></p>
                                                    </div>
                                                    <ul className="color-categories">
                                                        <li>
                                                            <a className="c-lightblue" href="#"
                                                               title="LightSteelblue"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-darktan" href="#" title="Darktan"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-grey" href="#" title="Grey"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-brown" href="#" title="Brown"></a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Handmade Golden Necklace</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">$60.00</span>
                                                        <span className="price-old"><del>$70.00</del></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="product-list-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-2.jpg"
                                                             alt="product"/>
                                                            <img className="sec-img"
                                                                 src="assets/img/product/product-17.jpg" alt="product"/>
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>10%</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to Compare"><i
                                                            className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                            data-bs-toggle="tooltip" data-bs-placement="left"
                                                            title="Quick View"><i
                                                            className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-content-list">
                                                    <div className="manufacturer-name">
                                                        <a href="product-details.html">Diamond</a>
                                                    </div>
                                                    <ul className="color-categories">
                                                        <li>
                                                            <a className="c-lightblue" href="#"
                                                               title="LightSteelblue"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-darktan" href="#" title="Darktan"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-grey" href="#" title="Grey"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-brown" href="#" title="Brown"></a>
                                                        </li>
                                                    </ul>

                                                    <h5 className="product-name"><a href="product-details.html">Handmade
                                                        Golden Necklace</a></h5>
                                                    <div className="price-box">
                                                        <span className="price-regular">$50.00</span>
                                                        <span className="price-old"><del>$29.99</del></span>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                                                        perspiciatis
                                                        quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam
                                                        corporis ullam
                                                        rem, accusantium adipisci officia eaque.</p>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="col-md-4 col-sm-6">
                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-3.jpg"
                                                             alt="product"/>
                                                            <img className="sec-img"
                                                                 src="assets/img/product/product-16.jpg" alt="product"/>
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>10%</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to Compare"><i
                                                            className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                            data-bs-toggle="tooltip" data-bs-placement="left"
                                                            title="Quick View"><i
                                                            className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <div className="product-identity">
                                                        <p className="manufacturer-name"><a
                                                            href="product-details.html">Quickiin</a></p>
                                                    </div>
                                                    <ul className="color-categories">
                                                        <li>
                                                            <a className="c-lightblue" href="#"
                                                               title="LightSteelblue"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-darktan" href="#" title="Darktan"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-grey" href="#" title="Grey"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-brown" href="#" title="Brown"></a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Diamond Exclusive Ornament</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">$60.00</span>
                                                        <span className="price-old"><del>$70.00</del></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="product-list-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-3.jpg"
                                                             alt="product"/>
                                                            <img className="sec-img"
                                                                 src="assets/img/product/product-16.jpg" alt="product"/>
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>10%</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to Compare"><i
                                                            className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                            data-bs-toggle="tooltip" data-bs-placement="left"
                                                            title="Quick View"><i
                                                            className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-content-list">
                                                    <div className="manufacturer-name">
                                                        <a href="product-details.html">Quickiin</a>
                                                    </div>
                                                    <ul className="color-categories">
                                                        <li>
                                                            <a className="c-lightblue" href="#"
                                                               title="LightSteelblue"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-darktan" href="#" title="Darktan"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-grey" href="#" title="Grey"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-brown" href="#" title="Brown"></a>
                                                        </li>
                                                    </ul>

                                                    <h5 className="product-name"><a href="product-details.html">Diamond
                                                        Exclusive Ornament</a></h5>
                                                    <div className="price-box">
                                                        <span className="price-regular">$50.00</span>
                                                        <span className="price-old"><del>$29.99</del></span>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                                                        perspiciatis
                                                        quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam
                                                        corporis ullam
                                                        rem, accusantium adipisci officia eaque.</p>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="col-md-4 col-sm-6">

                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-4.jpg"
                                                             alt="product"/>
                                                            <img className="sec-img"
                                                                 src="assets/img/product/product-15.jpg" alt="product"/>
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>10%</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to Compare"><i
                                                            className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                            data-bs-toggle="tooltip" data-bs-placement="left"
                                                            title="Quick View"><i
                                                            className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <div className="product-identity">
                                                        <p className="manufacturer-name"><a
                                                            href="product-details.html">BDevs</a></p>
                                                    </div>
                                                    <ul className="color-categories">
                                                        <li>
                                                            <a className="c-lightblue" href="#"
                                                               title="LightSteelblue"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-darktan" href="#" title="Darktan"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-grey" href="#" title="Grey"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-brown" href="#" title="Brown"></a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Handmade Golden Necklace</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">$60.00</span>
                                                        <span className="price-old"><del>$70.00</del></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="product-list-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-4.jpg"
                                                             alt="product"/>
                                                            <img className="sec-img"
                                                                 src="assets/img/product/product-15.jpg" alt="product"/>
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>10%</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to Compare"><i
                                                            className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                            data-bs-toggle="tooltip" data-bs-placement="left"
                                                            title="Quick View"><i
                                                            className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-content-list">
                                                    <div className="manufacturer-name">
                                                        <a href="product-details.html">BDevs</a>
                                                    </div>
                                                    <ul className="color-categories">
                                                        <li>
                                                            <a className="c-lightblue" href="#"
                                                               title="LightSteelblue"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-darktan" href="#" title="Darktan"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-grey" href="#" title="Grey"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-brown" href="#" title="Brown"></a>
                                                        </li>
                                                    </ul>

                                                    <h5 className="product-name"><a href="product-details.html">Handmade
                                                        Golden Necklace</a></h5>
                                                    <div className="price-box">
                                                        <span className="price-regular">$50.00</span>
                                                        <span className="price-old"><del>$29.99</del></span>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                                                        perspiciatis
                                                        quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam
                                                        corporis ullam
                                                        rem, accusantium adipisci officia eaque.</p>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="col-md-4 col-sm-6">

                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-5.jpg"
                                                             alt="product"/>
                                                            <img className="sec-img"
                                                                 src="assets/img/product/product-14.jpg" alt="product"/>
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>10%</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to Compare"><i
                                                            className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                            data-bs-toggle="tooltip" data-bs-placement="left"
                                                            title="Quick View"><i
                                                            className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <div className="product-identity">
                                                        <p className="manufacturer-name"><a
                                                            href="product-details.html">Hastech</a></p>
                                                    </div>
                                                    <ul className="color-categories">
                                                        <li>
                                                            <a className="c-lightblue" href="#"
                                                               title="LightSteelblue"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-darktan" href="#" title="Darktan"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-grey" href="#" title="Grey"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-brown" href="#" title="Brown"></a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Perfect Diamond Jewelry</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">$60.00</span>
                                                        <span className="price-old"><del>$70.00</del></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="product-list-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-5.jpg"
                                                             alt="product"/>
                                                            <img className="sec-img"
                                                                 src="assets/img/product/product-14.jpg" alt="product"/>
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>10%</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to Compare"><i
                                                            className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                            data-bs-toggle="tooltip" data-bs-placement="left"
                                                            title="Quick View"><i
                                                            className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-content-list">
                                                    <div className="manufacturer-name">
                                                        <a href="product-details.html">HasTech</a>
                                                    </div>
                                                    <ul className="color-categories">
                                                        <li>
                                                            <a className="c-lightblue" href="#"
                                                               title="LightSteelblue"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-darktan" href="#" title="Darktan"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-grey" href="#" title="Grey"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-brown" href="#" title="Brown"></a>
                                                        </li>
                                                    </ul>

                                                    <h5 className="product-name"><a href="product-details.html">Perfect
                                                        Diamond Jewelry</a></h5>
                                                    <div className="price-box">
                                                        <span className="price-regular">$50.00</span>
                                                        <span className="price-old"><del>$29.99</del></span>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                                                        perspiciatis
                                                        quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam
                                                        corporis ullam
                                                        rem, accusantium adipisci officia eaque.</p>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="col-md-4 col-sm-6">

                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-6.jpg"
                                                             alt="product"/>
                                                            <img className="sec-img"
                                                                 src="assets/img/product/product-13.jpg" alt="product"/>
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>10%</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to Compare"><i
                                                            className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                            data-bs-toggle="tooltip" data-bs-placement="left"
                                                            title="Quick View"><i
                                                            className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <div className="product-identity">
                                                        <p className="manufacturer-name"><a
                                                            href="product-details.html">Gold</a></p>
                                                    </div>
                                                    <ul className="color-categories">
                                                        <li>
                                                            <a className="c-lightblue" href="#"
                                                               title="LightSteelblue"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-darktan" href="#" title="Darktan"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-grey" href="#" title="Grey"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-brown" href="#" title="Brown"></a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Diamond Exclusive Ornament</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">$60.00</span>
                                                        <span className="price-old"><del>$70.00</del></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="product-list-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-6.jpg"
                                                             alt="product"/>
                                                            <img className="sec-img"
                                                                 src="assets/img/product/product-13.jpg" alt="product"/>
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>10%</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to Compare"><i
                                                            className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                            data-bs-toggle="tooltip" data-bs-placement="left"
                                                            title="Quick View"><i
                                                            className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-content-list">
                                                    <div className="manufacturer-name">
                                                        <a href="product-details.html">Gold</a>
                                                    </div>
                                                    <ul className="color-categories">
                                                        <li>
                                                            <a className="c-lightblue" href="#"
                                                               title="LightSteelblue"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-darktan" href="#" title="Darktan"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-grey" href="#" title="Grey"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-brown" href="#" title="Brown"></a>
                                                        </li>
                                                    </ul>

                                                    <h5 className="product-name"><a href="product-details.html">Diamond
                                                        Exclusive Ornament</a></h5>
                                                    <div className="price-box">
                                                        <span className="price-regular">$50.00</span>
                                                        <span className="price-old"><del>$29.99</del></span>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                                                        perspiciatis
                                                        quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam
                                                        corporis ullam
                                                        rem, accusantium adipisci officia eaque.</p>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="col-md-4 col-sm-6">
                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-7.jpg"
                                                             alt="product"/>
                                                            <img className="sec-img"
                                                                 src="assets/img/product/product-12.jpg" alt="product"/>
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>10%</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to Compare"><i
                                                            className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                            data-bs-toggle="tooltip" data-bs-placement="left"
                                                            title="Quick View"><i
                                                            className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <div className="product-identity">
                                                        <p className="manufacturer-name"><a
                                                            href="product-details.html">Silver</a></p>
                                                    </div>
                                                    <ul className="color-categories">
                                                        <li>
                                                            <a className="c-lightblue" href="#"
                                                               title="LightSteelblue"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-darktan" href="#" title="Darktan"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-grey" href="#" title="Grey"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-brown" href="#" title="Brown"></a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Handmade Golden Necklace</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">$60.00</span>
                                                        <span className="price-old"><del>$70.00</del></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="product-list-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-7.jpg"
                                                             alt="product"/>
                                                            <img className="sec-img"
                                                                 src="assets/img/product/product-12.jpg" alt="product"/>
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>10%</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to Compare"><i
                                                            className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                            data-bs-toggle="tooltip" data-bs-placement="left"
                                                            title="Quick View"><i
                                                            className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-content-list">
                                                    <div className="manufacturer-name">
                                                        <a href="product-details.html">Silver</a>
                                                    </div>
                                                    <ul className="color-categories">
                                                        <li>
                                                            <a className="c-lightblue" href="#"
                                                               title="LightSteelblue"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-darktan" href="#" title="Darktan"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-grey" href="#" title="Grey"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-brown" href="#" title="Brown"></a>
                                                        </li>
                                                    </ul>

                                                    <h5 className="product-name"><a href="product-details.html">Handmade
                                                        Golden Necklace</a></h5>
                                                    <div className="price-box">
                                                        <span className="price-regular">$50.00</span>
                                                        <span className="price-old"><del>$29.99</del></span>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                                                        perspiciatis
                                                        quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam
                                                        corporis ullam
                                                        rem, accusantium adipisci officia eaque.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-6">
                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-8.jpg"
                                                             alt="product"/>
                                                            <img className="sec-img"
                                                                 src="assets/img/product/product-11.jpg" alt="product"/>
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>10%</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to Compare"><i
                                                            className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                            data-bs-toggle="tooltip" data-bs-placement="left"
                                                            title="Quick View"><i
                                                            className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <div className="product-identity">
                                                        <p className="manufacturer-name"><a
                                                            href="product-details.html">Maya</a></p>
                                                    </div>
                                                    <ul className="color-categories">
                                                        <li>
                                                            <a className="c-lightblue" href="#"
                                                               title="LightSteelblue"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-darktan" href="#" title="Darktan"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-grey" href="#" title="Grey"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-brown" href="#" title="Brown"></a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Perfect Diamond Jewelry</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">$60.00</span>
                                                        <span className="price-old"><del>$70.00</del></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="product-list-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-8.jpg"
                                                             alt="product"/>
                                                            <img className="sec-img"
                                                                 src="assets/img/product/product-11.jpg" alt="product"/>
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>10%</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to Compare"><i
                                                            className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                            data-bs-toggle="tooltip" data-bs-placement="left"
                                                            title="Quick View"><i
                                                            className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-content-list">
                                                    <div className="manufacturer-name">
                                                        <a href="product-details.html">Maya</a>
                                                    </div>
                                                    <ul className="color-categories">
                                                        <li>
                                                            <a className="c-lightblue" href="#"
                                                               title="LightSteelblue"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-darktan" href="#" title="Darktan"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-grey" href="#" title="Grey"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-brown" href="#" title="Brown"></a>
                                                        </li>
                                                    </ul>

                                                    <h5 className="product-name"><a href="product-details.html">Perfect
                                                        Diamond Jewelry</a></h5>
                                                    <div className="price-box">
                                                        <span className="price-regular">$50.00</span>
                                                        <span className="price-old"><del>$29.99</del></span>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                                                        perspiciatis
                                                        quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam
                                                        corporis ullam
                                                        rem, accusantium adipisci officia eaque.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4 col-sm-6">

                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-9.jpg"
                                                             alt="product"/>
                                                            <img className="sec-img"
                                                                 src="assets/img/product/product-10.jpg" alt="product"/>
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>10%</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to Compare"><i
                                                            className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                            data-bs-toggle="tooltip" data-bs-placement="left"
                                                            title="Quick View"><i
                                                            className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <div className="product-identity">
                                                        <p className="manufacturer-name"><a
                                                            href="product-details.html">Quickiin</a></p>
                                                    </div>
                                                    <ul className="color-categories">
                                                        <li>
                                                            <a className="c-lightblue" href="#"
                                                               title="LightSteelblue"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-darktan" href="#" title="Darktan"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-grey" href="#" title="Grey"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-brown" href="#" title="Brown"></a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Perfect Diamond Jewelry</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">$60.00</span>
                                                        <span className="price-old"><del>$70.00</del></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="product-list-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-9.jpg"
                                                             alt="product"/>
                                                            <img className="sec-img"
                                                                 src="assets/img/product/product-10.jpg" alt="product"/>
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>10%</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to Compare"><i
                                                            className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                            data-bs-toggle="tooltip" data-bs-placement="left"
                                                            title="Quick View"><i
                                                            className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-content-list">
                                                    <div className="manufacturer-name">
                                                        <a href="product-details.html">Quickiin</a>
                                                    </div>
                                                    <ul className="color-categories">
                                                        <li>
                                                            <a className="c-lightblue" href="#"
                                                               title="LightSteelblue"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-darktan" href="#" title="Darktan"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-grey" href="#" title="Grey"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-brown" href="#" title="Brown"></a>
                                                        </li>
                                                    </ul>

                                                    <h5 className="product-name"><a href="product-details.html">Perfect
                                                        Diamond Jewelry</a></h5>
                                                    <div className="price-box">
                                                        <span className="price-regular">$50.00</span>
                                                        <span className="price-old"><del>$29.99</del></span>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                                                        perspiciatis
                                                        quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam
                                                        corporis ullam
                                                        rem, accusantium adipisci officia eaque.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4 col-sm-6">
                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-10.jpg"
                                                             alt="product"/>
                                                            <img className="sec-img"
                                                                 src="assets/img/product/product-9.jpg" alt="product"/>
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>10%</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to Compare"><i
                                                            className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                            data-bs-toggle="tooltip" data-bs-placement="left"
                                                            title="Quick View"><i
                                                            className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <div className="product-identity">
                                                        <p className="manufacturer-name"><a
                                                            href="product-details.html">Jem</a></p>
                                                    </div>
                                                    <ul className="color-categories">
                                                        <li>
                                                            <a className="c-lightblue" href="#"
                                                               title="LightSteelblue"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-darktan" href="#" title="Darktan"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-grey" href="#" title="Grey"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-brown" href="#" title="Brown"></a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Handmade Golden Necklace</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">$60.00</span>
                                                        <span className="price-old"><del>$70.00</del></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="product-list-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-10.jpg"
                                                             alt="product"/>
                                                            <img className="sec-img"
                                                                 src="assets/img/product/product-9.jpg" alt="product"/>
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>10%</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to Compare"><i
                                                            className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                            data-bs-toggle="tooltip" data-bs-placement="left"
                                                            title="Quick View"><i
                                                            className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-content-list">
                                                    <div className="manufacturer-name">
                                                        <a href="product-details.html">Jem</a>
                                                    </div>
                                                    <ul className="color-categories">
                                                        <li>
                                                            <a className="c-lightblue" href="#"
                                                               title="LightSteelblue"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-darktan" href="#" title="Darktan"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-grey" href="#" title="Grey"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-brown" href="#" title="Brown"></a>
                                                        </li>
                                                    </ul>

                                                    <h5 className="product-name"><a href="product-details.html">Handmade
                                                        Golden Necklace</a></h5>
                                                    <div className="price-box">
                                                        <span className="price-regular">$50.00</span>
                                                        <span className="price-old"><del>$29.99</del></span>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                                                        perspiciatis
                                                        quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam
                                                        corporis ullam
                                                        rem, accusantium adipisci officia eaque.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-6">
                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-11.jpg"
                                                             alt="product"/>
                                                            <img className="sec-img"
                                                                 src="assets/img/product/product-8.jpg" alt="product"/>
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>10%</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to Compare"><i
                                                            className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                            data-bs-toggle="tooltip" data-bs-placement="left"
                                                            title="Quick View"><i
                                                            className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <div className="product-identity">
                                                        <p className="manufacturer-name"><a
                                                            href="product-details.html">Quickiin</a></p>
                                                    </div>
                                                    <ul className="color-categories">
                                                        <li>
                                                            <a className="c-lightblue" href="#"
                                                               title="LightSteelblue"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-darktan" href="#" title="Darktan"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-grey" href="#" title="Grey"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-brown" href="#" title="Brown"></a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Diamond Exclusive Ornament</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">$60.00</span>
                                                        <span className="price-old"><del>$70.00</del></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="product-list-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-11.jpg"
                                                             alt="product"/>
                                                            <img className="sec-img"
                                                                 src="assets/img/product/product-8.jpg" alt="product"/>
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>10%</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to Compare"><i
                                                            className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                            data-bs-toggle="tooltip" data-bs-placement="left"
                                                            title="Quick View"><i
                                                            className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-content-list">
                                                    <div className="manufacturer-name">
                                                        <a href="product-details.html">Quickiin</a>
                                                    </div>
                                                    <ul className="color-categories">
                                                        <li>
                                                            <a className="c-lightblue" href="#"
                                                               title="LightSteelblue"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-darktan" href="#" title="Darktan"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-grey" href="#" title="Grey"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-brown" href="#" title="Brown"></a>
                                                        </li>
                                                    </ul>

                                                    <h5 className="product-name"><a href="product-details.html">Diamond
                                                        Exclusive Ornament</a></h5>
                                                    <div className="price-box">
                                                        <span className="price-regular">$50.00</span>
                                                        <span className="price-old"><del>$29.99</del></span>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                                                        perspiciatis
                                                        quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam
                                                        corporis ullam
                                                        rem, accusantium adipisci officia eaque.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4 col-sm-6">
                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-12.jpg"
                                                             alt="product"/>
                                                            <img className="sec-img"
                                                                 src="assets/img/product/product-7.jpg" alt="product"/>
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>10%</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to Compare"><i
                                                            className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                            data-bs-toggle="tooltip" data-bs-placement="left"
                                                            title="Quick View"><i
                                                            className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <div className="product-identity">
                                                        <p className="manufacturer-name"><a
                                                            href="product-details.html">HasTech</a></p>
                                                    </div>
                                                    <ul className="color-categories">
                                                        <li>
                                                            <a className="c-lightblue" href="#"
                                                               title="LightSteelblue"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-darktan" href="#" title="Darktan"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-grey" href="#" title="Grey"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-brown" href="#" title="Brown"></a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Perfect Diamond Jewelry</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">$60.00</span>
                                                        <span className="price-old"><del>$70.00</del></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="product-list-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-12.jpg"
                                                             alt="product"/>
                                                            <img className="sec-img"
                                                                 src="assets/img/product/product-7.jpg" alt="product"/>
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>10%</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to Compare"><i
                                                            className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                            data-bs-toggle="tooltip" data-bs-placement="left"
                                                            title="Quick View"><i
                                                            className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-content-list">
                                                    <div className="manufacturer-name">
                                                        <a href="product-details.html">HasTech</a>
                                                    </div>
                                                    <ul className="color-categories">
                                                        <li>
                                                            <a className="c-lightblue" href="#"
                                                               title="LightSteelblue"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-darktan" href="#" title="Darktan"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-grey" href="#" title="Grey"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-brown" href="#" title="Brown"></a>
                                                        </li>
                                                    </ul>

                                                    <h5 className="product-name"><a href="product-details.html">Perfect
                                                        Diamond Jewelry</a></h5>
                                                    <div className="price-box">
                                                        <span className="price-regular">$50.00</span>
                                                        <span className="price-old"><del>$29.99</del></span>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                                                        perspiciatis
                                                        quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam
                                                        corporis ullam
                                                        rem, accusantium adipisci officia eaque.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4 col-sm-6">
                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-13.jpg"
                                                             alt="product"/>
                                                            <img className="sec-img"
                                                                 src="assets/img/product/product-6.jpg" alt="product"/>
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>10%</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to Compare"><i
                                                            className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                            data-bs-toggle="tooltip" data-bs-placement="left"
                                                            title="Quick View"><i
                                                            className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <div className="product-identity">
                                                        <p className="manufacturer-name"><a
                                                            href="product-details.html">Gold</a></p>
                                                    </div>
                                                    <ul className="color-categories">
                                                        <li>
                                                            <a className="c-lightblue" href="#"
                                                               title="LightSteelblue"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-darktan" href="#" title="Darktan"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-grey" href="#" title="Grey"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-brown" href="#" title="Brown"></a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Perfect Diamond Jewelry</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">$60.00</span>
                                                        <span className="price-old"><del>$70.00</del></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="product-list-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-13.jpg"
                                                             alt="product"/>
                                                            <img className="sec-img"
                                                                 src="assets/img/product/product-6.jpg" alt="product"/>
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>10%</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to Compare"><i
                                                            className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                            data-bs-toggle="tooltip" data-bs-placement="left"
                                                            title="Quick View"><i
                                                            className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-content-list">
                                                    <div className="manufacturer-name">
                                                        <a href="product-details.html">Gold</a>
                                                    </div>
                                                    <ul className="color-categories">
                                                        <li>
                                                            <a className="c-lightblue" href="#"
                                                               title="LightSteelblue"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-darktan" href="#" title="Darktan"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-grey" href="#" title="Grey"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-brown" href="#" title="Brown"></a>
                                                        </li>
                                                    </ul>

                                                    <h5 className="product-name"><a href="product-details.html">Perfect
                                                        Diamond Jewelry</a></h5>
                                                    <div className="price-box">
                                                        <span className="price-regular">$50.00</span>
                                                        <span className="price-old"><del>$29.99</del></span>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                                                        perspiciatis
                                                        quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam
                                                        corporis ullam
                                                        rem, accusantium adipisci officia eaque.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4 col-sm-6">

                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-14.jpg"
                                                             alt="product"/>
                                                            <img className="sec-img"
                                                                 src="assets/img/product/product-5.jpg" alt="product"/>
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>10%</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to Compare"><i
                                                            className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                            data-bs-toggle="tooltip" data-bs-placement="left"
                                                            title="Quick View"><i
                                                            className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <div className="product-identity">
                                                        <p className="manufacturer-name"><a
                                                            href="product-details.html">Gold</a></p>
                                                    </div>
                                                    <ul className="color-categories">
                                                        <li>
                                                            <a className="c-lightblue" href="#"
                                                               title="LightSteelblue"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-darktan" href="#" title="Darktan"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-grey" href="#" title="Grey"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-brown" href="#" title="Brown"></a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Handmade Golden Necklace</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">$60.00</span>
                                                        <span className="price-old"><del>$70.00</del></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="product-list-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-14.jpg"
                                                             alt="product"/>
                                                            <img className="sec-img"
                                                                 src="assets/img/product/product-5.jpg" alt="product"/>
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>10%</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to Compare"><i
                                                            className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                            data-bs-toggle="tooltip" data-bs-placement="left"
                                                            title="Quick View"><i
                                                            className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-content-list">
                                                    <div className="manufacturer-name">
                                                        <a href="product-details.html">Gold</a>
                                                    </div>
                                                    <ul className="color-categories">
                                                        <li>
                                                            <a className="c-lightblue" href="#"
                                                               title="LightSteelblue"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-darktan" href="#" title="Darktan"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-grey" href="#" title="Grey"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-brown" href="#" title="Brown"></a>
                                                        </li>
                                                    </ul>

                                                    <h5 className="product-name"><a href="product-details.html">Handmade
                                                        Golden Necklace</a></h5>
                                                    <div className="price-box">
                                                        <span className="price-regular">$50.00</span>
                                                        <span className="price-old"><del>$29.99</del></span>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                                                        perspiciatis
                                                        quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam
                                                        corporis ullam
                                                        rem, accusantium adipisci officia eaque.</p>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="col-md-4 col-sm-6">
                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-15.jpg"
                                                             alt="product"/>
                                                            <img className="sec-img"
                                                                 src="assets/img/product/product-4.jpg" alt="product"/>
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>10%</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to Compare"><i
                                                            className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                            data-bs-toggle="tooltip" data-bs-placement="left"
                                                            title="Quick View"><i
                                                            className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <div className="product-identity">
                                                        <p className="manufacturer-name"><a
                                                            href="product-details.html">Quickiin</a></p>
                                                    </div>
                                                    <ul className="color-categories">
                                                        <li>
                                                            <a className="c-lightblue" href="#"
                                                               title="LightSteelblue"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-darktan" href="#" title="Darktan"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-grey" href="#" title="Grey"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-brown" href="#" title="Brown"></a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Diamond Exclusive Ornament</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">$60.00</span>
                                                        <span className="price-old"><del>$70.00</del></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="product-list-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-15.jpg"
                                                             alt="product"/>
                                                            <img className="sec-img"
                                                                 src="assets/img/product/product-4.jpg" alt="product"/>
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>10%</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip"
                                                           data-bs-placement="left" title="Add to Compare"><i
                                                            className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                            data-bs-toggle="tooltip" data-bs-placement="left"
                                                            title="Quick View"><i
                                                            className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-content-list">
                                                    <div className="manufacturer-name">
                                                        <a href="product-details.html">Quickiin</a>
                                                    </div>
                                                    <ul className="color-categories">
                                                        <li>
                                                            <a className="c-lightblue" href="#"
                                                               title="LightSteelblue"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-darktan" href="#" title="Darktan"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-grey" href="#" title="Grey"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-brown" href="#" title="Brown"></a>
                                                        </li>
                                                    </ul>

                                                    <h5 className="product-name"><a href="product-details.html">Diamond
                                                        Exclusive Ornament</a></h5>
                                                    <div className="price-box">
                                                        <span className="price-regular">$50.00</span>
                                                        <span className="price-old"><del>$29.99</del></span>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                                                        perspiciatis
                                                        quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam
                                                        corporis ullam
                                                        rem, accusantium adipisci officia eaque.</p>
                                                </div>
                                            </div>

                                        </div>


                                    </div>

                                    <div className="paginatoin-area text-center">
                                        <ul className="pagination-box">
                                            <li><a className="previous" href="#"><i
                                                className="pe-7s-angle-left"></i></a></li>
                                            <li className="active"><a href="#">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a className="next" href="#"><i className="pe-7s-angle-right"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
            <Footer/>
        </>
    );
}