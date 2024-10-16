interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  context: React.ReactNode;
}

export default function Modal({ isOpen, onClose, context }: ModalProps) {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 animate-fadeIn"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8 rounded-2xl shadow-2xl relative max-w-6xl w-full min-h-[80vh] animate-scaleIn"
      >
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 font-bold text-xl"
          onClick={onClose}
        >
          X
        </button>
        <div className="flex flex-col items-center">
          {/* 모달 내부 콘텐츠 */}
          {context}
        </div>
      </div>
    </div>
  );
}
