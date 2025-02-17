import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AddCoffee from './components/addCoffee.jsx'
import UpdateCoffee from './components/updateCoffee.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/coffee')
  },
  {
    path:"addCoffee",
    element:<AddCoffee></AddCoffee>
  },
  {
    path:"updateCoffee",
    element:<UpdateCoffee></UpdateCoffee>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
