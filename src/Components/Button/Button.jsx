import React from 'react'
import styles from './Button.module.scss'
import Download from '../../../src/assets/download.svg'
import Share from '../../../src/assets/share.svg'

const Button = ({type}) => {
    switch (type) {
        case "download":
            return (
                <div className={styles.container}>
                    <img src={Download}/>
                    <p>Download Report</p>
                </div>
            )
        case "share":
            return (
                <div className={styles.container}>
                    <img src={Share}/>
                    <p>Share Report</p>
                </div>
            )
    }
}
export default Button
