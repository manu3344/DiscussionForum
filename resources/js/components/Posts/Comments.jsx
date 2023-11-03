import { Button } from "react-bootstrap";
import { BsPencilSquare, BsTrashFill } from "react-icons/bs";

export default function Comments(props) {
    const postContent = props.postContent;
    const topicName = props.topicName;

    // Esto es para actualizar el comentario, que salga el contenido en el TextArea
    const updateTextArea = props.updateTextArea;

    //Esto para que se borre solamente en el frontend
    const onDeleteComment = props.onDeleteComment;
    const commentId = props.commentId;

    const handleDeleteClick = () => {
        // Llama a la función de eliminación con el ID del comentario
        onDeleteComment(commentId);
    };

    return (
        <div>
            <div className="comments row mb-auto">
                <div className="col-10 mb-auto">
                    {postContent}
                    <div>{"Tema de discusion: " + topicName}</div>
                </div>
                <div className="col-2 mb-auto">
                    <div className="row mb-auto" style={{ padding: "10px" }}>
                        <Button
                            variant="warning"
                            onClick={() =>
                                (window.location.href = `postsForm/${commentId}`)
                            }
                        >
                            <BsPencilSquare />
                        </Button>
                    </div>
                    <div className="row mb-auto" style={{ padding: "10px" }}>
                        <Button variant="danger" onClick={handleDeleteClick}>
                            <BsTrashFill />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
