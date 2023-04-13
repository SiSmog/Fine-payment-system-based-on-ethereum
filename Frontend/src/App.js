import Register from "./components/Register"
import Payment from "./components/Payment";
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register/>}/>
          <Route path="/:hash" element={<Payment/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
