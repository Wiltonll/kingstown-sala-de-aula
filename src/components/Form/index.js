import React from "react";
import styles from './Form.module.css';

function Form(){
    return(
        <div className={styles.body}>
            <div className={styles.containerImg}>
                <div id={styles.img}>
                </div>
            </div>
            <form>
                <div className="row">
                    <div className="input-field col s6" id={styles.input_email}>
                        <input id="email" type="email" className="validate"/>
                        <label for="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6" id={styles.input_password}>
                        <input id="password" type="password" className="validate"/>
                        <label for="password">Password</label>
                    </div>
                </div>
                <div className={styles.container_btnLogin}>
                    <input className={styles.btnLogin} type="submit" value="Login"/>
                </div>
                <div className={styles.container_loginGoogle}>
                    <button className={styles.btnGoogle}>
                        <div className={styles.logo_google}></div>
                        Login with Google
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form;