import { useState } from "react";

import './form.css'

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [schooling, setSchooling] = useState('Médio');
    const [resume, setResume] = useState('');

    const resetForm = () => {
        setName('');
        setEmail('');
        setSchooling('');
        setResume('');
    }

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      resetForm();
      alert(`Nome: ${name}\nemail: ${email}\nEscolaridade: ${schooling}\nExperiências: ${resume}`)
    }

    return (
        <form  onSubmit={(event) => handleSubmit(event)}>
            <label htmlFor="inputName">Nome:</label>
            <input id="inputName" value={ name } onChange={({ target}) => setName(target.value)}/>
            <label htmlFor="inputEmail">Email:</label>
            <input type="email" id="inputEmail" value={ email } onChange={({ target }) => setEmail(target.value)}/>
            <label htmlFor="schooling">Escolaridade:</label>
            <select id="schooling" value={ schooling } onChange={({ target }) => setSchooling(target.value)}>
                <option value="Médio">Médio</option>
                <option value="Superior">Superior</option>
                <option value="Pós-graduação">Pós-graduação</option>
            </select>
            <label htmlFor="textArea">Resumo das experiências:</label>
            <textarea id="textArea" value={resume} onChange={({ target }) => setResume(target.value)}></textarea>
            <button>Enviar</button>
        </form>
    )
}

export default Form;