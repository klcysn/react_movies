import serialize from "form-serialize"
import axios from "axios"


const Form = () =>{
    const handleFormSubmit = async (e) =>{
        e.preventDefault()
        const message = await serialize(e.target, { hash: true });
        await axios.post("http://localhost:3002/comments", {...message, date: Date.now()})
    }

    return(
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
    )
}

export default Form;