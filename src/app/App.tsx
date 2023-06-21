import styles from './App.module.css'
import { setupStore } from "../state/store"
import { Provider } from "react-redux"
import { SocketProvider } from "../shared/SocketProvider"
import Router from './Controllers/Router'
import LoggedChecker from './Controllers/LoggedChecker'

let store = setupStore()

const App = () => {

  return <div className={styles.container}>

    <Provider store={store}>
      <SocketProvider>
        <LoggedChecker>
          <Router />
        </LoggedChecker>
      </SocketProvider>
    </Provider>

  </div>
}

export default App