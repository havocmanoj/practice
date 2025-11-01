import {useState, useEffect, createContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login.jsx";


export const dataContext = createContext();

function HomePage(){

    const data= "newData";
    const navigate = useNavigate();
 
     const [posts, setPosts] = useState(null);
        useEffect(() => {
            const controller = new AbortController();
            const signal = controller.signal;

            fetch("http://localhost:3000/posts", {signal})
            .then((res) => {
                return res.json();
            })
            .then((data) =>{
                setPosts(data);
            }).catch((err) => {
                console.log(err.message);
            });
            return () => {
                console.log("unmounted");
                controller.abort();
            }
        },[]);

return (
  <> 
  <div className="container">
     {/* <Link className="btn btn-primary mt-3" to="/login">Login</Link>

     <dataContext.Provider value={data}>
         <Login/>
     </dataContext.Provider> */}

    <div className="row justify-content-center m-3">
        {posts && posts.map(post=>{
          return(
            <div key={post.id} className="card m-3" style={{width:"18rem"}} onClick={()=>{navigate('/post/'+post.id)}}>
                <div className="cart-body">
                    <h5 className="cart-title">{post.title}</h5>
                    <p className="cart-text">{post.description}</p>
                </div>
            </div>)
        })}
     </div>
  </div>
  
  </> );
}

export default HomePage;
//npx json-server --watch data/db.json --port 3000 --static ./data