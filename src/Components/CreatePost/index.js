import React from 'react'
import {Button, Form, Input} from "antd";

export const CreatePost = () => {
    return (
        <Form
            name="createPost"
            labelCol={{span: 4}}
            wrapperCol={{span: 16}}
            autoComplete="off"
        >
            <Form.Item
                label="Заголовок"
                name="title"
                rules={[{required: true, message: 'Please input post title!'}]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="Text"
                name="text"
                rules={[{required: true, message: 'Please input your post Text!'}]}
            >
                <Input.TextArea/>
            </Form.Item>

            <Form.Item
                label="Тэги"
                name="tags"
            >
                <Input/>
            </Form.Item>


            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type="primary" htmlType="submit">
                    Создать пост
                </Button>
            </Form.Item>
        </Form>
    )
}