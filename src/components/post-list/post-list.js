import React from "react";

import PostListItem from "../post-list-item";

const PostList = ({props, btnDeleteClick}) =>{

    const elements = props.map((item) => {
        return(
            <li key={item.id} className="list-group-item">
                    <PostListItem
                    {...item}
                    btnDeleteClick = {()=>btnDeleteClick(item.id)}/>
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