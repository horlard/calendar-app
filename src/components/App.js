import React from 'react';
import {Router,Route} from 'react-router-dom';

import CreateEvent from './eventForm';
import EventCalender from './eventCalender';
import History from './history';


class App extends React.Component {
    


    render() {
        return (
            <div>

                <Router history={History}>
                    <div className='ui container' style={{marginTop:'20px'}}>
                        <Route path='/' exact component={EventCalender}/>
                        <Route path='/createEvent' exact component={CreateEvent}/>
                    </div>
                
                
                </Router>
            </div>
        )
    }
} 

export default App;