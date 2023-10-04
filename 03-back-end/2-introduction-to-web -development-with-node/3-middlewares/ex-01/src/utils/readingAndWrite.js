const fs = require('fs/promises');
const path = require('path');

const pathFile =  path.resolve(__dirname, '../dataBase.json');

const readFile = async () => {
    const data = await fs.readFile(pathFile);
    return JSON.parse(data)
}

const writeFile = async () => {
    
}