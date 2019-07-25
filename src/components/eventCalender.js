import React from 'react';
import {Link} from 'react-router-dom';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import '../style.css';





import '../style.css';

class eventCalendar extends React.Component {
    render(){
        return (
            <div>
                <Link to='/createEvent' className='add_event' title='Create an Event'>+</Link>
                <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} 
                    events={[
                        {
                            title : 'my birthday',
                            date : '2019-05-29'
                        }
                    ]}                
                />
            </div>
        )
    }
}
export default eventCalendar;