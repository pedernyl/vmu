import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
      <>
         <div className="w-full h-20 bg-emerald-800 sticky top-0">
           <div className="container mx-auto px-4 h-full">
            <div className="flex justify-center items-center h-full">
              <ul className="hidden md:flex gap-x-6 text-white">
                <li>
                  <Link href="/about">
                    <p>Om</p>
                  </Link>
                </li>
                <li>
                  <Link href="/join">
                    <p>Join</p>
                  </Link>
                </li>
                <li>
                  <Link href="/support">
                    <p>Støtt</p>
                  </Link>
                </li>
                <li>
                  <Link href="/contacts">
                     <p>Kontakt</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
};

export default Navbar;