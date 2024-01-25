"use client"
import { use, useState } from "react"
import Login from "./Login"
import Registro from "./Registro"


const IndexPage = () => {
    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)

    const handleLoginClick = () => {
        setShowLogin(true)
    }

    const handleRegisterClick = () => {
        setShowRegister(true)
    }

    const handleCloseLogin = () => {
        setShowLogin(false)
    }
    const handleCloseRegister = () =>{
        setShowRegister(false)
    }

    return (
        <div>
            <button onClick={handleLoginClick}>Iniciar Sesión</button>
            <br />
            <button onClick={handleRegisterClick}>Registro</button>
            {showLogin && <Login onClose ={handleCloseLogin}/> }
            {showRegister && <Registro onClick ={handleCloseRegister}/>}

        </div>
    )
}

export default IndexPage