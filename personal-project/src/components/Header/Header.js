import React, { Component } from 'react';
import './Header.css'
import { DropdownButton } from 'react-bootstrap'

export default class Header extends Component {
    render() {
        return (
            <div>
                <h1>Trail and Campground Finder</h1>
                <div>
                    <section className="dropContainer">
                        <DropdownButton bsSize="large" title="Large button" id="dropdown-size-large">
                            <li eventKey="1">Trails</li>
                            <li eventKey="2">Camping</li>
                            <li divider />
                            <li eventKey="4">Favorites</li>
                        </DropdownButton>
                    </section>
                </div>
            </div>
        )
    }
}