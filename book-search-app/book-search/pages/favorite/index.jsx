import Favorite from "@/components/Favories/Favorite";
import Header from "@/components/Header/Header";
import React from "react";

function index() {
  return (
    <div className="h-screen w-screen relative">
      <Header />  
      <Favorite />
    </div>
  );
}

export default index;
