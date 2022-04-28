import React, {Component} from "react";
import "./app.css"
import AppHeader from "../app-header";
import SearcPanel from "../searc-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";
import ModalWindow from "../modal-window";
import PostListItem from "../post-list-item";

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data :[
                {label: "Hello World!", likes: 0, id:'qwer'},
                {label: "Today is good day!!", likes: 0,  id:'qwet'},
                {label: "I'am fine", likes: 0,  id:'qwey'}],

            commentsData :[
                {CommentsId: 1, postId: 'qwer', text: 'Hello!'},
                {CommentsId: 2, postId: 'qwer', text: 'Hello!'}
            ],
            show: false,
            selectPostId: null,
            commentId : 0
        };
        
        this.newId = 'Id';
        this.newIdIter = 0;
        
        this.btnDeleteClick = this.btnDeleteClick.bind(this);
        this.btnLikesClick = this.btnLikesClick.bind(this);
        this.btnAddClick = this.btnAddClick.bind(this);

        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        //this.modalPost = null;
    }

    btnLikesClick(){
        this.setState(state=>({
            likes: ++state.likes
        }))
    }
  
    handleClose () {
        this.setState(()=>{
            return{
                show: false,
                selectPostId: null
            }
        });
    }
    handleShow (postId){
        
        this.setState(()=>{
            return{
                show: true,
                selectPostId: postId}
        });
        
    }
    

    btnDeleteClick(id){
        this.setState(({data})=>{
            const index = data.findIndex(elem => elem.id === id);
            const befor = data.slice(0, index);
            const after = data.slice(index + 1);
            const newData = [...befor, ...after];

            return{
                data: newData
            } 
        });
    }

    btnAddClick(text){
        let idForClick = this.newId + this.newIdIter;
        const newItem = {
            label: text,
            likes: 0,
            id: idForClick
        }
        this.newIdIter++
        this.setState(({data}) =>{
            const newData = [...data, newItem];
            return{
                data: newData
            }
        })
    }

    btnCommentAdd(text, postId){
        console.log(text, postId, this.state.commentId);
        
        let myId = ++myId;
        
        const newItem = {
            CommentsId: myId,
            postId: postId,
            text: text
        };
        console.log(newItem);
        console.log(myId, newItem)

        
        this.setState(({commentsData}) =>{
            const newData = [...commentsData, newItem];
            return{
                commentsData: newData
            }
        });
    }
    render(){
        this.modalPost = this.state.data.find(post => post.id === this.state.selectPostId);
        
        return(
            <div className="searc-panel">
                <AppHeader/>
                <SearcPanel/>
                <PostStatusFilter/>
                <PostList
                    props={this.state.data}
                    btnDeleteClick={this.btnDeleteClick}
                    handleShow={this.handleShow}
                    />
                <PostListItem
                    props={this.state.data}
                    btnLikesClick={this.btnLikesClick}/>
                <PostAddForm
                    btnAddClick = {this.btnAddClick}/>
                <ModalWindow
                    post={this.modalPost}
                    show={this.state.show}
                    handleClose={this.handleClose}
                    btnLikesClick={this.btnLikesClick}
                    btnCommentAdd={this.btnCommentAdd}
                    commentsData={this.state.commentsData}>
                    
                </ModalWindow>
            </div>
            
        );
    }   
}