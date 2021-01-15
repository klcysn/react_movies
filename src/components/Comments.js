import axios from "axios"
import { useEffect, useState } from "react";
import moment from "moment"

const colors = ["#0D6BF5", "#697179", "#188351", "#D53343", "#212529"]
const Comments = () =>{
    const [comments, setComments] = useState([])
    useEffect(async ()=>{
        const {data} = await axios.get("http://localhost:3002/comments")
        setComments(data.sort((a, b)=>b.date-a.date))
    },[])
    return(
        comments?.map((comment)=>{
            return(
                <div className="card text-white mb-3" style={{maxWidth: 600, margin:30, backgroundColor:colors[Math.floor(Math.random()*5)]}}>
                <div className="card-header">{comment?.email}</div>
                    <div className="card-body">
                        <h5 className="card-title">{comment?.name}</h5>
                        <p className="card-text">{comment?.message}</p>
                    </div>
                    <div class="card-footer bg-transparent border-success">{moment(comment?.date).fromNow()}</div>
                </div>
            )
        })
        
    )
}

export default Comments;