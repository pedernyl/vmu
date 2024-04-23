"use client";
import { useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toogle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/*<Sidebar isOpen={isOpen} toogle={toogle} />*/}
      <Navbar toogle={toogle} />
    </>
  );
};

export default Navigation;