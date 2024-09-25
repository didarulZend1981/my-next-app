import Image from "next/image";
import Heading from "@/app/components/heading";

export default function Home() {
  console.log(name);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center  p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Heading/>
      <h2>wellcome bangladeh</h2>
      <button className="btn button border-spacing-3">
        Call Me
      </button>
    </div>
  );
}
