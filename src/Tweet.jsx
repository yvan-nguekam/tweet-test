export function Tweet({id, name, content, like, onDelete, onLike}) {  // soit use les props
    const onLicke = () => {
        console.log("LIKE", name);
    }
    // console.log(props)
    return (
        <div className="tweet">
            <button onClick={() => onDelete(id)} className="delete">🔒</button>
            <h3>{name}</h3>
            <p>{content}</p>
            <button onClick={() => onLike(id)}>{like} 💓</button>
        </div>
    );
}