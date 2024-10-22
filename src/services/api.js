// src/services/productService.js

export async function fetchProducts() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
}

export async function fetchProductBySlug(slug) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${slug}`);
        if (!response.ok) {
            throw new Error("Product not found");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching product by slug:", error);
        throw error;
    }
}

export async function fetchProductByQuery(query) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/?name=${encodeURIComponent(query)}`);
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching products by query:", error);
        throw error;
    }
}

export async function fetchCategories() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
        if (!response.ok) {
            throw new Error("Failed to fetch categories");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
    }
}
export async function fetchProductsByCategory(categoryId) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?category=${categoryId}`);
    if (!response.ok) {
        throw new Error("Failed to fetch products for category");
    }
    return await response.json();
}
