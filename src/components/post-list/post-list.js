<<<<<<< HEAD
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

=======
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

>>>>>>> 0e3b04a4cd6a4067981b053c261c5615f56fa5c9
export default PostList;