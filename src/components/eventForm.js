import React from 'react'
import {Field,reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {eventCreate} from '../actions';
import History from './history';

 class eventForm extends React.Component {

    onFormSubmit=(formValues)=>{
        this.props.eventCreate(formValues);
        History.push('/');
    }

    renderErr = meta => {
        if(meta.error && meta.touched) {
            return (
                <div className='ui error message'>
                    <div className='header'>{meta.error}</div>
                </div>
            )
            
        }
    }

    renderInput= Input => {
        return (
            <div>
                <label>{Input.label}</label>
                <input onChange={Input.input.onChange} value={Input.input.value}/>
                <div>{this.renderErr(Input.meta)}</div>
            </div>

        )
    }


    renderDate= Input => {
        return (
            <div>
                <label>{Input.label}</label>
                <input onChange={Input.input.onChange} value={Input.input.value} type='date'/>
                <div>{this.renderErr(Input.meta)}</div>
            </div>
        )
    }

        render(){
            console.log(this.props.createEvent)
            return (
                <div>
                    <form className='ui form error' onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
                        <Field name='title' component={this.renderInput} label='Enter a title'/>
                        <Field name='date' component={this.renderDate} label='Pick a date'/>
                        <button className='ui primary button'>Set event</button>
                    </form>
                </div>
            )
                }
}
const mapStateToProps=state=> {
    return {createEvent:state.CreateEvent}
}

const Validation = formValues => {
    const errors = {}
    if(!formValues.title) {
        errors.title='Enter a title'
    }
    if(!formValues.date) {
        errors.date='Pick a date'
    }
    return errors;
}

export default connect(mapStateToProps,{eventCreate})(reduxForm({
    form : 'createEvent',
    validate : Validation
})(eventForm))