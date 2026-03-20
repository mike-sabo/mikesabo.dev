import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="resume" element={<Experience />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
