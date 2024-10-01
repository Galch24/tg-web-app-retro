import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import NotFound from "@/pages/notFound";
import Main from "@/pages/Main";
import { Team } from "@/pages/team";
import { Stats } from "@/pages/stats";
import { Cases } from "@/pages/cases";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/team' element={<Team />} />
        <Route path='/stats' element={<Stats />} />
        <Route path='/cases' element={<Cases />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/500' element={<Navigate to='/404' />} />
      </Routes>
    </BrowserRouter>
  );
};
