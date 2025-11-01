import { useParams } from "react-router-dom";
import { useState } from "react";
function Post(){

    const {id} = useParams();
    const [post, setPost] = useState(null);

    fetch("http://localhost:3000/posts/"+id)
            .then((res) => {
                return res.json();
            })
            .then((data) =>{
                setPost(data);
            }).catch((err) => {
                console.log(err.message);
            });

    return(
        <div>
            
           {post && <div className="container m-5">
                Post: {id}
            <h2>{post.title}</h2>
            <h4>{post.description}</h4>
            </div>}
        </div>
    );
}
export default Post;