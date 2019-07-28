export default (state={},action) => {
    if(action.type==='EVENT_CREATE') {
        return {state,...action.payload}
    }
    return state;
}