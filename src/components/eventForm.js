import React from 'react'
import {Field,reduxForm} from 'redux-form';

 class eventForm extends React.Component {

    onFormSubmit = (formValues) => {
        this.props.onFormSubmit(formValues)
    }
    renderErr=(meta)=> {
        if (meta.error && meta.touched) {
            return (
                <div className='ui error message'>
                    <div className='header'>{meta.error}</div>
                </div>
            )

        }

    }
    dateInput=(Input)=> {
        console.log(Input.meta)
        return(
            <div>
                <label>{Input.label}</label>
                <input onChange={Input.onChange} value={Input.value} type='date'/>
                <div>{this.renderErr(Input.meta)}</div>
            </div> 
        )
        
    }
    titleInput = (Input)=> {
        console.log(Input);
        return (
            <div>
                <label>{Input.label}</label>
                <input onChange={Input.onChange} value={Input.value} />
                <div>{this.renderErr(Input.meta)}</div>

            </div>
        )

    }


    render() {
        return (
            <div>
                <form className='ui form error' style={{marginTop: '40px'}} onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
                    <Field name='title' component={this.titleInput} label='Enter a title'/>
                    <Field name='date' component={this.dateInput} label='Pick a date'/>
                    <button className='ui button primary' style={{marginTop: '20px'}}>Set Event</button>
                </form>
                
            </div>
        )
    }
}

const Validation =formValues => {
    const errors={}
    if (!formValues.title) {
        errors.title='Enter a title'
    }
    if (!formValues.date) {
        errors.date ='Pick a date'
    } 
    return errors;

}

export default reduxForm({
    form : 'EventForm',
    validate : Validation
})(eventForm);
