import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CourseCardProps {
  icon: LucideIcon;
  title: string;
  topics: string[];
  gradient: string;
  shadowColor?: string;
  className?: string;
}

/**
 * Gradient-accented course module card — nikhiledutech.com pattern.
 * Each module has its own gradient color theme (yellow/blue/purple/green)
 * applied to the icon, bullet dots, card glow, and shadow.
 *
 * Usage:
 *   <CourseCard
 *     icon={Bitcoin}
 *     title="Cryptocurrency Trading"
 *     topics={["Intro to crypto", "Spot & futures", "Position sizing"]}
 *     gradient="from-yellow-500 via-orange-500 to-red-500"
 *   />
 */
export function CourseCard({
  icon: Icon,
  title,
  topics,
  gradient,
  shadowColor = "shadow-lg",
  className,
}: CourseCardProps) {
  return (
    <div className={cn("relative group", className)}>
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10",
          gradient
        )}
      />
      <div
        className={cn(
          "relative bg-[#1A1A1A] backdrop-blur-xl rounded-2xl p-8 h-full border border-gray-800/50",
          "group-hover:border-transparent transition-colors duration-300 overflow-hidden",
          shadowColor
        )}
      >
        {/* Subtle gradient tint */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-300",
            gradient
          )}
        />
        {/* Glow blob */}
        <div
          className={cn(
            "absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br opacity-20 blur-3xl rotate-12",
            "transform group-hover:translate-x-1/4 group-hover:translate-y-1/4 transition-transform duration-700",
            gradient
          )}
        />
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div
              className={cn(
                "p-3 rounded-xl bg-gradient-to-br group-hover:scale-110 transition-transform duration-300",
                gradient
              )}
            >
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {title}
            </h3>
          </div>
          <ul className="space-y-4">
            {topics.map((topic, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-400 group/item">
                <span
                  className={cn(
                    "mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r group-hover/item:scale-150 transition-transform duration-300",
                    gradient
                  )}
                />
                <span className="group-hover/item:text-white transition-colors duration-300">
                  {topic}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
