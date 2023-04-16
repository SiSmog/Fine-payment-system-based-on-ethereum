import RegisterTicket from "./components/RegisterTicket"
import Payment from "./components/Payment";
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterTicket/>}/>
          <Route path="/:hash" element={<Payment/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
