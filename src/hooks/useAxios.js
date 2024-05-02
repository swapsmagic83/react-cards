import React, { useEffect, useState } from "react";
import axios from "axios";

const useLocalStorage = (key,initialValue=[]) =>{
    const [value, setValue] = useState(initialValue)
    if(window.localStorage.getItem(key)){
        initialValue = JSON.parse(window.localStorage.getItem(key))
    }
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value))
      }, [key, value])
      return [value,setValue]
}
const useAxios = (key,url) => {
    const [responses, setResponses] = useLocalStorage(key)
    
            const addCard = async (formatter = data => data, name = "") =>{
                const res = await axios.get(`${url}/${name}`)
                const card = res.data
                setResponses(c =>[
                    ...c,{card}
                    ])
                
            }
            const clearResponses = () => setResponses([]);
       return [responses, addCard,clearResponses]
  
}
export  {useAxios, useLocalStorage}