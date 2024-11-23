import React from 'react'
import styles from './Feat.module.scss'
import { IoIosStarOutline } from "react-icons/io";

const Feat = () => {
    return (
        <>
            <div className={styles.container}>
                <p className={styles.title}>New Arrivals</p>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <img src='image/bicycle-1.jpg' alt='Placeholder' />
                        <p className={styles.type}>Bicycles</p>
                        <p className={styles.name}>Kryo X26 MTB - Model K</p>
                        <div className={styles.stars}>
                            <IoIosStarOutline />
                            <IoIosStarOutline />
                            <IoIosStarOutline />
                            <IoIosStarOutline />
                            <IoIosStarOutline />
                        </div>
                        <p className={styles.price}>$350.00</p>
                    </div>
                    <div className={styles.card}>
                        <img src='image/bicycle-2.jpg' alt='Placeholder' />
                        <p className={styles.type}>Bicycles</p>
                        <p className={styles.name}>Kryo X26 MTB - Model X</p>
                        <div className={styles.stars}>
                            <IoIosStarOutline />
                            <IoIosStarOutline />
                            <IoIosStarOutline />
                            <IoIosStarOutline />
                            <IoIosStarOutline />
                        </div>
                        <p className={styles.price}>$350.00</p>
                    </div>
                    <div className={styles.card}>
                        <img src='image/bicycle-3.jpg' alt='Placeholder' />
                        <p className={styles.type}>Bicycles</p>
                        <p className={styles.name}>Kryo X26 MTB - Model Y</p>
                        <div className={styles.stars}>
                            <IoIosStarOutline />
                            <IoIosStarOutline />
                            <IoIosStarOutline />
                            <IoIosStarOutline />
                            <IoIosStarOutline />
                        </div>
                        <p className={styles.price}>$350.00</p>
                    </div>
                    <div className={styles.card}>
                        <img src='image/bicycle-4.jpg' alt='Placeholder' />
                        <p className={styles.type}>Bicycles</p>
                        <p className={styles.name}>Kryo X26 MTB - Model Z</p>
                        <div className={styles.stars}>
                            <IoIosStarOutline />
                            <IoIosStarOutline />
                            <IoIosStarOutline />
                            <IoIosStarOutline />
                            <IoIosStarOutline />
                        </div>
                        <p className={styles.price}>$350.00</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feat