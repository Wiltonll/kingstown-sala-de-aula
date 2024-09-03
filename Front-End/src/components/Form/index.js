import React from "react";
import styles from './Form.module.css';
import Imagem from '../../img/logo_bg_branco.png';



function Form(){
    return(
        <div className={styles.body}>
            <div className={styles.containerImg}>
                <div id={styles.img}>
                    <img src={Imagem} alt=""/>
                </div>
            </div>
            <form>
                
            </form>
        </div>
    );
}

export default Form;