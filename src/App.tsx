import ChatPage from "./pages/ChatPage"
import LandingPage from "./pages/LandingPage"
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import styles from './App.module.css'
import { setupStore } from "./state/store"
import { Provider } from "react-redux"

let store = setupStore()

const App = () => {
  return <div className={styles.container}>
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="*" element={<Navigate to='/landing' />} />
        </Routes>
      </HashRouter>
    </Provider>
  </div>
}

export default App