import React , {useEffect, useState}from 'react';
import axios from 'axios';
import '../css/mathQuestionsCard.css';
import {MathJax} from 'better-react-mathjax';
const  MathQuestionsCard = () => {
const [active,setActive] = useState('1');
const [questions,setQuestions] = useState([]);
const [expectedTime,setExpectedTime] = useState();
const [difficulty,setDifficulty] = useState();


console.log()
const dataFetch  = async() =>{
    try{
      const response = await axios.get('https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=AreaUnderTheCurve_901 ');
       const data = response.data[0];
       console.log(data);
          
            setQuestions(data);
            setExpectedTime(data.ExpectedTime);
            setDifficulty(data.Difficulty);
    }
    catch(error){
      new Error(`The status of error is ${error.status}`)
    }
}

const handlingTopicName = async (event) => { 
setActive(event.target.id);
  try{
    const response = await axios.get(`https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${event.target.name} `);
     const data = response.data[0];
     
          setQuestions(data);
          setExpectedTime(data.ExpectedTime);
          setDifficulty(data.Difficulty);
  }
  catch(error){
    new Error(`The status of error is ${error.status}`)
  }
}

useEffect(()=>{
        dataFetch();
},[])

  return (
       <div className='questions-container'>
    <div className='topic-div'>
      <button  name="AreaUnderTheCurve_901"  id={"1"} onClick = {handlingTopicName} className={`topic-name ${active === "1" ? "active" : " "}`}>AreaUnderTheCurve</button>
      <button   name="BinomialTheorem_901"   id={"2"} onClick = {handlingTopicName} className={`topic-name ${active === "2" ? "active" : " "}`}>BinomialTheorem</button>
      <button name="DifferentialCalculus2_901" id={"3"}  onClick = {handlingTopicName} className={`topic-name ${active === "3" ? "active" : " "}`}>DifferentialCalculus</button>
    </div>
    <div className='question-card'>
    <div className='question'>
     <MathJax>
        {questions.Question}
      </MathJax>
      </div>
      <div className='question-bottom-strip'>
        <span className='question-bottom-strip-span'>Expected Time: {expectedTime}</span>
        <span className='question-bottom-strip-span'>Difficulty Level: {difficulty}</span>
      </div>
      </div>
    </div> 
  )
}


export default  MathQuestionsCard;