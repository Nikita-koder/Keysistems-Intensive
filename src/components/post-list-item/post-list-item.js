import React, {Component} from "react";
import "./post-list-item.css";

export default class PostListItem extends Component{

    constructor(props){
        super(props);
        this.state={
            likes: props.likes
        }
        //this.btnLikesClick = this.btnLikesClick.bind(this);
    }

    /*btnLikesClick(){
        this.setState(state=>({
            likes: ++state.likes
        }))
    }*/

    

    render(){
        
        const {label, imgSrc, btnDeleteClick, btnLikesClick, handleShow} = this.props;
        //const {likes} = this.state;
        return(
            <div className="app-list-item d-flex flex-column justify-content-center align-items-center"
                >
                <div className="d-flex app-list-item-lebel"
                    >
                    <img
                        className="post-list-img d-block"
                        src={imgSrc} alt="Фотография поста"
                        onClick={handleShow}/>
                   
                    <p className="post-list-par d-block text-center"> {label}</p>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    
                    <button
                        className="btn-likes"
                        onClick={btnLikesClick}>
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
