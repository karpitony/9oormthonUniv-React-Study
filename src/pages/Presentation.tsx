import { useEffect, useState } from "react";
import MobileWarning from "../components/MobileWarning";
import PresentationContents from "../components/PresentationContents";

export default function Presentation() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px 이하일 경우 모바일로 간주
    };

    handleResize(); // 초기 화면 크기 체크
    window.addEventListener("resize", handleResize); // 화면 크기 변경 시 체크

    return () => window.removeEventListener("resize", handleResize); // 이벤트 리스너 정리
  }, []);

  return isMobile ? <MobileWarning /> : <PresentationContents />;
}
