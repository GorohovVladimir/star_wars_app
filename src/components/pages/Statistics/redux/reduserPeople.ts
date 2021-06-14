interface SteteInterface {
    people: ReadonlyArray<{}>;
    isFetch: boolean;
}


const initialState: SteteInterface = {
  people:[],
  isFetch: false,
}



const postPeopleReducer = (
  state: SteteInterface = initialState, 
  action: any
  ) => {
  
  if (action.type === 'postPeole/SET_PEOPLE'){
      return {
          ...state,
          people: action.payload, 
      }
  }
  return state;
}

export default postPeopleReducer;