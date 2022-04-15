import React from 'react'
import {EditPost} from "../../Components/EditPost/EditPost";
import {Link} from "react-router-dom";
import {Button} from "antd";

export const EditPostPage = () => {
    return (
        <>
            <Link to="/">
                <Button style={{marginTop: 20}}>Назад</Button>
            </Link>
            <h1>Редактировать пост</h1>
            <EditPost/>
        </>
    )
}