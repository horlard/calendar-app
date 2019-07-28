export default (state={},action) => {
    if(action.type==='EVENT_CREATE') {
        return {...action.payload}
    }
    return state;
}