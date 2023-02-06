import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { DetailPage } from "./pages/Detail";
import { IndexPage } from "./pages/Temp";

export const App: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/detail/:sourceId" element={<DetailPage />} />
        </Routes>
    </BrowserRouter>
);
