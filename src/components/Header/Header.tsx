import { useEffect, useState } from "react"
import './header.css';
import "remixicon/fonts/remixicon.css";

const Header = () => {
    {/*Hozz létre egy boolean állapotváltozót. Értéke alapján hozzáadja a nav_menu osztállyal ellátott elemhez a show-menu osztályt.*/ }
    const [showMenu, setShowMenu] = useState<boolean>();

    {/*Hozz létre egy állapotváltozót boolean típussal, amely azt figyeli, hogy kell-e árnyékot állítani a headernek. */ }
    const [headerShadow, setHeaderShadow] = useState<boolean>();

    {/* Ha 50 px-rel lejjebb görgetünk (window.scrollY >= 50), akkor a header osztályú elemhez adjuk hozzá a shadow-header osztályt. */ }
    useEffect(() => {
        const handleScroll = () => {
            setHeaderShadow(window.scrollY >= 50);
        }
        window.addEventListener("scroll", handleScroll);
    }, [])

    const handleSetToggle = (b: boolean) => { setShowMenu(b) }

    {/*Generáld le a HOME, POPULAR, ABOUT US, PRODUCTS, CONTACT listaelemeket. Mindegyik a megfelelő helyre mutasson az oldalon*/ }

    {/*A szükséges css osztályokat megtalálod a header.css - ben.*/ }

    {/*importáld a remixicont: import "remixicon/fonts/remixicon.css"; */ }

    {/*close ikon osztálya: ri-close-large-line */ }

    {/*toggle ikon osztálya: ri-apps-2-fill */ }

    return (
        <div className={`header ${headerShadow ? "shadow-header" : ""}`}>
            <nav>
                <a href="" className="nav__logo">STAR COFFEE</a>

                <div className={`nav__menu ${showMenu ? "show-menu" : ""}`}>
                    <ul className="nav__list">
                        <li><a href="#home" className="nav__link">HOME</a></li>
                        <li><a href="#popular" className="nav__link">POPULAR</a></li>
                        <li><a href="#about" className="nav__link">ABOUT US</a></li>
                        <li><a href="#products" className="nav__link">PRODUCTS</a></li>
                        <li><a href="#contact" className="nav__link">CONTACT</a></li>
                    </ul>
                    <div className="nav__close" onClick={() => handleSetToggle(false)}>
                        <i className="ri-close-large-line"></i>
                    </div>
                </div>

                <div className="nav__toggle" onClick={() => handleSetToggle(true)}>
                    <i className="ri-apps-2-fill"></i>
                </div>
            </nav>
        </div>
    )
}

export default Header
