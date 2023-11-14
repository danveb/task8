import { Routes, Route } from "react-router-dom"; 
import { Navbar } from "./components";
import { Home, About } from "./pages"; 

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </>
  )
}