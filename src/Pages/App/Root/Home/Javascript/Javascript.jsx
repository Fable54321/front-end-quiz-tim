/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import Question from "../../../Components/Question/Question";


const Javascript = ({ darkTheme, setSection, quizzes, section }) => {

  const javascriptObject = quizzes[2];

  const [javascriptScore, setJavascriptScore] = useState(0);

useEffect(() => {
  setSection(2);
},[])





  return (
    <div>
      <Question darkTheme={darkTheme} section={section} currentQuizz={javascriptObject} currentScore={javascriptScore} setCurrentScore={setJavascriptScore} />
    </div>
  )
}

export default Javascript
