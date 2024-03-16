import Image from "next/image";
import Link from "next/link";

export default function Search(){
    return(
        <div className="flex flex-col gap-4">
            <p className="text-sm">
                Resultados para:<span className="font-semibold">moletom</span>
            </p>

            <div className="grid grid-cols-3 gap-6">
            <Link
            href="/product/moletom-never-stop-learning"

            className="group relative  rounded-lg bg-zinc-900 overflow-hidden flex justify-center itens-end"
          >
            <Image
              src="/moletom-never-stop-learning.png"
              width={480}
              height={480}
              alt=""
              quality={100}
              className="group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
              <span className="text-sm truncate">Moletom Learning Stop Learning</span>
              <span className="flex h-full items-center justify-center rounded-full bg-violet-500  px-4 font-semibold">
129
              </span>
            </div>
          </Link>
            </div>
        </div>
    )
}