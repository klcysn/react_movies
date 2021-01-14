

const Form = () =>{
    return(
        <form method="POST" className="container w-50 mt-5">
            <div className="mb-3">
                <label for="name" className="form-label">Your Name</label>
                <input type="text" className="form-control" name="name" placeholder="Write your name"/>
            </div>
            <div className="mb-3">
                <label for="surname" className="form-label">Your Surname</label>
                <input type="text" className="form-control" name="surname" placeholder="Write your surname"/>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" name="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control" name="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="d-grid gap-2 w-100">
                <button className="btn btn-primary w-100" type="submit">Send</button>
            </div>
        </form>
    )
}

export default Form;