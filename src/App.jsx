import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages";
import Sumber from "./pages/sumber";
import Navbar from "./components/navbar";

export default function App(){
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route index element={<Index />}></Route>
                <Route path="/sumber" element={<Sumber />}></Route>
            </Routes>
        </BrowserRouter>
    )
}