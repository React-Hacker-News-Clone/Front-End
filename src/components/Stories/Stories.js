import React, {useState, useEffect} from 'react';
import axios from 'axios';
import StoriesCard from './StoriesCard'



function Stories () {
    const [story, setStory] = useState ([]);

    useEffect(() => {
        axios.get('https://francoiscoding-hackernews-node.herokuapp.com/stories')
             .then( res => {
                 console.log("Stories Data: ", res.data)
                 setStory(res.data)
             })
             .catch(err => {
                 console.log(" Stories.js Error with story pull: ", err)
             })
    }, [])

    

    return (
        <div>
            <p>Top Stories:</p>
            <StoriesCard />
            {story.map(item => {
            return <StoriesCard key={item.id}
                                story={item.story}
                                title={item.title}/>
            })}
        </div>
    );
}

export default Stories;