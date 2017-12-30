import React, { Component } from 'react';
import './Header.css'
import { DropdownButton } from 'react-bootstrap'

export default class Header extends Component {
    render() {
        return (
            <div>
                <h1>Find A Trail</h1>
                <div>
                    <section className="dropContainer">
                        <DropdownButton bsSize="large" title="Large button" id="dropdown-size-large">
                            <li eventKey="1">Action</li>
                            <li eventKey="2">Another action</li>
                            <li eventKey="3">Something else here</li>
                            <li divider />
                            <li eventKey="4">Separated link</li>
                        </DropdownButton>
                    </section>
                </div>
            </div>
        )
    }
}