import React from 'react';
import ideas from './data/ideas.json';
import Idea from './Idea';


function IdeaList() {
    return (
        <div>
            <p>I have some ideas!</p>
            {ideas.idea.map(anything => <Idea ideanumber={anything.id} ideatext={anything.text} /> )}
            <br />
        </div>
    )
}

export default IdeaList

