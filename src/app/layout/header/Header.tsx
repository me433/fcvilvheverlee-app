import Login from '../../components/login/Login'
import './Header.scss'
import Statistics from './statistics/Statistics'


const Header = () => {
  return (
    <header id='header'>
        <img id="VilvHeader" src='/Vilv_no_bg.png'/>
        <Statistics />
        <Login />
    </header>
  )
}

export default Header