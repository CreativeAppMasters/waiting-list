import type { MetaFunction } from "@remix-run/node";

import HeroSection from "~/components/tailwind/hero-section";
import { useOptionalUser } from "~/utils";

export const meta: MetaFunction = () => [{ title: "Remix Notes" }];

export default function Index() {
  const user = useOptionalUser();
  return (
    <>
     <HeroSection user={user}/>
    </>
  );
}
