import React from 'react'
import styles from './styles/ContactUs.module.css'
import { useForm } from 'react-hook-form';

function ContactUs() {

    const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm();
    
        const onSubmit = (data) => {
            console.log('Form Data:', data);
        };

    return (
        <div>
            <div className={styles.Header} >
                <h1>Get in Touch</h1>
                <h2>Have questions about THE CAREER ZONE ? Need help getting started? Our team is here to help you succeed. Reach out to us anytime.</h2>
            </div>
            <div className={styles.body} >
                <div className={styles.leftSection} >
                    <h1>Get in Touch</h1>
                    <span></span>
                    <h2>Multiple ways to reach us. Choose what works best for you.</h2>
                    <div className={styles.CardContainer} >
                        <div className={styles.card} >
                            <h1>Experience</h1>
                            <p>20+ Years in Education & Admission Guidance 5000+ Successful Admissions</p>
                        </div>
                        <div className={styles.card} >
                            <h1>Address</h1>
                            <p>Address:511, 5 Floor,Ashiana tower, Exhibition Rd, near HDFC BANK LTD, Ali Nagar Colony, Salimpur Ahra, Patna, Bihar 800001</p>
                        </div>
                        <div className={styles.card} >
                            <h1>Contact info</h1>
                            <p>Phone: 93043 65563
                                Email: info@thecareeezone.co.in</p>
                        </div>
                        <div className={styles.card} >
                            <h1>Website</h1>
                            <p>Website: www.thecareerzone .co.in Facebook: Facebook .com/thecareerzone .patna</p>
                        </div>
                    </div>
                </div>
                <div className={styles.rightSection} >
                    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                        {/* <div className={styles.cross} onClick={() => setShowForm(false)} ><img src={crossIcon} alt="" /></div> */}
                        <h1>ENQUIRY FORM</h1>
                        <h2>THE CAREER ZONE</h2>
                        <div className={styles.inputBox}>
                            {/* Name */}
                            <div className={styles.nameDiv}>
                                <input className={styles.name}
                                    type="text"
                                    placeholder="Full Name"
                                    {...register('name', { required: 'Name is required' })}
                                />
                                {errors.name && <span>{errors.name.message}</span>}
                            </div>
                            {/* Phone Number */}
                            <div className={styles.phoneDiv}>
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

                            {/* Email */}
                            <div className={styles.EmailDiv}>
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

                            {/* Course */}
                            <div className={styles.messageDiv}>
                                <textarea
                                    className={styles.message}
                                    placeholder="Message"
                                    {...register('course', { required: 'Course is required' })}
                                />
                            </div>


                            {/* Register Button */}
                        </div>
                        <div className={styles.btnDiv} >
                            <button className={styles.btn} type="submit">SEND ENQUIRY</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
