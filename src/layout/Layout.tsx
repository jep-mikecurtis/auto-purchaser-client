import React from 'react'
import { Link } from 'react-router-dom';

const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            DevTest
                        </Link>
                    </li>
                </ul>
            </nav>
            <main>
                {children}
            </main>
            <footer>
                <p>Mike Curtis</p>
            </footer>
        </div>
    )
}

export default Layout;