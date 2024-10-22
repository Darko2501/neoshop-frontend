import {fetchCategories} from "@/services/api";
import {useEffect, useState} from "react";

export default function CategorySidebar({onCategorySelect}){
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        async function loadCategories(){
            try {
                const data=await fetchCategories();
                setCategories(data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        }
        loadCategories();
    }, []);
    return(
        <aside className="w-1/4 p-4 bg-gray-600">
            <h2 className="font-bold mb-4 text-white">Categories</h2>
            <ul>
                {categories.map(category => (
                    <li key={category.id} className="mb-2 ">
                        <button className="text-white hover:underline-offset-2" onClick={() => onCategorySelect(category.id)}>{category.category_name}</button>
                    </li>
                ))}

            </ul>
        </aside>
    )
}