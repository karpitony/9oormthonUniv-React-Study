import NextjsImage from '../../assets/Presentation/NextjsImage.png';
import DanpungthonImage from '../../assets/Presentation/DanpungthonImage.png';

export default function FuturePlans() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center">
        <span className="text-3xl">🚀</span>
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 inline-block ml-2">
          앞으로의 계획
        </h2>
      </div>
      
      {/* 이미지와 목록을 나란히 배치 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        
        {/* 이미지들 */}
        <div className="flex flex-col space-y-4 items-center">
          <img 
            src={NextjsImage} 
            alt="Next.js" 
            className="w-full rounded-lg shadow-lg"
          />
          <img 
            src={DanpungthonImage} 
            alt="단풍톤" 
            className="w-full rounded-lg shadow-lg max-h-64 object-cover object-bottom" 
            // object-bottom: 이미지의 하단을 보여줌
          />
        </div>

        {/* 소제목을 사용한 목록 */}
        <div className="flex items-center justify-center">
          <div className="p-4">
            <h3 className="text-2xl font-semibold text-gray-200 mb-2">Next.js 학습</h3>
            <p className="text-lg text-gray-300 mb-8">
              단풍톤 전까지 Next.js를 집중적으로 학습하여 CSR과 SSR의 차이를 이해하고, 토이 프로젝트를 하나 만들어 볼 계획입니다.
            </p>

            <h3 className="text-2xl font-semibold text-gray-200 mb-2">지속적인 학습</h3>
            <p className="text-lg text-gray-300 mb-8">
              짧은 기간 동안 배운 내용을 토대로 실전 프로젝트를 통해 더욱 깊이 있게 학습하며, 개발자로서의 역량을 키울 예정입니다.
            </p>

            <h3 className="text-2xl font-semibold text-gray-200 mb-2">학업 및 중간고사</h3>
            <p className="text-lg text-gray-300">
              학업에도 집중하여 중간고사를 잘 준비하고, 전반적인 학습 균형을 유지하겠습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
