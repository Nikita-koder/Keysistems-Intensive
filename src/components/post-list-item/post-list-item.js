import React, {Component} from "react";
import "./post-list-item.css";

export default class PostListItem extends Component{

    constructor(props){
        super(props);
        this.state={
            likes: props.likes
        }
        this.btnLikesClick = this.btnLikesClick.bind(this);
    }

    btnLikesClick(){
        this.setState(state=>({
            likes: ++state.likes
        }))
    }

    

    render(){
        
        const {id, label, btnDeleteClick, handleShow} = this.props;
        //const {likes} = this.state;
        return(
            <div className="app-list-item d-flex justify-content-center align-items-center"
                >
                <span className="app-list-item-lebel"
                    >
                    <img
                        src="#" alt="Фотография поста"
                        onClick={handleShow(id)}/>
                   
                    <p> {label}</p>
                </span>
                <div className="d-block justify-content-center align-items-center">
                    
                    <button
                        className="btn-likes"
                        onClick={this.btnLikesClick}>
                        Likes {this.state.likes}
                    </button>
                    <button
                        className="btn-comments"
                        onClick={handleShow}>
                        Comments
                    </button>
                    <button
                        className="btn-delete"
                        onClick={btnDeleteClick}>
                        Delate post
                    </button>
                </div>
            </div>
        )
    }
}
