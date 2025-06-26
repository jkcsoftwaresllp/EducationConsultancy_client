import styles from './TopBar.module.css';
import HeaderButton from '../HeaderButton/HeaderButton';
import { useState } from 'react';
import EnquiryForm from '../../pages/EnquiryForm';
import { useFormContext } from '../../context/FormContext';

function TopBar({ address, phone, email }) {

  const { showForm, setShowForm } = useFormContext();
  // const [showForm, setShowForm] = useState(false); // track visibility

  return (
    <div className={styles.topBar}>
      <div className={styles.left}>
        <span>Address: {address}</span>
        <span>Phone: {phone}</span>
        <span>Email: {email}</span>
      </div>
      <div className={styles.right}>
        {/* {!showForm && (
          // <button onClick={() => setShowForm(true)}>Register</button>
          <HeaderButton onClick={() => setShowForm(true)} label="ENQUIRY NOW" variant="orange" />
        )}
        {showForm && (
          <div className="formWrapper">
            <EnquiryForm onClose={() => setShowForm(false)} />
          </div>
        )} */}
        <HeaderButton onClick={() => setShowForm(true)} label="ENQUIRY NOW" variant="orange" />
        <HeaderButton label="BLOGS" variant="blue" />
        {/* <HeaderButton label="LOGIN" variant="green" />
        <HeaderButton label="SIGN UP" variant="red" /> */}
      </div>
    </div>
  );
}

export default TopBar;
