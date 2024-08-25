import { redirect } from "next/navigation";

export default function sales() {
  const profileInfo = null;

  // if (profileInfo === null) redirect("cart?search=Product2&randomValue=osjksdsud7887weuwbu7622tu32tgaa");
  if (profileInfo === null)
    redirect(
      "product?search=Product2"
    );

  return <h1>Account Pages</h1>;
}
