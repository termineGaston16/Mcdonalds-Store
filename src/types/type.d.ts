// PackagingButtons
export interface PropsPackagingButtons{
    to: '/home',
    className: className,
    text: 'Comer aquí' | 'Para llevar',
}

// Foods
export interface Food{
    id: string,
    category: string,
    description:string,
    img: string,
    name:string,
    options?: {
        size: string[]
    },
    price: number,
    stock:number
}

// Context
export interface ProductsContextType {
    productsInTheDatabase: Food[]
}




