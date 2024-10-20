import { Contact, Culture, Home } from "../pages";
import { Route, Routes } from "react-router-dom";

export function RoutesApp() {
    return (
        <Routes>

            {/* TELAS REFERENTES A APLICAÇÃO */}
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/culture" element={<Culture />} />


        </Routes>
    )

}