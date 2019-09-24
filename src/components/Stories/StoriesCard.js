import React from "react";
import Card from "react-bootstrap/Card";
import "./StoriesCard.css";

function StoriesCard(props) {
  return (
    <Card style={{ width: "45rem", marginBottom: "1.5rem" }}>
      <Card.Body className="cardContain" style={{ paddingBottom: "1rem" }}>
        <Card.Title>{props.title}</Card.Title>
        {/* <Card.Text></Card.Text> */}
        <Card.Link href={props.url}>Link to Story</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default StoriesCard;
