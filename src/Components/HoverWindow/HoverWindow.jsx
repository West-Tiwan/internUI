import React from 'react'
import Trash from '../../assets/trash.svg'
import styles from "./HoverWindow.module.scss";

const HoverWindow = ({ type, hover, setHover, visible, index}) => {
    if (!hover) return null;

    let content;
    switch (hover) {
        case type[0]:
            content = (
                <div className={styles.shadow}>
                    <div className={styles.topic}>Spelling error</div>
                    <div className={styles.correction}><p className={styles.replace}>Determination</p></div>
                </div>
            );
            break;
        case type[1]:
            content = (
                <div className={styles.shadow}>
                    <div className={styles.topic}>Correctness</div>
                    <div className={styles.correction}>..the <p>attention</p> of scientists and...</div>
                </div>
            );
            break;
            case type[2]:
                content = (
                    <div className={styles.shadow}>
                        <div className={styles.topic}>Correctness</div>
                        <div className={styles.correction}>...the planet’s secrets,<p> with the hope of finding a new home for humanity.</p><p className={styles.replace}> with the hope of finding a new home for humanity.</p></div>
                    </div>
                );
                break;
        default:
            return null;
    }

    return (
        <div className={`${styles.container} ${(!visible ? styles.hidden : '')}`}>
            {content}
            <div className={styles.group} onClick={() => setHover(null)}>
                <img src={Trash} alt="Trash" />
                <p>Dismiss</p>
            </div>
        </div>
    );
};
export default HoverWindow
