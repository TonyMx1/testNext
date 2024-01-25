"use client";
import Link from "next/link";
import { useState } from "react";
// import formStyles from "@/styles/formStyles.module.css"

const Registro= ({onClick}) =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleRegister = () => {
        console.log(`Login con correo: ${email} y contraseña: ${password}`)
    }

    return (
        <>
        <div >
            <div>
            <h1>Registro</h1>     
            <form> 
                <label htmlFor="email">Correo:</label>
                <input  type="email" id="email" value={email} onChange={(e)=>{
                    e.preventDefault()
                    setEmail(e.target.value)
                }} ></input>
                <br /><br />
                <label htmlFor="password">Contraseña:</label>
                <input type="password" 
                id="password" 
                value={password} 
                onChange={(e)=>{
                    e.preventDefault()
                    setPassword(e.target.value)
                }} />
                <br /><br />
                <button id="button-login" onClick={handleRegister} >Registrar</button>
                <br /><br />
            <p>¿Ya tienes cuenta? <Link href="#">Inicia session</Link></p> 
            <button onClick={(onClick4)=>{}}>Cerrar</button>
            </form>
            </div>
        </div>
        </>
    )
}


export default Registro