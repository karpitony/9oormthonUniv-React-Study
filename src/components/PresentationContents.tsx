import { useState } from "react";
import cn from "@yeahx4/cn";
import Modal from "./Modal";
import AchievementCard from "./AchievementCard";
import HackathonAward from "./Presentation/HackerthonAward";
import TechStackGrowth from "./Presentation/TechStackGrowth";
import WebsiteDeployments from "./Presentation/WebsiteDeployments";
import CollaborationExperiences from "./Presentation/CollaborationExperiences";
import ReactUnderstanding from "./Presentation/ReactUnderstanding";
import FuturePlans from "./Presentation/FuturePlans";

interface Achievement {
  title: string;
  description: string;
  icon: string;
  size: 'large' | 'medium' | 'small';
  component: React.ReactNode;
}

const achievements:Achievement[] = [
  {
    title: "연합 해커톤 대상",
    description: "짧은 시간 집중적인 노력으로 성과 달성",
    icon: "🏆",
    size: "large",
    component: <HackathonAward />
  },
  {
    title: "TS 등 기술 스택 확장",
    description: "새로운 기술 습득 및 적용",
    icon: "📚",
    size: "medium",
    component: <TechStackGrowth />
  },
  {
    title: "4개의 웹사이트 배포",
    description: "다양한 프로젝트를 통해 실제 배포 경험 획득",
    icon: "🌐",
    size: "medium",
    component: <WebsiteDeployments />
  },
  {
    title: "두 번의 협업 경험",
    description: "팀 프로젝트를 통한 협업 능력 향상",
    icon: "🤝",
    size: "medium",
    component: <CollaborationExperiences />
  },
  {
    title: "리액트 이해도 증가",
    description: "다양한 리액트 사용 경험을 통한 이해도 향상",
    icon: "⚛️",
    size: "small",
    component: <ReactUnderstanding />
  },
  {
    title: "앞으로의 계획",
    description: "지속적인 학습과 단풍톤 참여",
    icon: "🚀",
    size: "small",
    component: <FuturePlans />
  }
];

export default function PresentationContents() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState<React.ReactNode | null>(null);

  const openModal = (component: React.ReactNode) => {
    setSelectedComponent(component);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedComponent(null);
  };

  return (
    <div
      className={cn(
        "min-h-[95vh] bg-gradient-to-br from-gray-900 to-black text-gray-100",
        "flex flex-col items-center justify-center p-6"
      )}
    >
      <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
          리액트 스터디 성과 발표
        </span>
      </h1>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
        {achievements.map((achievement) => (
          <AchievementCard
            key={achievement.title}
            achievement={achievement}
            onClick={() => openModal(achievement.component)}
          />
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-xl font-semibold text-gray-400">
          구름톤 유니브 3기 동국대 리액트 스터디
        </p>
        <p className="text-gray-500 mt-2">© 2024 YUNSEOK SONG</p>
      </div>

      {/* 모달에 선택된 컴포넌트를 전달 */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        context={selectedComponent}
      />
    </div>
  );
}
