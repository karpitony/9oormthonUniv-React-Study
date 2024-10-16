import ZustandImg from '../../assets/Presentation/Zustand.jpg';
import ReactPropsDrill from '../../assets/Presentation/ReactPropsDrill.jpeg';

export default function ReactUnderstanding() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* 제목과 아이콘 */}
      <div className="text-center">
        <span className="text-3xl">⚛️</span>
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 inline-block ml-2">
          리액트 이해도 증가
        </h2>
      </div>

      {/* 이미지 배치 */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <img 
          src={ZustandImg} 
          alt="Zustand 상태 관리" 
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <img 
          src={ReactPropsDrill} 
          alt="React Props Drill" 
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
      </div>

      {/* 내용 */}
      <div className="space-y-4 pt-10">
        <li className="text-xl text-gray-300 leading-relaxed">
          기존에는 컴포넌트와 페이지 정도만 다뤘지만, 이제는 리액트 아키텍처의 다양한 요소들, 
          <strong> config, hooks, model, services</strong> 등과 같은 부분에 대해 더 깊이 이해하게 되었습니다. 
          특히, <strong>라우팅</strong>을 많이 사용하며 깊게 이해하게 되었으며, 
          프로젝트 구조에 따른 라우트 구성의 중요성을 깨달았습니다.
        </li>

        <li className="text-xl text-gray-300 leading-relaxed">
          또한, <strong>Props Drill</strong>과 <strong>전역 상태 관리</strong>에 대해 많은 고민을 하면서, 
          효율적인 상태 관리의 중요성을 깨닫게 되었습니다. 
          상태 관리 도구의 선택과 적용 방식에 대해 실전 경험을 쌓으면서, 리액트의 확장성과 유연성을 더 깊이 이해하게 되었습니다.
        </li>
      </div>
    </div>
  );
}
