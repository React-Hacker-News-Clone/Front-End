import React from 'react';


function StoriesCard(props) {
    return (
        <div>
            <p>{props.story}</p>
            <p>{props.title}</p>
        </div>
    );
}

export default StoriesCard;