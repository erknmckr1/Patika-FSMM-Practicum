import Favorite from "@/components/Favories/Favorite";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";

function index() {
  return (
    <div className="h-screen w-screen relative">
      <Header />  
      <Favorite />
      <Footer/>
    </div>
  );
}

export default index;
