import React, {Component} from "react";
import "./app.css"
import AppHeader from "../app-header";
import SearcPanel from "../searc-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";


export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data :[
                {label: "Hello World!", likes: 0, id:'qwer'},
                {label: "Today is good day!!", likes: 0, id:'qwet'},
                {label: "I'am fine", likes: 0, id:'qwey'}]
        };
        
        this.newId = 'Id';
        this.newIdIter = 0;
        this.btnDeleteClick = this.btnDeleteClick.bind(this);
        this.btnAddClick = this.btnAddClick.bind(this);

        
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

    render(){
        return(
            <div className="searc-panel">
                <AppHeader/>
                <SearcPanel/>
                <PostStatusFilter/>
                <PostList props={this.state.data}
                btnDeleteClick={this.btnDeleteClick}/>
                <PostAddForm
                props={this.state.data}
                btnAddClick={this.btnAddClick}/>
            </div>
            
        );
    }   
}