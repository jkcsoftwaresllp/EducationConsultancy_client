import styles from './TopBar.module.css';
import HeaderButton from '../HeaderButton/HeaderButton';

function TopBar({ address, phone, email }) {
  return (
    <div className={styles.topBar}>
      <div className={styles.left}>
        <span>Address: {address}</span>
        <span>Phone: {phone}</span>
        <span>Email: {email}</span>
      </div>
      <div className={styles.right}>
        <HeaderButton label="ENQUIRY NOW" variant="orange" />
        <HeaderButton label="BLOGS" variant="blue" />
        <HeaderButton label="LOGIN" variant="green" />
        <HeaderButton label="SIGN UP" variant="red" />
      </div>
    </div>
  );
}

export default TopBar;
