import React from 'react'
import ideas from './data/ideas.json';

function SiteTitle() {
    return (
        <div>
            <h2>{ideas.title}</h2>
            <h3>{ideas.homeTown}</h3>
        </div>
    )
}

export default SiteTitle
