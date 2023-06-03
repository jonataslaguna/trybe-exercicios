import { useState } from "react";

function ButtonImg() {
    const [showImg, setShowImg] = useState(true);

    const handleClick = () => {
        setShowImg(!showImg)
    }

    return (
        <div>
            {showImg && <img src="https://miro.medium.com/v2/resize:fit:1400/0*EitUXT-pqbaQSCTt.gif" style={{width: "300px"}}/>}
            <button onClick={handleClick}>
                {showImg ? 'Esconder imagem' : 'Mostrar Imagem'}
            </button>
        </div>
    )
}

export default ButtonImg;