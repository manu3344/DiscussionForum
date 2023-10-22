import {Button } from "react-bootstrap";
import {BsPencilSquare, BsTrashFill} from "react-icons/bs"

export default function Comments(props) {
    const postContent = props.postContent;
    const topic_id = props.topic_id;
    return (
        <div>
            <div className="comments row mb-auto">
                <div className="col-10 mb-auto">
                {postContent}
                <div>{"Tema de discusion: " + topic_id}</div>
                </div>
                <div className="col-2 mb-auto">
                    <div className="row mb-auto" style={{padding:"10px"}}>
                    <Button variant="warning"><BsPencilSquare /></Button>
                    </div>
                    <div className="row mb-auto" style={{padding:"10px"}}>
                    <Button variant="danger"><BsTrashFill /></Button>
                    </div>
                </div>
               
            </div>
        </div>
    );
}
