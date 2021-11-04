
import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';


const User = (props) => {
    const {name,image,email} = props
    return (
        <div>
  <Card style={{ width: '18rem' }}>
      <div>

      <Card.Header>Featured </Card.Header>
      <div>
          <img src={image} alt="" />
      </div>
      </div>
  
  <ListGroup variant="flush">
    <ListGroup.Item>Name:{name}</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
  </ListGroup>
</Card>

        </div>
    );
};

export default User;