import {useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Counter from "./Counter.jsx";
import { dataContext } from './Home.jsx';
function Login(){

    const [pwd1, setPwd1] = useState("");
    const [pwd2, setPwd2] = useState("");
    const [same, setSame] = useState(true);

    function handlePwd1Change(event) {
        setPwd1(event.target.value);
    }
    function handlePwd2Change(event) {
        setPwd2(event.target.value);

          if (pwd1 == event.target.value) {
            console.log("same");
            setSame(true);
        } else {
            console.log("Not same");
            setSame(false);
        }
    }
   const data = useContext(dataContext); 

    return (
        <>
        <h2>{data}</h2>
        <Counter/>
        <Link to="/">Go Home</Link>
    <form className="container mt-5" style={{maxWidth: "500px"}}>
        <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" />
            
        </div>
        <div className="mb-3">
            <label  className="form-label">Password</label>
            <input value={pwd1} onChange={handlePwd1Change} type="password" className="form-control" />
        </div>
        <div className="mb-3">
            <label  className="form-label">Confirm Password</label>
            <input value={pwd2} onChange={handlePwd2Change} type="password" className="form-control" />
        </div>
        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label">I Agree</label>
        </div>
        {!same &&<p> password is not matched</p>}
            <button type="submit" className="btn btn-primary">Create Account</button>
    </form>
</>
    )
}

export default Login;