import React, {Component} from "react";
import { Modal, Button } from "react-bootstrap";
import CommentBox from "./comment-box";

export default class ModalWindow extends Component {
    
    render(){
        const {post, show, handleClose, btnLikesClick, commentsData} = this.props;
        const {label, likes} = {...post}
        //console.log(post.id);
        return (
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img className="d-flex" src="#" alt="Фотография поста"/>
                        {label}</Modal.Body>
                    <Modal.Body>
                        <Button variant="secondary" onClick={btnLikesClick}>
                            Likes {likes}
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                        
                    </Modal.Body>
                    <Modal.Footer>
                        <CommentBox commentData = {commentsData}
                            postId={post}
                            btnCommentAdd={this.props.btnCommentAdd}/>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}
