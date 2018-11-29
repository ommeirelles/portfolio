import React from "react";
import styles from "./experience.sass";

export default ({ title, URL, start, length, local }) => (
    <div className="experience">
        <h2 className="title">{title}</h2>
        <ul className="info">
            <li>
                <a className="local" href={URL || "#"}>
                    <i className="fas fa-globe-americas" />
                    {local}
                </a>
            </li>
            <li>
                <time className="start" dateTime={start}>
                    <i className="fas fa-calendar" />
                    {`${start} - ${length}`}
                </time>
            </li>
        </ul>
    </div>
);