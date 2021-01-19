import React from 'react';
import ideas from './data/ideas.json';

function IdeaList() {
    return (
        <div>
            <p>I have some ideas!</p>

            <ol>
            {ideas.idea.map(i => <li key={i.id}>{i.text}</li> )}
            </ol>         
        </div>
    )
}

export default IdeaList
