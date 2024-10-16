import { useState } from 'react';
import GithubProject from '../../assets/Presentation/GithubProject.png';
import Figma from '../../assets/Presentation/Figma.png';

export default function CollaborationExperiences() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* 제목과 아이콘 */}
      <div className="text-center">
        <span className="text-3xl">🤝</span>
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 inline-block ml-2">
          협업 경험에서 배운 점
        </h2>
      </div>

      {/* 내용 요약 */}
      <li className="text-xl text-gray-300 leading-relaxed">
        두 번의 협업 경험을 통해 <strong>팀워크</strong>와 <strong>의사소통</strong>의 중요성을 깊이 깨달았습니다. 
        다양한 역할을 맡은 팀원들과 함께 작업하며 각 역할의 중요성을 이해하게 되었고, 
        특히 <strong>효율적인 의사소통</strong>이 프로젝트의 성공에 필수적이라는 점을 배웠습니다. 
        협업 과정에서의 의견 조율과 코드 관리 방법 등을 배울 수 있었습니다.
      </li>

      <li className="text-xl text-gray-300 leading-relaxed">
        앞으로의 프로젝트에서도 이러한 경험을 바탕으로 더 나은 협업 방식을 찾고, 팀원들과의 소통을 
        강화하여 성공적인 결과를 만들어 나가고 싶습니다.
      </li>

      {/* 이미지 배치 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <img 
          src={GithubProject} 
          alt="GitHub Collaboration" 
          className="w-full rounded-lg shadow-lg cursor-pointer" 
          onClick={() => openModal(GithubProject)}
        />
        <img 
          src={Figma} 
          alt="Figma Collaboration" 
          className="w-full rounded-lg shadow-lg cursor-pointer"
          onClick={() => openModal(Figma)}
        />
      </div>

      {/* 모달 */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative max-h-full max-w-full overflow-auto p-4">
            <img 
              src={selectedImage} 
              alt="Enlarged" 
              className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={closeModal}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
