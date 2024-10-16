export default function MobileWarning() {
  return (
    <div className="min-h-[95vh] flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-gray-100 p-6 text-center">
      <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
        모바일에서 해당 페이지는 현재 지원되지 않습니다.
      </h2>
      <p className="mt-4 text-lg text-gray-300">
        화면 크기가 큰 디바이스로 접근해주세요.
      </p>
    </div>
  );
}
