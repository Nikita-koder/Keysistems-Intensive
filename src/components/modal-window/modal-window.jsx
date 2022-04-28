import React, {Component} from "react";
import { Modal, Button } from "react-bootstrap";
import CommentBox from "./comment-box";

import "../modal-window/modal-window.css"

export default class ModalWindow extends Component {
    
    render(){
        const {post, show, handleClose, btnCommentAdd, btnLikesClick, commentsData} = this.props;
        const {label, imgSrc, id, likes} = {...post}
        //console.log(post.id);
        return (
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img className="modal-post-img d-flex" src={imgSrc} alt="Фотография поста"/>
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
                            btnCommentAdd={btnCommentAdd}
                            postId={post}
                            id = {id}/>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}
