import React from 'react'
import styles from './styles/tiles.module.css'
import firstimg from '../../assets/first-img.jpg'
function Tile({ tittle , college , courses , image , onclick }) {
    return (
        <div className={styles.container} >
            <div><img src={image} alt="" /></div>
            <div>
                <div className={styles.tittles} >
                    <h1>{tittle}</h1>
                    <h2>{college} College</h2>
                </div>
                <div className={styles.courses} >
                    <h4>{courses}</h4>
                </div>

                <button onClick={onclick} className={styles.btn} >APPLY HERE</button>
            </div>
        </div>
    )
}

export default Tile
