import React from 'react'
import NavBar from './NavBar'

export default function Logout(props) {
    const handleLogout = () => {
        localStorage.removeItem('token');
        props.history.push('/');
    }
    return (
        <NavBar handleLogout={handleLogout} />

        
    )
}

