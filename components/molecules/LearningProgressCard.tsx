import { copy } from "@/data/home-data.js";

interface LearningProgressCardProps {
  className?: string;
  size?: "compact" | "large";
}

const sizeClasses = {
  compact: {
    card: "rounded-2xl px-5 py-4 shadow-lg md:px-6 md:py-5",
    label: "text-sm md:text-[14px]",
    percentage: "text-5xl leading-[1.1] md:text-[48px]",
    progress: "mt-2 h-2 w-44 md:w-[210px]",
  },
  large: {
    card: "rounded-[20px] px-4 py-4 shadow-[0_18px_45px_rgba(15,23,42,0.14)] sm:px-5 sm:py-5",
    label: "text-xs sm:text-sm",
    percentage: "mt-1 text-[42px] font-bold leading-none tracking-tight sm:text-[58px]",
    progress: "mt-4 h-2.5 w-full",
  },
} as const;

export function LearningProgressCard({
  className = "",
  size = "compact",
}: LearningProgressCardProps) {
  const styles = sizeClasses[size];

  return (
    <div className={`bg-white text-left text-slate-900 ${styles.card} ${className}`}>
      <span className={styles.label}>{copy.progress.label}</span>
      <b className={`block ${styles.percentage}`}>{copy.progress.percentage}</b>
      <span className={`block rounded-full bg-slate-100 ${styles.progress}`}>
        <i className="block h-full w-[55%] rounded-full bg-[#ceff00]" />
      </span>
    </div>
  );
}
