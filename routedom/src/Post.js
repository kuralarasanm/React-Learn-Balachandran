import React from "react";
import { useParams } from "react-router-dom";

const Post = () => {
    const {id}=useParams()
    return ( 
        <main>
            <h1>post {id}</h1>
        </main>
     );
}
 
export default Post;