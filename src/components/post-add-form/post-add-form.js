import React, { Component } from "react";

export default class PostAddForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            text: ''
        }

        this.ChangeValue = this.ChangeValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    ChangeValue(e){
        this.setState({
            text: e.target.value
            
        });
    }
    onSub(e){
        e.preventDefault;
        this.props.btnAddClick(this.state.text);
        this.setState({
            text: ''
        });
    }

    render(){
        return(
            <form 
                className="post-add d-flex justify-content-between"
                onSubmit={this.onSub}>
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

