import React, { Component } from 'react';
import './Search.css';
import axios from 'axios';
import config from '../../config';
import Results from '../Results/Results';
import { Table } from 'react-bootstrap';
import Found from '../Found/Found';

export default class Search extends Component {
    constructor() {
        super();

        this.handleState = this.handleState.bind(this);
        this.handleCity = this.handleCity.bind(this);
        this.handleButton = this.handleButton.bind(this);
        this.handleRadius = this.handleRadius.bind(this);
        this.getList = this.getList.bind(this);
    }

    handleCity(value) {
        this.setState({ searchCity: value });
    }

    handleState(value) {
        this.setState({ searchState: value });
    }

    handleRadius(value) {
        this.setState({ radius: value })
    }

    handleButton() {
        axios.get(`https://trailapi-trailapi.p.mashape.com/?q[activities_activity_type_name_eq]=hiking&q[city_cont]=${this.state.searchCity}&q[state_cont]=${this.state.searchState}&radius=${this.state.radius}`, config.apiHeader)
            .then(result => {
                let results = result.data.places.map(e => {
                    return {
                        name: e.name,
                        city: e.city,
                        state: e.state,
                        description: e.description,
                        map: `https://www.google.com/maps/@${e.lat},${e.lon},15z`,
                        lat: e.lat,
                        lon: e.lon,
                        unique_id: e.unique_id
                    }
                })
                axios.post('/api/', results)
                    .then(myApiResult => {
                        this.getList();
                    })
            });
    }

    getList() {
        axios.get('/api/')
            .then(result => {
                this.setState({ searchResults: result.data });
            })
    }


    render() {
        let trailsToDisplay = this.state.searchResults.map((element, index) => {
            return (<Results key={index} result={element} deletedTrail={this.getList} />)
        })

        return (
            <div>
                <div className="input-boxes">
                    <input placeholder="City" value={this.state.searchCity} onChange={(event) => this.handleCity(event.target.value)} />
                    <input placeholder="State" value={this.state.searchState} onChange={(event) => this.handleState(event.target.value)} />
                    <input placeholder="Mile Radius" value={this.state.radius} onChange={(event) => this.handleRadius(event.target.value)} />
                </div>
                <div className="submit-btn">
                    <button className="button" onClick={this.handleButton}>Submit</button>
                </div>
                {this.state.searchResults.length > 0 ? <Found trailsFound={this.state.searchResults.length}/>: null}
                <div className="trail-table">
                    {trailsToDisplay.length > 0 &&
                        <Table striped responsive hover condensed >
                            <thead>
                                <tr>
                                    <th>Trail Name</th>
                                    <th>City, State</th>
                                    <th>Description</th>
                                    <th>Map</th>
                                    <th>Latitude</th>
                                    <th>Longitude</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {trailsToDisplay}
                            </tbody>
                        </Table>
                    }
                </div>
            </div>
        )
    }
}