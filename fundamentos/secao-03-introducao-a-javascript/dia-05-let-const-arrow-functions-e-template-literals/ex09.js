const onOff = (status) => {
    status = status === 'ligar' ? 'ligado' : 'desligado';
    console.log(`O motor está ${status}`);
    return status
  }
console.log(onOff('ligar'))