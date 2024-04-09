import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Home  from "../components/HomePage/Home";
import TopNav from "../components/TopNav";

function HomePage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <TopNav isFixedTop={false} />
      <main>
          <Home/>
      </main>
    </React.Fragment>
  );
}

export default HomePage;
