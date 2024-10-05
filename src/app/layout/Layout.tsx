import Header from './header/Header'
import Nav from './nav/Nav'
// import Footer from './footer/Footer'
import { Outlet } from 'react-router-dom'
import './Layout.css'

const Layout = () => {
  return (
    <>
        <Header />
        <div className='main'>
            <Nav />
            <main>
                <Outlet />
            </main>
        </div>
        {/* <Footer /> */}
    </>
  )
}

export default Layout