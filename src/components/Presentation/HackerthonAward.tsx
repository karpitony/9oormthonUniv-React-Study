import GoormDari from "../../assets/Presentation/Goormdari.png";

export default function HackathonAward() {
  return (
    <div className="max-w-4xl mx-auto p-8 flex flex-col justify-between space-y-8">
      <div className="text-center">
        <span className="text-4xl">🏆</span>
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 inline-block ml-2">
          연합 해커톤 대상 수상
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
        <img
          src={GoormDari}
          alt="GoormDari"
          className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
        />
        <img
          src="https://raw.githubusercontent.com/karpitony/9oormthonUniv-React-Study/refs/heads/main/img/week04/week04_01.JPG"
          alt="Hackathon Image"
          className="w-full md:w-1/4 rounded-lg shadow-lg object-cover"
        />
      </div>

      <div className="text-xl leading-relaxed text-left space-y-4">
        <li>
          무박 2일 동안 진행된 연합 해커톤에서 프론트엔드, 백엔드, 기획, 디자인 팀원들과 협업하여
          우수한 결과물을 완성했습니다.
        </li>
        <li>
          제한된 시간 내에 우선순위를 설정하고 팀원들과 소통하며
          프로젝트를 성공적으로 마무리한 경험을 얻었고, 제게 큰 도움이 됐습니다!
        </li>
      </div>
    </div>
  );
}
