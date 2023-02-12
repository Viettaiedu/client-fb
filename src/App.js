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
import Create from "./components/Stories/Create";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
function App() {
  const {darkMode} = useContext(DarkModeContext);

  const router = createBrowserRouter([
    {
      path: routesPublic.home,
      element: <Layout ><Outlet/></Layout>,
      children: [{ path: routesPublic.home, element:<Home/> }],
    },
    {
      path: routesPublic.storiesCreate,
      element : <Create/>
    }
    ,{ path: routesPublic.profile +"/:userId", element:<Profile/> }
  ]);
  return <div  className={`App theme-${darkMode?"dark":"light"}`}>
    <RouterProvider router={router}/>
  </div>;
}
export default App;
