import './App.css'
import Header from './components/Header/Header'
import MainView from './components/MainView/MainView'
import SideBar from './components/SideBar/SideBar'

function App() {


  return (
    <>
      <Header />
      <div className='app-container'>
        <SideBar />
        <MainView />
      </div>
    </>
  )
}

export default App
