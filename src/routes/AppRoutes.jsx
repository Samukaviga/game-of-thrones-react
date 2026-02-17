import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Characteres from '../components/Characteres'
import { Main } from '../pages/Main'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Main /> } /> 
            <Route path='*' element={ < NotFound /> }/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes