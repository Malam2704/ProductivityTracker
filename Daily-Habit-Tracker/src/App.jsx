import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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
        setCreators(data);
      }
    };
    fetchData();
  }, []);

  return (
    <RouterProvider router={router} />
  )
}

export default App
