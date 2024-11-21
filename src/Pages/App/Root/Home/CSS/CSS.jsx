/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Question from "../../../Components/Question/Question"


const Css = ({ darkTheme, quizzes, section,  setSection }) => {

  const cssObject = quizzes[1];

  const [cssScore, setCssScore] = useState(0);

  useEffect(() => {
    setSection(1);
  },[])

  console.log()

  return (

    

    <div>
      <Question darkTheme={darkTheme} currentQuizz={cssObject} currentScore={cssScore} setCurrentScore={setCssScore} section={section} />
    </div>
  )
}

export default Css
