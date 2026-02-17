import React, { useState } from 'react'

const Chat = () => {
  const [question ,setQuestion] = useState("")
  const askQuestion = () => {
    console.log(question)
  }
  return (
  
      <div className="grid grid-cols-5 h-screen">
        <div className="col-span-1 bg-slate-100">
          <h1>Chat List</h1>
        </div>
        <div className="col-span-4 ">
          <div className="container h-4/5">
          </div>
          <div className=" border border-gray-400 p-2 w-1/2 flex m-auto  rounded-3xl">
            <input type="text" value={question} onChange={(event)=>setQuestion(event.target.value)} placeholder='Ask me Anything' className="w-full  outline-none" />
            <button onClick={askQuestion} className="">Ask</button>
          </div>
        </div>
      </div>
  
  );
}

export default Chat