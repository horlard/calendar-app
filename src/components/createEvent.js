import React from 'react'
import Eventform from './eventForm';
import {connect} from 'react-redux';
import {CreateEvent} from '../actions';

class createEvent extends React.Component {
    onFormSubmit = formValues => {
        this.props.CreateEvent(formValues);
    }

    render() {
        
        return (
            <div>
                <Eventform onFormSubmit={this.onFormSubmit}/>
            </div>
        )
    }
}




export default connect(null,{CreateEvent})(createEvent);
