import React from 'react';
import axios from 'axios';
import Physicians from './Physicians';
import Appointments from './Appointments';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      physicians: [],
      displayedPatients: [],
      currentPhysician: {}
    }
    this.getPhysicians = this.getPhysicians.bind(this);
    this.getAppointments = this.getAppointments.bind(this);
  }
  componentDidMount() {
    this.getPhysicians();
  }

  getPhysicians(){
    axios.get('/physicians')
      .then((res) => {
        this.setState({physicians: res.data}, () => {
          this.setState({currentPhysician: this.state.physicians[0]});
        });
      })
      .then(() => {
        this.getAppointments(this.state.currentPhysician.id);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  getAppointments(id){
    axios.get(`/physicians/${id}/patients`)
      .then((res) => {
        this.setState({displayedPatients: res.data});
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  render(){
    let {physicians, displayedPatients} = this.state;
    return(
      <div id="notable">
        <Physicians physicians={physicians}/>
        <Appointments appointments={displayedPatients}/>
      </div>
    )
  }
}

export default App;