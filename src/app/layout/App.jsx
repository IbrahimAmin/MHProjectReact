import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import ProjectDashboard from '../../feature/project/projectDashboard/projectDashboard';
import NavBar from '../../feature/nav/navBar/navBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
    <ProjectDashboard/>
     </div>
    )
  }
}


export default App;
