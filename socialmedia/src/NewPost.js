

const NewPost = ({ handleSubmit, postTitle, setPostTitle, postBody, setPostBody }) => {
    return (
        <main className="newpost">
            <h2>New Post</h2>
            <form action="" className="newpostform" onSubmit={handleSubmit}>
                <label htmlFor="postTitle">Title:</label>
                <input id="postTitle"
                    type="text"
                    required
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)} />
                <label htmlFor="postBody">post:</label>
                <textarea id="postBody"
                required
                value={postBody}
                onChange={(e)=>setPostBody(e.target.value)}></textarea>
                <button type="submit">submit</button>
            </form>
        </main>
    );
}

export default NewPost;