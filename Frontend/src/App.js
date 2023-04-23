import RegisterTicket from "./components/RegisterTicket"
import Payment from "./components/Payment";
import Home from "./components/Home/Home"
import Test from "./components/LoadingScreen"
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<RegisterTicket/>}/>
          <Route path="/ticket/:hash" element={<Payment/>}/>
          <Route path="/test" element={<Test/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
