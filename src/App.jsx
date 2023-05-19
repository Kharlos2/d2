import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import Productos from "./components/Productos"


const router = createBrowserRouter([

  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/productos',
    element:<Productos/>
  }

])

function App() {
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
