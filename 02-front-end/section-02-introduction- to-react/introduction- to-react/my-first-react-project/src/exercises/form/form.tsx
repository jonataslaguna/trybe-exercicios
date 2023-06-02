import { useState } from "react";

import './form.css'

function Form() {
   /*  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [schooling, setSchooling] = useState('Médio');
    const [resume, setResume] = useState(''); */
    const [terms, setTerms] = useState(false);
    const [error, setError ] = useState(false);

    const [formInfo, setFormInfo] = useState({
        name: '',
        email: '',
        schooling: 'Médio',
        resume: '',
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const {name, value } = event.target;

       setFormInfo({
        ...formInfo,
        [name]: value,
       });
    }

    const resetForm = () => {
        setFormInfo({
            name: '',
            email: '',
            schooling: 'Médio',
            resume: '',
          });
    }

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (terms) {
        resetForm();
        setTerms(false);
        setError(false);
        alert(
          `Nome: ${formInfo.name}\nEmail: ${formInfo.email}\nEscolaridade: ${formInfo.schooling}\nExperiências: ${formInfo.resume}`
        );
      } else {
        setError(true);
      }

    }

    return (
        <>
            <form  onSubmit={(event) => handleSubmit(event)}>
                <label htmlFor="inputName">Nome:</label>
                <input id="inputName" value={ formInfo.name } name="name" onChange={handleChange} required/>
                <label htmlFor="inputEmail">Email:</label>
                <input type="email" id="inputEmail" value={ formInfo.email } name="email" onChange={handleChange} required/>
                <label htmlFor="schooling">Escolaridade:</label>
                <select id="schooling" value={ formInfo.schooling } name="shooling" onChange={handleChange}>
                    <option value="Médio">Médio</option>
                    <option value="Superior">Superior</option>
                    <option value="Pós-graduação">Pós-graduação</option>
                </select>
                <label htmlFor="textArea">Resumo das experiências:</label>
                <textarea id="textArea" value={formInfo.resume} name="resume" onChange={handleChange} required></textarea>
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