import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AboutPageAsync } from "../../pages/AboutPage/AboutPageAsync";
import { MainPageAsync } from "../../pages/MainPage/MainPageAsync";
import { Suspense } from "react";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О нас</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
