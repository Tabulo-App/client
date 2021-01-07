//library imports
import { NavLink, useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPoll } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

//component imports
import StyledNav from './StyledComponents/StyledNav'

//Header
function Header() {
    const history = useHistory()
    const [scrollPos, setScrollPos] = useState(null)

    const handleScroll = e => {
        setScrollPos(window.scrollY)
    }

    useEffect(() => {
        document.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <StyledNav scrolled={scrollPos > 50 ? true : false}>
            <span onClick={() => history.push('/')} className='tabulo-logo'>
                <FontAwesomeIcon icon={faPoll} />
                Tabulo
            </span>
            <nav>
                <NavLink to='/login' className='login-btn'>Log In</NavLink>
                <NavLink to='/signup' className='signup-btn'>Sign Up</NavLink>
            </nav>
        </StyledNav>
    )
}

//exports
export default Header
