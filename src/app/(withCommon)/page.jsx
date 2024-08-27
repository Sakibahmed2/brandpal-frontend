import Banner from "@/components/pages/HomePage/Banner/Banner";
import WhatWeDo from "@/components/pages/HomePage/WhatWeDo/WhatWeDo";
import Container from "@/components/ui/Container";
import React from "react";

const HomePage = () => {
  return (
    <Container>
      <Banner />

      <WhatWeDo />
    </Container>
  );
};

export default HomePage;
