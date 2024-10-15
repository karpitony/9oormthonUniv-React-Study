import cn from "@yeahx4/cn"
import AchievementCard from "../components/achievementCard"

const achievements = [
  {
    title: "연합 해커톤 대상",
    description: "짧은 시간 집중적인 노력으로 성과 달성",
    icon: "🏆",
    size: "large"
  },
  {
    title: "TS 등 기술 스택 확장",
    description: "새로운 기술 습득 및 적용",
    icon: "📚",
    size: "medium"
  },
  {
    title: "4개의 웹사이트 배포",
    description: "다양한 프로젝트를 통해 실제 배포 경험 획득",
    icon: "🌐",
    size: "medium"
  },
  {
    title: "두 번의 협업 경험",
    description: "팀 프로젝트를 통한 협업 능력 향상",
    icon: "🤝",
    size: "medium"
  },
  {
    title: "리액트 아키텍처 이해도 증가",
    description: "심층적인 리액트 학습을 통한 이해도 향상",
    icon: "⚛️",
    size: "small"
  },
  {
    title: "앞으로의 계획",
    description: "지속적인 학습과 프로젝트 참여",
    icon: "🚀",
    size: "small"
  }
]

export default function Presentation() {
  return (
    <div className={cn(
      "min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100",
      "flex flex-col items-center justify-center p-6"
    )}
    >
      <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
          리액트 스터디 중간 성과 발표
        </span>
      </h1>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
        {achievements.map((achievement) => (
          <AchievementCard achievement={achievement} />
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-xl font-semibold text-gray-400">
          구름톤 유니브 3기 동국대 리액트 스터디
        </p>
        <p className="text-gray-500 mt-2">
          © 2024 YUNSEOK SONG
        </p>
      </div>
    </div>
  )
}
