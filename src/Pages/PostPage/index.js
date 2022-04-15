import React, {useState, useEffect} from 'react'
import {Avatar, Button, Image, message, Spin, Tag, Timeline, Typography} from "antd";
import {Link, useLocation} from "react-router-dom";
import dayjs from "dayjs";
import api from "../../utils/api";

const {Text} = Typography

export const PostPage = () => {

    const url = useLocation().pathname.split("/").pop()
    const [loading, setLoading] = useState(true)
    const [postData, setPostData] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)
        Promise.all([api.getPostOfId(url)])
            .then(post => {
                setPostData(...post)
                setLoading(false)
            })
            .catch(e => {
                setError(true)
            })
    }, [])

    if (loading) {
        return <Spin style={{marginTop: 30}}/>
    } else if (error) {
        message.info('Произошла ошибка');
    }

    return (
        <div style={{marginTop: 20}}>
            <Link to="/">
                <Button style={{marginBottom: 20}}>Назад</Button>
            </Link>
            <h2>{postData.title}</h2>
            <div className="card__avatar-box">
                <Avatar src={<Image src={postData.author.avatar}/>} className="card__avatar"/>
                <Text strong>{postData.author.email}</Text>
            </div>
            <p>{postData.text}</p>
            <div className="card__tag-box">
                <span>Tags:</span>
                {postData.tags.map((tag, idx) => <Tag key={idx}>{tag}</Tag>)}
            </div>
            <Timeline>
                <Timeline.Item>{dayjs(postData.created_at).format('DD.MM.YYYY HH:MM')}</Timeline.Item>
                <Timeline.Item color="green">Last
                    edit: {dayjs(postData.updated_at).format('DD.MM.YYYY HH:MM')}</Timeline.Item>
            </Timeline>

        </div>
    )
}