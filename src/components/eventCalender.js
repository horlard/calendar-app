import React from 'react';
import {Link} from 'react-router-dom';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import {connect} from 'react-redux';
import '../style.css';

class eventCalendar extends React.Component {
    
    render(){
        return (
            <div>
                <Link to='/createEvent' className='add_event' title='Create an Event'>+</Link>
                <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} 
                    events={[
                        {
                            title : this.props.title,
                            date : this.props.date
                        }
                    ]}                
                />
            </div>
        )
    }
}

const mapStateToProps=state=> {
    return {title: state.CreateEvent.title,date:state.CreateEvent.date}
}
export default connect(mapStateToProps)(eventCalendar);