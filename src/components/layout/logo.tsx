type LogoProps = {
  variant?: "pin" | "plane" | "monogram";
  showWordmark?: boolean;
  className?: string;
};

export default function Logo({
  variant = "monogram",
  showWordmark = true,
  className = "",
}: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="34" height="34" viewBox="0 0 64 64" aria-hidden="true">
        {variant === "pin" && (
          <>
            <circle cx="32" cy="32" r="30" className="fill-indigo-950" />
            <path
              d="M32 16c-7 0-12 5-12 12 0 9 12 20 12 20s12-11 12-20c0-7-5-12-12-12z"
              className="fill-orange-400"
            />
            <circle cx="32" cy="28" r="5" className="fill-indigo-950" />
            <path
              d="M40 20 L52 14"
              className="stroke-orange-400"
              strokeWidth="2"
              strokeDasharray="2 3"
              fill="none"
            />
          </>
        )}

        {variant === "plane" && (
          <>
            <circle cx="32" cy="32" r="30" className="fill-indigo-950" />
            <path d="M18 34 L46 20 L36 46 L31 34 Z" className="fill-orange-400" />
            <path d="M31 34 L36 46 L34 32 Z" className="fill-orange-300" />
          </>
        )}

        {variant === "monogram" && (
          <>
            <circle cx="32" cy="32" r="30" className="fill-indigo-950" />
            <text
              x="32"
              y="42"
              textAnchor="middle"
              fontSize="28"
              fontWeight="500"
              className="fill-orange-400"
            >
              D
            </text>
            <path
              d="M20 22 Q32 14 44 22"
              className="stroke-orange-400"
              strokeWidth="2"
              strokeDasharray="2 3"
              fill="none"
            />
          </>
        )}
      </svg>

      {showWordmark && (
        <span className="text-white font-semibold text-lg tracking-tight">Nuevos destinos</span>
      )}
    </div>
  );
}