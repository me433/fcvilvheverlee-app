import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import useAuth from './app/hooks/useAuth';
import { useEffect, useState } from 'react';
import axios from './api/axios';

function App() {
  const { setAuth } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check authentication status on component mount
    
    const checkAuthStatus = async () => {
      try {
        // Make a request to the server to verify authentication status
        const response = await axios.get('/refresh', {
          withCredentials: true
        });

        if (response.data.accessToken) {
          const data = await response.data;
          setAuth(data); // Set auth context with user data if authenticated
        } else {
          setAuth(null); // Clear auth state if not authenticated
        }
      } catch (error) {
        console.error("Failed to check auth status:", error);
      } finally {
        setLoading(false);
      }
    };
    checkAuthStatus();
  },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<News />}/>
          <Route path='bestuur' element={<Management />}/>
          <Route path='api' element={<Clubapi />}/>
          <Route path='contact' element={<Location />}/>
          <Route path='historiek' element={<History />}/>
          <Route path='sponsors' element={<Sponsors />}/>

          <Route element={<RequireAuth allowedRoles={["user", "admin"]} loading={loading} />}>
          <Route path='stats-season' element={<StatsSeason />}/>
          <Route path='stats-historical' element={<StatsHistorical />}/>
          <Route path='availabilities' element={<Availabilities />}/>
          </Route>

          <Route element={<RequireAuth allowedRoles={["admin"]} loading={loading} />}>
          <Route path='admin' element={<Admin />}/>
          </Route>
          
          <Route path='*' element={<Missing />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
