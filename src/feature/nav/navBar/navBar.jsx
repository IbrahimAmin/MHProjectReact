import React, { Component } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';

class navBar extends Component {
   render() {
      return (
         <div>
            <Menu inverted fixed='top'>
               <Container>
                  <Menu.Item name='Dashboard' />
                  <Menu.Item name='Leads' />
                  <Menu.Item name='Project' />

                  <Menu.Item position='right'>
                     <Button basic inverted content='Login' />
                     <Button
                        basic
                        inverted
                        content='Sign Out'
                        style={{ marginLeft: '0.5em' }}
                     />
                  </Menu.Item>
               </Container>
            </Menu>
            sd
         </div>
      );
   }
}

export default navBar;
