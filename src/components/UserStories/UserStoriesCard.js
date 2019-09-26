import React from "react";
import { connect } from "react-redux";
import { getStories, deleteStory } from "../../store/actions";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./UserStoriesCard.css";
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

function UserStoriesCard(props) {
  const handleDelete = () => {
    props.deleteStory(props.id);
    // I don't know why but calling this function twice will get state to update without refresh, please don't ask me how this works.
    props.getStories();
    props.getStories();
  };

  return (
    <a href={props.story} target="_blank" rel="noopener noreferrer">
      <Card
        style={{ width: "45rem", marginBottom: "1.5rem" }}
        className="animatedCard"
      >
        <Card.Body className="cardContain" style={{ paddingBottom: "1rem" }}>
          <Card.Title>
            <SplitText charPoses={charPoses}>{props.title}</SplitText>
          </Card.Title>
          <div className="card-buttons">
            <FontAwesomeIcon icon={faTrash} onClick={handleDelete} />
          </div>
        </Card.Body>
      </Card>
    </a>
  );
}

const mapStateToProps = state => {
  return {
    stories: state.stories
  };
};

export default connect(
  mapStateToProps,
  { getStories, deleteStory }
)(UserStoriesCard);
