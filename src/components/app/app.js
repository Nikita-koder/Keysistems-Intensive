import React, {Component} from "react";
import "./app.css"
import AppHeader from "../app-header";
import SearcPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";
import ModalWindow from "../modal-window";

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data :[],
            commentsData :[],
            show: false,
            selectPostId: null
        };
        
        this.newId = 'Id';
        this.newIdIter = 0;
        this.commentId = 3;
        /*this.btnDeleteClick = this.btnDeleteClick.bind(this);
        this.btnLikesClick = this.btnLikesClick.bind(this);
        this.btnAddClick = this.btnAddClick.bind(this);
        this.btnCommentAdd = this.btnCommentAdd.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        //this.modalPost = null;*/
    }
    
    componentDidMount = () =>{
        fetch("http://localhost:3001/post")
          .then(res => res.json())
          .then(
            (result) => {
                //console.log(result)
                this.setState({
                    data: result
                });
            },
            // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
            // чтобы не перехватывать исключения из ошибок в самих компонентах.
            (error) => {
              console.log(error)
            }
          )
      }
      
    btnLikesClick=()=>{
        this.setState(state=>({
            likes: ++state.likes
        }))
    }
  
    handleClose =()=> {
        this.setState(()=>{
            return{
                show: false,
                selectPostId: null
            }
        });
    }

    handleShow =(postId)=>{
        //console.log(postId);
        this.setState(()=>{
            return{
                show: true,
                selectPostId: postId}
        });
        
    }
    

   /* btnDeleteClick=(id)=>{
        this.setState(({data})=>{
            const index = data.findIndex(elem => elem.id === id);
            const befor = data.slice(0, index);
            const after = data.slice(index + 1);
            const newData = [...befor, ...after];

            return{
                data: newData
            } 
        });
    }*/

    /*btnCommentAdd=(text, postId)=>{
        let idForClick = this.commentId;

        console.log(idForClick)
        const newItem = {
            CommentsId: idForClick,
            postId: postId,
            text: text
        };
        this.commentId++;
        //console.log(text, postId);
        this.setState(({commentsData}) =>{
            const newData = [...commentsData, newItem];
            return{
                commentsData: newData
            }
        });
    }*/
    
    render(){
        this.modalPost = this.state.data.find(post => post.postId === this.state.selectPostId);
        
        return(
            <div className="searc-panel">
                
                <AppHeader/>
                <SearcPanel/>
                <PostStatusFilter/>
                <PostList
                    props={this.state.data}
                    /*btnDeleteClick={this.btnDeleteClick}*/
                    handleShow={this.handleShow}
                    />
                
                <PostAddForm
                    btnAddClick = {this.btnAddClick}/>
                <ModalWindow
                    post={this.modalPost}
                    show={this.state.show}
                    handleClose={this.handleClose}
                    btnCommentAdd={this.btnCommentAdd}
                    btnLikesClick={this.btnLikesClick}
                    /*commentsData={this.state.commentsData}*/
                    >
                    
                </ModalWindow>
            </div>
            
        );
    }   
}