import axios from "axios"
import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"

const Detail = () => {
const {id} = useParams()
const [detail, setDetail] = useState()
const fetchDetail = async () =>{
    const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_TMDB_KEY}&language=en-US`)
    setDetail(data)
}
useEffect(()=>{fetchDetail()}, [])
    return(
        <h1>Detail</h1>
    )
}

export default Detail;