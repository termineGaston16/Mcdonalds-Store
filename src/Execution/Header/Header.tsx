import { Link } from "react-router-dom";
import NavBar from "./NavBar";

export default function Header() {
    return (
        <header style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                    <ul>
                        <li><a href="https://www.mcdonalds.com.ar/" target="_blank">Página Oficial</a></li>
                        <li><a href="https://www.mcdonalds.com.ar/politica-de-privacidad" target="_blank">Política de Privacidad</a></li>
                        <li><a href="https://www.youtube.com/user/McDonaldsSur" target="_blank">Youtube</a></li>
                        <li><a href="https://www.facebook.com/McDonaldsArgentina/" target="_blank">Facebook</a></li>
                        <li><a href="https://www.instagram.com/mcdonalds_ar/" target="_blank">Instagram</a></li>
                        <li><a href="https://x.com/mcdonalds_ar" target="_blank">X</a></li>
                    </ul>
                </div>
                <div>
                    <Link to={'/'}>McDonalds's Store</Link>
                </div>
                <div>
                    <p>McDonald's ©2024 <br /> a proyect by <span>KDA/NOVA</span></p>
                </div>
            </div>

            <NavBar />
        </header>
    )
}