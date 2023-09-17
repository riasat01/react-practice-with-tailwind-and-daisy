import './App.css'
import GymContainer from './components/GymContainer'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      {/* <h1 className='text-5xl'>Vite + React</h1>
      <label className="swap">
        <input type="checkbox" />
        <div className="swap-on">ON</div>
        <div className="swap-off">OFF</div>
      </label> */}
      <Navbar></Navbar>
      <GymContainer></GymContainer>
    </>
  )
}

export default App
