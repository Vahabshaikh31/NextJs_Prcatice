"use client";
import { usePathname, useSearchParams } from "next/navigation";

export default function Cart() {

  const params = usePathname();
  console.log(params);

  const useSearch = useSearchParams();
  console.log(useSearch.get("search"), useSearch.get("randomValue"));

  return <h1>Cart Page </h1>;
}
