import { useState } from "react";

function Input() {
    const [name , setName] = useState('')
    return (
        <section className="input">
            <label htmlFor="inputName">Nome:</label>
            <input id="inputName" value={ name } onChange={({ target }) => setName(target.value)}/>
            <button onClick={ () => setName('')}>Apagar</button>
            <p>Olá, { name }!</p>
        </section>
    )
}

export default Input;