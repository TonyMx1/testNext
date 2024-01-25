"use client"
import { use, useState } from "react"

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [showMessage, setShowMessage] = useState(true)

    return(
        <div>
            <p>Haz hecho click {counter}</p>
            <button onClick={() => 
            setCounter(counter+1)}>
                Haz Click AQUI
            </button>
            <br />

            <button onClick={() =>
            setCounter(0)}>
                RESET
            </button>
            <br />

                <button onClick={()=> 
                setShowMessage(!showMessage)
                }>{!showMessage ? "Mostrar mensaje" : "Ocultar mensaje"}</button>

                {
                    showMessage && <p>¡¡Hola Mundo!!</p>
                }
        </div>
    )
}

export default Counter