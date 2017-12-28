import react from 'react';
import './Count.css';

const Count = (props) => {
    return (
        <div className="search-count">
            {`Trails found: ${props.trailsFound}`}
        </div>
    )
}

export default Count;