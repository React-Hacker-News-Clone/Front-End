import React from "react";
import "./Pagination.css";

const Pagination = ({ storiesPerPage, totalStories, paginate }) => {
  const storyNumbers = [];

  for (let i = 1; i <= Math.ceil(totalStories / storiesPerPage); i++) {
    storyNumbers.push(i);
  }
  return (
    <div className="contain">
      <ul className="Pagination">
        {storyNumbers.map(story => (
          <li key={story} className="page-item">
            <div className="page-link" onClick={() => paginate(story)}>
              {story}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
