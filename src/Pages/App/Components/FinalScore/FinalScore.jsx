/* eslint-disable react/prop-types */
import styles from './FinalScore.module.css'
import html from '../../../../images/icon-html.svg'
import css  from '../../../../images/icon-css.svg'
import javascript from '../../../../images/icon-js.svg'
import accessibility from '../../../../images/icon-accessibility.svg'
import { useNavigate } from 'react-router-dom'

const FinalScore = ({ darkTheme ,currentScore, title, section, setPage }) => {

    console.log(section);

    const imagesSrc ={
        0: html,
        1: css,
        2: javascript,
        3: accessibility,
      }

    const navigate = useNavigate();  

  return (
    <div className={styles.FinalScore}>
        <div className={styles['FinalScore__header']}>   
            <h3 className={styles['FinalScore__header__top']} >Quiz completed</h3>
            <h3 className={styles['FinalScore__header__bottom']} > You Scored...</h3>
        </div>
        <div className={styles['FinalScore__main']}>
            <div className={styles['FinalScore__main__result']} data-type='dark'>
                <div className= {styles['FinalScore__main__result__title']}>
                    <div className= 
                        {`${styles['FinalScore__main__result__title__img-bg']}
                        ${section === 0 ? styles['FinalScore__main__result__title__img-bg__html']: ''}
                        ${section === 1 ? styles['FinalScore__main__result__title__img-bg__css']: ''}
                        ${section === 2 ? styles['FinalScore__main__result__title__img-bg__javascript']: ''}
                        ${section === 3 ? styles['FinalScore__main__result__title__img-bg__accessibility']: ''}
                        `}>
                        <img src={imagesSrc[section]} alt='' aria-hidden="true" /></div>
                        <h3>{title}</h3>
                    </div>
                <p className={!darkTheme?  styles['FinalScore__main__result__score']: styles['FinalScore__main__result__score-dark']}>
                        
                    <span className={!darkTheme? styles['FinalScore__main__result__score__personnal']: styles['FinalScore__main__result__score-dark__personnal']}>
                        {currentScore}</span>
                    <br/>out of 10</p>
            </div>
            <button onClick={()=>{ 
                setPage(0)
                navigate('/') }} className={styles['FinalScore__main__button']}>Play Again</button> 
        </div>
    </div>
  )
}

export default FinalScore
