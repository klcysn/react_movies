import serialize from "form-serialize"
import axios from "axios"
import {useHistory, Link} from "react-router-dom"
import { useState } from "react"


const Form = () =>{
    const history = useHistory()
    const [show, setShow] = useState(true)
    const handleFormSubmit = async (e) =>{
        e.preventDefault()
        const message = await serialize(e.target, { hash: true });
        await axios.post("http://localhost:3002/comments", {...message, date: Date.now()})
        history.push("/comments")
    }

    const closeAlert = () =>{
        setShow(false)
    }

    return(
        <>
            {show && <div className="alert alert-warning alert-dismissible fade show w-50 m-auto d-flex justify-content-between pr-0" role="alert">
                <p className="d-inline-block"><strong>To see Comments</strong> sent a comment or <Link to="/comments">click here</Link>.</p>
                <p type="button" className="d-inline-block mr-4" data-bs-dismiss="alert" onClick={closeAlert} aria-label="Close">X</p>
            </div>}
            <form className="container w-50 mt-5" onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <label for="name" className="form-label">Your Name</label>
                    <input type="text" className="form-control" name="name" placeholder="Write your name"/>
                </div>
                <div className="mb-3">
                    <label for="surname" className="form-label">Your Surname</label>
                    <input type="text" className="form-control" name="surname" placeholder="Write your surname"/>
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" name="email" placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                    <label for="message" className="form-label">Message</label>
                    <textarea className="form-control" name="message" rows="3"></textarea>
                </div>
                <div className="d-grid gap-2 w-100">
                    <button className="btn btn-primary w-100" type="submit">Send</button>
                </div>
            </form>
        </>
    )
}

export default Form;