import React from "react";
import Comment from "../comment"

const CommentList = (props)=>{
    const data = props.data;
    const elements = data.map((item) => {
        return(
            <li key={item.CommentsId} className="comment-list">
                <Comment
                    {...item}/>
            </li>
        )
    });

    return(
        <ul>
            {elements}
        </ul>
    )
}

export default CommentList;