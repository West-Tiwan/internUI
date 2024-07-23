import React from 'react'
import styles from './NumberBox.module.scss'

const NumberBox = ({number, type}) => {
    switch (type) {
        case 1:
            return (
                <div className={`${styles.box} ${styles.orange}`}>
                    <p>{number}</p>
                </div>
            )
        case 2:
            return (
                <div className={`${styles.box} ${styles.blue}`}>
                    <p>{number}</p>
                </div>
            )
        case 3:
            return (
                <div className={`${styles.box} ${styles.green}`}>
                    <p>{number}</p>
                </div>
            )
        case 4:
            return (
                <div className={`${styles.box} ${styles.solidRed}`}>
                    <p>{number}</p>
                </div>
            )
        case 5:
            return (
                <div className={`${styles.box} ${styles.solidGreen}`}>
                    <p>{number}</p>
                </div>
            )
    }
}
export default NumberBox
