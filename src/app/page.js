"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  console.log(router);

  const handleNavigate = () => {
    router.push("product");
  };
  return (
    <main className="flex justify-center items-center flex-col  h-100 w-100">
      <h1>Home Page</h1>
      <Link href={"/product"}> Product Page</Link>
      <Link href={"/account"}> Account Page</Link>

      <h2 className="font-bold text-lg ">
        {" "}
        Another Way to Navigate Throw Pages
      </h2>
      <button onClick={handleNavigate} className="bg-blue-500 rounded-md p-2">
        {" "}
        Navigate to Product page using useRouter
      </button>
    </main>
  );
}
