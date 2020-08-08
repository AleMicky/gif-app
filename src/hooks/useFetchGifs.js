import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGif";
export const useFetchGifs = (Category) => {
    const [state, setSate] = useState({
        data:[],
        loading:true
    });
    useEffect(() =>{
        getGifs(Category)
        .then(img => setSate({
            data:img,
            loading:false
        }));
    },[Category]);
    return state;
}