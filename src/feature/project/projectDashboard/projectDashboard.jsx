import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import ProjectCardList from '../projectCard/ProjectCardList';

class projectDashboard extends Component {
   render() {
      return (
         <div>
            <Grid>
               <Grid.Column width={10}>
                  <ProjectCardList />
               </Grid.Column>
               <Grid.Column width={6}>
                  <h2> Right Column</h2>
               </Grid.Column>
            </Grid>
         </div>
      );
   }
}

export default projectDashboard;
