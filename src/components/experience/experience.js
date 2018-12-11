import React from "react";
import styles from "./experience.module.sass";

export default ({ title, URL, start, length, local }) => (
    <div className={styles.experience}>
        <h2 className={styles.title}>{title}</h2>
        <ul className={styles.info}>
            <li>
                <a className={styles.local} href={URL || "#"}>
                    <i className="fas fa-globe-americas" />
                    {local}
                </a>
            </li>
            <li>
                <time className={styles.start} dateTime={start}>
                    <i className="fas fa-calendar" />
                    {`${start} - ${length}`}
                </time>
            </li>
        </ul>
    </div>
);