"use client";
import TheNewHeader from "@/app/components/TheNewHeader";
import Footer from "@/app/components/Footer";
import {useEffect, useState} from "react";

import {homeProjects, businessProjects, interiorProjects} from "@/app/utils/portfolio";
import {useParams, useRouter} from "next/navigation";


export default function ProductPage(){
    const imagePath = "../../../static/images/portfolio/";

    const allProducts = [...homeProjects,...businessProjects, ...interiorProjects];

    const [id, setId] = useState<number | null>(null);
    const [product, setProduct] = useState<any>(null);

    const params = useParams();

     // const { id } = router.query;

    useEffect(() => {
        const paramId = Array.isArray(params.id) ? params.id[0] : params.id;
        if (paramId) {
            const numericId = parseInt(paramId, 10);
            if (!isNaN(numericId)) {
                setId(numericId);
                const foundProduct = allProducts.find(product => product.id === numericId);
                setProduct(foundProduct || null); // Set `null` if no product found
            }
        }
    }, [params.id, allProducts]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <TheNewHeader/>
            <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Images Column */}
                <div className="flex flex-col gap-4">
                    <img
                        src={`${imagePath}${product.coverImage}`}
                        alt="Main product image"
                        width={500}
                        height={500}
                        className="rounded-lg"
                    />
                    <div className="grid grid-cols-3 gap-4">
                        {product.images.map((image: string) => (
                            <img
                                src={`${imagePath}${image}`}
                                alt="Product image"
                                width={150}
                                height={150}
                                className="rounded-lg"
                                key={image} // Adding a key for each image is good practice
                            />
                        ))}
                    </div>
                </div>

                {/* Description Column */}
                <div className="flex flex-col justify-center">
                    <h1 className="text-3xl font-semibold mb-4">Product Title</h1>
                    <p className="text-gray-700 text-lg mb-6">
                        Here is a detailed description of the product. Include important
                        features, materials, and benefits here.
                    </p>
                    <p className="text-xl font-bold mb-4">$99.99</p>

                    <button className="w-full md:w-auto px-8 py-3 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition">
                        Order
                    </button>
                </div>
            </div>
        </div>
            <Footer/>
        </>
    );
}