import React from "react";
import Card from "react-bootstrap/Card";
import "./StoriesCard.css";

function StoriesCard({ title, url, loading }) {
  if (loading) {
    return <h2>Loading......</h2>;
  }
  return (
    <Card style={{ width: "45rem", marginBottom: "1.5rem" }}>
      <Card.Body className="cardContain" style={{ paddingBottom: "1rem" }}>
        <Card.Title>{title}</Card.Title>
        <Card.Link href={url} target="_blank">
          Link to Story
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default StoriesCard;
