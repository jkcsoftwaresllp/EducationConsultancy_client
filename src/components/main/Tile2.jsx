import React from 'react'
import styles from './styles/Tile2.module.css'
import image from '../../assets/first-img.jpg'

function Tile2({ imageSrc, title, description, onReadMore, onEnquiry }) {
    return (
        // <div className={styles.box} >
        //     <div className={styles.leftSide}>
        //         <img src={image} alt="" />
        //     </div>
        //     <div className={styles.rightSide}>
        //         <h1>Explore Top Colleges</h1>
        //         <p>Choose among the Best Colleges in India based on Location, Fees offered and Counselling and Much More.get admission</p>
        //     </div>

        // </div>
        <div className={styles.tileBox}>
            <div className={styles.leftSide}>
                <img src={imageSrc} alt="icon" className={styles.tileImage} />
            </div>
            <div className={styles.rightSide}>
                <h2 className={styles.tileTitle}>{title}</h2>
                <p className={styles.tileDescription}>{description}</p>
                <div className={styles.buttonGroup}>
                    <button className={styles.readMoreBtn} onClick={onReadMore}>Read more</button>
                    <button className={styles.enquiryBtn} onClick={onEnquiry}>Make Enquiry</button>
                </div>
            </div>

        </div>
    )
}

export default Tile2
