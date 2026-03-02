import Layot from './cumponents/Layot'
import './App.css'
import { Route, Routes } from 'react-router'
import StorePage from './pages/StorePage'
import CardPage from './pages/CardPage'
function App() {


  return (
    <>
      <Layot>
      <Routes>
       
        <Route path='/' element={<StorePage/>}></Route>
        <Route path='/cart' element={<CardPage/>}></Route>
        
                
      </Routes>
    </Layot>
    
    </>
  )
}

export default App
