type ActionType = {
    type: string;
    payload: number;
  };
  

const INITIAL_STATE = { count: 0, clicks: 0, }

const counterReducer = (state = INITIAL_STATE, action: ActionType) => {
  switch( action.type) {
    case 'INCREMENT_COUNTER': 
      return {
        ...state,
        count: state.count + action.payload,
      };
      default:
      return state
  }
}; 

export default counterReducer;

//Reducer: É uma função JavaScript responsável por escrever no estado global de acordo com a ação solicitada pela action.