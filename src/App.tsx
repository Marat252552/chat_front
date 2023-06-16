import ChatPage from "./pages/ChatPage"
import LandingPage from "./pages/LandingPage"
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import styles from './App.module.css'
import { setupStore } from "./state/store"
import { Provider } from "react-redux"
import { SocketProvider } from "./shared/SocketProvider"
import InfoPage from "./pages/InfoPage"

let store = setupStore()

const App = () => {
  return <div className={styles.container}>

    <Provider store={store}>
      <SocketProvider>
        <HashRouter>
          <Routes>
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/info" element={<InfoPage />} />
            <Route path="*" element={<Navigate to='/landing' />} />
          </Routes>
        </HashRouter>
      </SocketProvider>
    </Provider>
  </div>
}

export default App