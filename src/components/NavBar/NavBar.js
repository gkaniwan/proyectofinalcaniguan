import { NavLink, Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import logo from './assets/images.png'

const NavBar = () => {
  
    return(
        <header>
            <Link to='/'>
                <img src={logo} alt="logo" height={50} width={50}/>
                <h3>Tienda de Cafe</h3>
            </Link>
            <nav>
                <ul>
                    <li>
                        <NavLink to={`/category/Cafe`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Cafe </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/category/Cafeteras`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Cafeteras </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/category/Accesorios`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Accesorios </NavLink>
                    </li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    )
}

export default NavBar