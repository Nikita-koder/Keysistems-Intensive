import React, {Component} from "react";
import axios from "axios";

export default class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
        this.onCommentSubmit = this.onCommentSubmit.bind(this);
        this.CommentChangeValue = this.CommentChangeValue.bind(this);
    }


    CommentChangeValue(event){
        this.setState({
            text: event.target.value 
        });
    }
    onCommentSubmit(event){
        event.preventDefault();
        const commentItem = {
            postId: this.props.postId.postId,
            text: this.state.text
        }

        axios.post("http://localhost:3001/comment/", commentItem)
        .then(res => {
            console.log(res);
            console.log(res.data);
          })
          
        this.setState({
            text: ''
        });
    }

    render(){
        //console.log(this.props.postId.postId)
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