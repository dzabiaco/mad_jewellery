
export default function Benefits(){
    return (
        <section className="w-full bg-white p-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* First Column */}
                <div className="border-2 border-yellow-300 p-6 text-center animate-fadeInLeft flex flex-col items-center justify-center">
                    <img src="../../../static/images/icon-pret.svg" alt="Цена от производителя" className="mb-4"/>
                    <h3 className="text-lg font-bold">Price Directly from the Manufacturer</h3>
                    <p className="text-gray-700">Save up to 10,000 Lei</p>
                </div>

                {/* Second Column */}
                <div className="border-2 border-yellow-300 p-6 text-center animate-fadeInLeft delay-500 flex flex-col items-center justify-center">
                    <img src="../../../static/images/price-icon.svg" alt="Оплата после установки" className="mb-4"/>
                    <h3 className="text-lg font-bold">Payment After Installation</h3>
                    <p className="text-gray-700">Payment for furniture after installation</p>
                </div>

                {/* Third Column */}
                <div className="border-2 border-yellow-300 p-6 text-center animate-fadeInLeft delay-1000 flex flex-col items-center justify-center">
                    <img src="../../../static/images/garantie-icon.svg" alt="Гарантия" className="mb-4"/>
                    <h3 className="text-lg font-bold">Warranty</h3>
                    <p className="text-gray-700">We offer a 2-year warranty on our services and a 10-year warranty on materials.</p>
                </div>

                {/* Fourth Column */}
                <div className="border-2 border-yellow-300 p-6 text-center animate-fadeInLeft delay-1500 flex flex-col items-center justify-center">
                    <img src="../../../static/images/rate.svg" alt="Оплата в рассрочку без %" className="mb-4"/>
                    <h3 className="text-lg font-bold">Interest-Free Installment Plan</h3>
                    <p className="text-gray-700">Pay conveniently without any additional costs</p>
                </div>
            </div>
        </section>
    );
}