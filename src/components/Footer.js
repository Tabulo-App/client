import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <select name='language'>
                <optgroup label='Select a language...'>
                    <option value='English'>English</option>
                    <option value='Spanish'>Spanish</option>
                    <option value='French'>French</option>
                </optgroup>
            </select>

            <div className='footer-links'>
                <Link to='/'>Templates</Link>
                <Link to='/'>Pricing</Link>
                <Link to='/'>Apps</Link>
                <Link to='/'>Jobs</Link>
                <Link to='/'>Blog</Link>
                <Link to='/'>Developers</Link>
                <Link to='/'>About</Link>
                <Link to='/'>Help</Link>
                <Link to='/'>Legal</Link>
                <Link to='/'>Cookie Settings</Link>
                <Link to='/'>Privacy</Link>
            </div>

            <i>Tabulo</i>

            <p>&copy; Copyright 2021. All Rights Reserved.</p>
        </footer>
    )
}

export default Footer