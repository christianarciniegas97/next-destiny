"use client";
import { Search } from "lucide-react";

type Props = {
  value: string;
  action: (value: string) => void;
}

export default function DestinationSearch({value, action } : Props) {
  
  return (
    <div className="relative max-w-lg mx-auto mb-10">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="text"
        placeholder="Buscar destino..."
        value={value}
        onChange={(e) => action(e.target.value)}
        className="
          w-full
          rounded-2xl
          border
          border-slate-200
          bg-white
          py-3
          pl-11
          pr-4
          text-sm
          outline-none
          focus:ring-2
          focus:ring-blue-500
          transition
        "

      />
    </div>
  );
}