import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RenderComponents } from "./RenderComponents/RenderComponents";


// COMPONENTS LAZY
const SelectPackaging = lazy(() => import('./Execution/SelectPackaging/SelectPackaging'))
const Header = lazy(() => import('./Execution/Header/Header'))
const Home = lazy(() => import('./Execution/Main/Home'))

// CONTEXT LAZY
const ProductsProvider = lazy(() => import('./Context/products').then(module => ({ default: module.ProductsProvider })))

export default function App() {
    return (

        <BrowserRouter>
            <Suspense fallback='Cargando App...'>
                <ProductsProvider><RenderComponents component={<Header />} /></ProductsProvider>

                <Routes>
                    <Route path='/' element={<SelectPackaging />} />
                    <Route path='*' element={<h2>Error 404</h2>} />

                    <Route path='/home' element={<ProductsProvider><Home /></ProductsProvider>} />
                </Routes>
            </Suspense>
        </BrowserRouter>

    )
}