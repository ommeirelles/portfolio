import React from 'react';
import styles from './personal-info.module.sass';

export default () => (
    <div className={styles["personal-info"]}>
        <h1 className={styles.name}>Otávio Moreira Meirelles</h1>
        <ul className={styles["info-list"]}>
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