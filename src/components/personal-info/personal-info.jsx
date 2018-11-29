import React from 'react';
import './personal-info.sass';

export default () => (
    <div className="personal-info">
        <h1 className="name">Otávio Moreira Meirelles</h1>
        <ul className="info-list">
            <li>
                <p>
                    <i className="fas fa-calendar" />
                    <strong>Birth:</strong> 1992/12/04
                </p>
            </li>
            <li>
                <p>
                    <i className="fas fa-globe-americas" />
                    <strong>Nationality:</strong> Brazil
                </p>
            </li>
            <li>
                <p>
                    <i className="fas fa-map-marker" />
                    <strong>located:</strong> Rio de Janeiro
                </p>
            </li>
        </ul>
    </div>
)