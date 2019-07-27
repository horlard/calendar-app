export const CreateEvent = formValues => {
    return {
        type : 'CREATE_EVENT',
        payload : formValues
    }
}