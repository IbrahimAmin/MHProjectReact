import React, { Component, Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import ProjectDashboard from '../../feature/project/projectDashboard/projectDashboard';
import NavBar from '../../feature/nav/navBar/navBar';

class App extends Component {
   render() {
      return (
         <Fragment>
            <NavBar />
            <Container className='main'>
               <ProjectDashboard />
            </Container>
         </Fragment>
      );
   }
}

export default App;
