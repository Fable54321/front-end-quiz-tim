
import { Outlet } from 'react-router-dom'
import styles from './root.module.css'
import { quizzContext } from '../../../Contexts/quizzContext'
import { useContext } from 'react'
import html from '../../../images/icon-html.svg'
import css  from '../../../images/icon-css.svg'
import javascript from '../../../images/icon-js.svg'
import accessibility from '../../../images/icon-accessibility.svg'
import moonDark from '../../../images/icon-moon-dark.svg';
import sunDark from '../../../images/icon-sun-dark.svg';
import moonLight from '../../../images/icon-moon-light.svg';
import sunLight from '../../../images/icon-sun-light.svg';
import { sectionContext } from '../../../Contexts/sectionContext'


// eslint-disable-next-line react/prop-types
const Root = ({ darkTheme, setDarkTheme }) => {

  const body = document.body;
  

  const sectionState= useContext(sectionContext);
  
  const section = sectionState[0];

  const quizzes = useContext(quizzContext);

  const imagesSrc ={
    0: html,
    1: css,
    2: javascript,
    3: accessibility,
  }


  const handleClick =() => {
    body.classList.add('dark-mode');
    darkTheme ? setDarkTheme(false): setDarkTheme(true);
    
  }





  return (
    <>
      <header className={styles.header}>
        {quizzes && section >= 0 ? (
          <div className={styles["header__page-title"]}  >
            <img src={imagesSrc[section]} alt="" aria-hidden="true" />
            <h2>{quizzes[section].title}</h2>
          </div>
        ) : (
          <div className={styles["header__page-title"]}></div>
        )}
        <div className={styles["header__theme-switch"]}>
          <img src={!darkTheme? moonDark: moonLight} alt='' aria-hidden="true"/>
          <button onClick={handleClick} className={styles["header__theme-switch__button"]}>
            <div
             className={darkTheme ? styles["header__theme-switch__button__handle-on"] : styles["header__theme-switch__button__handle-off"]}
            ></div>
          </button>
          <img src={!darkTheme? sunDark: sunLight} alt='' aria-hidden="true"/>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root
