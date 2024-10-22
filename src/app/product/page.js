import Link from "next/link";
import { fetchProducts } from "@/services/api";
import SearchBar from '@/components/SearchBar';
import Image from "next/image";

export default async function ProductsPage() {

    const products = await fetchProducts();

    return (
        <div className="p-4">
            <h1 className="text-4xl font-bold text-center my-6">NEO STORE</h1>
            <SearchBar />
            <h1 className="text-3xl font-bold text-center my-6">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map(product => (
                    <div key={product.id} className="bg-white shadow-lg rounded-lg p-4 flex flex-col h-full">
                        <Image
                            src={`http://localhost:8000${product.image}`}
                            alt={product.name}
                            width={150}
                            height={150}
                            className="object-cover rounded-lg mb-4"
                        />
                        <div className="flex-grow">
                            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                            <p className="text-gray-600 mb-2">{product.description}</p>
                            <p className="text-lg font-bold text-blue-600 mb-4">${product.price}</p>
                        </div>

                        <Link
                            href={`/product/${product.id}`}
                            className="mt-4 bg-blue-500 text-white text-center px-4 py-2 rounded hover:bg-blue-600 transition"
                        >
                            View Detail
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
