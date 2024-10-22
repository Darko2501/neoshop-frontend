import Image from 'next/image';
import Link from "next/link";
import { fetchProductBySlug } from '@/services/api';

export default async function Slug({ params }) {

    const { slug } = await params;
    const product = await fetchProductBySlug(slug);

    return (
        <div className="flex justify-center items-center min-h-screen p-4">
            <div className="bg-white border rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 w-full max-w-md">

                <Image
                    src={`http://localhost:8000${product.image}`}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <p className="text-lg font-bold text-blue-600">${product.price}</p>
                    <Link href="/product">
                        <button className="mt-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                            Back to Products
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
