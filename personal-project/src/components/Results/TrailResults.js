import React, { Component } from 'react';
import './Results.css';
import PropTypes from 'prop-types';
import axios from 'axios';
import reducer from '../../ducks/trailReducer';

export default class TrailResults extends Component {
    constructor(props) {
        super(props);

        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.updateDesc = this.updateDesc.bind(this);
        this.addToFavorites = this.addToFavorites.bind(this);
        this.deleteTrail = this.deleteTrail.bind(this);
    }

    componentWillReceiveProps(updateProps) {
        this.setState({
            name: updateProps.result.name,
            city: updateProps.resut.city,
            state: updateProps.result.city,
            description: updateProps.result.description || '',
            map: `https://www.google.com/maps/@${updateProps.result.latitude},${updateProps.result.longitude},15z`,
            latitude: updateProps.result.lat,
            longitude: updateProps.result.lon,
            id: updateProps.result.id
        })
    }

    handleDescriptionChange(event) {
        this.setState({
            description: event.target.event
        })
    }

    updateDesc() {
        axios.put('/api/' + props.results.id, { description: props.results.description });
        // Place this into the database
    }

    // Place this into the database
    addToFavorites() {
        this.setState({
            favTrails: [
                {
                    name: props.result.name,
                    city: props.resut.city,
                    state: props.result.city,
                    description: props.result.description || '',
                    map: `https://www.google.com/maps/@${props.result.latitude},${props.result.longitude},15z`,
                    latitude: props.result.lat,
                    longitude: props.result.lon,
                    id: props.result.id
                }
            ]
        })
    }

    deleteTrail() {
        axios.delete('/api/' + this.state.id).then(() => {
            this.props.deletedTrail();
        })
    }

    render() {
        return (
            <tr>
                <td>{initialState.results.name}</td>
                <td>{initialState.results.city}</td>
                <td><textarea onChange={handleDescriptionChange} onBlur={updateDesc} value={initialState.results.description} /></td>
                <td><a href={initialState.results.map} target="_blank" rel="noopener noreferrer">Map</a></td>
                <td>{initialState.results.latitude}</td>
                <td>{initialState.results.longitude}</td>
                <td className="rowContainer"><button className="favButton" onClick={addToFavorites}/></td>
                <td><span className="glyphicon glyphicon-remove" onClick={deleteTrail} /></td>
            </tr>
        )
    }
}

Results.defaultProps = {
    deletedTrail: function () { }
}

Results.propTypes = {
    results: PropTypes.object.isRequired,
    deletedTrail: PropTypes.func
}

// connect