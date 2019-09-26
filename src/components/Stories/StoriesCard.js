import React from "react";
import Card from "react-bootstrap/Card";
import "./StoriesCard.css";
import SplitText from "react-pose-text";

const charPoses = {
  hoverable: true,
  init: { scale: 1 },
  hover: {
    scale: 1.01,
    transition: {
      type: "spring",
      velocity: 12
    }
  }
};

function StoriesCard({ title, url, loading }) {
  if (loading) {
    return <h2>Loading......</h2>;
  }
  return (
    <Card
      style={{ width: "45rem", marginBottom: "1.5rem" }}
      className="animatedCard"
    >
      <Card.Body className="cardContain" style={{ paddingBottom: "1rem" }}>
        <Card.Title>
          <SplitText charPoses={charPoses}>{title}</SplitText>
        </Card.Title>
        <Card.Link href={url} target="_blank">
          <SplitText charPoses={charPoses}>Link to Story</SplitText>
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default StoriesCard;
