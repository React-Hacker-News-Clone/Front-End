import React, {useState, useEffect} from 'react';
import axios from 'axios';
import StoriesCard from './StoriesCard';
import styled from 'styled-components';

//styling below

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
    //border: 2px solid red;
`

const StoryBox = styled.div`
    display: flex;
    justify-content: center;
    border: 2px solid black;
`

//function below

function Stories () {
    const [story, setStory] = useState ([]);

    useEffect(() => {
        axios.get('https://francoiscoding-hackernews-node.herokuapp.com/stories')
             .then( res => {
                 console.log("Stories Data: ", res.data)
                 setStory(res.data)
                 //console.log("STORY: ", story)
             })
             .catch(err => {
                 console.log("Stories.js Error with story pull: ", err)
             })
    }, [])

    return (
        <Container>
            <StoryBox>
                {/* <StoriesCard /> */}
                {story.map(item => {
                return <StoriesCard key={item.id}
                                    story={item.story}
                                    title={item.title}/>
                })}
            </StoryBox>
        </Container>
    );
}

export default Stories;