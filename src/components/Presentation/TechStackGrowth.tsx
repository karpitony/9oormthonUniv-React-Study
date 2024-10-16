import HtmlCssJs from '../../assets/Presentation/HtmlCssJs.jpeg';
import ViteTsReactTailwind from '../../assets/Presentation/ViteTsReactTailwind.jpg';

export default function TechStackGrowth() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center">
        <span className="text-4xl">📚</span>
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 inline-block ml-2">
          기술 스택 확장
        </h2>
      </div>

      {/* 이미지 배치 */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <img 
          src={HtmlCssJs} 
          alt="HTML, CSS, JS" 
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <img 
          src={ViteTsReactTailwind} 
          alt="Vite, TS, React, Tailwind" 
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
      </div>

      {/* 내용 */}
      <li className="text-xl text-gray-300 leading-relaxed pt-10">
        기존에는 <strong>HTML, CSS, JS</strong>만 다뤄봤지만, 6주간의 구름톤 및 스터디 활동을 통해 <strong>리액트, Tailwind CSS, TypeScript, Zustand, Axios</strong>
        그리고 <strong>Vercel 배포</strong>해보기 등 다양한 기술을 익혔습니다. 
      </li>
      <li className="text-xl text-gray-300 leading-relaxed">
        앞으로 더 많은 학습이 필요하다는 점을 느꼈고, 이를 바탕으로 배운 기술들의 기본기를 다질 계획입니다.
      </li>
    </div>
  );
}
