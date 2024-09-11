import Link from "next/link";


export default function SliderMain(){
    return (
        <section className="slider-area">
            <div className="hero-slider-active slick-arrow-style slick-arrow-style_hero slick-dot-style">
                <div className="hero-single-slide hero-overlay">
                    <div className="hero-slider-item bg-img"
                         data-bg="../../../static/images/slider/home2-slide1.jpg">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="hero-slider-content slide-1">
                                        <h2 className="slide-title">Flower Diamond<span>Collection</span></h2>
                                        <h4 className="slide-desc">Budget Jewelry Starting At $295.99</h4>
                                        <Link href="/shop" className="btn btn-hero">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hero-single-slide hero-overlay">
                    <div className="hero-slider-item bg-img" data-bg="../../../static/images/slider/home2-slide2.jpg">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="hero-slider-content slide-2">
                                        <h2 className="slide-title">New Diamond<span>& Wedding Rings</span></h2>
                                        <h4 className="slide-desc">Avail 15% off on Making Charges for all Jewelry</h4>
                                        <a href="shop.html" className="btn btn-hero">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hero-single-slide hero-overlay">
                    <div className="hero-slider-item bg-img" data-bg="../../../static/images/slider/home2-slide1.jpg">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="hero-slider-content slide-3">
                                        <h2 className="slide-title">Grace Designer<span>Jewelry</span></h2>
                                        <h4 className="slide-desc">Rings, Occasion Pieces, Pandora & More.</h4>
                                        <a href="shop.html" className="btn btn-hero">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}