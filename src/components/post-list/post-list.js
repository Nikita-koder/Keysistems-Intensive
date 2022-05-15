import React from "react";

import PostListItem from "../post-list-item";

const PostList = ({props, btnDeleteClick, handleShow}) =>{

    const elements = props.map((item) => {
        console.log(item.postId)
        return(
            <li key={item.postId} className="list-group-item">
                <PostListItem
                {...item}
                btnDeleteClick = {()=>btnDeleteClick(item.postId)}
                handleShow = {()=>handleShow(item.postId)}/>
            </li>
        )
    });

    return(
        <ul className="app-list list-group">
                {elements}
        </ul>
    )
}

export default PostList;