import { useState } from "react";

const toolKit = [
    'JavaScript',
    'TypeScript',
    'React',
    'HTML',
    'CSS',
    'Node',
    'Testes automatizados',
  ];

function Carrossel () {
    const [index, setIndex] = useState(0);
    const [toolList, setToolList] = useState(toolKit);
    const [inputValue, setInputValue] = useState('');

    const handleNextClick = () => {
        if (index  + 1 < toolList.length ) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    const handlePreviousClick = () => {
        if ( index - 1 >= 0) {
            setIndex(index - 1)
        } else {
            setIndex(toolList.length -1)
        }
    }

    const handleAddClick = () => {
        if (inputValue) {
            setToolList([...toolList, inputValue])
        }
    }


    return (
        <>
        <section>
            <h1>Caixa de ferramentas de uma Pessoa Desenvolvedora</h1>
            <h1>{ toolList[index] }</h1>
            <button onClick={ handlePreviousClick }>Anterior</button>
            <button onClick={ handleNextClick }>Proximo</button>
        </section>
        <section>
            <h2>Adicione novas ferramentas:</h2>
            <input onChange={({ target }) => setInputValue(target.value)}/>
            <button onClick={ handleAddClick }>Adicionar</button>
        </section>
        <section>
            <h2>Lista de itens do carrossel:</h2>
            <ul>
                {toolList.map((tool) => (
                    <li>
                        {tool}
                    </li>
                ))}
               
            </ul>
        </section>
        </>
    )
}

export default Carrossel;