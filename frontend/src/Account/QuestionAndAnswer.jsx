import  { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LuMoveLeft } from "react-icons/lu";

const QuestionAndAnswer = () => {

  const navigate = useNavigate();
  const list  = ["Question ", "Answer"]
  const [selctedItem , setSelectedItem] = useState("Question");

  return (
    <>
    <div>

      {/* Heading And Navigation  */}
      <div className='bg-red-500'>
          <div className='flex items-center gap-4 p-3 '>
                  <LuMoveLeft  onClick={()=>navigate('/Account')} className='text-white font-bold text-xl'/>
                  <div className='text-lg text-white font-semibold'>My Question And Answer</div>
              </div>
      
      </div>

      {/* QUestion and Answer Heading Navigation */}

      <div className='flex justify-between items-center bg-white shadow-2xl  mt-4'>

       {list.map((item , index)=>(

        <div key={index} className={`max-w-[100px] pb-2 flex justify-center w-full mx-auto ${selctedItem ? "border-b-2 border-red-500" :""}`}>
          {item}
        </div>

       ))}
        
      </div>

      <div className='h-[7px] bg-gray-200'></div>

      {/* You Haven't Posted any question yet */}

      <div className='flex items-center h-180 justify-center text-gray-600'>
        You Haven't Posted any question yet
      </div>



    </div>

    </>
  )
}

export default QuestionAndAnswer