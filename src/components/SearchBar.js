'use client';
import { fetchProductByQuery, fetchProducts } from "@/services/api";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from 'next/image';

export default function SearchBar() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        async function getProducts() {
            const allProducts = await fetchProducts();
            setProducts(allProducts);
        }
        getProducts();
    }, []);

    const handleSearch = async (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        if (query) {
            const results = await fetchProductByQuery(query);
            setFilteredProducts(results);
        } else {
            setFilteredProducts([]);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-center text-xl mb-4">Products</h1>
            <div className="flex justify-center mb-6">
                <input
                    type="text"
                    onChange={handleSearch}
                    value={searchQuery}
                    placeholder="Search for a product..."
                    className="px-4 py-2 border rounded-lg w-full max-w-md"
                />
            </div>
            {searchQuery && filteredProducts.length > 0 ? (
                <div className="flex flex-col space-y-4">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="bg-white border rounded-lg shadow-lg flex p-4 hover:shadow-xl transition-shadow duration-300">
                            <Image
                                src={`http://localhost:8000${product.image}`}
                                alt={product.name}
                                width={150}
                                height={150}
                                className="object-cover rounded-lg mr-4"
                            />
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                                <p className="text-gray-600 mb-2">{product.description}</p>
                                <p className="text-lg font-bold text-blue-600 mb-4">${product.price}</p>
                                <Link href={`/product/${product.id}`}>
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                                        View Detail
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                searchQuery && filteredProducts.length === 0 && (
                    <p className="text-center text-red-500">No products available.</p>
                )
            )}
        </div>
    );
}
