import React, { useState } from 'react';
import styles from './styles/Form.module.css';
import { useForm } from 'react-hook-form';
import crossIcon from '../assets/crossIcon.png';
import { useFormContext } from '../context/FormContext.jsx';

function EnquiryForm({ onClose }) {
    const { showForm, setShowForm } = useFormContext();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = useForm();

    const [submitMessage, setSubmitMessage] = useState('');

    const onSubmit = async (data) => {
        const scriptURL = 'https://script.google.com/macros/s/AKfycbx146WiMX6S5Sbpod_z0sJnvovHeL4j7dxbT9bNkRNlglRLp_mf8m9eelPfgJ5ueGQdeg/exec';

        try {
            await fetch(scriptURL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                mode: 'no-cors',
                body: JSON.stringify(data),
            });

            setSubmitMessage('Thanks! Your enquiry has been submitted successfully.');
            reset();
            setTimeout(() => setSubmitMessage(''), 5000);
        } catch (error) {
            console.error('Submission failed', error);
            setSubmitMessage('Submission failed. Please try again.');
        }
    };

    return (
        <div style={{ display: showForm ? 'block' : 'none' }} className={styles.Main}>
            <div>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.cross} onClick={() => setShowForm(false)}>
                        <img src={crossIcon} alt="" />
                    </div>
                    <h1>ENQUIRY FORM</h1>
                    <h2>THE CAREER ZONE</h2>
                    <div className={styles.inputBox}>
                        <div className={styles.nameDiv}>
                            <input
                                className={styles.name}
                                type="text"
                                placeholder="Full Name"
                                {...register('name', { required: 'Name is required' })}
                            />
                            {errors.name && <span>{errors.name.message}</span>}
                        </div>

                        <div className={styles.phoneDiv}>
                            <input
                                className={styles.phone}
                                type="tel"
                                placeholder="Mobile Number"
                                {...register('phone', {
                                    required: 'Phone No. is required',
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: 'Phone must be 10 digits',
                                    },
                                })}
                            />
                            {errors.phone && <span>{errors.phone.message}</span>}
                        </div>

                        <div className={styles.EmailDiv}>
                            <input
                                className={styles.email}
                                type="email"
                                placeholder="Email Address"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: 'Invalid email address',
                                    },
                                })}
                            />
                            {errors.email && <span>{errors.email.message}</span>}
                        </div>

                        <div className={styles.messageDiv}>
                            <textarea
                                className={styles.message}
                                placeholder="Message"
                                {...register('message', { required: 'Message is required' })}
                            />
                            {errors.message && <span>{errors.message.message}</span>}
                        </div>
                    </div>

                    <div className={styles.btnDiv}>
                        <button className={styles.btn} type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'SENDING...' : 'SEND ENQUIRY'}
                        </button>
                    </div>

                    {submitMessage && (
                        <p className={isSubmitSuccessful ? styles.successMessage : styles.errorMessage}>
                            {submitMessage}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
}

export default EnquiryForm;
