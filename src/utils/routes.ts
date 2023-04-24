import React from "react";


const Dashboard = React.lazy(() => import("../pages/Dashboard"));
export type AppRoutes = {
    path: string;
    exact: boolean;
    component: any;
  };

export const routes: AppRoutes[] = [
  { path: '/', exact: true, component: Dashboard },

  ];
  