import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutPageAsync } from "../../pages/AboutPage/AboutPageAsync";
import { MainPageAsync } from "../../pages/MainPage/MainPageAsync";
import { Suspense } from "react";
import Layout from "../../pages/Layout";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPageAsync />} />
            <Route path="about" element={<AboutPageAsync />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
