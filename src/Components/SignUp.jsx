import React from 'react';
import styles from '../Styles/signIn.module.css'; // Import the CSS module

const SignUp = () => {
  return (
    <div className={styles.bgLight}>
      <div className={styles.container}>
        <div className={`row justify-content-center`}>
          <div className={`col-md-6`}>
            <div className={styles.card}>
              <div className={`${styles.cardHeader} text-center`}>
                <h4>User Signup</h4>
              </div>
              <div className={styles.cardBody}>
                <form action="/users/create" method="POST">
                  <div className={styles.formGroup}>
                    <label htmlFor="username" className={styles.label}>Mobile Number</label>
                    <input type="text" className={`${styles.formControl}`} id="username" name="username" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="password" className={styles.label}>Password</label>
                    <input type="password" className={`${styles.formControl}`} id="password" name="password" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="confirm_password" className={styles.label}>Confirm Password</label>
                    <input type="password" className={`${styles.formControl}`} id="confirm_password" name="confirm_password" required />
                  </div>
                  <button type="submit" className={`${styles.btnPrimary} btn-block`}>Sign Up</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
