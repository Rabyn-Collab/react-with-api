import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./features/home/Home";
import About from "./features/About";
import Contact from "./features/Contact";
import RootLayOut from "./ui/RootLayOut";
import NotFound from "./ui/NotFound";
import Detail from "./features/home/Detail";



const App = () => {


  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayOut />,
      children: [
        { index: true, element: <Home /> },
        { path: 'product/detail/:id', element: <Detail /> },
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> },
        { path: '*', element: <NotFound /> },
      ]
    },


  ]);



  return <RouterProvider router={router} />
}
export default App