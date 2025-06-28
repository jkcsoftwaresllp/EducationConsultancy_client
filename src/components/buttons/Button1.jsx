import React from 'react'
import styles from './styles/Button1.module.css'
import { useFormContext } from '../../context/FormContext.jsx';

function Button1({ text,  color }) {
    const { setShowForm } = useFormContext();
    // const [showForm, setShowForm] = useState(false); 

    return (
        <div
            className={styles.Box}
            
        >
            <button style={{ background: color === "red" ? "var(--button1-bg)" : "var(--button2-bg)" }} onClick={() => setShowForm(true)}>{text}</button>
        </div>
    );
}

export default Button1
