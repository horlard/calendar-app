import History from '../components/history';
export const eventCreate = formValues => dispatch => {
    dispatch({
            type : 'EVENT_CREATE',
            payload : formValues
    })
    History.push('/')
    
    
}