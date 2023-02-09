import React from "react";
import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-200">
            <Link to='/' className="mr-2">Airport</Link>

            <span>
                <Link to='/auth' className="mr-2">Auth</Link>
                <Link to='/airport'>Airport</Link>
            </span>
        </nav>
    )
}