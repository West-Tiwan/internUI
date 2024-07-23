import React from 'react'
import styles from './TranslucentBar.module.scss'

const TranslucentBar = ({type, text, number}) => {
    switch (type) {
        case 1:
            return (
                <div className={`${styles.container} ${styles.orange}`}>
                    <div className={styles.circle}>
                        <p>{number}</p>
                    </div>
                    <div className={styles.text}>
                        <p>{text}</p>
                    </div>
                </div>
            )
        case 2:
            return (
                <div className={`${styles.container} ${styles.blue}`}>
                    <div className={styles.circle}>
                        <p>{number}</p>
                    </div>
                    <div className={styles.text}>
                        <p>{text}</p>
                    </div>
                </div>
            )
        case 3:
            return (
                <div className={`${styles.container} ${styles.green}`}>
                    <div className={styles.circle}>
                        <p>{number}</p>
                    </div>
                    <div className={styles.text}>
                        <p>{text}</p>
                    </div>
                </div>
            )
    }
}
export default TranslucentBar
