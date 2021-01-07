//library imports
import styled from 'styled-components'

//theme variables
import * as theme from './theme'

//styled component
const StyledNav = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 1;
    background-color: ${pr => !pr.scrolled ? 'transparent' : theme.navBlue};
    transition: background-color 1s ease 0s;
    padding: 15px 20px;
    
    span {
        color: ${theme.textWhite};
        cursor: pointer;
        svg {
            transform: rotate(180deg);
            font-size: 2rem;
            color: ${theme.textWhite};
        }
    }

    nav {
        a {
            color: ${theme.textWhite};
            padding: .25rem .5rem;
            font-size: 1.09375rem;
            line-height: 1.5;
            border-radius: .2rem;
            border: 1px solid transparent;
            text-decoration: none;
            cursor: pointer;
        }
        .signup-btn {
            color: ${theme.navBlue};
            background-color: ${theme.textWhite};
            font-weight: 700;
        }
        .login-btn:hover {
            text-decoration: underline;
        }
    }
`

//exports
export default StyledNav