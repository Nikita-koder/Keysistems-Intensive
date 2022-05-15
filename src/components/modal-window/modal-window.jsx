import React, {Component} from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import CommentBox from "./comment-box";

import "../modal-window/modal-window.css"

export default class ModalWindow extends Component {
    constructor(props){
        super(props);
        this.state = {
            commentsData: []
        }
    }

    

      componentDidMount() {
        axios.get("http://localhost:3001/comment/")
          .then(res => {
            //console.log(res)
            const comments = res.data;
            this.setState({
                commentsData: comments 
            });
          })
      }
      

    render(){
        const {post, show, handleClose, btnLikesClick} = this.props;
        const {label, imgSrc, postId, likes} = {...post}
        //console.log(post);
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
                        <CommentBox commentData = {this.state.commentsData}
                            postId={post}
                            id = {postId}/>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}
