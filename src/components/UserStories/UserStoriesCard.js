import React from "react";
import { connect } from "react-redux";
import { getStories, deleteStory } from "../../store/actions";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function UserStoriesCard(props) {
  const handleDelete = () => {
    props.deleteStory(props.id);
    // I don't know why but calling this function twice will get state to update without refresh, please don't ask me how this works.
    props.getStories();
    props.getStories();
  };

  return (
    <Card style={{ width: "45rem", marginBottom: "1.5rem" }}>
      <Card.Body className="cardContain" style={{ paddingBottom: "1rem" }}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Link href={props.story} target="_blank">
          Link to Story
        </Card.Link>
      </Card.Body>
      <Button onClick={handleDelete}>Delete</Button>
    </Card>
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
