import React from 'react';
import styles from '../Styles/signIn.module.css'; // Import the CSS module

const SignIn = () => {
  return (
    <div className={styles.bgLight}>
      <div className={styles.container + ' mt-5'}>
        <div className={`${styles.row} justify-content-center`}>
          <div className={`${styles.colMd6}`}>
            <div className={styles.card}>
              <div className={`${styles.cardHeader} text-center`}>
                <h4>User Sign In</h4>
              </div>
              <div className={styles.cardBody}>
                <form action="/users/create-session" method="POST">
                  <div className={styles.formGroup}>
                    <label htmlFor="mobile" className={styles.label}>Mobile Number</label>
                    <input type="text" className={`${styles.formControl}`} id="mobile" name="mobile" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="password" className={styles.label}>Password</label>
                    <input type="password" className={`${styles.formControl}`} id="password" name="password" required />
                  </div>
                  <button type="submit" className={`${styles.btnPrimary} btn-block`}>Sign In</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
