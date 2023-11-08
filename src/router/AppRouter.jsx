import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { Login } from "@mui/icons-material";
import { ErrorPage } from "../components/common/error/ErrorPage";
import { routes } from "./menuRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
      {
            routes.map(({id, path, Element }) => {
                return <Route key={id} path={path} element={<Element />} />;
            } )
        }
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
