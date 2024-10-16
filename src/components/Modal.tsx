interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  context: React.ReactNode;
}

export default function Modal({ isOpen, onClose, context }: ModalProps) {
  if (!isOpen) return null; // 모달이 열리지 않았을 때 렌더링 안 함

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose(); // 모달 바깥 부분을 클릭했을 때 모달 닫기
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-lg w-full">
        <button
          className="absolute top-3 right-3 text-gray-700 font-bold"
          onClick={onClose}
        >
          X
        </button>
        {context}
        <div className="text-center">
          {/* 이곳에 콘텐츠 추가 가능 */}
        </div>
      </div>
    </div>
  );
}
