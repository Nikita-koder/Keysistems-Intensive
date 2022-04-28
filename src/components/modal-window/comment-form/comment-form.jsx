import React, {Component} from "react";

export default class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
        this.onCommentSubmit = this.onCommentSubmit.bind(this);
        this.CommentChangeValue = this.CommentChangeValue.bind(this);
    }


    CommentChangeValue(e){
        this.setState({
            text: e.target.value 
        });
    }
    onCommentSubmit(e){
        e.preventDefault();
        this.props.btnCommentAdd(this.state.text, this.props.postId);
        this.setState({
            text: ''
        });
    }

    render(){
        return(
            <form className="comment-form d-flex"
                onSubmit={this.onCommentSubmit}>
                    <input
                        className="comment-add-form form-control"
                        type="text"
                        placeholder="Write your comment"
                        onChange={this.CommentChangeValue}
                        value={this.state.text}/>
                    <button type="submit" className="btn btn-light">Enter</button>
            </form>
        )
    }
}