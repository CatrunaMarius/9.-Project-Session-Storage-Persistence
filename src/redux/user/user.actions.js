// este o functie care prea un user dar returneaza un obiect de actiune
export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
})