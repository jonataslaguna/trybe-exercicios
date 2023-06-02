import { useState } from "react";

import './form.css'

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [schooling, setSchooling] = useState('Médio');
    const [resume, setResume] = useState('');
    const [terms, setTerms] = useState(false);
    const [error, setError ] = useState(false);

    const resetForm = () => {
        setName('');
        setEmail('');
        setSchooling('');
        setResume('');
    }

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (terms) {
        alert(`Nome: ${name}\nemail: ${email}\nEscolaridade: ${schooling}\nExperiências: ${resume}`)
        resetForm();
      } else {
        setError(true);
      }

    }

    return (
        <>
            <form  onSubmit={(event) => handleSubmit(event)}>
                <label htmlFor="inputName">Nome:</label>
                <input id="inputName" value={ name } onChange={({ target}) => setName(target.value)} required/>
                <label htmlFor="inputEmail">Email:</label>
                <input type="email" id="inputEmail" value={ email } onChange={({ target }) => setEmail(target.value)} required/>
                <label htmlFor="schooling">Escolaridade:</label>
                <select id="schooling" value={ schooling } onChange={({ target }) => setSchooling(target.value)}>
                    <option value="Médio">Médio</option>
                    <option value="Superior">Superior</option>
                    <option value="Pós-graduação">Pós-graduação</option>
                </select>
                <label htmlFor="textArea">Resumo das experiências:</label>
                <textarea id="textArea" value={resume} onChange={({ target }) => setResume(target.value)} required></textarea>
                <label htmlFor="terms">
                    Aceito todos os termos e condições
                    <input type="checkbox" id='terms'checked={terms} onChange={() => setTerms((prevTerms) => !prevTerms)}/>
                </label>
                <button>Enviar</button>
            </form>
            {error && (
                <p>Você precisa aceitar os termos e condições para poder enviar o
                currículo</p>
            )}
        </>
    )
}

export default Form;