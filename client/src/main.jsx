import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RoomProvider } from "./context/RoomContext";
import Home from "./pages/Home";
import Lobby from "./pages/Lobby"; // Tambahkan import
import AuthLayout from "./pages/AuthLayout";
import './index.css';

const App = () => {
  return (
    <RoomProvider>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/lobby" element={<Lobby />} /> {/* Route ke Lobby */}
      </Routes>
    </RoomProvider>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
