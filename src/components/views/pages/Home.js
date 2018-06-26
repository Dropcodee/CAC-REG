import React from "react";
import { Responsive } from "semantic-ui-react";
import Navbar from "../navbar";
import Program from "./programs";
import Welcome from "../welcome";
import Hero from "../hero";

const Home = () => (
  <div>
    <Responsive>
      <Navbar />
      <Hero />
      <Welcome />
      <Program />
    </Responsive>
  </div>
);

export default Home;
