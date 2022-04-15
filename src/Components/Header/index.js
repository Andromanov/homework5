import React from "react"
import {Button, PageHeader} from "antd";
import './index.css'
import {Link} from "react-router-dom";

export const Header = () => {
    const routes = [
        {
            path: '1',
            breadcrumbName: 'HomePage',
        },
        {
            path: '2',
            breadcrumbName: 'Posts',
        },
    ];

    return (
        <>
            <PageHeader
                className="site-page-header"
                title="Posts"
                breadcrumb={{routes}}
            />
            <div className="header-button">
                <Link to="/create-post">
                    <Button>Создать пост</Button>
                </Link>
            </div>
        </>
    )
}