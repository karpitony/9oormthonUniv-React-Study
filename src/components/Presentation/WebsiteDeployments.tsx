import { useState } from 'react';
import ScDodle from '../../assets/Presentation/ScDodle.png';
import Sc9oormDari from '../../assets/Presentation/Sc9oormDari.png';
import ScBooklog from '../../assets/Presentation/ScBooklog.png';
import ScReactMiniBlog from '../../assets/Presentation/ScReactMiniBlog.png';

export default function WebsiteDeployments() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-0 flex flex-col justify-between space-y-3">
      <div className="text-center">
        <span className="text-4xl">🌐</span>
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 inline-block ml-2">
          4개의 웹사이트 배포
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 도들 */}
        <div className="p-4">
          <img
            src={ScDodle}
            alt="Dodle"
            className="w-full rounded-lg mb-2 shadow-lg cursor-pointer"
            onClick={() => openModal(ScDodle)}
          />
          <h3 className="text-xl font-semibold text-gray-200">도들</h3>
          <p className="text-gray-400">도시 이름을 주제로 한 워들 게임</p>
          <p className="mt-2 text-sm text-gray-500">
            지난달 총 <strong>487명</strong>이 방문했고 페이지뷰는 <strong>800</strong>을 넘겼습니다.
          </p>
        </div>

        {/* 구름다리 */}
        <div className="p-4">
          <img
            src={Sc9oormDari}
            alt="GoormDari"
            className="w-full rounded-lg mb-2 shadow-lg cursor-pointer"
            onClick={() => openModal(Sc9oormDari)}
          />
          <h3 className="text-xl font-semibold text-gray-200">구름다리</h3>
          <p className="text-gray-400">구름톤 3기 연합 해커톤 우승작</p>
        </div>

        {/* 북로그 */}
        <div className="p-4">
          <img
            src={ScBooklog}
            alt="Booklog"
            className="w-full rounded-lg mb-2 shadow-lg cursor-pointer"
            onClick={() => openModal(ScBooklog)}
          />
          <h3 className="text-xl font-semibold text-gray-200">북로그</h3>
          <p className="text-gray-400">CRUD 기능을 구현한 독서 블로그 웹사이트</p>
        </div>

        {/* 미니 블로그 */}
        <div className="p-4">
          <img
            src={ScReactMiniBlog}
            alt="Mini Blog"
            className="w-full rounded-lg mb-2 shadow-lg cursor-pointer"
            onClick={() => openModal(ScReactMiniBlog)}
          />
          <h3 className="text-xl font-semibold text-gray-200">미니 블로그</h3>
          <p className="text-gray-400">현재 진행 중인 블로그 프로젝트</p>
        </div>
      </div>

      <p className="text-lg leading-relaxed text-center mt-6 text-white">
        이 프로젝트들을 통해 리액트와 통신에 대한 이해가 깊어졌으며, 다양한 기술 스택을 활용하는 자신감도 키웠습니다.
      </p>

      {/* 이미지 모달 */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-h-full max-w-full overflow-auto">
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
