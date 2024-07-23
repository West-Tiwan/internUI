import React from 'react'
import Trash from '../../assets/trash.svg'
import styles from "./HoverWindow.module.scss";

const HoverWindow = ({type}) => {
    switch (type) {
        case "spelling":
            return (
                <div className={styles.container}>
                    <div className={styles.shadow}>
                        <div className={styles.topic}>Spelling error</div>
                        <div className={styles.correction}>Determination</div>
                    </div>
                    <div className={styles.group}>
                        <img src={Trash} alt={Trash} />
                        <p>Dismiss</p>
                    </div>
                </div>
            )
        case "correctness":
            return (
                <div className={styles.container}>
                    <div className={styles.shadow}>
                        <div className={styles.topic}>Correctness</div>
                        <div className={styles.correction}>..the attention of scientists and...</div>
                    </div>
                    <div className={styles.group}>
                        <img src={Trash} alt={Trash} />
                        <p>Dismiss</p>
                    </div>
                </div>
            )
    }
}
export default HoverWindow
