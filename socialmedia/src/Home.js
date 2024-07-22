import React from "react";
import Feed from "./Feed";

const Home = ({ posts,fetchError,isLoading }) => {
    return (
        // <main className="home">
        //     {posts.length ? (<Feed posts={posts} />)
        //         : (<p style={{ marginTop: "2rem" }}>
        //             no posts to display</p>)}
        // </main>

        // this is hook fetch
        <main className="home">
            {isLoading && <p className="statusmsg">Loading posts...</p>}
            {!isLoading && fetchError && <p className="statusmsg" style={{ color: "red" }}>{fetchError}</p>}
            {!isLoading && !fetchError && (posts.length ? <Feed posts={posts} /> : <p className="statusmsg">No posts to display.</p>)}
        </main>
    );
}

export default Home;