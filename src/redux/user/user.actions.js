import { UserActionTypes } from './user.types';


// este o functie care prea un user dar returneaza un obiect de actiune
export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})