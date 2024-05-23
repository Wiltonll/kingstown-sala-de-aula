import React from "react";
import Box from '@mui/material/Box';
import styles from './turma.module.css'

function Turma(){
    const novaTurma = document.createElement('div');
    novaTurma.className = 'box';

    document.body.appendChild(novaTurma)
}

export default Turma;