import { createContext, ReactElement, useCallback, useContext, useEffect, useState } from "react";
import { ProductsContextType } from "../types/type";
import { getAllProducts } from "../FireBase/fireBase";

const defaultProductsContext: ProductsContextType = {
    productsInTheDatabase: []
}

interface ProductsProviderProps {
    children: ReactElement
}

// -----------------------------

const ProductsContext = createContext<ProductsContextType>(defaultProductsContext);

const ProductsProvider: React.FC<ProductsProviderProps> = ({ children }) => {
    const [productsInTheDatabase, setProductsInTheDatabase] = useState<ProductsContextType['productsInTheDatabase']>([]);

    // Obtener todos los productos
    const performFetchCall: () => void = useCallback((): void => {
        getAllProducts(setProductsInTheDatabase)
    }, [])

    useEffect(() => {
        performFetchCall()
    }, [])

    return <ProductsContext.Provider value={{ productsInTheDatabase }}>
        {children}
    </ProductsContext.Provider>
}

const useProductsContext = () => useContext(ProductsContext);
export { ProductsProvider, useProductsContext }