import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { Hero } from './componentss/Hero.jsx'
import Yes from './componentss/Yes.jsx'
import No1 from './componentss/No1.jsx'
import No2 from './componentss/No2.jsx'
import No3 from './componentss/No3.jsx'
import No4 from './componentss/No4.jsx'
import No5 from './componentss/No5.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Hero/>}/>
      <Route path='/yes' element={<Yes/>}/>
      <Route path='/no1' element={<No1/>}/>
      <Route path='/no2' element={<No2/>}/>
      <Route path='/no3' element={<No3/>}/>
      <Route path='/no4' element={<No4/>}/>
      <Route path='/no5' element={<No5/>}/>


    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)