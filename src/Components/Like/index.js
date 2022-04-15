import React from 'react'
import {HeartTwoTone} from "@ant-design/icons";
import './index.css'
import Text from "antd/lib/typography/Text";

export const Like = ({likeList, likeHandler, isLiked}) => {
    if (isLiked) {
        return (
            <div className="like">
                <HeartTwoTone className="like__heart" twoToneColor="#eb2f96" onClick={() => likeHandler("DELETE")}/>
                <Text>{likeList.length}</Text>
            </div>
        )
    } else if (!isLiked) {
        return (
            <div className="like">
                <HeartTwoTone className="like__heart" onClick={() => likeHandler("PUT")}/>
                <Text>{likeList.length}</Text>
            </div>
        )
    }
}