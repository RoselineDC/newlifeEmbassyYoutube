import './globals.css';

import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import SundayService from '@/components/SundayService';



import React from "react";

const Home = async () => {
  // const categories = await getCategories(6);

  return (
    <Container className=" ">
      <HomeBanner />
      <SundayService />
      
    
    </Container>
  );
};

export default Home;

