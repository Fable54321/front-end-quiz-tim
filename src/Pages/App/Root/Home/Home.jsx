/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import html from '../../../../images/icon-html.svg'
import css from '../../../../images/icon-css.svg'
import javascript from '../../../../images/icon-js.svg'
import accessibility  from '../../../../images/icon-accessibility.svg'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'

const Home = ({ setSection }) => {



  useEffect(()=> {
    setSection(-1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

 

  return (
    <div className={styles.home}>
      <header className={styles["home__header"]}>
        <h1 className={styles["home__header__main"]}>
          Welcome to the <br/><span>Frontend Quiz!</span>
        </h1>
        <h2 className={styles["home__header__additional-info"]}>
          Pick a subject to get started
        </h2>
      </header>
      <section className={styles["home__section"]}>
        <ul className={styles["home__section__links"]} >
          <li>
            <Link to={"/html"}><div className={styles['home__section__links__bg-img-1']}><img src={html} alt='' aria-hidden="true"/></div> HTML</Link>
          </li>
          <li>
            <Link to={'/css'}><div className={styles['home__section__links__bg-img-2']}><img src={css} alt='' aria-hidden="true"/></div>CSS</Link>
          </li>
          <li>
            <Link to={'/javascript'} ><div className={styles['home__section__links__bg-img-3']}><img src={javascript} alt='' aria-hidden="true"/></div>Javascript</Link>
          </li>
          <li>
            <Link to={'/accessibility'} ><div className={styles['home__section__links__bg-img-4']}><img src={accessibility} alt='' aria-hidden="true"/></div>Accessibility</Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Home
