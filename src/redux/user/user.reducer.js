import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
    currentUser: null
}

const userReaducer = (state = INITIAL_STATE, action) => {
    
    //depinde de tipul de actiune  
    switch(action.type){
        // verifica daca cazul = SET_CURRENT_USER
         case UserActionTypes.SET_CURRENT_USER:
             return {
                 ...state,
                 currentUser: action.payload
             }
       //daca nici unu din cazuri nu sunt indeplinite se aplica default 
         default:
             return state;
    }
}

export default userReaducer;