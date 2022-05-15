import React, {Component} from "react";
import axios from "axios";
import "./post-list-item.css";

export default class PostListItem extends Component{
    constructor(props){
        super(props);
        this.state={
            likes: props.likes,
            buttonLikeOnClick: 'btn-likes'
        }
    }

    btnDeleteClick =(postId)=>{
        //console.log(postId)
        axios.delete(`http://localhost:3001/post/${this.props.postId}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
        })
    }
    
    btnLikesClick=()=>{
        console.log(this.props.likes);
        if(this.props.likes === 1){
            this.setState(()=>{
                return{
                    likes: 0,
                    buttonLikeOnClick: 'btn-likes'
            }   
        })    
    }
        else{
            this.setState(()=>{
                return{
                    likes: 1,
                    buttonLikeOnClick: 'btn-likes-true' 
                }
        })
            
    }
        axios.put(`http://localhost:3001/post/${this.props.postId}`, this.state.likes)
            .then(res => {
                console.log(res);
                console.log(res.data);
        })
        
    }


    render(){
        //console.log(this.props)
        const {label, imgSrc, handleShow} = this.props;
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
                   
                    <p className="post-list-par text-center"> {label}</p>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    
                    <button
                        className={this.state.buttonLikeOnClick}
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
                        onClick={this.btnDeleteClick}>
                        Delate post
                    </button>
                </div>
            </div>
        )
    }
}
