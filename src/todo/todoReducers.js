const INITIAL_STATE = {
    description: 'ler livro',
    list: [{
        _id:1,
        description: 'teste 1',
        done: true
    }, {
        _id: 2,
        description: 'teste 2',
        done: false
    }, {
        _id: 3,
        description: 'teste 3',
        done: false
    }]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'DESCRIPTON_CHANGE':
            return {...state, description: action.payload}
        default:
        return state
    }
}