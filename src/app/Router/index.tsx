import { HashRouter, Routes, Route } from "react-router-dom"
import AuthPage from "../../pages/AuthPage"
import ChatPage from "../../pages/ChatPage"
import InfoPage from "../../pages/InfoPage"
import LandingPage from "../../pages/LandingPage"
import { useAppSelector } from "../../state/hooks"
import DefaultPage from "./elements/DefaultPage"


const Router = () => {

    let { user_id } = useAppSelector(state => state.userReducer.user)

    return <HashRouter>
        <Routes>
            <Route path="/landing" element={<LandingPage />} />
            {user_id && <>
                <Route path="/chat" element={<ChatPage />} />
                <Route path="/info" element={<InfoPage />} />
            </>}
            <Route path="/login" element={<AuthPage />} />
            <Route path="*" element={<DefaultPage user_id={user_id} />} />

        </Routes>
    </HashRouter>
}

export default Router