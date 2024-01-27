import Hero from "@/sections/Hero";
import Territories from "@/sections/Territories";
import Trail from "@/sections/Trail";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
   <Hero/>
   <Trail/>
<Territories/>
    

    
    </main>
  );
}
