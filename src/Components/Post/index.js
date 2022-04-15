import React, {useState, useEffect, useContext} from 'react'
import {Avatar, Button, Card, Image, Tag, Timeline, Typography} from "antd";
import './index.css'
import {Like} from "../Like";
import {Link} from "react-router-dom";
import api from "../../utils/api";
import {AppContext} from "../../Context/AppContext";

const {Text} = Typography

export const Post = ({postInfo, deletePost}) => {
    const { user } = useContext(AppContext)
    const [isLiked, setIsLiked] = useState('')
    const [myPost, setMyPost] = useState(false)
    const [likeList, setLikeList] = useState(postInfo.likes)

    const likeCheck = () => {
        if (postInfo.likes.indexOf(user._id, 0) !== -1) {
            setIsLiked(true)
        } else {
            setIsLiked(false)
        }
    }

    const checkMyPost = () => {
        if (postInfo._id === postInfo.author._id) {
            setMyPost(true)
        }
    }

    useEffect(() => {
        Promise.all([likeCheck(), checkMyPost()])
    }, [])

    const likeHandler = (method) => {
        api.setLike(postInfo._id, method)
            .then(obj => {
                setLikeList(obj.likes)
                if (method === "DELETE") setIsLiked(false)
                if (method === "PUT") setIsLiked(true)
            })
    }

    if (postInfo.author === undefined || postInfo === undefined) {
        return (
            <Card>
                <div>Автор не найден</div>
            </Card>
        )
    }


    return (
        <Card title={<Link to={`/post/${postInfo._id}`}>{postInfo.title}</Link>} style={{width: 300}}>
            <div className="card__avatar-box">
                <Avatar src={<Image src={postInfo.author.avatar}/>} className="card__avatar"/>
                <Text strong>{postInfo.author.email || "e-mail"}</Text>
            </div>
            <p>{postInfo.text}</p>
            <div className="card__tag-box">
                <span>Tags:</span>
                {postInfo.tags.map((tag, idx) => <Tag key={idx}>{tag}</Tag>)}
            </div>
            <Timeline>
                <Timeline.Item>{postInfo.created_at}</Timeline.Item>
                <Timeline.Item color="green">Last edit: {postInfo.updated_at}</Timeline.Item>
            </Timeline>
            <div style={{"display": "flex", "justifyContent": "space-between"}}>
                <Like
                    isLiked={isLiked}
                    likeHandler={likeHandler}
                    likeList={likeList}
                    key={postInfo._id}
                />
                <div style={{display: "flex"}}>
                    {
                        myPost ? <Button danger onClick={() => deletePost(postInfo._id)}>Удалить</Button> : null
                    }
                    <Link to={`/edit-post/${postInfo._id}`}>
                        <Button type="link">Редактировать</Button>
                    </Link>
                </div>
            </div>
        </Card>
    )
}