import './Nav.scss'
import { AdminRoutes, ClubRoutes, MemberRoutes, StatisticsRoutes } from '../../../data/constants/Routes'
import H2 from '../../components/H2/H2'
import { sponsors } from '../../../data/constants/Sponsors'
import useAuth from '../../hooks/useAuth'

const Nav = () => {
  const { auth } = useAuth();

  return (
    <nav id='nav'>
      <H2 title="De Club" />
      {ClubRoutes.map((route) => (
        <a key={route.name} href={route.href} className='route'>
          {route.name}
        </a>
      ))}
      <br />
      <H2 title="Sportief"/>
      {StatisticsRoutes.map((route) => (
        <a key={route.name} href={route.href} className='route'>
          {route.name}
        </a>
      ))}
      <br />
      {auth?.roles?.includes("user")?
      <>
      <H2 title="Aanwezigheden"/>
      {MemberRoutes.map((route) => (
        <a key={route.name} href={route.href} className='route'>
          {route.name}
        </a>
      ))}</>:<></>}
      <br />
      {auth?.roles?.includes("admin")?
      <>
      <H2 title="Admin"/>
      {AdminRoutes.map((route) => (
        <a key={route.name} href={route.href} className='route'>
          {route.name}
        </a>
      ))}</>:<></>}
      <br />
      {sponsors.filter((sponsor) => (sponsor.href!=="mailto:vilv.bestuur@fcvilvheverlee.be")).map((sponsor) => (
          <a key={sponsor.name} className="sponsor" href={sponsor.href} target="_blank">
            <div className='image'>
              <img className="sponsornav" src={sponsor.logo} alt={sponsor.name}/>
            </div>
          </a>
      ))}
    </nav>
  )
}


export default Nav