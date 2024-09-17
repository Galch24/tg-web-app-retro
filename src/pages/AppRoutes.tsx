import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import NotFound from "@/pages/notFound";
import Main from "@/pages/Main";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/500" element={<Navigate to='/404' />} />
      </Routes>
    </BrowserRouter>
  )
}
