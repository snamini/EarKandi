import React from 'react';
import {Dropdown, Row, Input, Button, Icon} from 'react-materialize';


export default class MyDropdown extends React.Component {



  render(){
    return (
      <Dropdown trigger={<Button>Genres<Icon right>arrow_drop_down</Icon></Button>}>
          <Row>
              <Input name='group1' type='checkbox' value='red' label='Hip-Hop' />
              <Input name='group2' type='checkbox' value='red' label='R&B' />
              <Input name='group3' type='checkbox' value='red' label='Jazz' />
              <Input name='group4' type='checkbox' value='red' label='Classical' />
              <Input name='group5' type='checkbox' value='red' label='Electronic' />
              <Input name='group6' type='checkbox' value='red' label='Rock' />
              <Input name='group7' type='checkbox' value='red' label='Alternative' />
              <Input name='group8' type='checkbox' value='red' label='Punk' />
              <Input name='group9' type='checkbox' value='red' label='Swing' />
              <Input name='group10' type='checkbox' value='red' label='Bluegrass' />
              <Input name='group11' type='checkbox' value='red' label='Acoustic' />
              <Input name='group12' type='checkbox' value='red' label='Pop' />
          </Row>
        </Dropdown>

    );
  }
}
