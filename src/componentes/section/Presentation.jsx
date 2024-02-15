import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import {useEffect, useState} from  'react'


function Presentation (){


    return (
        <div className={styles.presentation} id='Presentation'>
            <h1>Olá, eu sou João </h1>
            <h1>Desenvolvedor Full-stack</h1>

            <p>
            Tenho experiência com diversas linguagens famosas do mercado<br/>
            meu foco é no front-end, sou especializado em desenvolvimento web<br/>
              utilizando React.js<br/>
             
            </p>
            <ButtonA link='https://github.com/juanreism' text='Download resumo'/>

        </div>
    )
}

export default Presentation 