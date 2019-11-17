import React, { Component } from 'react';
import ProjectCard from './ProjectCard';

class ProjectCardList extends Component {
   render() {
      return (
         <div>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
         </div>
      );
   }
}

export default ProjectCardList;
