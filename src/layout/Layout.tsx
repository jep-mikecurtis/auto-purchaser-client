import React from 'react'
import { Link } from 'react-router-dom';

const Layout: React.FC = ({ children }) => {
    return (
        <div className="layout flex flex-col min-h-screen bg-gray-700 text-gray-100">
            <nav className="bg-gray-900 py-2">
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
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/login">
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link to="/register">
                                New Account
                            </Link>
                        </li>
                    </ul>
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