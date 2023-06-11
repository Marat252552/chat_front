import ChatPage from "./pages/ChatPage"
import LandingPage from "./pages/LandingPage"
import {HashRouter, Routes, Route, Navigate} from 'react-router-dom'
import styles from './App.module.css'


const App = () => {
  return <div className={styles.container}>
    <HashRouter>
      <Routes>
        <Route path="/landing" element={<LandingPage />}/>
        <Route path="/chat" element={<ChatPage />} />
        <Route path="*" element={<Navigate to='/landing'/>}/>
      </Routes>
    </HashRouter>
    
  </div>
}

export default App