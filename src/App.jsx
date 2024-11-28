import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./assets/Components/Layout/Layout";
import Home from "./assets/Pages/Home/Home";
import Portfolio from "./assets/Pages/Portfolio/Portfolio";
import About from "./assets/Pages/About/About";
import Contact from "./assets/Pages/Contact/Contact";
import Notfound from "./assets/Pages/Notfound/Notfound";

const x = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/About", element: <About /> },
      { path: "/Portfolio", element: <Portfolio /> },
      { path: "/Contact", element: <Contact /> },
      { path: "*", element: <Notfound /> },
    ],
  },
]);
export default function App() {
  return (
    <>
      <RouterProvider router={x}></RouterProvider>
    </>
  );
}
