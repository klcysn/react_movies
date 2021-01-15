import serialize from "form-serialize"
import axios from "axios"
import {useHistory, Link, useParams} from "react-router-dom"
import { useState, useEffect } from "react"


const EditComment = () =>{
    const history = useHistory()
    const [updatedMessage, setUpdatedMessage] = useState({})
    const {id} = useParams()

    const handleFormSubmit = async (e) =>{
        e.preventDefault()
        await axios.put(`http://localhost:3002/comments/${id}`, {...updatedMessage, date: Date.now()})
        history.push("/comments")
    }

    useEffect(async ()=>{
        const {data: {name, surname, email, message}} = await axios.get(`http://localhost:3002/comments/${id}`)
        setUpdatedMessage({name, surname, email, message})
    },[id])

    const change = (e, area) =>{
        if(area === "name"){
            setUpdatedMessage({...updatedMessage, name: e.target.value})
        }else if(area === "surname"){
            setUpdatedMessage({...updatedMessage, surname: e.target.value})
        }else if(area === "email"){
            setUpdatedMessage({...updatedMessage, email: e.target.value})
        }else if(area === "message"){
            setUpdatedMessage({...updatedMessage, message: e.target.value})
        }
    }

    return(
        <>
            <form className="container w-50 mt-5" onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <label for="name" className="form-label" >Your Name</label>
                    <input type="text" className="form-control" onChange={(e)=>change(e, "name")} value={updatedMessage.name} name="name"
                    placeholder="Write your name"/>
                </div>
                <div className="mb-3">
                    <label for="surname" className="form-label" >Your Surname</label>
                    <input type="text" className="form-control" onChange={(e)=>change(e, "surname")} value={updatedMessage.surname}
                    name="surname" placeholder="Write your surname"/>
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label" >Email address</label>
                    <input type="email" className="form-control" onChange={(e)=>change(e, "email")} value={updatedMessage.email}
                    name="email" placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                    <label for="message" className="form-label" >Message</label>
                    <textarea className="form-control" onChange={(e)=>change(e, "message")} value={updatedMessage.message}
                    name="message" rows="3"></textarea>
                </div>
                <div className="d-grid gap-2 w-100">
                    <button className="btn btn-primary w-100" type="submit">Send</button>
                </div>
            </form>
        </>
    )
}

export default EditComment;