import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from '../Components/Layout'
import HomePagear from '../Components/HomePage/index.ar'
import HomePage from '../Components/HomePage/index'
import ProductPage from '../Components/ProductPage'
import {data2} from '../Components/ProductPreview/data2'
function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
            <Route path='/ar' element={<HomePagear/>}/>
              <Route index element={<HomePage/>}/>
              <Route path='/productPage/:id' element={<ProductPage data={data2} />}/>
              <Route path='*' element={<h1>404 Not Found</h1>}/>  
            </Route>
            
        </Routes>
    </BrowserRouter>
  )
}

export default Router