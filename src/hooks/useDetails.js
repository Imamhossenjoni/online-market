import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useDetails=id=>{
    const [detail, setDetail] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => setDetail(data))
    }, [id])
    return [detail];
}
export default useDetails;