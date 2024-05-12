"use client";
import React, { Children } from "react";
import Header from "../Header/Header";

const Container = ({ id, children }: { id: string; children: any }) => {
  return (
    <main id={"main-" + id} className="flex min-h-screen flex-col backgroundImage relative">
      <Header />
      <div className="flex-grow">        
        <React.Fragment>{children}</React.Fragment>
      </div>
      <div className="secondary-bg">
        <div className="booking-visit font-bodonimoda relative tracking-wide text-[15rem]">
          Book Visit
        </div>       
      </div>
      <div className="h-6 bot-gradient"></div>
      {/* <Footer /> */}
    </main>
  );
};

export default Container;
