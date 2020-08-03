const counterReducers = (state = 0, action) => {
    switch (action.type) {
        case 'INCREASE_TODO':
            return state+action.num;
        case 'DECREASE_TODO':
            return state-action.num;
        case 'RESET':
            return 0;
        default:
            return state
    }
}

export default counterReducers