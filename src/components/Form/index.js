import React from "react";
import styles from './Form.module.css';

function Form(){
    return(
        <div className={styles.body}>
            <div className={styles.img}>
            </div>
            <form>
                <div className="row">
                    <div className="input-field col s6" id={styles.input}>
                        <input id="email" type="email" className="validate"/>
                        <label for="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="password" type="password" className="validate"/>
                        <label for="password">Password</label>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Form;