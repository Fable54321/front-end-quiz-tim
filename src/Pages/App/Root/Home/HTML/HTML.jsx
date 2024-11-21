/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import Question from '../../../Components/Question/Question'





const Html = ({ darkTheme, section ,setSection ,quizzes }) => {

useEffect(() => {
  setSection(0);
},[])


const htmlObject = quizzes[0];


const [htmlScore, setHtmlScore] = useState(0);

 
   

 
  return (
    <div>
      
      

       <Question darkTheme={darkTheme} section={section} currentQuizz={htmlObject} currentScore={htmlScore} setCurrentScore={setHtmlScore}  /> 
     
    </div>
  )
}

export default Html