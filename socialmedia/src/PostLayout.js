import React from "react";
import { Link, Outlet } from "react-router-dom";

const PostLayout = () => {
    return ( 
        <main>
            <h1>Post Layout</h1>
            <Link to="/postpage/1">post 1</Link>
            <br />
            <Link to="/postpage/2">post 2</Link>
            <br />
            <Link to="/postpage/3">post 3</Link>
            <br />
            <Link to="/postpage/newpost">Newpost</Link>
            <Outlet/>
        </main>
     );
}
 
export default PostLayout;