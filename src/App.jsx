import React, {useState, useEffect} from "react";
import {Routes, Route} from 'react-router-dom'
import {Layout, Spin} from "antd";
import {Footer} from "./Components/Footer";
import './index.css'
import {HomePage} from "./Pages/HomePage";
import {PostPage} from "./Pages/PostPage";
import {NotFoundPage} from "./Pages/NotFoundPage";
import {CreatePostPage} from "./Pages/CreatePostPage";
import {EditPostPage} from "./Pages/EditPostPage";
import {AppContext} from "./Context/AppContext";
import api from './utils/api'


export const App = () => {
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState([])
    const [user, setUser] = useState([])

    useEffect(() => {
        setLoading(true);
        Promise.all([api.getUser(), api.getPostAll()]).then(
            ([user, posts]) => {
                setPosts(posts)
                setUser(user);
                setLoading(false);
            }
        );
    }, []);

    if (loading) {
        return <Spin/>
    }

    return (
        <AppContext.Provider value={{
            posts,
            user
        }}>
            <Layout>
                <div className="wrap">
                    <Routes>
                        <Route path='post/:id' element={<PostPage/>}/>
                        <Route path="/" exact element={<HomePage/>}/>
                        <Route path="/create-post" element={<CreatePostPage/>}/>
                        <Route path="/edit-post/:id" element={<EditPostPage/>}/>
                        <Route path="*" element={<NotFoundPage/>}/>
                    </Routes>
                </div>
                <Footer/>
            </Layout>
        </AppContext.Provider>
    )
}