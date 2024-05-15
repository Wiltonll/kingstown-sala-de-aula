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
                <h4>Faça login com sua conta Google </h4>
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