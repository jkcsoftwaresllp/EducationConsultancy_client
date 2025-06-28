import React from 'react'
import styles from './styles/Tile2.module.css'
import image from '../../assets/first-img.jpg'
import Button1 from '../buttons/Button1'
function Tile2({ imageSrc, title, description, onReadMore, onEnquiry }) {
    return (
        <div className={styles.tileBox}>
            <div className={styles.leftSide}>
                <img src={imageSrc} alt="icon" className={styles.tileImage} />
            </div>
            <div className={styles.rightSide}>
                <h2 className={styles.tileTitle}>{title}</h2>
                <p className={styles.tileDescription}>{description}</p>
                <div className={styles.buttonGroup}>
                    <Button1 color={"red"} text={"Read More"} />
                    <Button1  text={"Make Enquiry"} />
                </div>
            </div>

        </div>
    )
}

export default Tile2
