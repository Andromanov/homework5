import React, {useContext, useState, useEffect} from 'react'
import {useLocation} from "react-router-dom";
import {Button, Form, Input, Spin} from "antd";
import {AppContext} from "../../Context/AppContext";

export const EditPost = () => {

    const { posts } = useContext(AppContext)
    const url = useLocation().pathname.split("/").pop()
    const [post, setPost] = useState([])
    const [loading, setLoading] = useState(false)

    const findPost = () => posts.find(i => i._id === url)

    useEffect(() => {
        setLoading(true)
        Promise.all([findPost()])
            .then(res => {
                setPost(res)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <Spin style={{marginTop: 30}}/>
    }

    return (
        <Form
            name="editPost"
            labelCol={{span: 4}}
            wrapperCol={{span: 16}}
            autoComplete="off"
        >
            <Form.Item
                label="Заголовок"
                name="title"
                initialValue={postState.data.title}
                rules={[{required: true, message: 'Please input post title!'}]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="Text"
                name="text"
                initialValue={postState.data.text}
                rules={[{required: true, message: 'Please input your post Text!'}]}
            >
                <Input.TextArea/>
            </Form.Item>

            <Form.Item
                label="Тэги"
                name="tags"
                initialValue={postState.data.tags}
            >
                <Input/>
            </Form.Item>


            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type="primary" htmlType="submit">
                    Сохранить
                </Button>
            </Form.Item>
        </Form>
    )
}