import Carrito from "../Carrito/Carrito";
import Logo from "../NavBar/triatlon.png";

function NavBar () {
    return(
        <nav>
            <div className="logo">
                <img src={Logo} alt="Planeta Triatlón" />
            </div>
            <ul>
                <a href=""><li>Running</li></a>
                <a href=""><li>Ciclismo</li></a>
                <a href=""><li>Natación</li></a>
                <a href=""><li>Electrónica</li></a>
                <a href=""><li>Blog</li></a>                    
            </ul>

            <Carrito />

        </nav>
    )
}

export default NavBar;