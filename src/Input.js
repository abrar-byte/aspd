import React, { useEffect, useRef } from "react";

export default function Input() {
  const searchInput = useRef(null);

  // useEffect(()=>{
  //    // current property is refered to input element
  //    searchInput.current.focus();
  // },[])

  return (
    <div className="grid">
      <button className="bg-teal-400	 w-max  px-2 rounded-md" onClick={()=>searchInput.current.focus()}>Will Focus</button>
      <div ref={searchInput} >
      <label>Search </label>
      <input type='radio' className="border border-red-500 w-max" />
      Coba
      </div>
      <div  >
      <label>Search </label>
      <input type='radio' className="border border-red-500 w-max" />
      Hai
      </div>
      
    </div>
  );
}