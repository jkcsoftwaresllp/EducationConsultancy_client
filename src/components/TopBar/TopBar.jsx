import styles from './TopBar.module.css';
import HeaderButton from '../HeaderButton/HeaderButton';
import { useState } from 'react';
import EnquiryForm from '../../pages/EnquiryForm';
import { useFormContext } from '../../context/FormContext';
import Button1 from '../buttons/Button1';

function TopBar({ address, phone, email }) {

  const { showForm, setShowForm } = useFormContext();

  return (
    <div className={styles.topBar}>
      <div className={styles.left}>
        <span>Address: {address}</span>
        <span>Phone: {phone}</span>
        <span>Email: {email}</span>
      </div>
      <div className={styles.right}>
        <Button1 color={"red"} text={"ENQUIRY NOW"} />
        <Button1 text={"BSCC"} path={"https://www.7nishchay-yuvaupmission.bihar.gov.in/"} />
      </div>
    </div>
  );
}

export default TopBar;
