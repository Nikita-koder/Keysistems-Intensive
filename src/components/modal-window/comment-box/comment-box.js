import React, { Component } from "react";
import CommentList from "../comment-list";
import CommentForm from "../comment-form";

export default class CommentBox extends Component{
    render(){
        const {id} = this.props.postId;
        return(
            <div className="comment-box d-flex">
                <CommentList data={this.props.commentData}/>
                <CommentForm postId={id}
                    btnCommentAdd={this.props.btnCommentAdd}/>
            </div>
        )
    }
}