/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import Question from "../../../Components/Question/Question";



const Accessibility = ({ darkTheme, section, setSection, quizzes }) => {

 

  useEffect(() => {
    setSection(3);
  },[])

  const accessibilityObject = quizzes[3];

  const [accessibilityScore, setAccessibilityScore]= useState(0);

  return (
   

    <div>
    
      
      <Question darkTheme={darkTheme} section={section} currentQuizz={accessibilityObject} currentScore={accessibilityScore} setCurrentScore={setAccessibilityScore}  />
      
      
    </div>
  )
}

export default Accessibility
