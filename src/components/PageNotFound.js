import { Link } from 'react-router-dom'

function PageNotFound() {
    return (
        <div>
            <h1>Page Not Found</h1>
            <p>The page your are trying to view cannot be displayed.</p>
            <Link to='/'>Return Home</Link>
        </div>
    )
}

export default PageNotFound