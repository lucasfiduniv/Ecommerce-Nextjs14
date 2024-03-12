import Image from "next/image";

export default function ProductPage() {
  return (
    <div className="relative grid max-h-[860px] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          src="/moletom-never-stop-learning.png"
          alt=""
          width={1000}
          height={1000}
          quality={100}
        />
      </div>
      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">
          Moletom Neber Stop Learning
        </h1>
        <p className="mt-2 leading-relaxed text-zinc-400">
          Moletom fabricado com 88% de algodao e 12% de poliester.
        </p>
      </div>
    </div>
  );
}
