import { Card } from "react-bootstrap";

export default function Comments(props){
    const comment = props.comment; 
    return (
        <div className="comments">
            {comment.postContent}
        </div>
    )
}