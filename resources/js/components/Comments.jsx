import { Card } from "react-bootstrap";

export default function Comments(props){
    const comment = props.postContent; 
    return (
        <div className="comments">
            {comment}
            <div>
                {"Tema de discusion: "+comment.topic_id}
            </div>
        </div>
    )
}