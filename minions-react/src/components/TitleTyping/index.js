import "./style.css";
import React,{useRef,useLayoutEffect} from "react";

function TitleTyping ({arrMessages}){
  const titleElement = useRef();

  let messageIndex = 0;
  let characterIndex = 0;
  let currentMessage = "";
  let currentCharacter = "";

  function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  const type = async () => {
    if(messageIndex === arrMessages.length){
      messageIndex = 0
      await timeout(1000)
    };
    currentMessage = arrMessages[messageIndex];
    currentCharacter = currentMessage.slice(0, characterIndex++);
    titleElement.current.textContent=currentCharacter;

    if(currentCharacter.length === currentMessage.length){
      await timeout(1000)
      messageIndex++;
      characterIndex=0;
    }
    
  }
  useLayoutEffect(()=>{
    setInterval(type, 150)
  })
  
  return (
    <p 
      ref={titleElement} 
      className='title-typing'
    >
      {currentCharacter}
    </p>
  )
}

export default TitleTyping;