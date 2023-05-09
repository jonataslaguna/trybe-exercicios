const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  const expectedResult = 20;
  const countA = () => {
    const letras = names.join('').toLocaleLowerCase().split('');
    return letras.reduce((acumulador, atual) => atual === 'a' ? acumulador += 1 : acumulador,0)
  }

  console.log(countA())