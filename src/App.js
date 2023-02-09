import "./style.scss";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";


///----My imports
import Home from "./pages/home";
import Profile from "./pages/profile";
import {routesPublic} from './config/routes';
import Layout from './components/Layout';
function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout ><Outlet/></Layout>,
      children: [{ path: routesPublic.home, element:<Home/> },{ path: routesPublic.profile +"/:userId", element:<Profile/> }],
    },
  ]);
  return <div className="App">
    <RouterProvider router={router}/>
  </div>;
}
export default App;
