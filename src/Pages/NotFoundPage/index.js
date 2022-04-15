import React from 'react'
import {Button} from "antd";
import './index.css'
import {Link} from "react-router-dom";

export const NotFoundPage = () => {
    return (
        <div className="notfound-wrap">
            <h3>404</h3>
            <h6>Страница не найдена</h6>
            <Link to="/home">
                <Button>Вернуться на главную</Button>
            </Link>
        </div>

    )
}