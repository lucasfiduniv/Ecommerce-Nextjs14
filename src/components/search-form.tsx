"use client";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { Search } from "lucide-react";

export default function SearchForm() {
  const router = useRouter();

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    const query = data.q;

    if (!query) {
      return null;
    }
    router.push(`/search?q=${query}`);
  }

  return (
    <form onSubmit={handleSearch} className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700">
      <Search className="w-5 h-5 text-zinc-500" />
      <input
        name="q"
        placeholder="Buscar Produtos..."
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
      />
    </form>
  );
}