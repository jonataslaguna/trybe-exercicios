export const actionCreator = (increment = 1) => ({ 
    type: 'INCREMENT_COUNTER',
    payload: increment,
  });

//Action: É um objeto JavaScript que representa uma ação que precisa acontecer no estado global.