import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Home  from "../components/HomePage/Home";


function HomePage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
          <Home/>
      </main>
    </React.Fragment>
  );
}

export default HomePage;
