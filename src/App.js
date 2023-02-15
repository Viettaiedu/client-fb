import "./style.scss";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";

///----My imports
import Home from "./pages/home";
import Profile from "./pages/profile";
import {routesPublic} from './config/routes';
import Layout from './components/Layout';
import Create from "./components/Stories/Create";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Register from "./pages/register";
import Login from "./pages/login";
function App() {
  const {darkMode} = useContext(DarkModeContext);
  const currentUser = false;
  const ProtectedRoute = ({children}) => {
    if(!currentUser) return <Navigate to="/register" replace/>
    return children;
  }
  const router = createBrowserRouter([
    {
      path: routesPublic.home,
      element:
      <ProtectedRoute>
      <Layout ><Outlet/></Layout>
      </ProtectedRoute>,
      children: [{ path: routesPublic.home, element:<Home/> }],
    },
    {
      path: routesPublic.storiesCreate,
      element : 
      <ProtectedRoute>
      <Create/>
      </ProtectedRoute>
    }
    ,{ path: routesPublic.profile +"/:userId", element:
    <ProtectedRoute>
    <Profile/>
    </ProtectedRoute>
   }
    ,{ path: "/login", element:<Login/> }
    ,{ path: "/register", element:<Register/> }
  ]);
  return <div  className={`App theme-${darkMode?"dark":"light"}`}>
    <RouterProvider router={router}/>
  </div>;
}
export default App;
