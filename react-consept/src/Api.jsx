import { useEffect, useState } from "react"
import Singlepost from "./Singlepost";

function Api() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => setPosts(data))

    }, []);

    return (
        <>
            <h3>Posts : {posts.length} </h3>
            {
                posts.map(post => <Singlepost post={post} />)
            }

        </>
    )
}

export default Api