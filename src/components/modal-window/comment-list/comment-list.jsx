import React from "react";
import Comment from "../comment"

import "./comment-list.css"

const CommentList = (props) => {
    const data = props.data;
    console.log(data, props.id);
    const elements = data.map((item) => {
        if(item.postId === props.id){
        return(
            <li key={item.CommentsId} className="comment-list">
                <Comment
                    {...item}/>
            </li>
        )}
    });

    return(
        <ul>
            {elements}
        </ul>
    )
}

export default CommentList;