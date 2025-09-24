import React from "react";
import Link from "next/link";


export default function note(){

  return(
    <div>
      <div className="flex justify-center">
        <h1 className=" mt-3 text-2xl ">welcome to note saver</h1>

      </div>


     <div className="flex justify-center items-center h-screen relative -translate-y-10">
  <Link
    href="/login"
    className="bg-cyan-400 text-white px-6 py-3 rounded shadow-lg border-b-4 border-cyan-600 active:border-b-0 active:translate-y-1 transition-all duration-150"
  >
    Get Started
  </Link>
</div>

    </div>
  )




}



