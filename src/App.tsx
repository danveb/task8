import { Routes, Route } from "react-router-dom"; 
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </>
  )
}