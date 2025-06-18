import React from 'react'
import styles from './styles/HoverTile.module.css'
function HoverTile({ Box1, Box2, Box3, Box4, style }) {
    return (

        <div className={styles.container} style={{ ...style }}  >
            <div className={styles.box} >
                <h1> {Box1 && Box1[0]} </h1>

                <ul>
                    {Box1 && Box1.map((data, index) => (
                        <li key={index} >{data}</li>
                    ))}
                </ul>
                <button className={styles.BottomButton} >VIEW MORE COURSES</button>
            </div>
            <div className={styles.box} >
                 <h1> {Box2 && Box2[0]} </h1>

                <ul>
                    {Box2 && Box2.map((data, index) => (
                        <li key={index} >{data}</li>
                    ))}
                </ul>
                <button className={styles.BottomButton} >VIEW MORE COURSES</button>
            </div>
            <div className={styles.box} >
                 <h1> {Box3 && Box3[0]} </h1>

                <ul>
                    {Box3 && Box3.map((data, index) => (
                        <li key={index} >{data}</li>
                    ))}
                </ul>
                <button className={styles.BottomButton} >VIEW MORE COURSES</button>
            </div>
            <div className={styles.box} >
                 <h1> {Box4 && Box4[0]} </h1>

                <ul>
                    {Box4 && Box4.map((data, index) => (
                        <li key={index} >{data}</li>
                    ))}
                </ul>
                <button className={styles.BottomButton} >VIEW MORE COURSES</button>
            </div>
        </div>

    )
}

export default HoverTile
