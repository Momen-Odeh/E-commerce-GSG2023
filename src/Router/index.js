import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from '../Components/Layout'
import HomePage from '../Components/HomePage'
import ProductPage from '../Components/ProductPage'
function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<HomePage/>}/>
              <Route path='/productPage' element={<ProductPage/>}/>
              <Route path='*' element={<h1>404 Not Found</h1>}/>  
            </Route>
            
        </Routes>
    </BrowserRouter>
  )
}

export default Router