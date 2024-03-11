import { api } from "@/data/api";
import { Product } from "@/data/types/product";
import Image from "next/image";
import Link from "next/link";

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api("/products/featured");

  const products = await response.json();
  return products;
}

export default async function Home() {
  const products = await getFeaturedProducts();
  console.log(products);
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/"
        className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center itens-end"
      >
        <Image
          src="/moletom-ai-side.png"
          width={920}
          height={920}
          alt=""
          quality={100}
          className="group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moleton AI Side</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500  px-4 font-semibold">
            R$129
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center itens-end"
      >
        <Image
          src="/moletom-java.png"
          width={860}
          height={860}
          alt=""
          quality={100}
          className="group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom Java</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500  px-4 font-semibold">
            R$129
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center itens-end"
      >
        <Image
          src="/camiseta-dowhile-2022.png"
          width={860}
          height={860}
          alt=""
          quality={100}
          className="group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Camisa Dowhile</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500  px-4 font-semibold">
            R$129
          </span>
        </div>
      </Link>
    </div>
  );
}
