import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {AuthLogout} from '../redux/actions/auth/AuthActions'

type AuthType = {
    auth: {
        success: boolean
        user: {
            email: string
        }
    }
}

const Layout: React.FC = ({ children }) => {
    const auth = useSelector((state: AuthType) => state.auth);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(AuthLogout());
    };

    return (
        <div className="layout flex flex-col min-h-screen bg-gray-700 text-gray-100">
            <nav className="bg-gray-900 py-2 px-4">
                <div className="container mx-auto flex justify-between">
                    {/* Right Side */}
                    <ul>
                        <li>
                            <Link to="/">
                                DevTest
                            </Link>
                        </li>
                    </ul>

                    {/* Left Side */}
                    {!auth.success ? 
                        // Is Auth
                        <ul className="flex space-x-4">
                            <li>
                                <Link to="/login">
                                    Login
                                </Link>
                            </li>
                        </ul> :
                        // Not Auth
                        <ul className="flex space-x-4">
                            <li>
                                <button onClick={logout}>Logout</button>
                            </li>
                        </ul>
                    }
                </div>
            </nav>
            <main className="flex-1 flex flex-col">
                {children}
            </main>
            <footer className="bg-gray-900 py-2 text-center">
                <p>Mike Curtis</p>
            </footer>
        </div>
    )
}

export default Layout;