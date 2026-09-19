import React from "react";

export default function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`font-black tracking-tight uppercase flex items-center gap-2 select-none ${compact ? "text-xl" : "text-2xl sm:text-3xl"}`}>
      {/* NixaTV Icon Badge */}
      <div className="relative flex items-center justify-center">
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-[#6366F1] via-[#8B5CF6] to-[#06B6D4] p-[1.5px] shadow-lg shadow-indigo-500/30">
          <div className="w-full h-full bg-[#05070E] rounded-[10px] flex items-center justify-center">
            <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#06B6D4] text-base sm:text-lg">
              N
            </span>
          </div>
        </div>
        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-300 pointer-events-none" />
      </div>

      {/* Brand Text */}
      <div className="flex items-center tracking-wider">
        <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent font-extrabold">
          NIXA
        </span>
        <span className="ml-1 px-1.5 py-0.5 rounded-md text-xs sm:text-sm font-black bg-gradient-to-r from-[#6366F1] to-[#06B6D4] text-white shadow-sm shadow-indigo-500/40">
          TV
        </span>
      </div>
    </div>
  );
}
