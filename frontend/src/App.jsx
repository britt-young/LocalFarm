import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'


import Error from './Components/Error'
import Home from './Pages/Home'
import About from './Pages/About'
import Events from './Pages/Events'
import Products from './Pages/Products'
import Privacy from './Pages/Privacy'
import Terms from './Pages/Terms'


function App() {
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path ='about' element={<About />} />
      <Route path ='events' element={<Events />} />
      <Route path ='products' element={<Products />} />
      {/* Can add nested service routes too */}
      {/* <Route path ='services/:serviceId' element={<Services />} /> */}
      <Route path ='privacy' element={<Privacy />} />
      <Route path ='terms' element={<Terms />} />
      <Route path ='*' element={<Error />} />
    </Route>
    
  )
)

  return (
    <RouterProvider router={router}/>
  )
}

export default App;
