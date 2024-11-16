import { Routes, Route } from 'react-router-dom';
import Root from './Root/Root';
import Home from './Root/Home/Home';
import HTML from './Root/Home/HTML/HTML';
import Css from './Root/Home/CSS/CSS';
import Javascript from './Root/Home/Javascript/Javascript';
import Accessibility from './Root/Home/Accessibility/Accessibility';
import { useEffect, useState } from 'react';
import ContextLayout from '../../Contexts/ContextLayout';
import styles from '../App/App.module.css';

function App() {
 
  const [quizzes, setQuizzes] = useState(null)

  const [section, setSection] = useState(-1);

  const [score, setScore]= useState(0);

  const isDarkPreferred = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [darkTheme, setDarkTheme] = useState(isDarkPreferred ? true : false);

  



  useEffect(()=> {
    fetch('http://localhost:8000/quizzes')
    .then(res => {
      if(!res.ok){
        throw new Error('could not fetch the data')
      }
      return res.json()
    })
    .then(data => setQuizzes(data))
    .catch(e => console.log(e));
  },[section]) 
  
 





  return (
    <div className={!darkTheme ? styles.container : styles["container-dark"]}>
      <Routes>
        <Route
          element={
            <ContextLayout
              section={section}
              setSection={setSection}
              quizzes={quizzes}
              setQuizzes={setQuizzes}
              score = {score}
              setScore= {setScore}
            />
          }
        >
          <Route
            element={<Root darkTheme={darkTheme} setDarkTheme={setDarkTheme} />}
          >
            <Route path="/" element={<Home />} />
            <Route path="/html" element={<HTML score={score} />} />
            <Route path="/css" element={<Css score={score} />} />
            <Route path="/javascript" element={<Javascript score={score} />} />
            <Route path="/accessibility" element={<Accessibility score={score} />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App
