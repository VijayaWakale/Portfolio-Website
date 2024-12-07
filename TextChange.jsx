import React from "react";
import { useEffect , useState } from 'react';


const TextChange = () => {
    const texts=["Hi, I'm Vijayalaxmi", "Hi, I'm Vijayalaxmi","Hi, I'm Vijayalaxmi"];
    const [currentText, setCurrentText]= useState("");
    const [endValue, setendValue]= useState(true);
    const [isForward, setIsForward]= useState(true);
    const [index,setIndex]= useState(0);

    useEffect(()=> {
      const intervalID=setInterval(()=>{
        setCurrentText(texts[index].substring(0,endValue));
        if(isForward){
            setendValue((prev)=> prev+1);
        }else{
            setendValue((prev)=> prev-1); 
        }
        if(endValue > texts[index].length+10){
            setIsForward(false)
        }
        if(endValue <2.1){
            setIsForward(true)
            setIndex((prev)=>prev&texts.length);
        }
      }, 50);
      return ()=>clearInterval(intervalID); 
    },[endValue,isForward,index,texts]);


    return (
    <div className='transition ease duration-300'>{currentText}</div>
    );
};

export default TextChange ;