import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'

import SideBar from './components/SideBar/SideBar'

function App() {


  return (
    <>
      <Header />
      <div className='app-container'>
        <SideBar />
        <div className="main-view" >
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
