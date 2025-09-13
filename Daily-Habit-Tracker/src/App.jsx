import { useState, useEffect } from 'react'
import Home from './pages/Home';
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import supabase from './client.js';

function App() {
  const [dailyProgress, setDailyProgress] = useState([]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home dailyProgress={dailyProgress} />,
    },
  ]);

  useEffect(() => {
    // Fetch data from Supabase
    const fetchData = async () => {
      const { data, error } = await supabase.from('Daily Progress').select('*');
      if (error) {
        console.error('Error fetching creators:', error);
      } else {
        console.log('Fetched data:', data);
        setDailyProgress(data);
      }
    };
    fetchData();
  }, []);

  return (
    <RouterProvider router={router} />
  )
}

export default App
