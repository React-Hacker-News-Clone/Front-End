import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "./StoriesCard.css";
import SplitText from "react-pose-text";
import Rating from "react-rating";

const charPoses = {
  hoverable: true,
  init: { scale: 1 },
  hover: {
    scale: 1.001,
    transition: {
      type: "spring",
      velocity: 8
    }
  }
};

function StoriesCard({ title, url, loading, id }) {
  if (loading) {
    return <h2>Loading......</h2>;
  }
  console.log("card ids", id);
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Card
        style={{ width: "45rem", marginBottom: "1.5rem" }}
        className="animatedCard"
      >
        <Card.Body className="cardContain" style={{ paddingBottom: "1rem" }}>
          <Card.Title>
            <SplitText charPoses={charPoses}>{title}</SplitText>
          </Card.Title>
        </Card.Body>
      </Card>
    </a>
  );
}

export default StoriesCard;
