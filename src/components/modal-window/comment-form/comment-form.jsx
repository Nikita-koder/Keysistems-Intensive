import React, {Component} from "react";

export default class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.ChangeValue = this.ChangeValue.bind(this);
    }


    ChangeValue(e){
        this.setState({
            text: e.target.value 
        });
    }
    onSubmit(e){
        e.preventDefault();
        this.props.btnCommentAdd(this.state.text, this.props.postId);
        this.setState({
            text: ''
        });
    }

    render(){
        return(
            <form className="comment-form d-flex"
                onSubmit={this.onSubmit}>
                    <input
                        className="comment-add-form form-control"
                        type="text"
                        placeholder="Write your comment"
                        onChange={this.ChangeValue}
                        value={this.state.text}/>
                    <button type="submit" className="btn btn-light">Enter</button>
            </form>
        )
    }
}