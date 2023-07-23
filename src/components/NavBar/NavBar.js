import { NavLink, Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return(
        <nav>
            <Link to='/'>
                <h3>Tienda de Cafe</h3>
            </Link>
            
            <div>
                <NavLink to={`/category/Cafe`} className={({ isActive}) => isActive ? `ActiveOption` : 'Option'}>Cafe </NavLink>
                <NavLink to={`/category/Cafeteras`} className={({ isActive}) => isActive ? `ActiveOption` : 'Option'}>Cafeteras </NavLink>
                <NavLink to={`/category/Accesorios`} className={({ isActive}) => isActive ? `ActiveOption` : 'Option'}>Accesorios </NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar