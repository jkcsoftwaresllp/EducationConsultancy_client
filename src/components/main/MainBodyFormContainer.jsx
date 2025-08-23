import React, { useState } from 'react';
import styles from './styles/MainBodyFormContainer.module.css';
import { useForm } from 'react-hook-form';
import bulbImg from '../../assets/bulb.png';

function MainBodyFormContainer() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = useForm();

    const [submitMessage, setSubmitMessage] = useState('');

    const onSubmit = async (data) => {
        const scriptURL = 'https://script.google.com/macros/s/AKfycbzlIQChj1FAcgwINq_HdoJWbfHZQJrb318b6A2r6bdRU_69_vsmqtYFgRDB1GlaRHZ9/exec';

        try {
            await fetch(scriptURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                mode: 'no-cors',
                body: JSON.stringify(data),
            });

            setSubmitMessage('Thank you! We have received your details.');
            reset();
            setTimeout(() => setSubmitMessage(''), 5000);
        } catch (error) {
            console.error('Submission failed', error);
            setSubmitMessage('Submission failed. Please try again.');
        }
    };

    return (
        <div>
            <div className={styles.Contaner}>
                <div className={styles.LeftSection}>
                    <h1>THE CAREER ZONE: Your Gateway to Success - The Best Admission Consultancy in Patna, Guiding Students Nationwide for a Bright Future.</h1>
                    <h2>093043 65563</h2>
                    <div className={styles.icon}>&gt;</div>
                </div>
                <div className={styles.RightSection}>
                    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles.inputBox}>
                            <div>
                                <input className={styles.name}
                                    type="text"
                                    placeholder="Full Name"
                                    {...register('name', { required: 'Name is required' })}
                                />
                                {errors.name && <span>{errors.name.message}</span>}
                            </div>

                            <div>
                                <input className={styles.phone}
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

                            <div>
                                <input className={styles.email}
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

                            <div>
                                <input className={styles.course}
                                    type="text"
                                    placeholder="Course"
                                    {...register('course', { required: 'Course is required' })}
                                />
                                {errors.course && <span>{errors.course.message}</span>}
                            </div>

                            <div>
                                <input className={styles.name}
                                    type="text"
                                    placeholder="Education"
                                    {...register('education')}
                                />
                            </div>

                            <div>
                                <input className={styles.name}
                                    type="text"
                                    placeholder="Location"
                                    {...register('location')}
                                />
                            </div>
                        </div>

                        <div className={styles.btnDiv}>
                            <button className={styles.btn} type="submit" disabled={isSubmitting}>
                                {isSubmitting ? 'SUBMITTING...' : 'SUBMIT NOW'}
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

            <div className={styles.Bottom}>
                <img src={bulbImg} alt="" />
                <h1>Best Educational Consultancy in Patna</h1>
                <button>Apply For Admission 2023</button>
            </div>
        </div>
    );
}

export default MainBodyFormContainer;
