import ChatPage from "./pages/ChatPage"
import LandingPage from "./pages/LandingPage"
import {HashRouter, Routes, Route, Navigate} from 'react-router-dom'


const App = () => {
  return <div style={{
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    backgroundColor: '#1E1E1E',
    justifyContent: 'center',
    userSelect: 'none'
  }}>
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