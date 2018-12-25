// Reducers must return a value not undefined!
// Donot reach out of itself
// Must not mutate the state

export default (state = [], action) => {
    if(action.type === 'FETCH_POSTS'){
        return action.payload;
    }
    return state;
};