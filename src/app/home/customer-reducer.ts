
const initialState = { count: 0 }
export function customerReducer(state = initialState,action){

    switch (action.type) {
        case 'ADD':
            return {
                count: state.count + action.number
            };
        case 'MINUS':
            return {
                count: state.count - action.number
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
}