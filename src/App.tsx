import { Route, Routes } from 'react-router-dom';
import Layout from './app/layout/Layout'
import News from './app/content/news/News';
import './App.css'
import Management from './app/content/management/Management';
import Clubapi from './app/content/clubapi/Clubapi';
import Sponsors from './app/content/sponsors/Sponsors';
import History from './app/content/history/History';
import Location from './app/content/location/Location';
import StatsSeason from './app/content/stats-season/StatsSeason';
import StatsHistorical from './app/content/stats-historical/StatsHistorical';
import Availabilities from './app/content/availabilities/Availabilities';
import Admin from './app/content/admin/Admin';
import Missing from './app/content/missing/Missing';
import RequireAuth from './app/components/requireAuth/RequireAuth';


function App() {
  return (
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<News />}/>
            <Route path='bestuur' element={<Management />}/>
            <Route path='api' element={<Clubapi />}/>
            <Route path='contact' element={<Location />}/>
            <Route path='historiek' element={<History />}/>
            <Route path='sponsors' element={<Sponsors />}/>
            <Route path='stats-season' element={<StatsSeason />}/>
            <Route path='stats-historical' element={<StatsHistorical />}/>

            <Route element={<RequireAuth allowedRoles={["user", "admin"]} />}>
            <Route path='availabilities' element={<Availabilities />}/>
            </Route>
            <Route element={<RequireAuth allowedRoles={["admin"]} />}>
            <Route path='admin' element={<Admin />}/>
            </Route>
            <Route path='*' element={<Missing />}/>
          </Route>
        </Routes>
  )
}

export default App
