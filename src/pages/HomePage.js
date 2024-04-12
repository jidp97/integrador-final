import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from 'react-router';
import TopNav from "../components/TopNav";

function HomePage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <TopNav isFixedTop={false} />
      <main>
        <Outlet />
      </main>
    </React.Fragment>
  );
}

export default HomePage;
