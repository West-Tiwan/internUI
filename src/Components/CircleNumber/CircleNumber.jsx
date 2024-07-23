import React from 'react'
import styles from './CircleNumber.module.scss'
import whiteEllipse from '../../assets/white-ellipse.svg'
import blueEllipse from '../../assets/blue-ellipse.svg'
import purpleEllipse from '../../assets/purple-ellipse.svg'
import orangeEllipse from '../../assets/orange-ellipse.svg'
import greenEllipse from '../../assets/green-ellipse.svg'
import purpleEllipse2 from '../../assets/purple-ellipse-2.svg'
import yellowEllipse from '../../assets/yellow-ellipse.svg'
import darkBlue from '../../assets/dark-blue-ellipse.svg'

// eslint-disable-next-line react/prop-types
const CircleNumber = ({number, text}) => {
    switch (number){
        case 1:
            return (
                <div className={styles.outer}>
                    <img src={whiteEllipse}/>
                    <img className={styles.color} src={purpleEllipse}/>
                    <p className={`${styles.text} ${styles.purple}`}>{text}</p>
                </div>
            )
        case 2:
            return (
                <div className={styles.outer}>
                    <img src={whiteEllipse}/>
                    <img className={styles.color} src={orangeEllipse}/>
                    <p className={`${styles.text} ${styles.orange}`}>{text}</p>
                </div>
            )
        case 3:
            return (
                <div className={styles.outer}>
                    <img src={whiteEllipse}/>
                    <img className={styles.color} src={blueEllipse}/>
                    <p className={`${styles.text} ${styles.blue}`}>{text}</p>
                </div>
            )
        case 4:
            return (
                <div className={styles.outer}>
                    <img src={whiteEllipse}/>
                    <img className={styles.color} src={greenEllipse}/>
                    <p className={`${styles.text} ${styles.green}`}>{text}</p>
                </div>
            )
        case 5:
            return (
                <div className={styles.outer}>
                    <img src={whiteEllipse}/>
                    <img className={styles.color} src={purpleEllipse2}/>
                    <p className={`${styles.text} ${styles.purple2}`}>{text}</p>
                </div>
            )
        case 6:
            return (
                <div className={styles.outer}>
                    <img src={whiteEllipse}/>
                    <img className={styles.color} src={yellowEllipse}/>
                    <p className={`${styles.text} ${styles.yellow}`}>{text}</p>
                </div>
            )
        case 7:
            return (
                <div className={styles.outer}>
                    <img src={whiteEllipse}/>
                    <img className={styles.color} src={darkBlue}/>
                    <p className={`${styles.text} ${styles.darkBlue}`}>{text}</p>
                </div>
            )
    }
}
export default CircleNumber
