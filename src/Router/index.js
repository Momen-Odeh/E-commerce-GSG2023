import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from '../Components/Layout'
import CategoryItem from '../Components/CategoryItem'
import CategoryList from '../Components/CategoryList'
import HomePage from '../Components/HomePage'
function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<HomePage/>}/>
              <Route path='/homePage' element={<h1>this is home page route</h1>}/>
              <Route path='*' element={<h1>404 Not Found</h1>}/>  
            </Route>
            
        </Routes>
    </BrowserRouter>
  )
}

export default Router