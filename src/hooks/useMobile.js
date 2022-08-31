import { useEffect, useState } from "react"

const useMobile=()=>{
    const [mobiles,setMobiles]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setMobiles(data))
    },[])
    return [mobiles,setMobiles]
}
export default useMobile;