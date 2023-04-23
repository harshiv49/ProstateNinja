import './questions_styles.css';
import {  Fragment, useState } from 'react';
import {FaPlusCircle,FaMinusCircle} from 'react-icons/fa';
import {AiFillCaretRight} from 'react-icons/ai'
const questions=[
    {
        id:1,
        'heading':'How to Invest'
        
    },
    {
        id:2,
        'heading':'How the Zoth Platform Works'
    },
    {
        id:3,
        'heading':'Does Zoth Collects the Money'
    },
    {
        id:4,
        'heading':'How Do You Select Investment Opportunities'
    },
    {
        id:5,
        'heading':'Who is Behind Zoth'
    },
    {
        id:6,
        'heading':'How the Zoth Platform Works'
    },
    {
        id:7,
        'heading':'Does Zoth Collects the Money'
    },
    {
        id:8,
        'heading':'How Do You Select Investment Opportunities'
    },
    {
        id:9,
        'heading':'Who is Behind Zoth'
    },


]
//probably could have added subquestiosn to questions
//well give it a shot 
const subQuestions=[
    {
        p_id:1,
        subquestions:[
            {
                id:0,
                question:'Make an Investment',
                answer:'Once you have Conducted Diligence On a property and want to move forward with an iinvestment click on the purple button'
            },
            {
                id:1,
                question:'Identify a Property you are intrested in ',
                answer:'Once you have Conducted Diligence On a property and want to move forward with an iinvestment click on the purple button'
            },
            {
                id:2,
                question:'PLace Buy Order',
                answer:'Once you have Conducted Diligence On a property and want to move forward with an iinvestment click on the purple button'
            },
            {
                id:3,
                question:'Payment Method ',
                answer:'Once you have Conducted Diligence On a property and want to move forward with an iinvestment click on the purple button'
            
            }
        ]
    },
    {
        p_id:5,
        subquestions:[
            {
                id:0,
                question:'Make an Investment',
                answer:'Once you have Conducted Diligence On a property and want to move forward with an iinvestment click on the purple button'
            },
            {
                id:1,
                question:'Identify a Property you are intrested in ',
                answer:'Once you have Conducted Diligence On a property and want to move forward with an iinvestment click on the purple button'
            },
            {
                id:2,
                question:'Please badal jana tu mere naina',
                answer:'Once you have Conducted Diligence On a property and want to move forward with an iinvestment click on the purple button'
            },
            {
                id:3,
                question:'Payment Method ',
                answer:'Once you have Conducted Diligence On a property and want to move forward with an iinvestment click on the purple button'
            
            }
        ]
    },
]






const AskQuestions=()=>{
  var renderSubquestions=[]
  const [subQuestionsAvailable,setSubQuestionsAvailable]=useState([]);

    const subQuestionsClick=(subQuestions,id)=>{
        console.log("yaha aau tan tp")
        renderSubquestions=subQuestions.find((subQuestion)=>{ 
        return subQuestion.p_id ===id 
        })
        console.log(id,subQuestions.id,renderSubquestions.subquestions)
        setSubQuestionsAvailable(renderSubquestions.subquestions)
    }
 const [isSubQuestionOpen,setIsSubQuestion]=useState([]);
 
 const onIconClick=(id)=>{
    const newIsSubQuestionsOpen=[...isSubQuestionOpen];
    newIsSubQuestionsOpen[id]=!isSubQuestionOpen[id]; 
    setIsSubQuestion(newIsSubQuestionsOpen);
 }

  return(

    <div>
        {/*basically we would name the first div as the parent of the component */}
        <div className="questions-parent">
            <p className="questions-heading1">FAQ</p>
            <p className="questions-heading2">Question & Answer</p>
            {/* subsequent divs that contain the actual text aand the html component we put under component-container and the parent of these imp divs so to speak will be component container parent*/}
            <div className="questions-container-parent">
              <div className='questions-container1'>
                {questions.map((question)=>{
                    return(
                        <Fragment>
                        <div className="sub-questions-heading-container1" key={question.id} >
                                <AiFillCaretRight className='sub-questions-heading-icon'/><p onClick={()=>subQuestionsClick(subQuestions,question.id)} className="questions-container1-heading">{question.heading}</p>
                        </div>
                        <hr></hr>
                        </Fragment>
                    )
                })
                }
                </div>
            {console.log("please",subQuestionsAvailable)}
            <div className='questions-container2'>
            {subQuestionsAvailable.map((subquestion)=>{
                return(
                <div className="sub-questions-container1" key={subquestion.id} >
                    <div>
                   {/* check with the particular subquestion is open or not we created a array of true and false values  */}
                    {isSubQuestionOpen[subquestion.id]?
                        <Fragment>
                        <div className='sub-questions-container2-hidden'>
                                <FaMinusCircle className='sub-questions-container2-icons' onClick={()=>onIconClick(subquestion.id)}></FaMinusCircle>
                                <p className='sub-questions-container2-question-hidden'>{subquestion.question}</p>
                                
                        </div>
                        <hr className='sub-questions-container2-hidden-divider'></hr> 
                        <p className='sub-questions-container2-answer-hidden'>{subquestion.answer}</p>
                        </Fragment>
                    :
                        <div className='sub-questions-container2'>
                            <FaPlusCircle className='sub-questions-container2-icons' onClick={()=>onIconClick(subquestion.id)}></FaPlusCircle>
                            <p className='sub-questions-container2-question'>{subquestion.question}</p>
                        </div>
                    }
                    </div>
                </div>
            )})}
            </div>
                 
            </div>
        </div>
    </div>
  );
}
export default AskQuestions;