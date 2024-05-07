import React from "react";
import Link from "next/link";

const Navbar = ({ toggle }: { toggle: () => void }) => {
    return (
      <>
         <div className="w-full bg-transparent sticky top-0 z-50">
           <div className="container mx-auto px-4 h-full">
               <div className="flex justify-center items-center h-full">
                   <button
                       type="button"
                       className="inline-flex items-center md:hidden"
                       onClick={toggle}
                   >
                       <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="40"
                           height="40"
                           viewBox="0 0 24 24"
                       >
                           <path
                               fill="#000"
                               d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                           />
                       </svg>
                   </button>
                   <ul className="hidden md:flex gap-x-6 text-black">
                       <li>
                           <Link href="/#home">
                               Hjem
                           </Link>
                       </li>
                       <li>
                           <Link href="/#about">
                               <p>Om</p>
                           </Link>
                       </li>
                       <li>
                           <Link href="/#join">
                               <p>Join</p>
                           </Link>
                       </li>
                       <li>
                           <Link href="/#support">
                               <p>Støtt</p>
                           </Link>
                       </li>
                       <li>
                           <Link href="/#contacts">
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