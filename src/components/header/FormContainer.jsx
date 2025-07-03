import React from 'react'
import styles from './styles/FormContainer.module.css'
import collegeIcon from '../../assets/collegeIcon.png'
import hatIcon from '../../assets/hat.png'
import courseIcon from '../../assets/courseIcon.png'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function FormContainer({ navigateLink }) {

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
            <div className={styles.container} >
                <div className={styles.containerBox} >
                    <div className={styles.Left00} >
                        <div className={styles.leftContainerUpper} >
                            <div className={styles.detailsBox} >
                                <div className={styles.detailsBoxLeft} ><img src={collegeIcon} alt="" /></div>
                                <div className={styles.detailsBoxRight} >
                                    <h1><Link className={styles.link} to={navigateLink}>Top Engineering</Link></h1>
                                    <h3>College In India</h3>
                                </div>
                            </div>
                            <div className={styles.detailsBox} >
                                <div className={styles.detailsBoxLeft} ><img src={hatIcon} alt="" /></div>
                                <div className={styles.detailsBoxRight} >
                                    <h1><Link className={styles.link} to={navigateLink}>Top Medical</Link></h1>
                                    <h3>College In India</h3>
                                </div>
                            </div>
                            <div className={styles.detailsBox} >
                                <div className={styles.detailsBoxLeft} ><img src={hatIcon} alt="" /></div>
                                <div className={styles.detailsBoxRight} >
                                    <h1><Link className={styles.link} to={navigateLink}>Get Admission</Link></h1>
                                    <h3>Bihar Students Credit Card</h3>
                                </div>
                            </div>
                            <div className={styles.detailsBox} >
                                <div className={styles.detailsBoxLeft} ><img src={hatIcon} alt="" /></div>
                                <div className={styles.detailsBoxRight} >
                                    <h1><Link className={styles.link} to={navigateLink}>Top EXAM</Link></h1>
                                    <h3>WBJEE / NEET/ JEE MAIN</h3>
                                </div>
                            </div>
                        </div>
                        <div className={styles.LeftSideDownSection} >
                            <div className={styles.leftContainerDown} >
                                <div className={styles.detailsBoxLeft} ><img src={collegeIcon} alt="" /></div>
                                <h4>COLLEGES</h4>
                            </div>
                            <div className={styles.leftContainerDown} >
                                <div className={styles.detailsBoxLeft} ><img src={hatIcon} alt="" /></div>
                                <h4>UNIVERSITY</h4>
                            </div>
                            <div className={styles.leftContainerDown} >
                                <div className={styles.detailsBoxLeft} ><img src={courseIcon} alt="" /></div>
                                <h4>COURSES</h4>
                            </div>
                            <div className={styles.leftContainerDown} >
                                <div className={styles.detailsBoxLeft} ><img src={hatIcon} alt="" /></div>
                                <h4>ADMISSION</h4>
                            </div>
                            <div className={styles.leftContainerDown} >
                                <div className={styles.detailsBoxLeft} ><img src={hatIcon} alt="" /></div>
                                <h4>EXAM</h4>
                            </div>
                        </div>
                    </div>
                    <div className={styles.rightSection} >
                        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                            <h2>REGISTER FOR THE</h2>
                            <h1>ADMISSIONS</h1>
                            <h4>FILL BELOW DETAILS</h4>
                            <div className={styles.inputBox}>
                                {/* Name */}
                                <div>
                                    <input className={styles.name}
                                        type="text"
                                        placeholder="Name"
                                        {...register('name', { required: 'Name is required' })}
                                    />
                                    {errors.name && <span>{errors.name.message}</span>}
                                </div>

                                {/* Email */}
                                <div>
                                    <input className={styles.email}
                                        type="email"
                                        placeholder="Email ID"
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

                                {/* Phone Number */}
                                <div>
                                    <input className={styles.phone}
                                        type="tel"
                                        placeholder="Phone Number"
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

                                {/* Courses Dropdown */}
                                <div>
                                    <input className={styles.course}
                                        type="text"
                                        placeholder="Course"
                                        {...register('course', { required: 'Course is required' })}
                                    />
                                    {errors.course && <span>{errors.course.message}</span>}
                                    {/* <select {...register('course', { required: 'Please select a course' })}>
                                    <option value="">Select Course</option>
                                    <option value="BCA">BCA</option>
                                    <option value="MCA">MCA</option>
                                    <option value="B.Tech">B.Tech</option>
                                </select>
                                {errors.course && <span>{errors.course.message}</span>} */}
                                </div>

                                {/* Register Button */}
                            </div>
                            <div className={styles.btnDiv} >
                                <button className={styles.btn} type="submit">REGISTER NOW</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormContainer;
