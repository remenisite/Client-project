import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import "./App.css";
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";

import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import Layout from "./Layouts/Layout";
import About from "./Pages/About";
import Cart from "./Pages/Cart";

function App() {
  const myRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/checkout" element={<CheckOut />} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Route>,
    ),
  );
  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;
