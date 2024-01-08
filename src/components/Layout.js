import { Outlet } from "react-router-dom";
import { Bar } from "./Bar/Bar";
import { Suspense } from "react";

export const Layout = () => {
  return (
    <div>
      <Bar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
