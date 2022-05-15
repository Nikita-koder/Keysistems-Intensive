import React, { Component } from "react";
import axios from "axios";
/*eslist-disable*/
export default class PostAddForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.ChangeValue = this.ChangeValue.bind(this);
    }


    ChangeValue(event){
        this.setState({
            text: event.target.value 
        });
    }
    onSubmit(event){
        event.preventDefault();

        const postItem = {
            label: this.state.text,
            imgSrc: null,
            likes: 0,
            commentsCounter: 0
        }
        axios.post("http://localhost:3001/post", postItem)
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    }


    render(){
        return(
            <form 
                className="post-add d-flex justify-content-between"
                onSubmit={this.onSubmit}>
                <input
                className="post-add-form form-control"
                type="text"
                placeholder="What's the news?"
                onChange={this.ChangeValue}
                value={this.state.text}/>
                <input
                    className="file-input"
                    type="file"
                        
                />
                <button
                    className="btn-add-news"
                    type="submit">
                        Добавить
                </button>
            </form>
        )
    }
}

