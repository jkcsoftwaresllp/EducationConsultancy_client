import React from 'react'
import styles from './styles/tiles.module.css'
import firstimg from '../../assets/first-img.jpg'
import Button1 from '../buttons/Button1'

function Tile({ tittle, college, courses, image, buttonLabel, buttonColor, width, border, paras, onclick }) { // width ---> "lg for Large"
    return (
        <div className={styles.container} style={{
            ...(width ? { width: "830px" } : {}),
            ...(border ? { border: "2px solid gray" } : {})
        }}>
            <div><img src={image} alt="" /></div>
            <div>
                <div className={styles.tittles} >
                    <h1>{tittle}</h1>
                    {college && <h2>{college} College</h2>}
                </div>
                <div
                    className={styles.courses}
                    style={width ? { width: "690px" } : {}}
                >
                    {paras?.map((para, index) => (
                        <div key={index}>
                            <p>{para.p1}</p>
                            <p>{para.p2}</p>
                            <p>{para.p3}</p>
                            <p>{para.p4}</p>
                        </div>
                    ))}

                    <h4>{courses}</h4>
                </div>
                <Button1 color={buttonColor ? buttonColor : "red"} text={buttonLabel ? buttonLabel : "APPLY NOW"} />
                {/* <button onClick={onclick} className={styles.btn} >APPLY HERE</button> */}
            </div>
        </div>
    )
}

export default Tile
