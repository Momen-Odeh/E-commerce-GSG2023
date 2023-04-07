import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from '../Components/Layout'
function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<h1>this is main route</h1>}/>
              <Route path='/homePage' element={<h1>this is home page route</h1>}/>
              <Route path='*' element={<h1>404 Not Found</h1>}/>  
            </Route>
            
        </Routes>
    </BrowserRouter>
  )
}

export default Router