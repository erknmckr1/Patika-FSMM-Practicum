import React from "react";
import Navbar from "../Navbar";
import Board from "../board/Board";

function Layout() {
  return (
    <main className="w-screen h-screen flex items-center   ">
      <section className="container mx-auto h-[80%] bg-[#B6D4CE] !rounded-3xl  ">
        <div className="w-full h-full flex">
          <Navbar />
          <Board />
        </div>
      </section>
    </main>
  );
}

export default Layout;
