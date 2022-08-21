import { useEffect, useState, useTransition } from "react";

const useDoctors = () => {
  const [doctors,setDoctors]=useState([]);
  const [isPending, startTransition] = useTransition();
  useEffect(()=>{
    try {
     fetch('./doctorsData.json')
    .then(res=>res.json())
    .then(data=>
      startTransition(()=>{
        setDoctors(data);

      })
      )
      
    } catch (error) {
      console.log(error);
      
    }

  },[])

  
  return [isPending,doctors,setDoctors];
};

export default useDoctors;