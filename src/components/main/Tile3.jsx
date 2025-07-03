import React from 'react'
import styles from './styles/Tile3.module.css'
import image from '../../assets/tile3.png'
import Button1 from '../buttons/Button1'

function Tile3({ tittle , buttons }) {
    return (
        <div className={styles.container} >
            <div><img src={image} alt="" /></div>
            <div>
                <div className={styles.tittles} >
                    <h1>{tittle}</h1>
                </div>
                <div className={styles.buttons} >
                    {buttons.map((button , index)=>(
                        <Button1 color={button.color ? "red" : undefined} text={button.label} key={index} />
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Tile3
