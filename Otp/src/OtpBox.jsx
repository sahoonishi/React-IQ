import React, { useEffect, useRef, useState } from 'react'

const OtpBox = ({length=4 , onotpSubmit=()=>{}}) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  //console.log(otp);
  const inputRef = useRef([]);
  useEffect(()=>{
    inputRef.current[0] && inputRef.current[0].focus();

  } , []);

  const handleChange=(index , e)=>{
      const val = e.target.value;
      if(isNaN(val)) return;
      
      const newotp = [...otp];
      newotp[index] = val.substring(val.length-1);
      setOtp(newotp);

      const combines = newotp.join("");
      if(combines.length === length){
        onotpSubmit(combines);
      }


      if(val && index<length-1 && inputRef.current[index+1]){
        inputRef.current[index+1].focus();
      }
  }
  const handleKeydown=(index , e)=>{
    if(e.key==="Backspace" && !otp[index] && index>0 && inputRef.current[index-1]){
      inputRef.current[index-1].focus();
    }
  }
  const handleClick=(index)=>{
    inputRef.current[index].setSelectionRange(1,1);

    if(index>0 && !otp[index-1]){
      inputRef.current[otp.indexOf("")].focus();
    }
  } 

  return (
    <>
      {otp.map((item , index)=>{
        return (
          <input className='otpp' type="text" key={index} value={item} 
            onChange={(e)=>{handleChange(index , e)}}
            onClick={()=>{handleClick(index)}}
            onKeyDown={(e)=>{handleKeydown(index , e)}}
            ref={(input)=>inputRef.current[index]=input}
          />
        )
      })}
    </>

  )
}

export default OtpBox