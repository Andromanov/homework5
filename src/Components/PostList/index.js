import React, {useContext, useState} from 'react'
import {Post} from "../Post";
import './index.css'
import {AppContext} from "../../Context/AppContext";
import api from "../../utils/api";
import {message} from "antd";

export const PostList = () => {
    const {posts} = useContext(AppContext)
    const [deleted, setDeleted] = useState(false)

    const deletePost = (id) => {
        alert('Вы уверены, что хотите удалить пост?')
        api.deletePostId(id).then(res => {
            if (res.ok) {
                setDeleted(true)
            }
        })
    }

    if (deleted) {
        message.info('Post has been deleted')
    }

    return (
        <div className="postlist">
            {
                posts.map((postInfo, idx) => {
                    return (
                        <Post
                            postInfo={postInfo}
                            deletePost={deletePost}
                            key={idx}
                        />
                    )
                })
            }
        </div>
    )
}