import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header>
            <h1>Tabulo</h1>
            <nav>
                <NavLink to='/login'>Log In</NavLink>
                <NavLink to ='/signup'>Sign Up</NavLink>
            </nav>
        </header>
    )
}

export default Header
