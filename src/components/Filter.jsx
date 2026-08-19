import { useEffect, useRef, useState } from "react";

function Filter({ label, value, options, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const filterRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!filterRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div ref={filterRef} className="relative min-w-0">
      <label className="mb-1.5 block font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
        {label}
      </label>

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`flex h-9 w-full cursor-pointer items-center justify-between rounded-md border bg-[#0d1424] px-2.5 font-mono text-[10px] font-medium outline-none transition-all ${
          isOpen
            ? "border-[#6366f1]/60 bg-[#10182a] text-slate-200"
            : "border-white/8 text-slate-400 hover:border-white/15 hover:bg-[#10182a]"
        }`}
      >
        <span className={value === "All" ? "text-slate-500" : "text-slate-300"}>
          {value}
        </span>

        <svg
          viewBox="0 0 20 20"
          fill="none"
          className={`h-3.5 w-3.5 text-[#6366f1] transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        >
          <path
            d="M6 8l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          role="listbox"
          className="absolute left-0 right-0 top-full z-50 mt-1.5 overflow-hidden rounded-md border border-white/10 bg-[#0d1424] p-1 shadow-2xl shadow-black/40"
        >
          {options.map((option) => {
            const selected = option === value;

            return (
              <button
                key={option}
                type="button"
                role="option"
                aria-selected={selected}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={`flex w-full cursor-pointer items-center justify-between rounded px-2 py-1.5 font-mono text-[10px] transition-colors ${
                  selected
                    ? "bg-[#6366f1]/10 text-[#a5b4fc]"
                    : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                }`}
              >
                {option}

                {selected && <span className="text-[#6366f1]">✓</span>}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Filter;
