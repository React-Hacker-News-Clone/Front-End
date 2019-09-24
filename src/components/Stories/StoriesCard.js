import React from 'react';
import Card from "react-bootstrap/Card";

function StoriesCard(props) {
    return (  
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>{props.title}</Card.Text>
                <Card.Text>{props.story}</Card.Text>
                <Card.Link href="#">Link to Story</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
      </Card>
    );
}

export default StoriesCard;