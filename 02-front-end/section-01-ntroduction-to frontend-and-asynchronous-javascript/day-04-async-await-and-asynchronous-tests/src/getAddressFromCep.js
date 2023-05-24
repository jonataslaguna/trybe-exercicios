const getAddressFromCep = async (cep) => {
    if (!cep) {
        throw new Error('Você precisa digitar um CEP')
    }
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    return data;
}

export default getAddressFromCep

