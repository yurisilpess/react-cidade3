import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// INSTALLING DEPENDENCIES TO CREATE THE ROUTES
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Student from './routes/Student.jsx'

{/* CREATING THE FUNCTION BROWSER ROUTER */}

const router = createBrowserRouter([
  {
    // CALLING FATHER ELEMENT
    path:'/', element: <App/>,
    errorElement:<Error/>,

    children:[
      {path:'/',element:<Home/>},
      {path:'/student',element:<Student/>},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
