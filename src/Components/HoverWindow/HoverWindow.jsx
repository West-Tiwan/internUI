import React from 'react'
import Trash from '../../assets/trash.svg'
import styles from "./HoverWindow.module.scss";

const HoverWindow = ({type, hover, setHover}) => {
    switch (hover) {
        case type[0]:
            return (
                <div className={`${styles.container} ${((hover === "null") ? styles.hidden : '')}`}>
                    <div className={styles.shadow}>
                        <div className={styles.topic}>Spelling error</div>
                        <div className={styles.correction}>Determination</div>
                    </div>
                    <div className={styles.group} onClick={setHover("null")}>
                        <img src={Trash} alt={Trash} />
                        <p>Dismiss</p>
                    </div>
                </div>
            )
        case type[1]:
            return (
                <div className={`${styles.container} ${(hover ? styles.hidden : '')}`}>
                    <div className={styles.shadow}>
                        <div className={styles.topic}>Correctness</div>
                        <div className={styles.correction}>..the attention of scientists and...</div>
                    </div>
                    <div className={styles.group} onClick={setHover("null")}>
                        <img src={Trash} alt={Trash} />
                        <p>Dismiss</p>
                    </div>
                </div>
            )
    }
}
export default HoverWindow
