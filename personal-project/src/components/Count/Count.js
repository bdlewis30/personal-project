import React from 'react';
import './Count.css';

const Count = (props) => {
    return (
        <div className="search-count">
            {`Locations found: ${props.trailsFound}`}
        </div>
    )
}

export default Count;