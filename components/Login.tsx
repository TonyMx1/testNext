"use client"
import Link from "next/link";
import { useState } from "react";
import formStyles from "@/styles/formStyles.module.css"

const Login = ({onClose} : any)=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        console.log('Login con correo: ${email} y contraseña: ${password}');
    }
    return(
        <div className={formStyles.modal}>
            <div className="modal-content">
                <h2>Iniciar Sesión</h2>
                <label htmlFor="email">Correo: </label>
                <input type="email" id="email" value={email} onChange={(e) => {
                    e.preventDefault()
                    setEmail(e.target.value)
                }} />
                <label htmlFor="password">Contraseña: </label>
                <input type="password" id="password" value={password} onChange={(e) => {
                    e.preventDefault()
                    setPassword(e.target.value)
                }} />
                <button onClick={handleLogin}>Iniciar sesion</button>
                <br />
                <p>¿No tienes cuenta? <Link href="/pages/registro">Regístrate</ Link></p>
                <button onClick={onClose}>CERRAR</button>
                
            </div>
        </div>
    )
}

export default Login