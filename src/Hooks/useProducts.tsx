// Hooks/useProducts.ts
import { useMemo } from "react";
import { useProductsContext } from "../Context/products";
import { Food } from "../types/type";

export function useProducts() {
    const { productsInTheDatabase } = useProductsContext();

    // OBTENER UNA LISTA DE TODAS LAS CATEGORÍAS
    const listOfCategories = useMemo<string[]>(() => {
        const allCategories = Array.from(new Set(productsInTheDatabase.map(food => food.category)));
        return allCategories;
    }, [productsInTheDatabase]);

    return { listOfCategories, productsInTheDatabase };
}

// Hook para filtrar productos
export function useFilteredProducts(query: string) {
    const { productsInTheDatabase } = useProductsContext();

    const filteredProducts = useMemo<Food[]>(() => {
        if (!query) return productsInTheDatabase; // si no hay query, devolver todos los productos
        return productsInTheDatabase.filter(food =>
            food.category.toLowerCase() === query.toLowerCase()
        );
    }, [productsInTheDatabase, query]);

    return filteredProducts;
}
