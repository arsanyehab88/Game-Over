import axios from 'axios'
import { useEffect, useState } from 'react'




const useFetch = (url,param) =>{

    let [data,setData]=useState([])
    const [isloading,setLoading]=useState(false)
    const [err,setError]=useState(null)

    async function getData(){
        return await axios.get(url,{
          params:{param},
          headers:{
            'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
          }
        })
    }

    useEffect(()=>{
        setLoading(true)
        getData()
        .then((res) => {
            setData(res.data)
            setError(null)
        })
        .catch((err)=>{
            setError(err)
        }).finally(()=> setLoading(false))
    },[url,param])

    return {
        data,
        isloading,
        err
    }
}

export default useFetch;