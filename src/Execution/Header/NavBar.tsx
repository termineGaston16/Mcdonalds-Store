// Components/NavBar.tsx
import { useProducts } from "../../Hooks/useProducts";

export default function NavBar() {
    const { listOfCategories } = useProducts();

    if (listOfCategories.length === 0) return ('loading...')

    return (
        <nav>
            <ul style={{ display: 'flex', alignContent: 'space-between', gap: '2rem' }}>
                {listOfCategories.map((category, index) => (
                    <li key={index}>{category}</li>
                ))}
            </ul>
        </nav>
    );
}
