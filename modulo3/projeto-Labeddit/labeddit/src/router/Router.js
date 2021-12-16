import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from '../pages/LoginPage.js/LoginPage'
import RegisterPage from '../pages/RegisterPage/RegisterPage'
import PostListPage from '../pages/PostListPage/PostListPage'
import PostDetailPage from '../pages/PostDetailPage/PostDetailPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PostListPage />} />
                    <Route path="/LoginPage" element={<LoginPage />} />
                    <Route path="/RegisterPage" element={<RegisterPage />} />
                    <Route path="/PostDetailPage" element={<PostDetailPage />} />
                    <Route element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default Router;