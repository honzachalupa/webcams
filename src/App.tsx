import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { IndexPage } from "./pages/Index";
import { DetailPage } from "./pages/Temp";

export const App: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/detail/:sourceId" element={<DetailPage />} />
        </Routes>
    </BrowserRouter>
);
