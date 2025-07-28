import ScrollToTop from '../components/ScrollToTop';
import NavBar from '../Components/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

const RootLayout = () => {
  return (
    <div>
       <ScrollToTop />
        <NavBar/>
        <Outlet />
        <Footer/>
    </div>
  )
}

export default RootLayout