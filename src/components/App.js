import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';

import CreateEvent from './eventForm';
import EventCalender from './eventCalender';


class App extends React.Component {
    


    render() {
        return (
            <div>

                <Router>
                    <div className='ui container'>
                        <Route path='/' exact component={EventCalender}/>
                        <Route path='/createEvent' exact component={CreateEvent}/>
                    </div>
                
                
                </Router>
            </div>
        )
    }
} 

export default App;