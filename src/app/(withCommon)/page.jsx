import Banner from "@/components/pages/HomePage/Banner/Banner";
import StrategyMarketing from "@/components/pages/HomePage/StrategyMarketing/StrategyMarketing";
import WhatWeDo from "@/components/pages/HomePage/WhatWeDo/WhatWeDo";
import WhyChooseUs from "@/components/pages/HomePage/WhyChooseUs/WhyChooseUs";
import Container from "@/components/ui/Container";
import React from "react";

const HomePage = () => {
  return (
    <Container>
      <Banner />

      <WhatWeDo />

      <WhyChooseUs />

      <StrategyMarketing />
    </Container>
  );
};

export default HomePage;
