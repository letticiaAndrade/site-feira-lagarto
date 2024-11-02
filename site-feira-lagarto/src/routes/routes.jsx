import {
    Home,
    Contact, 
    Culture,
    Service,
    Convenience,
    Supermarkets,
    FashionAndApparel,
    WorkshopsAndMechanics, 
    FurnitureAndDecoration,
} from "../pages";

import { Route, Routes } from "react-router-dom";

export function RoutesApp() {
    return (
        <Routes>

            {/* TELAS REFERENTES A APLICAÇÃO */}
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/culture" element={<Culture />} /> 
            <Route path="/lojistas/conveniencia" element={<Convenience />} />
            <Route path="/lojistas/supermercados" element={<Supermarkets />} />
            <Route path="/lojistas/modaEvestuario" element={<FashionAndApparel />} />
            <Route path="/lojistas/oficinasMecanicas" element={<WorkshopsAndMechanics />} />
            <Route path="/lojistas/moveisEdecoracao" element={<FurnitureAndDecoration />} />

        </Routes>
    )

}