import { useState } from "react";

function CountButton() {
    const [counter, setCounter] = useState(0)

    const handlerClick = () => {
        setCounter(counter + 1);
    }
    return (
        <>
        <button onClick={ handlerClick }>
            {counter}
        </button>
        </>
    )
}

export default CountButton;