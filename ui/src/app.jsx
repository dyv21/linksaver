import {createGlobalStyle} from "styled-components";
import {Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'


import {useAppContext} from "./context.jsx";
import RootRoute from "./routes/root/";
import LoginRoute from "./routes/login/";
import RegisterRoute from "./routes/register/";
import UnverifiedRoute from "./routes/unverified/";
import VerifyRoute from "./routes/verify/";


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
`;


function App() {
  const {state, dispatch} = useAppContext()

  return (
    <>
    <GlobalStyle />
    <ToastContainer  autoClose={3000} position="top-right"/>
  <Routes>
    <Route path="/" element={<RootRoute />}></Route>
    <Route path="/login" element={<LoginRoute />}></Route>
    <Route path="/register" element={<RegisterRoute />}></Route>
    <Route path="/unferified" element={<UnverifiedRoute />}></Route>
    <Route path="/verify" element={<VerifyRoute />}></Route>
  </Routes>

    </>
  )
}

export default App
