import React, { useEffect, useState } from "react";
import PageTitle from "../components/pageTitle/PageTitle";
import '@mantine/carousel/styles.css';
import CarouselImage from "../components/carousel/CarouselImage";
import { PasarawaContract } from "../contracts/PasarawaContract";
import CardComponent from "../components/card/CardComponent";

const Layout = React.lazy(() => import("../layout/Layout"));

interface Product {
    id: number;
    name: string;
    description: string;
    status: number;
    shippingReceipt: string;
    price: number;
    seller: string;
}

function Home() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [isNotWeb3, setIsNotWeb3] = useState<boolean>(false);

    const fetchProducts = async (): Promise<void> => {
        try {
            const contract = await PasarawaContract();
            const productCount: number = parseInt(await contract.methods.productCount().call());
            const productList: Product[] = [];

            for (let i = 1; i <= productCount; i++) {
                const product: Product = await contract.methods.products(i).call();
                productList.push({
                    id: parseInt(product.id.toString()),
                    name: product.name,
                    description: product.description,
                    status: parseInt(product.status.toString()),
                    shippingReceipt: product.shippingReceipt,
                    price: parseInt(product.price.toString()),
                    seller: product.seller,
                });
            }

            setProducts(productList);
            console.log("Products fetched successfully:", productList);
        } catch (error) {
            setIsNotWeb3(true);
            console.error("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <Layout>
                <PageTitle title="Home | Pasarawa - The World's #1 Decentralized Luxury Transportation Marketplace" />
                <div className="flex flex-col items-center justify-center mt-7 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <CarouselImage />
                </div>
                <div className="flex mt-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-2xl font-bold text-blue-500">Products</h1>
                </div>
                <div className="flex mt-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {loading ? (
                            <div className="flex items-center justify-center col-span-full">
                                <p className="text-xl font-bold text-gray-800">Loading products...</p>
                            </div>
                        ) : (
                            products.map((product, index) => (
                                <CardComponent
                                    key={index}
                                    title={product.name}
                                    description={product.description}
                                    status={product.status === 0 ? "Sold" : product.status === 1 ? "Available" : "Cancelled"}
                                    isShipped={product.shippingReceipt === "0x0000000000000000000000000000000000000000000000000000000000000000" ? false : true}
                                    price={product.price}
                                    seller={product.seller}
                                />
                            ))
                        )}
                        {isNotWeb3 && (
                            <div className="flex items-center justify-center col-span-full">
                                <p className="text-xl font-bold text-red-500">No Web3 provider detected. Please install MetaMask or another provider for accessing this application.</p>
                            </div>
                        )}
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Home;