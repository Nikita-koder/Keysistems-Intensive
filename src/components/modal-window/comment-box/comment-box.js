import React, { Component } from "react";
import CommentList from "../comment-list";
import CommentForm from "../comment-form";

import "./comment-box.css"

export default class CommentBox extends Component {
    
    render() {
        //console.log(this.props.postId);
        if (!this.props || !this.props.postId) return null

        const {btnCommentAdd, commentData, id} = this.props;
        return (
            <div className="comment-box">
                <div className="comment-box-comments"><CommentList data={commentData} id={id}/></div>
                <div className="comment-box-form"><CommentForm postId ={this.props.postId}
                    btnCommentAdd={btnCommentAdd}/></div>
            </div>
        )
    }
}