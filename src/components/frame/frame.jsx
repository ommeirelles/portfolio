import React from 'react';
import styles from './frame.module.sass';

export default ({ src, alt }) => <img className={styles.frame} src={src} alt={alt} />