import LandingPage from "./pages/LandingPage"



const App = () => {
  return <div style={{
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    backgroundColor: '#1E1E1E',
    justifyContent: 'center',
    userSelect: 'none'
  }}>
      <LandingPage />
  </div>
}

export default App