import React from 'react'
import {CreatePost} from "../../Components/CreatePost";
import {Button} from "antd";
import {Link} from "react-router-dom";

export const CreatePostPage = () => {
    return (
        <>
            <Link to="/">
                <Button style={{marginTop: 20}}>Назад</Button>
            </Link>
            <h1>Новый пост</h1>
            <CreatePost/>
        </>
    )
}