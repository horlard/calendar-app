import React from 'react';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'





import '../style.css';

class eventCalendar extends React.Component {
    render(){
        return (
            <div>
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