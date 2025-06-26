import React from 'react'
import styles from './styles/Button1.module.css'
import { useState } from 'react';
import EnquiryForm from '../../pages/EnquiryForm';
import { useFormContext } from '../../context/FormContext.jsx';

function Button1({ text, onclick, color }) {
    const { setShowForm } = useFormContext();
    // const [showForm, setShowForm] = useState(false); 

    return (
        <div
            className={styles.Box}
            
        >
            <button style={{ background: color === "red" ? "rgb(255, 62, 62)" : "#b2b60d" }} onClick={() => setShowForm(true)}>{text}</button>
        </div>
    );
}

export default Button1
