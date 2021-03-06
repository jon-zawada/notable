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
    this.updateCurrentDoc = this.updateCurrentDoc.bind(this);
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

  updateCurrentDoc(id) {
    this.setState({currentPhysician: this.state.physicians[id - 1]}, () => {
      this.getAppointments(id);
    });
  } 

  render(){
    let {physicians, displayedPatients,currentPhysician} = this.state;
    return(
      <div id="notable">
        <Physicians physicians={physicians} updateCurrentDoc={this.updateCurrentDoc} current={currentPhysician}/>
        <Appointments appointments={displayedPatients} current={currentPhysician}/>
      </div>
    )
  }
}

export default App;