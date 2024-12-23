import { Routes, Route } from 'react-router-dom';
import Root from './Root/Root';
import Home from './Root/Home/Home';
import HTML from './Root/Home/HTML/HTML';
import Css from './Root/Home/CSS/CSS';
import Javascript from './Root/Home/Javascript/Javascript';
import Accessibility from './Root/Home/Accessibility/Accessibility';
import { useEffect, useState } from 'react';
import styles from '../App/App.module.css';


function App() {
 
 
  const [quizzes, setQuizzes] = useState([]);


  const [section, setSection] = useState(-1);
 
  
  
  const isDarkPreferred = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [darkTheme, setDarkTheme] = useState(isDarkPreferred ? true : false);


  const url = 'https://mocki.io/v1/fdf1750e-5d5e-4f9c-a8e7-fc83e9e5cb54';
  
function callData() {
  fetch(url)
  .then((res) => res.json())
  .then((data) =>{

   
    setQuizzes(data.quizzes);
    
  })
  .catch(console.error);
}

useEffect(() => {
  callData()

  
},[])






if(quizzes.length > 0){
  return (

    <div className={!darkTheme ? styles.container : styles["container-dark"]}>
      <Routes>
          <Route
            element={<Root section={section} darkTheme={darkTheme} setDarkTheme={setDarkTheme}  quizzes={quizzes} />}
          >
              <Route path="/" element={<Home setSection={setSection} quizzes={quizzes} />} />
              <Route path="/html" element={<HTML darkTheme={darkTheme} section={section} setSection={setSection}  quizzes={quizzes} />} />
              <Route path="/css" element={<Css darkTheme={darkTheme} section={section} setSection={setSection}  quizzes={quizzes} />} />
              <Route path="/javascript" element={<Javascript darkTheme={darkTheme} section={section} setSection={setSection} quizzes={quizzes} />} />
              <Route path="/accessibility" element={<Accessibility darkTheme={darkTheme} section={section} setSection={setSection}  quizzes={quizzes} />} />
          </Route>
      </Routes>
    </div>
  );
}
else {
  return (
    <h1>loading...</h1>
  )
}
}




export default App
