import React from 'react';
import './contact.sass';

export default () => (
    <div className="contact">
        <h3>Contact</h3>
        <ul className="social-list">
            {social &&
                Object.getOwnPropertyNames(social).map(i => (
                    <li key={i}>
                        <a target="_blank" rel="noopener noreferrer"
                            href={`${social[i].startsWith("ommeirelles") ? "mailto:" : ""}${social[i]}`}>
                            <i className={i} />
                        </a>
                    </li>
                ))
            }
        </ul>
    </div>
)

const social = {
    "fab fa-linkedin": "https://www.linkedin.com/in/ommeirelles/",
    "fab fa-facebook": "https://www.facebook.com/ommeirelles",
    "fab fa-github": "https://github.com/ommeirelles",
    "fas fa-envelope": "ommeirelles@gmail.com"
}
