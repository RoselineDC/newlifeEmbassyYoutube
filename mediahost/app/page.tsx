import './globals.css';

import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";



import React from "react";

const Home = async () => {
  // const categories = await getCategories(6);

  return (
    <Container className="bg-shop-light-pink">
      <HomeBanner />
      
    
    </Container>
  );
};

export default Home;

