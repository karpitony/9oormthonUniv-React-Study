import cn from "@yeahx4/cn";

interface Achievement {
  title: string;
  description: string;
  icon: string;
  size: string;
}

interface AchievementCardProps {
  achievement: Achievement;
}

export default function AchievementCard({ achievement }: AchievementCardProps) {
  return (
  <div 
    className={cn(
      "bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg overflow-hidden",
      "transition-all duration-300 hover: hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/50",
      "hover:scale-105 hover:shadow-2xl",
      achievement.size === "large" ? "md:col-span-2 md:row-span-2" : "",
      achievement.size === "medium" ? "md:col-span-1 md:row-span-2" : "",
      achievement.size === "small" ? "md:col-span-1 md:row-span-1" : ""
    )}
  >
    <div className="p-6 flex flex-col items-center justify-center h-full">
      <div className={cn(
        "text-4xl mb-4",
        achievement.size === "large" ? "text-7xl" : "",
        achievement.size === "medium" ? "text-6xl" : "",
        achievement.size === "small" ? "text-5xl" : ""
      )}>
        {achievement.icon}
      </div>
      <h2 className={cn(
        "text-gray-300 font-bold mb-2 text-center",
        achievement.size === "large" ? "text-3xl md:text-4xl" : "",
        achievement.size === "medium" ? "text-2xl md:text-3xl" : "",
        achievement.size === "small" ? "text-xl md:text-2xl" : ""
      )}>
        {achievement.title}
      </h2>
      <p className={cn(
        "text-gray-300 text-center",
        achievement.size === "large" ? "text-lg" : "",
        achievement.size === "medium" ? "text-base" : "",
        achievement.size === "small" ? "text-sm" : ""
      )}>
        {achievement.description}
      </p>
    </div>
  </div>
  );
}