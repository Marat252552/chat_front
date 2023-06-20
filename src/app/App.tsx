import styles from './App.module.css'
import { setupStore } from "../state/store"
import { Provider } from "react-redux"
import { SocketProvider } from "../shared/SocketProvider"
import Router from "./Router"

let store = setupStore()

const App = () => {

  return <div className={styles.container}>

    <Provider store={store}>
      <SocketProvider>
        <Router />
      </SocketProvider>
    </Provider>

  </div>
}

export default App