import MainProductItem from "@/app/components/MainProductItem";

export default function MainProducts(){
    return (
        <section className="feature-product section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h2 className="title">featured products</h2>
                            <p className="sub-title">Add featured products to weekly lineup</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="product-carousel-4_2 slick-row-10 slick-arrow-style">
                           <MainProductItem/>
                           <MainProductItem/>
                           <MainProductItem/>
                           <MainProductItem/>
                           <MainProductItem/>
                           <MainProductItem/>
                           <MainProductItem/>
                           <MainProductItem/>
                           <MainProductItem/>
                           <MainProductItem/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}