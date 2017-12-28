import React, {Component} from 'react';
import './Results.css';
import PropTypes from 'prop-types';
import axios from 'axios'

export default class Results extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: props.result.name,
            city: props.resut.city,
            state: props.result.city,
            description: props.result.description || '',
            map: `https://www.google.com/maps/@${props.result.latitude},${props.result.longitude},15z`,
            latitude: props.result.lat,
            longitude: props.result.lon,
            favTrail: [{}],
            id: props.result.id
        }
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.updateDesc = this.updateDesc.bind(this);
        
    }

    componentWillReceiveProps(newProps){
        this.setState({
            name: newProps.result.name,
            city: newProps.resut.city,
            state: newProps.result.city,
            description: newProps.result.description || '',
            map: `https://www.google.com/maps/@${newProps.result.latitude},${newProps.result.longitude},15z`,
            latitude: newProps.result.lat,
            longitude: newProps.result.lon,
            id: newProps.result.id
        })
    }

    handleDescriptionChange(event){
        this.setState({
            description: event.target.event
        })
    }

    updateDesc(){
        axios.put('/api/' + this.state.id, {description: this.state.description});
        // Place this into the database
    }

    addToFavorites(){
        axios.put('/api/' + this.state.id, {})
    }

    render(){
        return(
            <tr>
                <td>{this.state.name}</td>
                <td>{this.state.city}, {this.state.state}</td>
                <td><textarea onChange={this.handleDescriptionChange} onBlur={this.updateDesc} value={this.state.description}/></td>
                <td><a href={this.state.map} target="_blank" rel="noopener noreferrer">Map</a></td>
                <td>{this.state.latitude}</td>
                <td>{this.state.longitude}</td>
                <td><button onClick={}>{this.state.favTrail}</button></td>
                <td>{}</td>
            </tr>
        )
    }
}