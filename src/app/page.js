'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { fetchProductsByCategory } from "@/services/api";
import CategorySidebar from "@/components/CategorySidebar";

export default function HomePage() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            if (selectedCategory) {
                try {
                    const data = await fetchProductsByCategory(selectedCategory);
                    setProducts(data);
                } catch (error) {
                    console.error("Failed to load products:", error);
                }
            }
        }
        loadProducts();
    }, [selectedCategory]);

    return (
        <div className="flex min-h-screen">
            <CategorySidebar onCategorySelect={setSelectedCategory} />
            <main className="w-3/4 p-4 min-h-screen">
                <h1 className="text-4xl font-bold text-center my-6">NEO STORE</h1>
                <h2 className="font-bold text-xl mb-4">
                    {selectedCategory ? "Filtered Products" : "All Products"}
                </h2>
                <div className="grid grid-cols-3 gap-4">
                    {products.map((product) => (
                        <div key={product.id} className="border p-4 rounded h-auto flex flex-col">
                            <div className="relative w-full h-40 mb-2">
                                <Image
                                    src={`http://localhost:8000${product.image}`}
                                    alt={product.name}
                                    width={400}
                                    height={300}
                                    className="w-full h-48 object-cover"
                                    onError={(e) => { e.target.src = '/placeholder.jpg'; }} // Ovdje postavite putanju do placeholder slike
                                />
                            </div>
                            <h3 className="font-bold">{product.name}</h3>
                            <p className="text-sm">{product.description}</p>
                            <p className="font-semibold">${product.price}</p>
                            <Link
                                href={`/product/${product.id}`}
                                className="mt-auto bg-blue-500 text-white text-center px-4 py-2 rounded hover:bg-blue-600 transition"
                            >
                                View Detail
                            </Link>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
