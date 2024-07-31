import { useFilteredProducts } from "../../Hooks/useProducts"

export default function Home() {

    return (<ul>
        {useFilteredProducts('').map((product, index) => (
            <li key={index}>{product.name}</li>
        ))}
    </ul>)
}