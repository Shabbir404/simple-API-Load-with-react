function Singlepost({ post }) {
    const { title, id, body } = post;
    return (
        <div className="api-style">
            <h5>Title: {title}</h5>
            <p>userId: {id}</p>
            <p>body: {body}</p>
        </div>
    )
}



export default Singlepost