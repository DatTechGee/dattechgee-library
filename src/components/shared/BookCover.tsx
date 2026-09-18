import { cn } from "@/lib/utils";

const coverGradients = [
  "from-blue-600 via-blue-700 to-indigo-800",
  "from-amber-500 via-orange-600 to-red-600",
  "from-emerald-500 via-teal-600 to-cyan-700",
  "from-purple-600 via-violet-700 to-indigo-800",
  "from-rose-500 via-pink-600 to-fuchsia-700",
  "from-sky-500 via-blue-600 to-indigo-700",
  "from-green-500 via-emerald-600 to-teal-700",
  "from-orange-500 via-red-500 to-rose-600",
  "from-slate-700 via-slate-800 to-gray-900",
  "from-indigo-500 via-purple-600 to-violet-700",
];

function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
}

interface BookCoverProps {
  title: string;
  author?: string;
  category?: string;
  coverImage?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function BookCover({ title, author, category, coverImage, size = "md", className }: BookCoverProps) {
  const gradient = coverGradients[hashCode(title) % coverGradients.length];
  const words = title.split(" ");
  const line1 = words.slice(0, Math.ceil(words.length / 2)).join(" ");
  const line2 = words.slice(Math.ceil(words.length / 2)).join(" ");

  const sizeClasses = {
    sm: "text-xs px-2 py-1.5",
    md: "text-sm px-3 py-2",
    lg: "text-lg px-4 py-3",
  };

  const imgSizeClasses = {
    sm: "w-full h-full object-cover",
    md: "w-full h-full object-cover",
    lg: "w-full h-full object-cover",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl bg-gradient-to-br aspect-[3/4] flex flex-col justify-between",
        gradient,
        className
      )}
    >
      {coverImage ? (
        <img
          src={coverImage}
          alt={title}
          className={cn("absolute inset-0", imgSizeClasses[size])}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      ) : (
        <>
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-8 translate-x-8" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full translate-y-12 -translate-x-12" />
          <div className="absolute top-1/3 left-0 w-full h-px bg-white/20" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/10" />

          {category && (
            <div className="absolute top-3 left-3 z-10">
              <span className="px-2 py-0.5 bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider rounded">
                {category}
              </span>
            </div>
          )}

          <div className={cn("relative z-10 flex-1 flex flex-col justify-center text-white", sizeClasses[size])}>
            <h3 className="font-black leading-tight drop-shadow-lg">
              {line1}
              {line2 && (
                <>
                  <br />
                  <span className="opacity-90">{line2}</span>
                </>
              )}
            </h3>
          </div>

          {author && (
            <div className="relative z-10 px-4 pb-3">
              <p className="text-white/70 text-xs font-medium tracking-wide">{author}</p>
            </div>
          )}

          <div className="absolute bottom-0 left-0 w-1.5 h-full bg-black/20" />
        </>
      )}
    </div>
  );
}